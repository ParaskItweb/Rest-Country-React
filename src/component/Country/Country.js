import React from 'react';
const Country = (props) => {
	//Destructuring of Object
	const { name, capital } = props;
	return (
		<div class='ui grid'>
			<div class='four wide column' />
			<div class='four wide column'>
				<h3>Name : {name} </h3>
			</div>
			<div class='four wide column'>
				<h3>Capital : {capital} </h3>
			</div>
		</div>
	);
};
export default Country;
