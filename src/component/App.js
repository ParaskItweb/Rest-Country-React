import React from 'react';
import Search from './Search/Search';
import CountryList from './CountryList/CountryList';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	state = {
		countries : []
	};
	onSearch = async (searchValue) => {
		const res = await axios(`https://restcountries.eu/rest/v2/name/${searchValue}`);
		this.setState({ countries: res.data });
	};
	render () {
		return (
			<div>
				<Search onSearch={this.onSearch} />
				<CountryList countries={this.state.countries} />
			</div>
		);
	}
}
export default App;
