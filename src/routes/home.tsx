export function meta() {
	return [
		{ title: "Adrien Gagnon | Portfolio" },
		{
			name: "description",
			content:
				"Portfolio professionnel de Adrien Gagnon, développeur logiciel.",
		},
	];
}

const experiences = [
	{
		period: "Janvier 2026 — Mai 2026",
		role: "Développeur logiciel",
		company: "M5 Technologies",
		description:
			"Décris brièvement tes responsabilités, les technologies utilisées et ce que tu as accompli.",
	},
];

const skills = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Node.js",
	"Git",
];

export default function Home() {
	return (
		<>
			<header className="header">
				<nav className="navigation container">
					<a className="logo" href="#accueil">
						PN.
					</a>

					<div className="navigation-links">
						<a href="#a-propos">À propos</a>
						<a href="#experience">Expérience</a>
						<a href="#contact">Contact</a>
					</div>
				</nav>
			</header>

			<main>
				<section className="hero container" id="accueil">
					<p className="eyebrow">Bonjour, je suis</p>

					<h1>Adrien Gagnon</h1>

					<h2>Développeur logiciel</h2>

					<p className="hero-description">
						Je conçois des applications web simples, accessibles et
						efficaces. Je m’intéresse particulièrement au
						développement frontend, à React et aux nouvelles
						technologies.
					</p>

					<div className="hero-actions">
						<a className="button button-primary" href="#experience">
							Voir mon expérience
						</a>

						<a className="button button-secondary" href="#contact">
							Me contacter
						</a>
					</div>
				</section>

				<section className="section section-alt" id="a-propos">
					<div className="container about">
						<div>
							<p className="section-label">À propos</p>
							<h2>Qui suis-je?</h2>
						</div>

						<div className="about-content">
							<p>
								Développeur informatique originaire de
								Sherbrooke et récemment diplômé d’une maîtrise
								en informatique, je souhaite relever de nouveaux
								défis. Curieux, efficace et reconnu pour mon
								esprit d’équipe, je m’adapte rapidement à de
								nouveaux environnements et j’aborde les
								problèmes complexes avec rigueur. Mon parcours
								m’a permis d’acquérir une solide expérience,
								autant en recherche qu’en milieu industriel.
							</p>

							<p>
								Je cherche constamment à développer mes
								compétences, à découvrir de nouvelles
								technologies et à participer à des projets
								stimulants.
							</p>

							<div className="skills">
								{skills.map((skill) => (
									<span className="skill" key={skill}>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="section container" id="experience">
					<p className="section-label">Mon parcours</p>
					<h2>Expérience professionnelle</h2>

					<div className="experience-list">
						{experiences.map((experience) => (
							<article
								className="experience-card"
								key={`${experience.company}-${experience.role}`}
							>
								<p className="experience-period">
									{experience.period}
								</p>

								<div>
									<h3>{experience.role}</h3>
									<p className="experience-company">
										{experience.company}
									</p>
									<p>{experience.description}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="section section-alt" id="contact">
					<div className="container contact">
						<p className="section-label">Contact</p>
						<h2>Travaillons ensemble</h2>

						<p>
							Une question, une proposition ou une occasion
							professionnelle? Écris-moi directement par courriel.
						</p>

						<a
							className="button button-primary"
							href="mailto:prenom.nom@email.com"
						>
							prenom.nom@email.com
						</a>

						<div className="social-links">
							<a
								href="https://github.com/ton-identifiant"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>

							<a
								href="https://www.linkedin.com/in/ton-identifiant"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="footer">
				<div className="container">
					<p>© {new Date().getFullYear()} Prénom Nom</p>
				</div>
			</footer>
		</>
	);
}
