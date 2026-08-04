import {
	EMAIL_ADDRESS,
	GITHUB_URL,
	ICODETHIS_URL,
	LINKEDIN_ADDRESS,
} from "~/constants/constants";
import { useLanguage } from "~/contexts/languageContext";

import emailIcon from "/assets/mail.png";
import githubIcon from "/assets/github.png";
import icodethisIcon from "/assets/icodethis.png";
import linkedinIcon from "/assets/linkedin.png";
import Reveal from "~/utils/reveal";

import styles from "./contact.module.css";

export default function Contact() {
	const { text } = useLanguage();

	const emailSubject = encodeURIComponent(
		text.contact.emailSubject ?? "Contact depuis votre portfolio",
	);

	const emailBody = encodeURIComponent(
		text.contact.emailBody ??
			"Bonjour Adrien,\n\nJe vous contacte concernant...\n\n",
	);

	const emailLink = `mailto:${EMAIL_ADDRESS}?subject=${emailSubject}&body=${emailBody}`;

	return (
		<section
			aria-labelledby="contact-title"
			className={`section `}
			id="contact"
		>
			<div className={`container ${styles.layout}`}>
				<div className={styles.heading}>
					<Reveal>
						<p className="section-label">{text.contact.label}</p>
					</Reveal>
					<Reveal delay={100}>
						<h2 id="contact-title">{text.contact.title}</h2>
					</Reveal>
					<Reveal delay={150}>
						<p className={styles.description}>
							{text.contact.description}
						</p>
					</Reveal>
				</div>
				<Reveal direction="up">
					<div className={styles.contactCard}>
						<div className={styles.emailBlock}>
							<p className={styles.emailLabel}>
								{text.contact.emailLabel ?? "Écrivez-moi"}
							</p>

							<a
								aria-label={`${text.contact.emailButton}: ${EMAIL_ADDRESS}`}
								className={`button button-primary ${styles.emailButton}`}
								href={emailLink}
							>
								<img
									alt=""
									aria-hidden="true"
									className={styles.buttonIcon}
									src={emailIcon}
								/>

								<span>{EMAIL_ADDRESS}</span>
							</a>
						</div>

						<div className={styles.divider} />

						<div>
							<p className={styles.resumeLabel}>
								{text.contact.cv ?? "Voir mon CV"}
							</p>
							<ul className={styles.resumeList}>
								<li>
									<a
										className="button button-secondary"
										href="/assets/cv-adrien-gagnon-fr.pdf"
										rel="noopener noreferrer"
										target="_blank"
									>
										{text.hero.downloadResumeFr}
									</a>
								</li>
								<li>
									<a
										className="button button-secondary"
										href="/assets/cv-adrien-gagnon-en.pdf"
										rel="noopener noreferrer"
										target="_blank"
									>
										{text.hero.downloadResumeEn}
									</a>
								</li>{" "}
							</ul>{" "}
						</div>

						<div className={styles.divider} />

						<div>
							<p className={styles.socialLabel}>
								{text.contact.socialLabel ??
									"Retrouvez-moi également sur"}
							</p>

							<ul className={styles.socialLinks}>
								<li>
									<a
										href={GITHUB_URL}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											alt=""
											aria-hidden="true"
											src={githubIcon}
										/>

										<span>
											<strong>GitHub</strong>
											<small>
												{text.contact
													.githubDescription ??
													"Projets et code source"}
											</small>
										</span>

										<div className={styles.externalArrow}>
											<svg viewBox="0 0 16 16">
												<path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z" />
												<path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" />
												<path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" />
											</svg>
										</div>

										<span className="visually-hidden">
											{" "}
											— opens in a new tab
										</span>
									</a>
								</li>

								<li>
									<a
										href={LINKEDIN_ADDRESS}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											alt=""
											aria-hidden="true"
											src={linkedinIcon}
										/>

										<span>
											<strong>LinkedIn</strong>
											<small>
												{text.contact
													.linkedinDescription ??
													"Parcours professionnel"}
											</small>
										</span>

										<div className={styles.externalArrow}>
											<svg viewBox="0 0 16 16">
												<path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z" />
												<path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" />
												<path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" />
											</svg>
										</div>

										<span className="visually-hidden">
											{" "}
											— opens in a new tab
										</span>
									</a>
								</li>

								<li>
									<a
										href={ICODETHIS_URL}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											alt=""
											aria-hidden="true"
											src={icodethisIcon}
										/>

										<span>
											<strong>iCodeThis</strong>
											<small>
												{text.contact
													.icodethisDescription ??
													"Défis et interfaces"}
											</small>
										</span>

										<div className={styles.externalArrow}>
											<svg viewBox="0 0 16 16">
												<path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z" />
												<path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" />
												<path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" />
											</svg>
										</div>

										<span className="visually-hidden">
											{" "}
											— opens in a new tab
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
