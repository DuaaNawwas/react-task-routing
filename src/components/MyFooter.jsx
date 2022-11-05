import { Footer } from "flowbite-react";
import React from "react";

export default function MyFooter() {
	return (
		<Footer container={true}>
			<div className="w-full">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div>
						<Footer.Brand
							href="https://flowbite.com"
							src="https://www.clipartmax.com/png/middle/2-26560_popcorn-clipart-free-clip-art-images-image-2-7-cliparting-popcorn-container.png"
							alt="Flowbite Logo"
							name="Movies"
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="about" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="#">Movies</Footer.Link>
								<Footer.Link href="#">Tailwind CSS</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Follow us" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="#">Github</Footer.Link>
								<Footer.Link href="#">Discord</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Legal" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="#">Privacy Policy</Footer.Link>
								<Footer.Link href="#">Terms & Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
			</div>
		</Footer>
	);
}
