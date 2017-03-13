import React from 'react';

import Repos from './Repos'

export default class User extends React.Component{
	
	render(){
		return(
			<div id="userprofile">
				{
					this.props.user.login ? <h1><a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a></h1>:''
				}
				<br/>
				<br/>
				<img src={this.props.user.avatar_url} />
				<br/>
				<br/>
				{
					this.props.repos ? (<Repos repos={this.props.repos}/>):''
				}
			</div>
		)
	}
}