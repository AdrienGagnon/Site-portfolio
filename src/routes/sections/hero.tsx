import { useLanguage } from "~/contexts/languageContext";

import styles from "./hero.module.css";

export default function Hero() {
	const { text } = useLanguage();

	return (
		<section aria-labelledby="hero-title" className={styles.hero} id="home">
			<div className="container">
				<p className="section-label">{text.hero.eyebrow}</p>

				<h1 className={styles.title} id="hero-title">
					Adrien Gagnon
				</h1>

				<h2 className={styles.jobTitle}>{text.hero.jobTitle}</h2>

				<p className={styles.description}>{text.hero.description}</p>

				<div className={styles.actions}>
					<a className="button button-primary" href="#about">
						{text.hero.aboutButton}
					</a>

					<a className="button button-secondary" href="#contact">
						{text.hero.contactButton}
					</a>
				</div>
			</div>
		</section>
	);
}
