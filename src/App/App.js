import React from "react";
import "./App.module.css";
import FacePage from "../components/FacePage/FacePage";
import stylish from "./App.module.css";
// import Counter from "../components/Counter/Counter";


function App() {
  return (
    <div className={stylish.App}>
      {/*<Counter />*/}
      <FacePage/>
    </div>
  );
}

export default App;
