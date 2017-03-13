import React from 'react';

export default class Repos extends React.Component{
	
	render(){
		return(
			<ul>
				{
					this.props.repos.map(function(re,i){
						return <li key={i}><a href={re.html_url} target="_blank">{re.name}</a></li>
					})
				}
			</ul>
		)
	}
}