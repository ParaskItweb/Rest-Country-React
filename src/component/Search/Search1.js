import React from 'react';
import './Search.css';

const Search = () => {
	//Inline CSS
	// const inputStyle = {
	// 	margin : '10px'
	// };
	const getInputText = (event) => {
		console.log(event.target.value);
	};
	const buttonClicked = () => {
		console.log('Button Clicked');
	};
	return (
		<div className='searchBar'>
			<div className='ui icon input searchInput'>
				<input type='text' placeholder='Enter Country..' onChange={getInputText} />
				<i className='circular search link icon' />
			</div>
			<button className='ui inverted green button' onClick={buttonClicked}>
				Search
			</button>
		</div>
	);
};

export default Search;
