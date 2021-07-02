import React from 'react';
import "./ToDo.css";

class ToDo extends React.Component {
    constructor(props){
        super(props)
        this.state = {day: new Date()}
        console.log(this.state.day);
    }
    render(){
        const date = ['월', '화', '수', '목', '금', '토', '일'];
        return (
            <div className="border">
                <div className="date">
                    <div>{this.state.day.getFullYear()}년 {this.state.day.getMonth()}월 {this.state.day.getDate()}일</div>
                    <div>{date[this.state.day.getDay()]}요일</div>
                    <div>🔷 오늘의 할 일 __개 🔷</div>
               </div>
               <div className="todoList">
                    <div className="todo">
                        <input type="checkbox"></input>
                        <p1>공부하기</p1>
                    </div>
                    <div className="todo">
                        <input type="checkbox"></input>
                        <p1>코딩하기</p1>
                    </div>
               </div>
            </div>
        );
    }
}

export default ToDo;