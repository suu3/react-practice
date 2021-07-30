import React, { useEffect } from 'react';
import "../css/Chat/Chat.css";
import styled from "styled-components";
import { Widget, addResponseMessage } from 'react-chat-widget';
 
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
    overflow: auto;
    height: 70vh;
    
`;

function Chat (){
    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
      }, []);
 
    const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
        addResponseMessage();
    };

    return(
        <ChatBody>
            <ChatScreen>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
            />
            </ChatScreen>
        </ChatBody>
    );
}

export default Chat;