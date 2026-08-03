import { useState } from "react";
import { useLanguage } from "~/contexts/languageContext";

import styles from "./header.module.css";

export default function Header() {
	const { language, text, changeLanguage } = useLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsMenuOpen((currentValue) => !currentValue);
	};

	return (
		<header className={styles.header}>
			<nav className={`container ${styles.navigation}`}>
				<a className={styles.logo} href="#home" onClick={closeMenu}>
					Adrien Gagnon
				</a>

				<button
					aria-controls="main-navigation"
					aria-expanded={isMenuOpen}
					aria-label={
						isMenuOpen
							? "Fermer le menu de navigation"
							: "Ouvrir le menu de navigation"
					}
					className={`${styles.menuButton} ${
						isMenuOpen ? styles.menuButtonOpen : ""
					}`}
					onClick={toggleMenu}
					type="button"
				>
					<span />
					<span />
					<span />
				</button>

				<div
					className={`${styles.navigationRight} ${
						isMenuOpen ? styles.navigationRightOpen : ""
					}`}
					id="main-navigation"
				>
					<div className={styles.navigationLinks}>
						<a href="#about" onClick={closeMenu}>
							{text.navigation.about}
						</a>

						<a href="#experience" onClick={closeMenu}>
							{text.navigation.experience}
						</a>

						<a href="#education" onClick={closeMenu}>
							{text.navigation.education}
						</a>

						<a href="#projects" onClick={closeMenu}>
							{text.navigation.projects}
						</a>

						<a href="#contact" onClick={closeMenu}>
							{text.navigation.contact}
						</a>
					</div>

					<div
						aria-label={text.navigation.languageLabel}
						className={styles.languageSwitch}
						role="group"
					>
						<button
							aria-label="Afficher le site en français"
							aria-pressed={language === "fr"}
							className={
								language === "fr" ? styles.activeLanguage : ""
							}
							lang="fr"
							onClick={() => {
								changeLanguage("fr");
								closeMenu();
							}}
							type="button"
						>
							FR
						</button>

						<button
							aria-label="Display the website in English"
							aria-pressed={language === "en"}
							className={
								language === "en" ? styles.activeLanguage : ""
							}
							lang="en"
							onClick={() => {
								changeLanguage("en");
								closeMenu();
							}}
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
