import React from "react";
import "./App.css";

import SliderParent from "./components/slider/SliderParent";
import NavBar from "./components/navbar/NavBar";

class App extends React.Component {
  render() {
    // const { selectLang } = this.props;
    // console.log("se
    return (
      <div>
        <NavBar/>
        <br/>
        <br/>
        <br/>
        <SliderParent />
      </div>
    );
  }
}

export default App;
