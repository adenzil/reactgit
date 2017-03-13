import React from 'react';

import $ from 'jquery';

export default class Search extends React.Component{
	
	handleKeyPress = (e) => {
		switch(e.keyCode){
			// escape
			case 27:
					document.getElementById('search').value = '';
			default:
					let value = e.target.value;
					this.checkfilter(value);
					break;
		}
	}

	checkfilter = (value) => {
		let filter = {}
		let namefilter = $('#namefilter').val();
		if(namefilter){
			filter['in'] = namefilter;
		}
		this.props.updateSearch(value,filter);
	}

	render(){
		return (
			<div>
				Search : <input type="text" id ="search" onKeyUp={this.handleKeyPress.bind(this)} placeholder="enter atleast 2 char" />	
				<select id="namefilter">
					<option value=''></option>
					<option value='login'>username</option>
					<option value='email'>email</option>
					<option value='fullname'>full name</option>
				</select>
			</div>
		)
	}
}