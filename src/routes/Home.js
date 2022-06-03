import React from 'react';
import "../css/Home.css";
import {Link} from "react-router-dom";

class Home extends React.Component {
    state = {
    }
    render(){
        return (
            <div className='home-body'>
            <section className="home-border">
                <div className="introduce">
                    <h1>Content</h1>
                </div>
                <div className="linkList">
                    <ul>
                        <li className = "menu">
                            <Link to="/ToDo">✅ ToDo</Link>
                        </li>
                        <li className = "menu">
                            <Link to="/Chat">💬 Chat</Link>
                        </li>
                        <li className = "menu">
                            <Link to="/Search">❓ Search</Link>
                        </li>
                        <li className = "menu">
                            <Link to="/drag-and-drop">🖱 Drag And Drop</Link>
                        </li>
                    </ul>
                    <ul>                           
                        <li className = "menu">
                            <Link to="/Board/postList">📄 Board</Link>
                        </li>
                        <li className = "menu">
                            <Link to="/menu">🍔 Menu</Link>
                        </li>
                        <li className = "menu">
                            <Link to="/accordion">🎵 Accordion</Link>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
        );
    }
}

export default Home;