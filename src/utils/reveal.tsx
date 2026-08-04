import {
	type CSSProperties,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";

import styles from "./reveal.module.css";

interface RevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
	once?: boolean;
}

export default function Reveal({
	children,
	className = "",
	delay = 0,
	direction = "right",
	once = true,
}: RevealProps) {
	const elementRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = elementRef.current;

		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);

					if (once) {
						observer.unobserve(element);
					}
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{
				threshold: 0.15,
				rootMargin: "0px 0px -8% 0px",
			},
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [once]);

	const customProperties = {
		"--reveal-delay": `${delay}ms`,
	} as CSSProperties;

	return (
		<div
			className={`
				${styles.reveal}
				${styles[direction]}
				${isVisible ? styles.visible : ""}
				${className}
			`}
			ref={elementRef}
			style={customProperties}
		>
			{children}
		</div>
	);
}
