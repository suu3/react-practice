import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";

class Home extends React.Component {
    state = {
    }
    render(){
        return (
            <div className = "border">
                <div className="introduce">
                    <p1>Hello, It's first page!</p1>
                </div>
                <div className="linkList">
                    <div className = "menu">
                        <Link to="/ToDo">ToDo</Link>
                    </div>
                    <div className = "menu">
                        
                    </div>
                    <div className = "menu">
                        
                    </div>
                    <div className = "menu">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;