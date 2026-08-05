import { GITHUB_URL } from "~/constants/constants";
import { useLanguage } from "~/contexts/languageContext";

import styles from "./projects.module.css";
import Reveal from "~/utils/reveal";
import LinkIcon from "../components/icons/linkIcon";
import GithubIcon from "../components/icons/githubIcon";
import GithubIconBorder from "../components/icons/githubIconBorder";
import ProjectsBackground from "../components/background/projectsBackground";

export default function Projects() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="projects-title"
			className={`section ${styles.projectsSection}`}
			id="projects"
		>
			{/* <ProjectsBackground /> */}
			<div className={`container ${styles.container}`}>
				<div className={styles.heading}>
					<div className={styles.headingTitle}>
						<Reveal>
							<p className="section-label">
								{text.projectsSection.label}
							</p>
						</Reveal>
						<Reveal delay={100}>
							<h2 id="projects-title">
								{text.projectsSection.title}
							</h2>
						</Reveal>
					</div>
				</div>

				<div className={styles.grid}>
					{text.projects.map((project) => {
						const projectUrl = project.website ?? project.githubUrl;

						const isWebsite = Boolean(project.website);

						const linkLabel = isWebsite
							? text.projectsSection.viewWebsite
							: text.projectsSection.viewGithub;

						return (
							<Reveal direction="up">
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
										<h3 className={styles.projectTitle}>
											{project.title}
										</h3>

										<p
											className={
												styles.projectDescription
											}
										>
											{project.description}
										</p>

										<ul
											aria-label="Technologies"
											className={`tag-list ${styles.technologies}`}
										>
											{project.technologies.map(
												(technology) => (
													<li
														className="tag"
														key={technology}
													>
														{technology}
													</li>
												),
											)}
										</ul>

										{projectUrl && (
											<a
												aria-label={`${linkLabel}: ${project.title}`}
												className={styles.projectLink}
												href={projectUrl}
												rel="noopener noreferrer"
												target="_blank"
											>
												{linkLabel}

												{isWebsite ? (
													<LinkIcon />
												) : (
													<GithubIcon
														width="1.1em"
														height="1.1em"
														viewBox="0 0 24 24"
													/>
												)}
											</a>
										)}
									</div>
								</article>
							</Reveal>
						);
					})}
				</div>
				<Reveal direction="up">
					<div className={styles.footer}>
						<a
							className={`button button-primary ${styles.allProjectsButton}`}
							href={GITHUB_URL}
							rel="noopener noreferrer"
							target="_blank"
						>
							{text.projectsSection.viewAllProjects}
							<GithubIconBorder
								width="1.5em"
								height="1.5em"
								viewBox="-2 -2 24 24"
							/>
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
