import { Card } from "../components/card";
import { useLanguage } from "~/contexts/languageContext";

import styles from "./experience.module.css";

export default function Experience() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="experience-title"
			className="section"
			id="experience"
		>
			<div className="container">
				<p className="section-label">{text.career.label}</p>

				<h2 id="experience-title">{text.career.experienceTitle}</h2>

				<div className={styles.list}>
					{text.experiences.map((experience) => (
						<Card
							className={styles.experienceCard}
							key={`${experience.company}-${experience.role}-${experience.period}`}
						>
							<p className={styles.period}>{experience.period}</p>

							<div>
								<h3 className={styles.role}>
									{experience.role}
								</h3>

								<p className={styles.company}>
									{experience.company}
								</p>

								<ul className={styles.description}>
									{experience.description.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
