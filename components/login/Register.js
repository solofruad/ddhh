/**
 * Modules Dependencies
 */

import React from 'react';
import {Card, CardTitle, Input, Button, Icon} from 'react-materialize';

export default class Register extends React.Component {	
	
	constructor(props){
		super(props);		
	}
	openRegister(){
		this.props.open.call(null);
	}
	
	render(){			
		return <div><div className="bg2" onClick={this.openRegister.bind(this)}></div>		
					<Card className="center"
					  	header={<CardTitle className="card-title-register">Registrarse</CardTitle>}>
						<Input label="Usuario" s={11} validate ><Icon>account_circle</Icon></Input>
						<Input label="Email" type="email" s={11} validate ><Icon>email</Icon></Input>
						<Input type="password" label="Contraseña" s={11} validate><Icon>lock</Icon></Input>
						<Input type="password" label="Repetir Contraseña" s={11} validate><Icon>lock_outline</Icon></Input>						
						<Button waves='light' className="btn-register deep-orange lighten-1">Registrar</Button>							
					</Card>					
				</div>	  	
	}
}
