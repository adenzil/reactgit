import React from "react";

export default class List extends React.Component {

	chooseUser(key) {
		this.props.showUser(key)
	}

	render() {
    	return (
	    	<div id="searchlist">
	    		Total count : <span>{this.props.data.total_count ? this.props.data.total_count:'0'}</span>
				<ul>
					{
						this.props.data.items ? (this.props.data.items.map(function(value, i){
				        	return <li key={i} onClick={this.chooseUser.bind(this,i)}>{value.login}</li>;
				    	},this)):''
				    }
				</ul>

	    	</div>
    	);
  	}
}