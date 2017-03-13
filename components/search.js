import React from 'react';

export default class Search extends React.Component{
	
	handleKeyPress = (e) => {
		if(e.target.value.length > 2){
			fetch("https://api.github.com/search/users?q="+e.target.value)
			.then((response)=>{
				if (response.ok) {
			    	response.json()
			    	.then(json => {
			      		this.props.updateSearch(json)
			    	});
			  	}
			})
		}
	}

	render(){
		return (
			<div>
				Search : <input type="text" onKeyUp={this.handleKeyPress.bind(this)} placeholder="enter atleast 2 char" />
			</div>
		)
	}
}