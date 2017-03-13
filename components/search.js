import React from 'react';

import $ from 'jquery';

export default class Search extends React.Component{
	
	handleKeyPress = (e) => {
		switch(e.keyCode){
			// escape
			case 27:
					document.getElementById('search').value = '';
			default:
					this.checkfilter();
					break;
		}
	}

	checkfilter = () => {
		var filter = {}
		let value = document.getElementById('search').value;
		let namefilter = $('#namefilter').val();
		if(namefilter){
			filter['in'] = namefilter;
		}
		this.props.updateSearch(value,filter);
	}

	render(){
		return (
			<div>
				Search : 
				<br/>
				<br/>
				Name : <input type="text" id ="search" onKeyUp={this.handleKeyPress.bind(this)} placeholder="enter atleast 2 char" />	
				&nbsp;&nbsp;
				<select id="namefilter" onChange={this.checkfilter.bind(this)}>
					<option value=''></option>
					<option value='login'>username</option>
					<option value='email'>email</option>
					<option value='fullname'>full name</option>
				</select>
			</div>
		)
	}
}