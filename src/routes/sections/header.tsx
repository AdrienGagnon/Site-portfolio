import { useLanguage } from "~/contexts/languageContext";

import styles from "./header.module.css";

export default function Header() {
	const { language, text, changeLanguage } = useLanguage();

	return (
		<header className={styles.header}>
			<nav className={`container ${styles.navigation}`}>
				<a className={styles.logo} href="#accueil">
					Adrien Gagnon
				</a>

				<div className="navigation-right">
					<div className={styles.navigationLinks}>
						<a href="#about">{text.navigation.about}</a>

						<a href="#experience">{text.navigation.experience}</a>

						<a href="#education">{text.navigation.education}</a>

						<a href="#projects">{text.navigation.projects}</a>

						<a href="#contact">{text.navigation.contact}</a>
					</div>

					<div
						aria-label={text.navigation.languageLabel}
						className="language-switch"
						role="group"
					>
						<button
							aria-label="Afficher le site en français"
							aria-pressed={language === "fr"}
							className={language === "fr" ? "active" : ""}
							lang="fr"
							onClick={() => changeLanguage("fr")}
							type="button"
						>
							FR
						</button>

						<button
							aria-label="Display the website in English"
							aria-pressed={language === "en"}
							className={language === "en" ? "active" : ""}
							lang="en"
							onClick={() => changeLanguage("en")}
							type="button"
						>
							EN
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
