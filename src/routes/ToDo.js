import React from 'react';
import "../css/ToDo/ToDo.css";
import styled, { css } from "styled-components";
import { AiOutlineCheck, AiFillStar, AiOutlineStar } from "react-icons/ai";

const Checkbox = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  border: 3px solid rgba(1,1,1,0.8);
  background-color: white;
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

const XButton = styled.button`
    border-radius: 25px;
    border: none;
    height: 30px;
    font-size: large;
    font-weight: 600;
    color: white;
    text-align: center;
    width: 30px;
    margin-left: 80px;
    background-color: rgb(255, 75, 105);
    ${props =>
        props.isDone &&
        css`
          background-color: rgb(255, 75, 105, 0.2);
    `}
`;

const ToDoText = styled.p`
    margin: 0;
    padding: 0;
    ${props =>
    props.isImportant &&
    css`
        color: red;
        font-weight: 900;
    `}
    ${props =>
    props.isDone &&
        css`
          color: rgba(1,1,1,0.2);
    `}
    ${props =>
    props.isImportant && props.isDone &&
        css`
            color: red;
            opacity: 0.2;
            font-weight: 900;
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
        if(newItem.isDone===true)
            this.setState({totalNum : this.state.totalNum + 1});
        else if(newItem.isDone===false)
            this.setState({totalNum : this.state.totalNum - 1});

        newItem.isDone = !newItem.isDone;
        this.setState({
            list
        });
    };
    importantActive(item){
        const list = [...this.state.list];
        const newItem = list.find(element => element===item);
        newItem.isImportant = !newItem.isImportant;
        this.setState({
            list
        });
    };
    updateInput(key,value) {
        this.setState({[key]:value });
    };
    addItem() {
        const newItem = {
          id: 1 + Math.random(),
          value: this.state.newItem.slice(),
          isDone: false,
          isImportant: false
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
    preventEmpty(){
        if(this.state.newItem==="")
            return;
        this.addItem();
    }
    render(){
        const date = ['일', '월', '화', '수', '목', '금', '토'];
        return (
            <div className="todo-body">
                <div className="border">
                    <div className="date">
                        <div>{this.state.day.getMonth()+1}월 {this.state.day.getDate()}일 {date[this.state.day.getDay()]}요일</div>
                        <div>🔷 오늘의 할 일 {this.state.totalNum}개 🔷</div>
                </div>
                <div className="todoList">
                    <ul>
                            {this.state.list.map(item => {
                            return (
                                <li key={item.id}>
                                    <div className="todo">
                                        <div className="important_check">
                                        {!item.isImportant && <AiOutlineStar onClick={ () => this.importantActive(item)} style={{marginLeft:10, marginRight: 7}} color="orange" />}
                                        {item.isImportant && <AiFillStar onClick={ () => this.importantActive(item)} style={{marginLeft:10, marginRight: 7}} color="orange" />}
                                        <Checkbox isDone={item.isDone} onClick={ () => this.checkActive(item)}>{console.log("isDone?" + item.isDone)}{item.isDone && <AiOutlineCheck />}</Checkbox>
                                        </div>
                                        <ToDoText isDone={item.isDone} isImportant={item.isImportant}>{item.value}</ToDoText>
                                        <XButton isDone={item.isDone} onClick={() => this.deleteItem(item.id)}>X</XButton>
                                    </div>
                                </li>
                            );
                            })}
                        </ul>
                </div>
                <div className="plusBox">
                        <button className="plusBox_button" onClick={() => this.preventEmpty()}>+</button>
                        <input className="plusBox_text"
                        onKeyPress={(e) => {if(e.key==="Enter") this.preventEmpty();}}
                        type="text" placeholder="할 일을 입력하세요. "
                        value={this.state.newItem}
                        onChange={e => this.updateInput('newItem', e.target.value)}
                        />
                </div>
                </div>
            </div>
        );
    }
}

export default ToDo;