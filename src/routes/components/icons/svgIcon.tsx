import type { CSSProperties, ReactNode, SVGProps } from "react";

import styles from "./svgIcon.module.css";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children">;

type SvgIconProps = IconProps & {
	children: ReactNode;
	viewBox?: string;
};

export default function SvgIcon({
	children,
	className = "",
	viewBox = "0 0 16 16",
	width = "1em",
	height = "1em",
	...props
}: SvgIconProps) {
	const containerStyle: CSSProperties = {
		width,
		height,
	};

	return (
		<span aria-hidden="true" className={styles.icon} style={containerStyle}>
			<svg
				className={`${styles.svg} ${className}`}
				focusable="false"
				height="100%"
				viewBox={viewBox}
				width="100%"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				{children}
			</svg>
		</span>
	);
}
