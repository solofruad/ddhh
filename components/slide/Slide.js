/**
 * Modules Dependencies
 */

import React from 'react';
import $ from 'jquery';
import  Slider from 'react-slick';

export default class Slide extends React.Component {	
	
	constructor(props){
		super(props);		
		this.state = { banner: [] };
	}
	getInitialState(){
		return { banner:[] };
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
		return <Slider {...settings}>
	        {
	        	this.state.banner.map((content) => {
					return <div key={content.id}>{content.contenido}</div>
				})
	        }
	      </Slider>
	}
}
