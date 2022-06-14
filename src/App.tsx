import React from "react";

import { HashRouter } from "react-router-dom";
import { T86Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <T86Routes />
      </HashRouter>
    </div>
  );
}

export default App;
