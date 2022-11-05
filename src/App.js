import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Movies from "./components/Movies";
import Home from "./components/Home";
import axios from "axios";
import MovieDetails from "./components/MovieDetails";
import MyFooter from "./components/MyFooter";

function App() {
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
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home movies={movies} />} />
				{/* <Route path="/movies" element={<Movies movies={movies} />} /> */}
				<Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
			</Routes>
			<MyFooter />
		</>
	);
}

export default App;
