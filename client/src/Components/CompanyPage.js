import React from "react";
import ReactSelect, { components } from "react-select";

import Lorem from "react-lorem-component";
import SearchIcon from "@atlaskit/icon/glyph/search";

import AsyncSelect from "react-select/lib/Async";
import Center from "react-center";
import FloatingLabelInput from './FloatingLabelInput.js'
import "../App.css";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';


class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
        value:'',
        thesis:[],
    };
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(id,event) {
     console.log("thesis is",this.state.thesis)
      let tmp = this.state.thesis
      tmp[id] = event.target.value
    this.setState({thesis:tmp});
  }

  handleSubmit() {
      let url = 'http://localhost:12345/graphql?query=mutation+_{createThesis(id:"15",title:"'+this.state.thesis.Title+'",summary:"'+this.state.thesis.Summary+'",company:"'+this.state.thesis.Company+'",image:"'+this.state.thesis.Image+'"){title,summary}}' 


    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      console.log("json is ", json);

  }
      request()
      alert('A Thesis was submitted: ' + this.state.value);
  }

  render() {
      const myTextField = (name) =>
          <Center>
   <TextField
          id={name}
          label={name}
          placeholder={name}
          multiline
          className={classNames.textField}
          margin="normal"
          onChange={ (e) => this.handleChange(name,e)}
        />
    </Center>


    return (
      <div style={{paddingTop:"10%",background:'#b71c1c', overflowY: "scroll"}}>

          <Center>
              <h3 style={{color:"white"}}> Add Thesis </h3>
          </Center>
          <Center>
          <div style={{padding:'2%',paddingBottom:"10%"}} className="createcharactercard">
              <heading> New Thesis </heading>
              {myTextField("Company")}
              {myTextField("Title")}
              {myTextField("Keywords")}
              {myTextField("Summary")}
              {myTextField("Image")}
    <Center>
        <button onClick={() => this.handleSubmit()} className="buttonper">
            SUBMIT
        </button>
  </Center>
      </div>
          </Center>
      </div>
    );
  }
}

const SheetHeader = props => (
  <p style={{ paddingBottom: "20px", paddingTop: "5px" }}>{props.name}</p>
);

export default CompanyPage;

const SubmitButtonStyle={
      background: "#ff5722",
      color: "white",
      border: "0px",
      height: "2em",
      width: "50%",
      borderRadius: "9999px",
      marginTop: "5%",
      textAlign: "center",
      textDecoration: "none"
}

