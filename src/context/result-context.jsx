import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export default function MovieProvider({ children }) {
	const [movies, setMovies] = useState([]);
	console.log(movies);
	const APIURL =
		"https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=1";

	useEffect(() => {
		axios.get(APIURL).then((res) => {
			setMovies(res.data.results);
		});
	}, []);

	return (
		<MovieContext.Provider value={{ movies, setMovies }}>
			{children}
		</MovieContext.Provider>
	);
}
