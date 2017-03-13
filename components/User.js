import React from 'react';

export default class User extends React.Component{
	
	render(){
		return(
			<div id="userprofile">
				Username : <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
				<br/>
				<br/>
				<img src={this.props.user.avatar_url} />
			</div>
		)
	}
}