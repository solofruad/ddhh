/**
 * Modules Dependencies
 */

import React from 'react';
import Menu from './nav/Menu';

export default class Index extends React.Component {	
	
	constructor(props){
		super(props);		
	}	
   	
	render(){			
		return <div>		
			<Menu />		
			{this.props.children}
	  	</div>
	}
}
