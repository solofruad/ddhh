/**
 * Modules Dependencies
 */

import React from 'react';
import {Card, CardTitle, Input, Button} from 'react-materialize';

export default class Login extends React.Component {	
	
	constructor(props){
		super(props);		
	}
	openLogin(){
		this.props.open.call(null);
	}
	
	render(){			
		return <div className="container-login"><div className="bg" onClick={this.openLogin.bind(this)}></div>		
				<Card className="grey lighten-4 grey text-darken-1 center"
					  	header={<CardTitle className="card-title-login">Iniciar Sesion</CardTitle>}>				
					<Input label="Usuario" s={12} validate />
					<Input type="password" label="Password" s={12} validate />
					<Button waves='light' className="deep-orange lighten-1">Ingresar</Button>
					<p className="txt-small"><a href="#">Olvidaste la contraseña?</a></p>
        		</Card>
    		</div>
	}
}
