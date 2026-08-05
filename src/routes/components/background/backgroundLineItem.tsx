import type { SVGProps } from "react";

import styles from "./backgroundLineItem.module.css";

type BackgroundLineItemProps = Omit<
	SVGProps<SVGSVGElement>,
	"children" | "strokeWidth"
> & {
	path: string;
	animatedClassName?: string;
	strokeWidth?: number;
};

export default function BackgroundLineItem({
	path,
	animatedClassName = "",
	className = "",
	strokeWidth = 0.8,
	viewBox = "0 0 500 300",
	...svgProps
}: BackgroundLineItemProps) {
	return (
		<svg
			aria-hidden="true"
			className={`${styles.line} ${className}`}
			focusable="false"
			preserveAspectRatio="xMidYMid meet"
			shapeRendering="geometricPrecision"
			viewBox={viewBox}
			xmlns="http://www.w3.org/2000/svg"
			{...svgProps}
		>
			<path
				className={styles.basePath}
				d={path}
				strokeWidth={strokeWidth}
			/>

			<path
				className={`${styles.animatedPath} ${animatedClassName}`}
				d={path}
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
}
