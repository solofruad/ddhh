/**
 * Modules Dependencies
 */

import React from 'react';


export default class Menu extends React.Component {	
	
	constructor(props){
		super(props);
	} 	
   	
	render(){				
		return <div>
				  <nav className="transparent sinShadow">
				    <div className="nav-wrapper">
				      <a href="#" className="brand-logo center">Logo</a>				      
				      <ul id="nav-mobile" className="hide-on-med-and-down">
				      	<li className="left"><a href="#"><i className="material-icons">menu</i></a></li>				        				        
				        <li className="right"><a href="#">Registrate</a></li>				        				        
				      </ul>
				    </div>
				  </nav>
			{this.props.children}
	  	</div>
	}
}
