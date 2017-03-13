import React from "react";

import List from "./List";
import Search from "./Search";


export default class Page extends React.Component{
	
	constructor() {
		super();
		this.state = {
			data: {
				'total_count': 0,
				'items':['','']
			}
		};
	}

	updateSearch(data){
    	this.setState({data});
	}

	render(){
		return(
			<div>
				<Search updateSearch={this.updateSearch.bind(this)} />
				<br/>
				<br/>
				<List data={this.state.data}/>
			</div>
		)
	}
}