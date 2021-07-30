import React, { useState } from 'react';
import "../css/Chat/Chat.css";
import styled from "styled-components";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import 'react-chat-widget/lib/styles.css';

const ChatBody = styled.body`
    width 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(114, 170, 255), rgba(255, 61, 202, 0.8));
    margin: -8px -8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ChatScreen = styled.div`
    background-color: white;
    border-radius: 25px;
    margin: 50px 50px;
    width: 50vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    box-shadow:  5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const ChatTitle = styled.div`
    background-color: rgba(53, 203, 229, 0.7);
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: x-large;
    font-weight: 900;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

const ChatBottom = styled.div`
    height: 12%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;    
    background-color: rgba(244, 247, 249);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;


const ChatInput = styled.input`
    font-family: "Cafe24SsurroundAir";
    font-size: 18px;
    border: none;
    background-color: rgba(244, 247, 249);
    &:focus {
        outline: none;
    }
`;

const ChatContent = styled.div`
    overflow: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    font-family: "Cafe24SsurroundAir";
`;

const ChatMessage = styled.div`
    margin: 0px 12px;
    margin-top: 10px;
`;

const ChatMessageContent = styled.div`
    background-color: rgba(244, 247, 249);
    padding: 15px 15px;
    margin-left: 4px;
    width: 22vw;
    border-radius: 25px;
`;

const ChatMessageTime = styled.div`
    font-size: x-small;
    margin-top: 3px;
`;

const ChatMessage2 = styled.div`
    margin: 0px 12px;
    margin-top: 10px;
    display: flex;
    flex-direction: row-reverse;
`;

const Alert = styled.div`
    width:22px;
    height:22px;
    background-color: red;
    border-radius:25px;
    color: white;
    font-size:small;
    text-align: center;
    margin-left: 8px;
`;
const date = new Date();

function time (num) {
    if (num < 10)
        return (
            '0' + num
        );
    else return num;
}

const messageList = [];
function Chat (){
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onReset = () => {
        setText('');
        messageList.push(text);
    } 
    return(
        <ChatBody>
            <ChatScreen>
                <ChatTitle>
                    <IoPersonCircleSharp style={{fontSize: 'xx-large', marginRight: 10, marginTop: 3}} />Someone
                    <Alert>2</Alert>
                </ChatTitle>
                <ChatContent>
                    <ul>
                        <ChatMessage>
                            <ChatMessageContent>안녕!</ChatMessageContent>
                            <ChatMessageTime>13:11</ChatMessageTime>
                        </ChatMessage>
                        <ChatMessage>
                            <ChatMessageContent>시간 있어?</ChatMessageContent>
                            <ChatMessageTime>13:11</ChatMessageTime>
                        </ChatMessage>
                    
                        {messageList.map(text => {
                            return (
                                <li>
                                     <ChatMessage2>
                                        <div style={{display:'flex', flexDirection:'column'}}>
                                            <ChatMessageContent>{text}</ChatMessageContent>
                                            <ChatMessageTime style={{display:'flex', justifyContent:'flex-end'}}>{time((date.getHours() + 24) % 12 || 12)}:{time(date.getMinutes())}</ChatMessageTime>
                                        </div>
                                    </ChatMessage2>
                                </li>
                            );
                        })}
                    </ul>
                </ChatContent>
                <ChatBottom>
                    <ChatInput 
                        onChange={onChange} value={text}
                        onKeyPress={e=>{if(e.key==='Enter') onReset();}}
                        placeholder="메세지를 입력하세요..." />
                    <FaPaperPlane onClick={onReset} size={20}/>
                    </ChatBottom>
            </ChatScreen>
        </ChatBody>
    );
}

export default Chat;