import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import ToDo from "./routes/ToDo";
import Chat from "./routes/Chat";
import Search from "./routes/Search";
import Board from "./routes/Board";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/ToDo" component={ToDo} />
      <Route path="/Chat" component={Chat} />
      <Route path="/Search" component={Search} />
      <Route path="/Board" component={Board} />
    </HashRouter>
  );
}

export default App;
