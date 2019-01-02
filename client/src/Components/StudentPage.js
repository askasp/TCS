import React from "react";
import ReactSelect, { components } from "react-select";

import Lorem from 'react-lorem-component';
import SearchIcon from "@atlaskit/icon/glyph/search";

import AsyncSelect from "react-select/lib/Async";
import Center from "react-center";
import "../App.css";

//const ip = '192.168.0.11'
const ip = 'localhost'


const url = 'http://'+ip+':12345/graphql?query={theses(company:""){title,summary,company}}' 

class StudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    output:[]

    };
    this.newData = this.newData.bind(this);

  }
  newData() {
    console.log("in new data", url);
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      console.log("json is ", json);
        let tmp = json.data.theses.map(item => 
          <div className="createcharactercard">
              <heading> {item.company} </heading>
              <SheetHeader name={item.title}/>
        <body>
            {item.summary}
        </body>
        <button className="readmorebutton"> Read more </button>
    </div>
        )
      this.setState({ output: tmp });
    };
    request();
  }

    componentDidMount(){
        this.newData()
    }

  render() {

    return (
        <div style={{background:'#b71c1c',overflowY:'scroll',marginTop:"10%"}}>
          <AsyncSelect
            name="form-field-name"
            valueKey="value"
            labelKey="name"
            isMulti={true}
            clearable={false}
            ///loadOptions={promiseOptions}
        styles={WikiSelectStyle2}
            //onChange={this.toggleTooltip}
        components={{ DropdownIndicator }}
            placeholder={"Filter..."}
            isSearchable={true}
          />
          {this.state.output}
      </div>

    );
  }
}


const SheetHeader = props => (
	<p style={{ paddingBottom: "20px", paddingTop: "5px" }}>{props.name}</p>
)


export default StudentPage;
const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SearchIcon primaryColor={"black"} />
      </components.DropdownIndicator>
    )
  );
};


const WikiSelectStyle2 = {
  option: (base, state) => ({
    ...base,
border: "1px solid #722f37",
      borderRadius:'9999px',
      backgroundColor:'#722f37',
      height:'1.5em',
      minHeight:'1.5em',
  }),

  container: base => ({
    ...base,
      width:'30%',
      marginTop:'1%',
      zIndex:'99',
      position:'fixed',
      top:'0%',
      backgroundColor:'white',
        borderRadius:'9999px',
      right:'2%',
        border: "1px solid #722f37",
      height:'1.5em',
      minHeight:'1.5em',

  }),

    control: (base) => ({
        // none of react-selects styles are passed to <View />
        ...base,
        color:"722f37",
      height:'1.5em',
      minHeight:'1.5em',
        borderRadius:'9999px', 
        background: "white",

    }),

 valueContainer: (base) => ({
                ...base,
      height:'1.5em',
      minHeight:'1.5em',
 }),

  dropdownIndicator: () => ({
  }),

  indicatorSeperator: () => null
};



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


