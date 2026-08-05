import BackgroundLineItem from "./backgroundLineItem";

import styles from "./experiencesBackground.module.css";

export default function ExperienceBackground() {
	const bottomRightPath =
		"M7.86828,368.91795c40.8316-17.49926,33.963703-62.652068,85.124473-90.557948c57.44644-31.33442,103.937927-10.146559,143.685277-19.319029c26.53047-6.12242,42.54233-60.841613,71.84264-73.050083c21.1944-8.831,53.731048,9.65952,73.653797,0c29.96178-14.526932,18.726953-46.35337,45.882693-60.97568c47.34793-25.49504,118.0601-14.22826,170.85266-25.95994";

	const bottomLeftPath =
		"M-35.68596,51.37024c46.27355,77.12262,98.334068,22.752464,146.535973,22.752464c18.504659,0,39.149986,20.155924,31.563287,40.723194-7.611243,20.633809-25.804452-4.524799-17.05932-10.283635c8.548536-5.629373,31.548366,28.22832,29.921336,51.00683-2.73334,38.26676-30.825696,41.212107-29.238956,60.252967c1.98969,23.87627,56.045815,36.899041,59.678515,62.327961c2.89189,20.24323-48.264705,51.876969-60.360895,68.005209";

	return (
		<div aria-hidden="true" className={styles.wrapper}>
			<BackgroundLineItem
				animatedClassName={styles.bottomRightAnimated}
				className={styles.bottomRight}
				path={bottomRightPath}
				viewBox="0 0 500 300"
			/>

			<BackgroundLineItem
				animatedClassName={styles.bottomLeftAnimated}
				className={styles.bottomLeft}
				path={bottomLeftPath}
				strokeWidth={0.6}
				viewBox="0 0 500 300"
			/>
		</div>
	);
}
