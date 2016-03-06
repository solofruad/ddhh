/**
 * Modules Dependencies
 */

import React from 'react';
import {Modal, Card, CardTitle, Input, Button, Icon, Col, Row, SideNav} from 'react-materialize';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Menu extends React.Component {	
	
	constructor(props){
		super(props);
		this.state = { register: false};
		this.openRegister = this.openRegister.bind(this);
		this.mantenerAbierto = this.mantenerAbierto.bind(this);
	}
	openRegister(){
		if(!this.state.register)
			this.setState( {register:true} )
		else
			this.setState( {register:false} )
	}
	mantenerAbierto(){
		this.setState( {register:true} );
	}
   	
	render(){	
		let register = this.state.register ? 	
				<div><div className="bg2" onClick={this.openRegister.bind(this)}></div>		
					<Card className="center"
					  	header={<CardTitle className="card-title-register">Registrarse</CardTitle>}>
						<Input label="Usuario" s={11} validate ><Icon>account_circle</Icon></Input>
						<Input label="Email" type="email" s={11} validate ><Icon>email</Icon></Input>
						<Input type="password" label="Contraseña" s={11} validate><Icon>lock</Icon></Input>
						<Input type="password" label="Repetir Contraseña" s={11} validate><Icon>lock_outline</Icon></Input>						
						<Button waves='light' className="btn-register deep-orange lighten-1">Registrar</Button>							
					</Card>					
				</div>: 
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
				  	<div className="slide-index">
					  	<SideNav id="slide-out" className="full" left={true}>
							<div className="vertical-aling">
								<li className="valign"><a href="#">Inicio</a></li>
								<li className="valign"><a href="#">Sobre MovilizApp</a></li>
				  				<li className="valign"><a href="#">Contacto</a></li>
			  				</div>
						</SideNav>	
					</div>
				  <Row>				  	
					<Col id="card-register" s={4}>
				  		<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
							{register}
						</ReactCSSTransitionGroup>
					</Col>
				  </Row>
			{this.props.children}
	  	</div>
	}
}
