import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import ToDo from "./routes/ToDo";
import Chat from "./routes/Chat";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/ToDo" component={ToDo} />
      <Route path="/Chat" component={Chat} />
    </HashRouter>
  );
}

export default App;
