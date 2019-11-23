import React from 'react';
import Country from '../Country/Country';

const CountryList = (props) => {
	return (
		<div>
			{props.countries.map(({ name, capital }, index) => {
				return <Country key={index} name={name} capital={capital} />;
			})}
		</div>
	);
};

export default CountryList;
