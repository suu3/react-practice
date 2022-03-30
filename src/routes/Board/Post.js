import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({item}) => {
    return (                        
        <div className="table-row" key={item.no}>
            <span className='table-number'>{ item.no }</span>
            <span className='table-title'> <Link to={`/Board/postDetail/${item.no}`}>{ item.title }</Link></span>
            <span className='table-enrol'>{ item.createDate }</span>
            <span className='table-view'>{ item.readCount }</span>
        </div>
    );
};

export default Post;