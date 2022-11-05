import { Button, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<Navbar fluid={true} rounded={true}>
			<Navbar.Brand>
				<img
					src="https://www.clipartmax.com/png/middle/2-26560_popcorn-clipart-free-clip-art-images-image-2-7-cliparting-popcorn-container.png"
					className="mr-3 h-6 sm:h-9"
					alt="Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Movies
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Button>Get started</Button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<NavLink to="/">Home</NavLink>
				{/* <NavLink to="/movies">Movies</NavLink> */}
			</Navbar.Collapse>
		</Navbar>
	);
}
