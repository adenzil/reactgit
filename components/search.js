import React from 'react';

export default class Search extends React.Component{
	
	handleKeyPress = (e) => {
		let value = e.target.value;
		if(value.length > 2){
			fetch("https://api.github.com/search/users?q="+e.target.value)
			.then((response)=>{
				if (response.ok) {
			    	response.json()
			    	.then(json => {
			    		console.log(json)
			      		this.props.updateSearch(json)
			    	});
			  	}
			})
		}else if(value == ''){
			this.props.updateSearch('')
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