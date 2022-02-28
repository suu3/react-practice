import React, {useState, useEffect} from 'react'
import queryString from "query-string";
import "../css/Search/SearchResult.css"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function SearchResult({ location }) {
    const [ isLoading , setIsLoading ] = useState(true);
    const query = queryString.parse(location.search);
    
    const [bookLength, setBookLength] = useState(0);
    const [bookList, setBookList] = useState([]);
    
    const getBooks = async () => {
      console.log(query.title);
      try {
        const {
          data: books
        }= await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${query.title}`
        );
        
        setBookList(books.items);
        setBookLength(books.totalItems);
        setIsLoading(false);
      } catch (error) {
        //응답 실패
        console.error(error);
      }
    };

    useEffect(() => {
      getBooks();
    }, []);

    return (
      <>
          {isLoading ? (
            <div className='loarder'>
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <section className="search-result">
              {bookList ?
                <div className="result-container">
                  <h2>📚 검색 결과 {bookLength}건 중 9건만 출력됩니다.</h2>
                  <ul className="bookList">
                    {bookList.slice(0, 9).map(book => {
                        return (
                            <li className='book'>
                              <h2 className="bookList__title">{ book.volumeInfo.title }</h2>
                              <h2 className="bookList__author">{ book.volumeInfo.authors }</h2>
                              { book.volumeInfo.description ?
                                <div className="bookList__description">
                                  {book.volumeInfo.description}
                                </div>
                                : <div className="bookList__description">등록된 정보가 없습니다.</div>
                              }
                            </li>
                        );
                    })}
                  </ul>
                </div>
                : 
                <div className='loarder'>
                  <span className="loader__text">검색 결과가 없습니다.</span>
                </div>
              }
              <Link to={'/'}><button className="home-list-btn">홈으로 돌아가기</button></Link>
            </section>
          )}
      </>
    )
}
