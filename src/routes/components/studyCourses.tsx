import { useId, useState } from "react";

import styles from "./studyCourses.module.css";

type StudyCoursesProps = {
	courses: string[];
	label: string;
	showAllLabel: string;
	showLessLabel: string;
};

export function StudyCourses({
	courses,
	label,
	showAllLabel,
	showLessLabel,
}: StudyCoursesProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const coursesId = useId();

	return (
		<div className={styles.studyClasses}>
			<p className={styles.studyClassesLabel}>{label}</p>

			<div
				className={[
					"tag-list",
					styles.skillsCollapsible,
					isExpanded ? styles.expanded : "",
				]
					.filter(Boolean)
					.join(" ")}
				id={coursesId}
			>
				{courses.map((course) => (
					<span className="tag" key={course}>
						{course}
					</span>
				))}
			</div>

			<button
				aria-controls={coursesId}
				aria-expanded={isExpanded}
				className={styles.studyClassesToggle}
				onClick={() => setIsExpanded((current) => !current)}
				type="button"
			>
				{isExpanded ? showLessLabel : showAllLabel}
			</button>
		</div>
	);
}
