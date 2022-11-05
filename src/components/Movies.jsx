import React from "react";
import Movie from "./Movie";

export default function Movies(props) {
	return (
		<>
			<div className="flex flex-wrap gap-10 my-20 justify-center">
				{props.movies.map((movie) => {
					return <Movie movie={movie} key={movie.id} IMGPATH={props.IMGPATH} />;
				})}
			</div>
		</>
	);
}
