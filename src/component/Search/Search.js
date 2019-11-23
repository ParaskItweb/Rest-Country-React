import React from 'react';
import axios from 'axios';
import './Search.css';
//import Country from '../Country/Country';

class Search extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			countries : []
		};
		this.searchValue = '';
	}
	getInputText = (event) => {
		//console.log(event.target.value);
		this.searchValue = event.target.value;
	};
	// onSearch = async () => {
	// 	//console.log(this.searchValue);
	// 	const res = await axios(`https://restcountries.eu/rest/v2/name/${this.searchValue}`);
	// 	this.setState({ countries: res.data });
	// };

	onButtonClicked = () => {
		this.props.onSearch(this.searchValue);
	};
	//===== catch then call =====//
	// componentDidMount () {
	// 	axios('https://restcountries.eu/rest/v2/name/india')
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((e) => {
	// 			console.log(e);
	// 		});
	// }

	//componentDidMount = async () => {};
	render () {
		return (
			<div>
				<div className='searchBar'>
					<div className='ui icon input searchInput'>
						<input type='text' placeholder='Enter Country..' onChange={this.getInputText} />
						<i className='circular search link icon' />
					</div>
					<button className='ui inverted green button' onClick={this.onButtonClicked}>
						Search
					</button>
				</div>
			</div>
		);
	}
}
export default Search;
