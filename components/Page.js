import React from "react";

import List from "./List";
import Search from "./Search";
import User from "./User";

export default class Page extends React.Component{
	
	constructor() {
		super();
		this.state = {
			data: {
				'total_count': '',
				'items':[]
			},
			user:{
				'avatar_url': "",
				'id': ''
			}
		};
	}

	updateSearch(data){
    	this.setState({data});
	}

	showUser(userkey){
		this.setState({'user': this.state.data.items[userkey]})
	}

	render(){
		return(
			<div>
				<br/>
				<br/>
				<Search updateSearch={this.updateSearch.bind(this)} />
				<br/>
				<br/>
				<List data={this.state.data} showUser={this.showUser.bind(this)} />
				<br/>
				<br/>
				<User user={this.state.user} />
			</div>
		)
	}
}