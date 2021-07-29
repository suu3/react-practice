import React, { setState } from 'react';
import "../css/ToDo/ToDo.css";
import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

const Checkbox = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  border: 3px solid rgb(48, 79, 255);
  background-color: white;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  color: rgb(48, 79, 255);
  align-items: center;
  padding: 0;
  justify-content: center;
  ${props =>
    props.isDone &&
    css`
      background-color: rgb(255, 159, 188);
    `}
`;

const ToDoText = styled.p`
    margin: 0;
    padding: 0;
    ${props =>
    props.isDone &&
    css`
      color: rgba(1,1,1,0.2);
    `}
`;

class ToDo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            day: new Date(),
            newItem: "",
            list: [],
            totalNum : 0
        };
    };
    checkActive(item){
        const list = [...this.state.list];
        const newItem = list.find(element => element===item);
        newItem.isDone = !newItem.isDone;
        this.setState({
            list
        });
            
        console.log(list);
    };
    updateInput(key,value) {
        this.setState({[key]:value });
    };
    addItem() {
        const newItem = {
          id: 1 + Math.random(),
          value: this.state.newItem.slice(),
          isDone: false
        };
    
        const list = [...this.state.list];
        list.push(newItem);
    
        this.setState({
          list,
          newItem:'',
          totalNum: this.state.totalNum + 1
        });
    };
    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({
            list: updatedList,
            totalNum: this.state.totalNum - 1
        });
    };
    render(){
        const date = ['일', '월', '화', '수', '목', '금', '토'];
        return (
            <div className="border">
                <div className="date">
                    <div>{this.state.day.getFullYear()}년 {this.state.day.getMonth()+1}월 {this.state.day.getDate()}일 {date[this.state.day.getDay()]}요일</div>
                    <div></div>
                    <div>🔷 남은 할 일 {this.state.totalNum}개 🔷</div>
               </div>
               <div className="todoList">
                   <ul>
                        {this.state.list.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="todo">
                                    <Checkbox isDone={item.isDone} onClick={ () => this.checkActive(item)}>{console.log("isDone?" + item.isDone)}{item.isDone && <AiOutlineCheck />}</Checkbox>
                                    <ToDoText isDone={item.isDone}>{item.value}</ToDoText>
                                    <button className="Xbutton" onClick={() => this.deleteItem(item.id)}>X</button>
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