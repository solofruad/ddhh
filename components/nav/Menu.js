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
			<ul>
				<li><a href="#">Hola</a></li>
				<li><a href="#">Mundo</a></li>
			</ul>
			{this.props.children}
	  	</div>
	}
}
