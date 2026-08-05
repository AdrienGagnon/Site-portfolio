import {
	EMAIL_ADDRESS,
	GITHUB_URL,
	ICODETHIS_URL,
	LINKEDIN_ADDRESS,
} from "~/constants/constants";
import { useLanguage } from "~/contexts/languageContext";

import LinkIcon from "../components/icons/linkIcon";

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

	const socialLinks = [
		{
			name: "GitHub",
			url: GITHUB_URL,
			icon: githubIcon,
			description:
				text.contact.githubDescription ?? "Projets et code source",
		},
		{
			name: "LinkedIn",
			url: LINKEDIN_ADDRESS,
			icon: linkedinIcon,
			description:
				text.contact.linkedinDescription ?? "Parcours professionnel",
		},
		{
			name: "iCodeThis",
			url: ICODETHIS_URL,
			icon: icodethisIcon,
			description:
				text.contact.icodethisDescription ?? "Défis et interfaces",
		},
	];

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
								{text.contact.emailLabel}
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
								{text.contact.socialLabel}
							</p>

							<ul className={styles.socialLinks}>
								{socialLinks.map((socialLink) => (
									<li key={socialLink.name}>
										<a
											href={socialLink.url}
											rel="noopener noreferrer"
											target="_blank"
										>
											<img
												alt=""
												aria-hidden="true"
												src={socialLink.icon}
											/>

											<span>
												<strong>
													{socialLink.name}
												</strong>
												<small>
													{socialLink.description}
												</small>
											</span>

											<LinkIcon
												className={styles.externalArrow}
												height="1rem"
												width="1rem"
											/>

											<span className="visually-hidden">
												{" "}
												—{" "}
												{text.contact.opensInNewTab ??
													"opens in a new tab"}
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
