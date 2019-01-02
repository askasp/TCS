import React from "react";
import ReactSelect, { components } from "react-select";

import Lorem from 'react-lorem-component';
import SearchIcon from "@atlaskit/icon/glyph/search";

import AsyncSelect from "react-select/lib/Async";
import Center from "react-center";
import Select from 'react-select';
import "../App.css";

//const ip = '192.168.0.11'
const ip = 'localhost'

const options = [
    {
      label: "Group 1",
      options: [
        { label: "option 1", value: "value_1" },
        { label: "option 2", value: "value_2" }
      ],
      label: "Group 2",
      options: [
        { label: "option 1", value: "value_1" },
        { label: "option 2", value: "value_2" }
      ]
    },
    { label: "A root option", value: "value_3" },
    { label: "Another root option", value: "value_4" }
  ];

const url = 'http://'+ip+':12345/graphql?query={theses(company:""){title,summary,company,image}}' 

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
            <Center>
          <div className="createcharactercard">
              <heading style={{background:'rgba(47,62,158,1)',padding:"2%",color:'white',position:'relative',top:"5px",zIndex:'99',}}> {item.company} </heading>
              <img width={'100%'} src={item.image} style={{position:"relative", top:"-27px"}} />
        <body>
              <SheetHeader name={item.title}/>
            {item.summary}
        </body>
        <button className="readmorebutton"> Read more </button>
        <button clasName="readmorebutton" style={{background:"#0077b5",color:'white',border:'0px',padding:'2%',fontWeight:'500'}}> Message </button>
    </div>
            </Center>
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
    <div style={{marginTop:'0',background:'#b71c1c',overflowY:'scroll'}}>

          <Center>
              <h3 style={{color:"white"}}> Available Theses </h3>
          </Center>
          <Select
            name="form-field-name"
            valueKey="value"
            labelKey="name"
            isMulti={true}
            clearable={false}
            ///loadOptions={promiseOptions}
        options={options}
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
	<p style={{fontWeight:'600',marginBottom: "2%", marginTop:'2%' }}>{props.name}</p>
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
      //height:'1.5em',
      //minHeight:'1.5em',
  }),

  container: base => ({
    ...base,
      width:'30%',
      margin:'1%',
      marginLeft:'65%',
      
      zIndex:'99',
      backgroundColor:'white',
        borderRadius:'9999px',
      right:'2%',
        border: "1px solid #722f37",
      //height:'1.5em',
      //minHeight:'1.5em',

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



