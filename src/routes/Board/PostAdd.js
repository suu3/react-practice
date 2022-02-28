import React, { useState, useEffect } from 'react';
import "../../css/Board/PostAdd.css"
import { Link } from 'react-router-dom';
import { postList } from './Data';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const PostAdd = () => {
    const [ data, setData ] = useState();
    useEffect(()=>{
        if(localStorage.getItem('data')){
          setData(JSON.parse(localStorage.getItem('data')));
        }else{
          setData(postList);
        }
    }, [ ])
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("<p>Hello from CKEditor 5!</p>");
    const onAddPost = () => {
        if(title==="" || content ===""){
            alert("폼을 마저 채워주세요.");
            return;
        }
        const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
        const newData = {
            "no": data.length+1,
            "title": title,
            "content": content,
            "createDate": date,
            "readCount": Math.floor(Math.random() * 10)
        };
        setData([...data, newData]);
        localStorage.setItem("data", JSON.stringify([...data, newData]));
    }
    return(
        <section className="post-add-section"> 
            <h2>게시글 쓰기</h2>
            <div className='editor-container'>
                <input onChange={(e) => {setTitle(e.target.value);}} className="title-input" type='text' placeholder='제목'/>
                <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    //console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const content = editor.getData();
                    //console.log({ event, editor, content });
                    setContent(content);
                }}
                onBlur={(event, editor) => {
                    //console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    //console.log('Focus.', editor);
                }}
            />
            </div>
            {title === "" || content==="" ?
            <button onClick={onAddPost} className="add-submit-button">입력</button>
            : <Link to={'/Board/postList'}><button className="add-submit-button" onClick={onAddPost}>
            입력</button></Link>}
        </section>
    )

}

export default PostAdd;