import React from 'react';
import { fetchData } from '../../api/fetchData';
import { MoviesList } from '../MoviesList';
import { Preloader } from '../Preloader';
import { Search } from '../Search';

export class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			movies       : [],
			search       : '',
			error        : '',
			filterMovies : 'all',
		};

		this.handleSearchInput = this.handleSearchInput.bind(this);
	}

	handleChange = (event) => {
		this.setState({ search: event.target.value });
	};

	handleSearchInput = async (event) => {
		if (event.key === 'Enter') {
			const movies = await fetchData(
				this.state.search,
				this.state.filterMovies,
			);
			if (movies.Response === 'True') {
				this.setState({ movies: movies.Search });
			} else {
				this.setState({ movies: null, error: movies.Error });
			}
		}
	};

	handleSearchButton = async () => {
		const movies = await fetchData(this.state.search, this.state.filterMovies);
		if (movies.Response === 'True') {
			this.setState({ movies: movies.Search });
		} else {
			this.setState({ movies: null, error: movies.Error });
		}
	};

	handleType = (event) => {
		this.setState({ filterMovies: event.target.value }, async () => {
			const movies = await fetchData(
				this.state.search,
				this.state.filterMovies,
			);
			this.setState({ movies: movies.Search });
		});
	};

	showMovies = () => {
		if (this.state.movies === null) {
			return (
				<div className="preloader">
					Sorry!
					{
						this.state.error ? this.state.error :
						'Somthing went wrong. Try to reload page.'}
				</div>
			);
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
		const movies = await fetchData(this.state.search, this.state.filterMovies);
		this.setState({ movies: movies.Search });
	}

	render() {
		return (
			<div>
				<Search
					searchText={this.state.search}
					handleChange={this.handleChange}
					handleSearchInput={this.handleSearchInput}
					handleSearchButton={this.handleSearchButton}
					handleType={this.handleType}
					filterMovies={this.state.filterMovies}
				/>
				<div className={this.setClassName()}>{this.showMovies()}</div>
			</div>
		);
	}
}
