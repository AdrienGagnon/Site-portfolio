import styles from "./underlinedButton.module.css";

type UnderlinedButtonProps = {
	controlsId: string;
	isExpanded: boolean;
	showAllLabel: string;
	showLessLabel: string;
	onToggle: () => void;
};

export function UnderlinedButton({
	controlsId,
	isExpanded,
	showAllLabel,
	showLessLabel,
	onToggle,
}: UnderlinedButtonProps) {
	return (
		<button
			aria-controls={controlsId}
			aria-expanded={isExpanded}
			className={styles.toggleButton}
			onClick={onToggle}
			type="button"
		>
			{isExpanded ? showLessLabel : showAllLabel}
		</button>
	);
}
