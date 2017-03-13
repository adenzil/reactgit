import React from "react";

export default class List extends React.Component {

	render() {
    	return (
	    	<div>
	    		Total count : <span>{this.props.data.total_count}</span>
				<ul>
					{
						this.props.data.items.map(function(value, i){
				        	return <li key={i}>{value.login}</li>;
				    	})
				    }
				</ul>

	    	</div>
    	);
  	}
}