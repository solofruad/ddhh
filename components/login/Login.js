/**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import {Button, Row, Col, Input, Icon, Card, CardTitle} from 'react-materialize';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = { login: false};
		this.openLogin = this.openLogin.bind(this);
		this.mantenerAbierto = this.mantenerAbierto.bind(this);
	}
	openLogin(){
		if(!this.state.login)
			this.setState( {login:true} )
		else
			this.setState( {login:false} )
	}
	mantenerAbierto(){
		this.setState( {login:true} );
	}
	render(){
		let login = this.state.login ? 	
				<div className="container-login"><div className="bg" onClick={this.openLogin.bind(this)}></div>		
				<Card className="grey lighten-4 grey text-darken-1 center"
					  	header={<CardTitle className="card-title-login">Iniciar Sesion</CardTitle>}>				
					<Input label="Usuario" s={12} validate />
					<Input type="password" label="Password" s={12} validate />
					<Button waves='light' className="deep-orange lighten-1">Ingresar</Button>		
        		</Card></div>: 
			null;
		return <Row>
			<Col s={8}>
				<div className="intro">
	  				<h1 className="grey-text text-lighten-5">
		  				MovilizApp  &nbsp;&nbsp;&nbsp;
		  				<Button floating large  waves="light" className="deep-orange lighten-1" icon="send" onClick={this.openLogin.bind(this)} />	  					
					</h1>
	  				<h5 className="grey lighten-4 grey-text text-darken-1">Plataforma de defensa por <b>los Derechos Humanos</b></h5>  				
				</div>			
			</Col>	
			<Col s={3}>
				<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{login}
				</ReactCSSTransitionGroup>
			</Col>
						
		</Row>				
	}
}