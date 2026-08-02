import { LanguageProvider } from "~/contexts/languageContext";

import About from "./sections/about";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Education from "./sections/education";
import Projets from "./sections/projets";

export function meta() {
	return [
		{
			title: "Adrien Gagnon | Portfolio",
		},
		{
			name: "description",
			content:
				"Portfolio professionnel d’Adrien Gagnon, développeur logiciel.",
		},
	];
}

export default function Home() {
	return (
		<LanguageProvider>
			<Header />

			<main>
				<Hero />
				<About />
				<Experience />
				<Education />
				<Projets />
				<Contact />
			</main>

			<Footer />
		</LanguageProvider>
	);
}
