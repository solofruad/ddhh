/**
 * Modules Dependencies
 */

import React from 'react';

export default class Register extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return <div className="row">
			<form className="col s12 formulario-registrar">
				<div className="row center">
		        	<div className="col s12 m6">
			        	<div className="card">
		            		<div className="card-content">	            			
						      <div className="row">
						        <div className="input-field col s6">
						          <input id="first_name" type="text" className="validate"/>
						          <label for="first_name">Nombre</label>
						        </div>
						        <div className="input-field col s6">
						          <input id="last_name" type="text" className="validate"/>
						          <label for="last_name">Apellido</label>
						        </div>
						      </div>
						      <div className="row">
						        <div className="input-field col s12">
						          <input id="email" type="email" className="validate"/>
						          <label for="email">Email</label>
						        </div>
						      </div>						      
						      <div className="row">
						        <div className="input-field col s6">
						          <input id="password" type="password" className="validate"/>
						          <label for="password">Contraseña</label>
						        </div>						      
						        <div className="input-field col s6">
						          <input id="confirm-password" type="password" className="validate"/>
						          <label for="password">Confirmar contraseña</label>
						        </div>
						      </div>						      							   						  	
							</div>
							<div className="card-action">
					        	<button className="btn waves-effect waves-light center-align" type="submit" name="action">Enviar
								    <i className="material-icons right">send</i>
							  	</button>
					        </div>
						</div>
					</div>
				</div>
			</form>			 
		</div>

		
	}
}