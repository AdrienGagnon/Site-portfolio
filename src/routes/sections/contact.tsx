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

import styles from "./contact.module.css";

export default function Contact() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="contact-title"
			className={`section `}
			id="contact"
		>
			<div className={`container ${styles.layout}`}>
				<div className={styles.heading}>
					<p className="section-label">{text.contact.label}</p>

					<h2 id="contact-title">{text.contact.title}</h2>

					<p className={styles.description}>
						{text.contact.description}
					</p>
				</div>

				<div className={styles.contactCard}>
					<div className={styles.emailBlock}>
						<p className={styles.emailLabel}>
							{text.contact.emailLabel ?? "Écrivez-moi"}
						</p>

						<a
							aria-label={`${text.contact.emailButton}: ${EMAIL_ADDRESS}`}
							className={`button button-primary ${styles.emailButton}`}
							href={`mailto:${EMAIL_ADDRESS}`}
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
											{text.contact.githubDescription ??
												"Projets et code source"}
										</small>
									</span>

									<span
										aria-hidden="true"
										className={styles.externalArrow}
									>
										↗
									</span>

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
											{text.contact.linkedinDescription ??
												"Parcours professionnel"}
										</small>
									</span>

									<span
										aria-hidden="true"
										className={styles.externalArrow}
									>
										↗
									</span>

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

									<span
										aria-hidden="true"
										className={styles.externalArrow}
									>
										↗
									</span>

									<span className="visually-hidden">
										{" "}
										— opens in a new tab
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
