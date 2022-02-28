import React, { useState, useEffect } from 'react';
import { postList } from './Data';
import { Link } from 'react-router-dom';
import "../../css/Board/PostList.css";

const PostList = (props) => {
    const [ dataList, setDataList ] = useState();
    
    useEffect(()=>{
      if(localStorage.getItem('data')){
        setDataList(JSON.parse(localStorage.getItem('data')));
      }else{
        setDataList(postList);
      }
    }, [ ])
  
    return (
      <section className="post-section">
        <div>게시판</div>
        <table className="table">
            <thead>
            <tr className="table-head">
                <th>글번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody className="table-body">
                {
                    dataList ? dataList.map((item) => {
                    return (
                        <tr key={item.no}>
                            <td>{ item.no }</td>
                            <td> <Link to={`/Board/postDetail/${item.no}`}>{ item.title }</Link></td>
                            <td>{ item.createDate }</td>
                            <td>{ item.readCount }</td>
                        </tr>
                    )
                    }) : 
                    <tr>
                      <td></td>
                    </tr>
                }
            </tbody>
        </table>
        <button className="post-add-btn"><Link to={'/Board/postAdd'}>게시글 추가</Link></button>
      </section>
    )
  }
  
  export default PostList;