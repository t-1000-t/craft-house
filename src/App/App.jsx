import React, { Component } from "react";
// import widthResize from "../services/widthResize";
import stylish from "./App.module.css";
import FacePage from "../components/FacePage/FacePage";

// import Counter from "../components/Counter/Counter";


class App extends Component {
  componentDidMount() {
    // widthResize();
  }

  render() {
    return (
      <div className={stylish.App}>
        {/*<Counter />*/}
        <FacePage/>
      </div>
    );
  }
}

export default App;
