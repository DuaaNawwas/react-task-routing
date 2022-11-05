import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Movie(props) {
	const IMGPATH = "https://image.tmdb.org/t/p/w1280";
	return (
		<div className="max-w-sm w-60">
			<Link to={`/movies/${props.movie.id}`}>
				<Card imgSrc={IMGPATH + props.movie.poster_path}>
					<h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
						{props.movie.title}
					</h5>
					{/* <p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p> */}
				</Card>
			</Link>
		</div>
	);
}
