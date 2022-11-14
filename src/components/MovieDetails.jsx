import { Rating } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/result-context";

export default function MovieDetails() {
	const { id } = useParams();
	const { movies } = useContext(MovieContext);
	const movie = movies.find((m) => id == m.id);
	const IMGPATH = "https://image.tmdb.org/t/p/w1280";
	return (
		<section>
			<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
					<div className="relative z-10 lg:py-16">
						<div className="relative h-64 sm:h-80 lg:h-full">
							<img
								alt="House"
								src={IMGPATH + movie.poster_path}
								className="absolute inset-0 h-full w-full object-cover"
							/>
						</div>
					</div>

					<div className="relative flex items-center bg-gray-100">
						<span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

						<div className="p-8 sm:p-16 lg:p-24">
							<h2 className="text-2xl font-bold sm:text-3xl">{movie.title}</h2>

							<p className="mt-4 text-gray-600">{movie.overview}</p>
							<p className="mt-4 text-gray-600">
								Movie Released in : {movie.release_date}
							</p>
							<div className="mt-4 ">
								<Rating>
									<Rating.Star />
									<p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
										{movie.vote_average}
									</p>
									<span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
									<a
										href="#"
										className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
									>
										{movie.vote_count} reviews
									</a>
								</Rating>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
