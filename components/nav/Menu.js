/**
 * Modules Dependencies
 */

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import ActionHome from 'material-ui/lib/svg-icons/action/home';

/*
	Tema
 */
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from 'path/to/your/raw/theme/file';

let styles = {
		  title: {
		    cursor: 'pointer',
		  }
	}

export default class Menu extends React.Component {	

	constructor(props){
		super(props);
	}

	render(){		
		return <div>
			<AppBar
			    title={<span style={styles.title}>Movilizate!</span>}			    
			    iconElementLeft={<IconButton tooltip="Inicio"><ActionHome /></IconButton>}
			    iconElementRight={<FlatButton label="Registrar" />}			    
			  />
			{this.props.children}
	  	</div>
	}
}
