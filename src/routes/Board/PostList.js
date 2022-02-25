import React, { useState, useEffect } from 'react';
import { postList } from './Data';
import { Link } from 'react-router-dom';

const PostList = (props) => {
    const [ dataList, setDataList ] = useState([]);
  
    useEffect(() => {
      setDataList(postList);
    }, [ ])
  
    return (
      <>
        <table>
            <thead>
            <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
                {
                    dataList ? dataList.map((item, index) => {
                    return (
                        <tr key={item.no}>
                            <td>{ item.no }</td>
                            <td> <Link to={`/Board/postView/${item.no}`}>{ item.title }</Link></td>
                            <td>{ item.createDate }</td>
                            <td>{ item.readCount }</td>
                        </tr>
                    )
                    }) : ''
                }
            </tbody>
        </table>
      </>
    )
  }
  
  export default PostList;