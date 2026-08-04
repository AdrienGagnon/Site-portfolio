import { Card } from "../components/card";
import { StudyCourses } from "../components/studyCourses";
import { useLanguage } from "~/contexts/languageContext";

import styles from "./education.module.css";
import { Internships } from "../components/internships";
import Reveal from "~/utils/reveal";

export default function Education() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="education-title"
			className="section"
			id="education"
		>
			<div className="container">
				<Reveal>
					<p className="section-label">{text.education.label}</p>
				</Reveal>
				<Reveal delay={100}>
					<h2 id="education-title">{text.education.studiesTitle}</h2>
				</Reveal>

				<div className={styles.list}>
					{text.studies.map((study) => (
						<Reveal direction="up">
							<Card
								className={styles.educationCard}
								key={`${study.location}-${study.type}-${study.period}`}
							>
								<p className={styles.period}>{study.period}</p>

								<div>
									<h3 className={styles.degree}>
										{study.type}
									</h3>

									<p className={styles.location}>
										{study.location}
									</p>

									<p className={styles.description}>
										{study.description}
									</p>

									{study.internships &&
										study.internships.length > 0 && (
											<Internships
												internships={study.internships}
												label={
													text.education.internships
												}
												showAllLabel={
													text.education
														.showAllInternships
												}
												showLessLabel={
													text.education
														.showLessInternships
												}
											/>
										)}

									{study.classes &&
										study.classes.length > 0 && (
											<StudyCourses
												courses={study.classes}
												label={
													text.education
														.relevantClasses
												}
												showAllLabel={
													text.education
														.showAllClasses
												}
												showLessLabel={
													text.education
														.showLessClasses
												}
											/>
										)}
								</div>
							</Card>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
