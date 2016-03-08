/**
 * Modules Dependencies
 */

import React from 'react';
import {Col, Row} from 'react-materialize';
import Register from '../login/Register';
import NavSlide from './NavSlide';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Menu extends React.Component {	
	
	constructor(props){
		super(props);
		this.state = { register: false};
		this.openRegister = this.openRegister.bind(this);	
	}
	getInitialState(){
		return { register:false };
	}

	openRegister(){
		if(!this.state.register)
			this.setState( {register:true} )
		else
			this.setState( {register:false} )
	}

	render(){	
		let register = this.state.register ? 	
				<Register open={this.openRegister}/>: 
			null;			
		return <div>
				  <nav className="transparent sinShadow">
				    <div className="nav-wrapper">
				      <a href="#" className="brand-logo center">Logo</a>				      
				      <ul id="nav-mobile" className="hide-on-med-and-down">			      					      				        				       
				        <li className="right"><a href="#" onClick={this.openRegister.bind(this)}>Registrarse</a></li>				        				        
				      </ul>
				    </div>
				  </nav>
				  <NavSlide />	
				  <Row>				  	
					<Col id="card-register" s={4}>
				  		<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
							{register}
						</ReactCSSTransitionGroup>
					</Col>
				  </Row>			
		  	</div>
	}
}
