import React, { Component } from "react";
import "./App.css";
import terje from "./terje.png";
import mscott from "./mscott.jpg";
import tmp from "./lighbulb.jpg";
import { HeaderBar } from "./Components/HeaderBar.js";
import { FooterBar } from "./Components/FooterBar.js";
import  StudentPage  from "./Components/StudentPage.js";
import  CompanyPage  from "./Components/CompanyPage.js";
import {Link, BrowserRouter, Route } from "react-router-dom";

//<Route path="/" component ={FooterBar}/>
class App extends Component {
  render() {
    return (
      <div className="wrap">
        <header className="App-header" />
          <BrowserRouter>
        <body>
          <HeaderBar />
          <FooterBar/>
              <Route exact path="/" component={StudentButton} />
              <Route exact path="/" component={CompanyButton} />
          <Route path="/Student" component ={StudentPage}/>
          <Route path="/Company" component ={CompanyPage}/>
        </body>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;

const StudentButton = () => (
    <Link to = "/Student"
    style={{
      position: "fixed",
      bottom: "30%",
      left: "8%",
      background: "#722f37",
      color: "white",
      border: "0px",
      height: "2em",
      width: "30%",
      borderRadius: "9999px",
    textAlign:'center',
    paddingTop:"0.3em",
    textDecoration: 'none',
    }}
  >
    {" "}
    Student{" "}
  </Link>
);
const CompanyButton = () => (
    <Link to = "/Company"
    style={{
      position: "fixed",
      bottom: "30%",
      right: "12%",
      background: "#722f37",
      color: "white",
      border: "0px",
      height: "2em",
      width: "30%",
      borderRadius: "9999px",
    textAlign:'center',
    paddingTop:"0.3em",
    textDecoration: 'none',
    }}
  >
    {" "}
    Company{" "}
  </Link>
);

