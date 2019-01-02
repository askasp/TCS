
/* global _ */
import React from "react";

import SearchIcon from '@atlaskit/icon/glyph/search';

import AsyncSelect from 'react-select/lib/Async';

export function HeaderBar(){
 
  return (
    <div>
    <div style={headerbar}>
        <h2 style={{color:"white"}}>
          TCS
        </h2>
    </div>
      </div>
  );
}


const headerbar = {
    height:'7%',
    display:'flex',
    backgroundColor:'#7f0000',
    width:'100%',
    position:'fixed',
    zIndex:'20',
    top:'0',
    alignItems:'center',
    justifyContent:'center',
}






