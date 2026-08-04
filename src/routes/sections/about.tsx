import { skills } from "~/constants/textes";
import { useLanguage } from "~/contexts/languageContext";

import styles from "./about.module.css";
import Reveal from "~/utils/reveal";

export default function About() {
	const { text } = useLanguage();

	return (
		<section aria-labelledby="about-title" className="section" id="about">
			<div className={`container ${styles.layout}`}>
				<div>
					<Reveal>
						<p className="section-label">{text.about.label}</p>
					</Reveal>
					<Reveal delay={100}>
						<h2 id="about-title">{text.about.title}</h2>
					</Reveal>
				</div>

				<div className={styles.content}>
					<Reveal direction="left">
						<p>{text.about.first}</p>
					</Reveal>
					<Reveal delay={100} direction="left">
						<p>{text.about.second}</p>
					</Reveal>
					<Reveal delay={200} direction="left">
						<div className="tag-list">
							{skills.map((skill) => (
								<span className="tag" key={skill}>
									{skill}
								</span>
							))}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
