/**
 * Modules Dependencies
 */

import React from 'react';
import {Button, Row, Col} from 'react-materialize';
import Slide from './slide/Slide';
import Login from './login/Login';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class PaginaPrincipal extends React.Component {
	constructor(props){
		super(props);
		this.state = { login: false};
		this.openLogin = this.openLogin.bind(this);
	}
	getInitialState(){
		return { login:false };
	}
	openLogin(){
		if(!this.state.login)
			this.setState( {login:true} )
		else
			this.setState( {login:false} )
	}	
	
	render(){				
		let login = this.state.login ? 	
				<Login open={this.openLogin} />: 
			null;
		return <Row>
			<Col s={8}>
				<div className="intro">
	  				<h1 className="grey-text text-lighten-5">
		  				MovilizApp  &nbsp;&nbsp;&nbsp;
		  				<Button floating large  waves="light" className="deep-orange lighten-1" icon="add" onClick={this.openLogin.bind(this)} />	  					
					</h1>
	  				<h5 className="grey lighten-4 grey-text text-darken-1">Plataforma de defensa por <b><Slide /></b></h5>  				
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