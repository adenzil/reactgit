import React from "react";

import $ from 'jquery';

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
			},
			repos:[]
		};
	}

	updateSearch(data,filter){
		var url = "https://api.github.com/search/users?q="+data;
		$.each(filter,(key,val) => {
			url += '+'+key+":"+val;
		})
		if(data.length > 2){
			fetch(url)
			.then((response)=>{
				if (response.ok) {
			    	response.json()
			    	.then(json => {
			    		console.log(json)
    					this.setState({'data':json});
			    	});
			  	}
			})
		}else if(data == ''){
    		this.setState({'data':''});
		}
	}

	showUser(userkey){
		this.setState({'user': this.state.data.items[userkey]})
		fetch("https://api.github.com/users/"+this.state.data.items[userkey].login+"/repos")
		.then((response)=>{
			if (response.ok) {
		    	response.json()
		    	.then(json => {
		    		console.log(json)
		      		this.setState({'repos':json})
		    	});
		  	}
		})
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
				<User user={this.state.user} repos={this.state.repos} />
			</div>
		)
	}
}