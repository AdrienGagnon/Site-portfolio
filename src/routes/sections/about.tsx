import { skills } from "~/constants/textes";
import { useLanguage } from "~/contexts/languageContext";
import Reveal from "~/utils/reveal";

import styles from "./about.module.css";

export default function About() {
	const { text } = useLanguage();

	return (
		<section aria-labelledby="about-title" className="section" id="about">
			<div className={`container ${styles.layout}`}>
				<div className={styles.intro}>
					<div className={styles.heading}>
						<Reveal>
							<p className="section-label">{text.about.label}</p>
						</Reveal>

						<Reveal delay={100}>
							<h2 id="about-title">{text.about.title}</h2>
						</Reveal>
					</div>

					<Reveal delay={200}>
						<div className={styles.imageWrapper}>
							<img
								alt={
									text.about.imageAlt ??
									"Portrait d’Adrien Gagnon"
								}
								className={styles.profileImage}
								src="/assets/profileImg.jpg"
							/>
						</div>
					</Reveal>
				</div>

				<div className={styles.content}>
					<div className={styles.description}>
						<Reveal direction="left">
							<p>{text.about.first}</p>
						</Reveal>

						<Reveal delay={100} direction="left">
							<p>{text.about.second}</p>
						</Reveal>
					</div>

					<Reveal delay={200} direction="left">
						<div className={styles.skills}>
							<div className="tag-list">
								{skills.map((skill) => (
									<span className="tag" key={skill}>
										{skill}
									</span>
								))}
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
