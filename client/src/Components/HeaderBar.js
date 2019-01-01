
/* global _ */
import React from "react";

import SearchIcon from '@atlaskit/icon/glyph/search';

import AsyncSelect from 'react-select/lib/Async';

export function HeaderBar(){
 
  return (
    <div>
    <div style={headerbar}>
        <h5 style={{color:"white"}}>
          TCS
        </h5>
    </div>
      </div>
  );
}



const headerbar = {
    height:'60px',
    //paddingBottom: "60px",
    display:'flex',
    backgroundColor:'#722f37',
    width:'100%',
    position:'fixed',
    zIndex:'20',
    top:'0',
    alignItems:'center',
    justifyContent:'center',

}






