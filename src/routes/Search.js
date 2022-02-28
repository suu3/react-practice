import React, {useState} from 'react'
import "../css/Search/Search.css"
import { Link } from 'react-router-dom';

export default function Search({history}) {
    const [query, setQuery] = useState("");
    return (
        <div className='search-wrap'>
            <h2>책 정보 검색</h2>
            <section className="search-container">
                <input onKeyPress={e => {if(e.key==='Enter') history.push(`../SearchResult?title=${e.target.value.replace(" ", "+")}`);}} onChange={(e) => {setQuery(e.target.value);}} className="book-input" type='text' placeholder='책 제목을 입력하세요'/>
                {
                    query === "" ?
                    <button onClick={() => {
                        if(query === ""){
                            alert("제목을 입력해주세요.");
                        }
                    }} className="search-btn">검색</button>
                    : <Link to={`/SearchResult?title=${query.replace(" ", "+")}`}><button className="search-btn">검색</button></Link>
                }
            </section>
        </div>
      );
}
