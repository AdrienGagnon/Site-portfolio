import { useId, useState } from "react";

import styles from "./studyCourses.module.css";
import { UnderlinedButton } from "./buttons/underlinedButton";

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

			<UnderlinedButton
				controlsId={coursesId}
				isExpanded={isExpanded}
				onToggle={() => setIsExpanded((currentValue) => !currentValue)}
				showAllLabel={showAllLabel}
				showLessLabel={showLessLabel}
			/>
		</div>
	);
}
