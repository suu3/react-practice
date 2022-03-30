import React, { useState, useEffect } from 'react';
import { postList } from './Data';
import Post from './Post';
import { Link } from 'react-router-dom';
import "../../css/Board/PostList.css";
import PageNumber from './PageNumber';

const PostList = (props) => {
    const [ dataList, setDataList ] = useState([]);
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
      setPage(page);
      console.log(page);
    };

    useEffect(()=>{
      if(localStorage.getItem('data')){
        setDataList(JSON.parse(localStorage.getItem('data')));
      }else{
        setDataList(postList);
      }
    }, [ ])
  
    return (
      <section className="post-section">
        <div className='post-title'>게시판</div>
        <div className="table">
            <div>
            <div className="table-head">
                <span className='table-number'>글번호</span>
                <span className='table-title'>제목</span>
                <span className='table-enrol'>등록일</span>
                <span className='table-view'>조회수</span>
            </div>
            </div>
            <div className="table-body">
                {
                    dataList.slice((page-1)*5, (page*5)).map((item) => {
                    return (
                      <Post key={item.id} item={item}/>
                    )
                    })
                }
            </div>
        </div>
        
        <PageNumber page={page} handlePageChange={handlePageChange} postList={dataList}/>
        <button className="post-add-btn"><Link to={'/Board/postAdd'}>게시글 추가</Link></button>
      </section>
    )
  }
  
  export default PostList;