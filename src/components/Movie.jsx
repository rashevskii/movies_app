import React from 'react';

export const Movie = (props) => {
  const {
    id,
    title,
    img,
    type,
    year
  } = props;
	return (
		<div id={id} className="card">
			<div className="card-image">
				<img
					className="image-item"
					src={

							img !== 'N/A' ? img :
							`https://via.placeholder.com/300x450?text=${title}`
					}
					alt={title}
				/>
				<span className="card-title">{title}</span>
			</div>
			<div className="card-content">
				<div>Type: {type}</div>
				<div>Year: {year}</div>
			</div>
			<div className="card-action">
				<a href="!#">This is a link</a>
			</div>
		</div>
	);
};
