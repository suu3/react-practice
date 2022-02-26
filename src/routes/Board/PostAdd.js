import React, { useState, useEffect } from 'react';
import "../../css/Board/PostAdd.css"
import { Link } from 'react-router-dom';

import { postList } from './Data';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const postAdd = (props) => {


    return(
        <section className="post-add-section"> 
            <h2>게시글 쓰기</h2>
            <div className='editor-container'>
                <input className="title-input" type='text' placeholder='제목' />
                <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
                />
            </div>
            <button className="add-submit-button">입력</button>
        </section>
    )

}

export default postAdd;