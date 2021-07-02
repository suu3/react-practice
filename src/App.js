import React from "react";
import { HashRouter, Route } from "react-router-dom";
import ToDo from "./routes/ToDo";

import Home from "./routes/Home.js";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/ToDo" component={ToDo} />
    </HashRouter>
  );
}

export default App;
