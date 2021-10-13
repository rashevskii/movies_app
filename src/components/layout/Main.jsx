import React from 'react';
import { fetchData } from '../../api/fetchData';
import { MoviesList } from '../MoviesList';
import { Preloader } from '../Preloader';
import { Search } from '../Search';

export class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			movies : [],
			search : '',
			error: '',
			type: '',
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handlerChange = (event) => {
		this.setState({ search: event.target.value });
	};

	handleSearch = async (event) => {
		if (event.key === 'Enter') {
			const movies = await fetchData(this.state.search);
			if (movies.Response === 'True') {
				this.setState({ movies: movies.Search });
			} else {
				this.setState({ movies: null, error: movies.Error });
			}
		}
	};
	// TODO: нужно сделать переключение радиокнопок
	handleType = (event) => {
		console.log(event);
		this.setState({type: event.target.name})
	}

	showMovies = () => {
		if (this.state.movies === null) {
			return <div className="preloader">Sorry! {this.state.error}</div>;
		} else if (this.state.movies.length) {
			return <MoviesList movies={this.state.movies} />;
		} else {
			return (
				<div className="preloader">
					<Preloader />
				</div>
			);
		}
	};

	setClassName = () => {
		if (this.state.movies === null) {
			return 'container';
		} else if (this.state.movies.length) {
			return 'container main-wrapper';
		} else {
			return 'container';
		}
	};

	async componentDidMount() {
		const movies = await fetchData();
		this.setState({ movies: movies.Search });
	}

	render() {
		return (
			<div>
				<Search
					searchText={this.state.search}
					handlerChange={this.handlerChange}
					handleSearch={this.handleSearch}
					handleType={this.handleType}
				/>
				<div className={this.setClassName()}>{this.showMovies()}</div>
			</div>
		);
	}
}
