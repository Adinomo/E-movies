import React from 'react';
import '../assets/_movieCard.scss'
import illus from '../assets/illustration-hero.svg'

function MovieCard(props) {
	const { movie } = props
	console.log(movie)
	return ( 
		<>
		 { movie?.map(item => {
			 return (
					<div className="cardCon">
						<img
							src={item.Poster}
							alt="cardCon"
						/>
						<div className="cardCon__details">
							<h6 className="cardCon__title">Title: {item.Title}</h6>
							<p className="cardCon__genre">Year:{item.Year}</p>
							<p className="cardCon__rating">8.5/10</p>
							<i className="favourite">⭐</i>
						</div>
					</div>
				);
		 }) }
		</>
	 );
}

export default MovieCard;