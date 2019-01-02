import React, { Component } from "react";
import "./App.css";
import { HeaderBar } from "./Components/HeaderBar.js";
import { FooterBar } from "./Components/FooterBar.js";
import  StudentPage  from "./Components/StudentPage.js";
import  CompanyPage  from "./Components/CompanyPage.js";
import {Link, BrowserRouter, Route } from "react-router-dom";
import Center from "react-center"
import './bootstrap-social.css'
//import 'react-bootstrap'
import './bower_components/font-awesome/css/font-awesome.css'
import Background from './images/engineering.jpg'


class App extends Component {
  render() {
    return (
        <div>
        <div className="wrap" style={{zIndex:'999',backgroundSize:'cover',backgroundPosition:'center',height:'100%',backgroundImage: `url(${Background})`}}>
        <header className="App-header" />
          <BrowserRouter>
        <body>
        <Route path="/" component={HeaderBar} />
        <Route path="/" component={FooterBar} />
        <Route exact path="/" component={RootPage} />
        </body>
          </BrowserRouter>
      </div>
      </div>
    );
  }
}

export default App;

const RootPage = () =>(
    <div>
        <div className="wrap" style={{zIndex:'999',backgroundSize:'cover',backgroundPosition:'center',height:'100%',backgroundImage: `url(${Background})`}}>
        <WelcomeCard/>
    </div>
          <StudentPage/>
        <CompanyPage/>
    </div>
)



const WelcomeCard = () =>(
    <div style={{marginTop:'50vh',marginBottom:'10vh'}}>
    <Center>
			<div className="createcharactercard" style={{background:'rgba(183,28,28,0.9)'}}>
                <body style={{background:"rgba(0,0,0,0.0)",color:"white",fontWeight:'600',fontSize:'20px'}}> Welcome to TCS, matching master students with companies. It's like Tinder, but with a far greater chance of getting fucked! 
				<Center>
    <button class="btn btn-block btn-social btn-linkedin" style={{margin:'3%'}}>
    <span class="fa fa-linkedin"></span> Sign in with Linkedin
    </button>
				</Center>
</body>
			</div>
        </Center>
			</div>
)


//				<Center>
//					<Link to="/Student" className="buttonper"> <p style={{textAlign:"center"}}> Browse Theses </p> </Link>
//				</Center>
//				<Center>
//					<Link to="/Company" className="buttonper"> <p style={{textAlign:"center"}}> Add Thesis </p> </Link>
//                </Center>
//
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

