import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import ToDo from "./routes/ToDo";
import Chat from "./routes/Chat";
import Search from "./routes/Search";
import SearchResult from "./routes/SearchResult";
import Board from "./routes/Board";
import Menu from "./routes/Menu/menu";
import Accordion from "./routes/Accordion/accordion";
import Carousel from "./routes/Carousel/carousel";
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/ToDo" component={ToDo} />
      <Route path="/Chat" component={Chat} />
      <Route path="/Search" component={Search} />
      <Route path="/SearchResult" component={SearchResult} />
      <Route path="/Board" component={Board} />
      <Route path="/menu" component={Menu} />
      <Route path="/accordion" component={Accordion} />
      <Route path="/carousel" component={Carousel} />
    </HashRouter>
  );
}

export default App;
