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
import Center from "react-center"
import './bootstrap-social.css'
//import 'react-bootstrap'
import './bower_components/font-awesome/css/font-awesome.css'


class App extends Component {
  render() {
    return (
      <div className="wrap">
        <header className="App-header" />
          <BrowserRouter>
        <body>
          <HeaderBar />
          <FooterBar/>
          <Route exact path="/" component ={WelcomeCard}/>
          <Route path="/Student" component ={StudentPage}/>
          <Route path="/Company" component ={CompanyPage}/>
        </body>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;

const WelcomeCard = () =>(
			<div className="centercard">
				<p style={{textAlign:"center"}}>Welcome to TCS (Thesis)!</p>
				<Center>
					<Link to="/Student" className="buttonper"> <p style={{textAlign:"center"}}> Browse Theses </p> </Link>
				</Center>
				<Center>
					<Link to="/Company" className="buttonper"> <p style={{textAlign:"center"}}> Add Thesis </p> </Link>
                </Center>
				<Center>
    <button class="btn btn-block btn-social btn-linkedin" style={{margin:'3%'}}>
    <span class="fa fa-linkedin"></span> Sign in with Linkedin
    </button>
				</Center>

			</div>
)

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

