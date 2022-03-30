import React, { useEffect, useRef, useState } from 'react';
import { postList } from './Data';
import "../../css/Board/PostDetail.css";
import ReactHtmlParser from 'react-html-parser';

const PostDetail = ({ history, location, match }) => {
  const [ data, setData ] = useState({});
  const { no } = match.params;
  const setPostList = useRef(postList);

  useEffect(() => {
    if(localStorage.getItem('data')){
      setPostList.current = JSON.parse(localStorage.getItem('data'));
    }

    // eslint-disable-next-line eqeqeq
    const array = setPostList.current.filter(x => x.no == no);
    if (array.length === 1) {
      setData(array[0]);
    }
  }, [ no ]);

  const onDeletePost = () =>{
    const newData = setPostList.current.filter(item => item.no != no);
    console.log(newData);
    localStorage.setItem("data", JSON.stringify(newData));
    history.goBack();
  }

  return (
    <section className="detail-section">
      <div>게시글 상세정보</div>

      <div className="detail-container">
        {
          data ? (
            <>
              <div className="detail-row">
                <label>게시글 번호</label>
                <div>{ data.no }</div>
              </div>
              <div className="detail-row">
                <label>제목</label>
                <div>{ data.title }</div>
              </div>
              <div className="detail-row">
                <label>작성일</label>
                <div>{ data.createDate }</div>
              </div>
              <div className="detail-row">
                <label>조회수</label>
                <div>{ data.readCount }</div>
              </div>
              <div className="detail-row">
                <label>내용</label>
              </div>
              <div className='detail-content'>
                  { ReactHtmlParser(data.content) }
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="detail-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
        <button className="post-delete-btn" onClick={() => onDeletePost()}>삭제</button>
      </div>
    </section>
  )
}

export default PostDetail;