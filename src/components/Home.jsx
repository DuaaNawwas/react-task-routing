import React from "react";
import Movies from "./Movies";

export default function Home(props) {
	return <Movies movies={props.movies} />;
}
