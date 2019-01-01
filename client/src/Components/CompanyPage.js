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

const url =
  'http://localhost:12345/graphql?query={theses(company:""){title,summary,company}}';

class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
        value:''
    };
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(event) {
     console.log("event is",event)
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ overflowY: "scroll", marginTop: "25%" }}>
          <div className="createcharactercard">
              <heading> New Thesis </heading>
   <TextField
          id="standard-textarea"
          label="Company"
          placeholder="Not need to inserteed later"
          multiline
          className={classNames.textField}
          margin="normal"
        />
   <TextField
          id="standard-textarea"
          label="Title"
          placeholder="Title"
          multiline
          className={classNames.textField}
          margin="normal"
          onChange={this.handleChange}
        />
   <TextField
          id="standard-textarea"
          label="Keywords"
          placeholder="Keywords"
          multiline
          className={classNames.textField}
          margin="normal"
        /> 
   <TextField
          id="standard-textarea"
          label="Summary"
          placeholder="Summary"
          multiline
          className={classNames.textField}
          margin="normal"
        />

      </div>
      </div>
    );
  }
}

const SheetHeader = props => (
  <p style={{ paddingBottom: "20px", paddingTop: "5px" }}>{props.name}</p>
);

export default CompanyPage;

const SearchButton = () => (
  <button
    style={{
      background: "#722f37",
      color: "white",
      border: "0px",
      height: "2em",
      width: "50%",
      borderRadius: "9999px",
      marginTop: "5%",
      textAlign: "center",
      textDecoration: "none"
    }}
  >
    {" "}
    SEARCH{" "}
  </button>
);
