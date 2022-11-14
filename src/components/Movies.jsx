import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context/result-context";
import Movie from "./Movie";

export default function Movies() {
	const { movies } = useContext(MovieContext);
	return (
		<>
			<div className="flex flex-wrap gap-10 my-20 justify-center">
				{movies.map((movie) => {
					return <Movie movie={movie} key={movie.id} />;
				})}
			</div>
		</>
	);
}
