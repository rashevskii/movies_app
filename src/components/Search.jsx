export const Search = (props) => {
	return (
		<div className="container">
			<div className="input-field col s12">
				<input
					name="search"
					type="search"
					className="validate"
					value={props.searchText}
					onChange={props.handlerChange}
					onKeyDown={props.handleSearch}
				/>
			</div>
			<div className="input-field input-field__radio">
				<p>
					<label>
						<input className="with-gap" onChange={props.handleType} name="all" type="radio" checked />
						<span>All</span>
					</label>
				</p>
				<p>
					<label>
						<input className="with-gap" onChange={props.handleType} name="movies" type="radio" />
						<span>Movies only</span>
					</label>
				</p>
				<p>
					<label>
						<input className="with-gap" onChange={props.handleType} name="series" type="radio" />
						<span>Series only</span>
					</label>
				</p>
			</div>
		</div>
	);
};
