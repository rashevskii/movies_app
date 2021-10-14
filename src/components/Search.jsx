export const Search = (props) => {
	return (
		<div className="container">
			<div className="input-field input-field__text col s12">
				<input
					name="search"
					type="search"
					className="validate"
					value={props.searchText}
					onChange={props.handleChange}
					onKeyDown={props.handleSearchInput}
				/>
				<button className="btn search-button" onClick={props.handleSearchButton}>
					Search
				</button>
			</div>
			<div className="input-field input-field__radio">
				<p>
					<label>
						<input
							className="with-gap"
							onChange={props.handleType}
							name="filterMovies"
							value="all"
							type="radio"
							checked={props.filterMovies === 'all'}
						/>
						<span>All</span>
					</label>
				</p>
				<p>
					<label>
						<input
							className="with-gap"
							onChange={props.handleType}
							name="filterMovies"
							value="movie"
							type="radio"
							checked={props.filterMovies === 'movie'}
						/>
						<span>Movies only</span>
					</label>
				</p>
				<p>
					<label>
						<input
							className="with-gap"
							onChange={props.handleType}
							name="filterMovies"
							value="series"
							type="radio"
							checked={props.filterMovies === 'series'}
						/>
						<span>Series only</span>
					</label>
				</p>
			</div>
		</div>
	);
};
