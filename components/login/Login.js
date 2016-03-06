/**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import {Button, Row, Col, Input, Icon, Card, CardTitle, SideNav} from 'react-materialize';
import  Slider from 'react-slick';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = { login: false, banner: [], frases:[] };
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
	componentWillMount(){
    	$.get('/banner', (banner) => {
      		this.setState({ banner:  banner});
    	});    	   	
	}

	render(){
		var settings = {	      	      
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      adaptiveHeight:false,
	      autoplay: true,
  		  autoplaySpeed: 3500,  
  		  arrows:false
	    };
		let frase = <Slider {...settings}>
	        {
	        	this.state.banner.map((content) => {
					return <div key={content.id}>{content.contenido}</div>
				})
	        }
	      </Slider>;
		let login = this.state.login ? 	
				<div className="container-login"><div className="bg" onClick={this.openLogin.bind(this)}></div>		
				<Card className="grey lighten-4 grey text-darken-1 center"
					  	header={<CardTitle className="card-title-login">Iniciar Sesion</CardTitle>}>				
					<Input label="Usuario" s={12} validate />
					<Input type="password" label="Password" s={12} validate />
					<Button waves='light' className="deep-orange lighten-1">Ingresar</Button>
					<p className="txt-small"><a href="#">Olvidaste la contraseña?</a></p>
        		</Card></div>: 
			null;
		return <Row>
			<Col s={8}>
				<div className="intro">
	  				<h1 className="grey-text text-lighten-5">
		  				MovilizApp  &nbsp;&nbsp;&nbsp;
		  				<Button floating large  waves="light" className="deep-orange lighten-1" icon="add" onClick={this.openLogin.bind(this)} />	  					
					</h1>
	  				<h5 className="grey lighten-4 grey-text text-darken-1">Plataforma de defensa por <b>{frase}</b></h5>  				
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