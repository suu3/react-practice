import React, {useState} from 'react';
import "../css/ToDo/ToDo.css";
import styled from "styled-components";


class ToDo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            day: new Date(),
            newItem: "",
            list: []
        };
        console.log(this.state.day);
    }
    updateInput(key,value) {
        this.setState({[key]:value });
    }
    addItem() {
        const newItem = {
          id: 1 + Math.random(),
          value: this.state.newItem.slice()
        };
    
        const list = [...this.state.list];
        list.push(newItem);
    
        this.setState({
          list,
          newItem:''
        });
    }
    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({ list: updatedList });
    }
    render(){
        const date = ['일', '월', '화', '수', '목', '금', '토'];
        return (
            <div className="border">
                <div className="date">
                    <div>{this.state.day.getFullYear()}년 {this.state.day.getMonth()+1}월 {this.state.day.getDate()}일</div>
                    <div>{date[this.state.day.getDay()]}요일</div>
                    <div>🔷 남은 할 일 __개 🔷</div>
               </div>
               <div className="todoList">
                   <ul>
                        <div className="todo">
                            <input type="checkbox"></input>
                            <p1>공부하기</p1>
                        </div>
                        <div className="todo">
                            <input type="checkbox"></input>
                            <p1>코딩하기</p1>
                        </div>
                    {/*구글링 코드*/}
                        {this.state.list.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="todo">
                                    <input type="checkbox"></input>
                                    <p1>{item.value}</p1>
                                    <button onClick={() => this.deleteItem(item.id)}>
                                            <i>x</i>
                                    </button>
                                </div>
                            </li>
                        );
                        })}
                    </ul>
               </div>
               <div className="plusBox">
                   <form>
                       <button className="plusBox_button" onClick={() => this.addItem()}>+</button>
                       <input className="plusBox_text" type="text" placeholder="할 일을 입력하세요. "
                       value={this.state.newItem}
                       onChange={e => this.updateInput('newItem', e.target.value)}
                       ></input>
                   </form>
               </div>
            </div>
        );
    }
}

export default ToDo;