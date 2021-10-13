import React from 'react';
import { Movie } from './Movie';

export const MoviesList = (props) => {
	return props.movies.map((movie) => (
		<Movie
			key={movie.imdbID}
			img={movie.Poster}
			title={movie.Title}
			type={movie.Type}
			year={movie.Year}
			id={movie.imdbID}
		/>
	));
};
