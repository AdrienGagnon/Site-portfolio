import { useLanguage } from "~/contexts/languageContext";
import {
	EMAIL_ADDRESS,
	GITHUB_URL,
	LINKEDIN_ADDRESS,
} from "~/constants/constants";

export default function Contact() {
	const { text } = useLanguage();

	return (
		<section
			aria-labelledby="contact-title"
			className="section"
			id="contact"
		>
			<div className="container contact">
				<p className="section-label">{text.contact.label}</p>

				<h2 id="contact-title">{text.contact.title}</h2>

				<p>{text.contact.description}</p>

				<a
					aria-label={`${text.contact.emailButton}: ${EMAIL_ADDRESS}`}
					className="button button-primary"
					href={`mailto:${EMAIL_ADDRESS}`}
				>
					{EMAIL_ADDRESS}
				</a>

				<div className="social-links">
					<a
						href={GITHUB_URL}
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub
						<span className="visually-hidden">
							{" "}
							— opens in a new tab
						</span>
					</a>

					<a
						href={LINKEDIN_ADDRESS}
						rel="noopener noreferrer"
						target="_blank"
					>
						LinkedIn
						<span className="visually-hidden">
							{" "}
							— opens in a new tab
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
