
import React from "react" 
import Sword from "../icons/sword.svg"
import Home from "../icons/home.svg"
import Spellbook from "../icons/spellbook.svg"
import Backpack from "../icons/backpack.svg"
import Features from "../icons/features.svg"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom" 
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import './FooterBar.css'

export function FooterBar(){
	return(
		<div style={footerbar}>
			<div style={footerItem}>
                <Link to="/"> <StarFilledIcon primaryColor={'white'}/></Link>
			</div>
			<div style={footerItem}>
				<Link to="/"> <img className="fixedImg" src={Home} alt ="logo" /></Link>
			</div>
			<div style={footerItem}>
				<Link to="/"> <img className="fixedImg" src={Features} alt ="logo" /></Link>
			</div>
		</div>
	)
    
}

const footerbar = {
  height: '5%',
backgroundColor:'#7f0000',
  position: 'fixed',
  width: '100%',
  zIndex: '9999',
  bottom: '0%',
  display: 'flex',
    justifyContent:'center',
}

const footerItem ={
    display:'inline-block',
    margin:'1%',
    marginLeft:'8%',
    marginRight:'8%',
}





