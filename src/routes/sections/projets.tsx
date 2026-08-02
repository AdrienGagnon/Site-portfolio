import { useLanguage } from "~/contexts/languageContext";
import { GITHUB_URL } from "~/constants/constants";

export default function Projects() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="projects-title"
			className="section"
			id="projects"
		>
			<div className="container">
				<div className="projects-heading">
					<div>
						<p className="section-label">
							{text.projectsSection.label}
						</p>

						<h2 id="projects-title">
							{text.projectsSection.title}
						</h2>
					</div>

					<p>{text.projectsSection.description}</p>
				</div>

				<div className="projects-grid">
					{text.projects.map((project) => (
						<article className="project-card" key={project.title}>
							<div className="project-image-wrapper">
								<img
									alt={project.imageAlt}
									className="project-image"
									loading="lazy"
									src={project.image}
								/>
							</div>

							<div className="project-content">
								<h3>{project.title}</h3>

								<p>{project.description}</p>

								<ul
									aria-label="Technologies"
									className="project-technologies"
								>
									{project.technologies.map((technology) => (
										<li key={technology}>{technology}</li>
									))}
								</ul>

								{project.githubUrl && (
									<a
										className="project-link"
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

				<div className="projects-footer">
					<a
						className="button button-primary"
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
