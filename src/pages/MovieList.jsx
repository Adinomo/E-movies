import React,{ useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../assets/_movieContainer.scss';

function MovieList() {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=9ffd9157`;
		try {
			const response = await fetch(url);
			const responseJson = await response.json();

			if (responseJson.Search) {
				setMovies(responseJson.Search);
			}
		} catch (error) {
			console.log(error)
		}
	};
	
	useEffect(() => {
	  getMovieRequest();
	}, [])
	console.log(movies)
	


	return (
		<div className="container-fluid movie__container">
			<div className="rows">
				<MovieCard movie={movies} />
			</div>
		</div>
	);
}

export default MovieList;