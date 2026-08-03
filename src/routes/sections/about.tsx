import { skills } from "~/constants/textes";
import { useLanguage } from "~/contexts/languageContext";

import styles from "./about.module.css";

export default function About() {
	const { text } = useLanguage();

	return (
		<section aria-labelledby="about-title" className="section" id="about">
			<div className={`container ${styles.layout}`}>
				<div>
					<p className="section-label">{text.about.label}</p>

					<h2 id="about-title">{text.about.title}</h2>
				</div>

				<div className={styles.content}>
					<p>{text.about.first}</p>
					<p>{text.about.second}</p>

					<div className="tag-list">
						{skills.map((skill) => (
							<span className="tag" key={skill}>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
