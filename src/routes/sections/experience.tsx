import { Card } from "../components/card";
import { useLanguage } from "~/contexts/languageContext";
import Reveal from "~/utils/reveal";

import styles from "./experience.module.css";
import LinkIcon from "../components/icons/linkIcon";

export default function Experience() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="experience-title"
			className="section"
			id="experience"
		>
			<div className="container">
				<Reveal>
					<p className="section-label">{text.career.label}</p>
				</Reveal>
				<Reveal delay={100}>
					<h2 id="experience-title">{text.career.experienceTitle}</h2>
				</Reveal>
				<div className={styles.list}>
					{text.experiences.map((experience) => (
						<Reveal delay={150} direction="up">
							<Card
								className={styles.experienceCard}
								key={`${experience.company}-${experience.role}-${experience.period}`}
							>
								<p className={styles.period}>
									{experience.period}
								</p>

								<div>
									<h3 className={styles.role}>
										{experience.role}
									</h3>

									<a
										aria-label={`${experience.company} — ouvrir le site`}
										className={styles.company}
										href={experience.link}
										rel="noopener noreferrer"
										target="_blank"
									>
										<span>{experience.company}</span>
										<LinkIcon />
									</a>

									<ul className={styles.description}>
										{experience.description.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							</Card>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
