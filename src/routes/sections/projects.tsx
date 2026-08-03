import { GITHUB_URL } from "~/constants/constants";
import { useLanguage } from "~/contexts/languageContext";

import styles from "./projects.module.css";

export default function Projects() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="projects-title"
			className={`section ${styles.projectsSection}`}
			id="projects"
		>
			<div className={`container ${styles.container}`}>
				<div className={styles.heading}>
					<div className={styles.headingTitle}>
						<p className="section-label">
							{text.projectsSection.label}
						</p>

						<h2 id="projects-title">
							{text.projectsSection.title}
						</h2>
					</div>

					<p className={styles.headingDescription}>
						{text.projectsSection.description}
					</p>
				</div>

				<div className={styles.grid}>
					{text.projects.map((project) => (
						<article
							className={styles.projectCard}
							key={project.title}
						>
							<div className={styles.imageWrapper}>
								<img
									alt={project.imageAlt}
									className={styles.projectImage}
									loading="lazy"
									src={project.image}
								/>

								<div
									aria-hidden="true"
									className={styles.imageOverlay}
								/>
							</div>

							<div className={styles.projectContent}>
								<div className={styles.projectHeader}>
									<h3>{project.title}</h3>

									{project.githubUrl && (
										<a
											aria-label={`${text.projectsSection.viewProject}: ${project.title}`}
											className={styles.iconLink}
											href={project.githubUrl}
											rel="noopener noreferrer"
											target="_blank"
										>
											<span aria-hidden="true">↗</span>
										</a>
									)}
								</div>

								<p className={styles.projectDescription}>
									{project.description}
								</p>

								<ul
									aria-label="Technologies"
									className={styles.technologies}
								>
									{project.technologies.map((technology) => (
										<li key={technology}>{technology}</li>
									))}
								</ul>

								{project.githubUrl && (
									<a
										className={styles.projectLink}
										href={project.githubUrl}
										rel="noopener noreferrer"
										target="_blank"
									>
										{text.projectsSection.viewProject}

										<span aria-hidden="true">↗</span>
									</a>
								)}
							</div>
						</article>
					))}
				</div>

				<div className={styles.footer}>
					<a
						className={`button button-primary ${styles.allProjectsButton}`}
						href={GITHUB_URL}
						rel="noopener noreferrer"
						target="_blank"
					>
						{text.projectsSection.viewAllProjects}

						<span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>
		</section>
	);
}
