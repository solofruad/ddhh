/**
 * Modules Dependencies
 */

import React from 'react';
import {SideNav} from 'react-materialize';

export default class NavSlide extends React.Component {	
	
	constructor(props){
		super(props);		
	}	
   	
	render(){			
		return <div className="slide-index">
				  	<SideNav id="slide-out" className="full" left={true}>
				  		<li className="slide-logo"><a href="#">LOGO</a></li>
						<div className="vertical-aling">							
							<li className="valign"><a href="#">Inicio</a></li>
							<li className="valign"><a href="#">Sobre MovilizApp</a></li>
			  				<li className="valign"><a href="#">Contacto</a></li>
		  				</div>
		  				<div className="slide-footer">
		  					<li><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-envelope-o"></i></a></li>
		  					<li><a href="#">Copyright HatLab @2016</a></li>
		  				</div>
					</SideNav>	
				</div>
	}
}
