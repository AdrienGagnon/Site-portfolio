import { useLanguage } from "~/contexts/languageContext";

import styles from "./hero.module.css";
import HeaderBackground from "~/routes/components/background/HeaderBackground";
import Reveal from "~/utils/reveal";

export default function Hero() {
	const { text } = useLanguage();

	return (
		<section aria-labelledby="hero-title" className={styles.hero} id="home">
			<HeaderBackground />

			<div className="container">
				<Reveal>
					<p className="section-label">{text.hero.eyebrow}</p>
				</Reveal>

				<Reveal delay={100}>
					<h1 className={styles.title} id="hero-title">
						Adrien Gagnon
					</h1>
				</Reveal>
				<Reveal delay={150}>
					<h2 className={styles.jobTitle}>{text.hero.jobTitle}</h2>
				</Reveal>
				<Reveal delay={200}>
					<p className={styles.description}>
						{text.hero.description}
					</p>
				</Reveal>

				<div className={styles.actions}>
					<Reveal delay={200} direction="up">
						<a className="button button-invert" href="#contact">
							{text.hero.resumeButton}
						</a>
					</Reveal>
					<Reveal delay={250} direction="up">
						<a className="button button-primary" href="#about">
							{text.hero.aboutButton}
						</a>
					</Reveal>
					<Reveal delay={300} direction="up">
						<a className="button button-secondary" href="#contact">
							{text.hero.contactButton}
						</a>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
