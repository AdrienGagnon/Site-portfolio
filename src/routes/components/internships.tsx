import { useId, useState } from "react";

import styles from "./internships.module.css";

interface Internship {
	period: string;
	role: string;
	company: string;
	site?: string;
	description?: string | string[];
}

interface InternshipsProps {
	internships: Internship[];
	label: string;
	showAllLabel: string;
	showLessLabel: string;
}

export function Internships({
	internships,
	label,
	showAllLabel,
	showLessLabel,
}: InternshipsProps) {
	const [showAll, setShowAll] = useState(false);
	const internshipsId = useId();

	const visibleInternships = showAll ? internships : internships.slice(0, 1);
	const showTimeline = visibleInternships.length > 1;

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>{label}</h4>

			<div className={styles.list} id={internshipsId}>
				{visibleInternships.map((internship) => {
					const descriptions = Array.isArray(internship.description)
						? internship.description
						: internship.description
							? [internship.description]
							: [];

					return (
						<article
							className={`${styles.internship} ${
								showTimeline ? "" : styles.singleInternship
							}`}
							key={`${internship.company}-${internship.role}-${internship.period}`}
						>
							{showTimeline && (
								<div
									aria-hidden="true"
									className={styles.marker}
								/>
							)}

							<div className={styles.content}>
								<p className={styles.period}>
									{internship.period}
								</p>

								<h5 className={styles.role}>
									{internship.role}
								</h5>

								<p className={styles.company}>
									{internship.company}
								</p>

								{internship.site && (
									<p className={styles.site}>
										{internship.site}
									</p>
								)}

								{descriptions.length > 0 && (
									<ul className={styles.description}>
										{descriptions
											.filter(
												(description) =>
													description.trim().length >
													0,
											)
											.map((description) => (
												<li key={description}>
													{description}
												</li>
											))}
									</ul>
								)}
							</div>
						</article>
					);
				})}
			</div>

			{internships.length > 1 && (
				<button
					aria-controls={internshipsId}
					aria-expanded={showAll}
					className={styles.toggleButton}
					onClick={() => setShowAll((current) => !current)}
					type="button"
				>
					{showAll ? showLessLabel : showAllLabel}

					<span
						aria-hidden="true"
						className={`${styles.arrow} ${
							showAll ? styles.arrowOpen : ""
						}`}
					>
						↓
					</span>
				</button>
			)}
		</div>
	);
}
