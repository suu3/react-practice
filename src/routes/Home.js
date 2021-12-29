import React from 'react';
import "../css/Home.css";
import {Link} from "react-router-dom";

class Home extends React.Component {
    state = {
    }
    render(){
        return (
            <div className="border">
                <div className="introduce">
                    <h1>Content</h1>
                </div>
                <div className="linkList">
                    <ul>
                        <li className = "menu">
                            <Link to="/ToDo">✅ ToDo</Link>
                        </li>
                        <li className = "menu">
                            <Link to="/Chat">✅ Chat</Link>
                        </li>
                        <li className = "menu">
                            <Link to="/Search">❓ Search</Link>
                        </li>                           
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;