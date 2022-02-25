import React, { useEffect, useState } from 'react';
import { getPostByNo } from './Data';
import "../../css/Board/PostDetail.css";

const PostDetail = ({ history, location, match }) => {
  const [ data, setData ] = useState({});
  const { no } = match.params;

  useEffect(() => {
    setData(getPostByNo(no));
  }, [ no ]);

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
                <div>
                  {
                    data.content
                  }
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="detail-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
    </section>
  )
}

export default PostDetail;