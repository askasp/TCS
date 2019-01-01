
import React, { Component } from "react";
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Roboto:300,400,500,600,700", "sans-serif"]
  }
});
class FloatingLabelInput extends Component {
  state = {
    isFocused: false
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
        position: "relative",
        left: "0px",
      top: isFocused || props.value !== "" ? "0" : "15px",
      fontSize: !isFocused && props.value=="" ? "18px" : '14px',
      opacity: !isFocused  ? 0.5 : 1,
      fontFamily: "Roboto",
      color: !isFocused ? "black" : "#black"
    };
    return (
      <div style={{width:'20px', display: "inline-block", marginRight: "150px" }}>
        <label style={labelStyle}>{label}</label>
        <input
          {...props}
          style={{
            width: "80ww",
            fontSize: '18px',
            color: "black",
            background: "rgba(0,0,0,0)",
            border: "0px",
            borderBottom: "0.5px solid black",
            textAlign: "left"
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={props.callback}
          value={props.value}
        />
      </div>
    );
  }
}
export default FloatingLabelInput;

export function FloatingLabelForm(props) {
  const inputs = props.label.map(item => (
    <FloatingLabelInput
      label={item}
      key={item}
      callback={props.callback}
      value={props.value[item]}
  />
  ));
  return (
      <div style={{marginTop:'2%'}}> 
        <header style={{fontSize:"18px",display:'inline-block',width:'190px'}}>
      {props.title}
  </header>
      <form style={{ display: "inline-block"}}>
        {inputs}
      </form>
    </div>
  );
}

