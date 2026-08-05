import BackgroundLineItem from "./backgroundLineItem";

import styles from "./heroBackground.module.css";

export default function HeroBackground() {
	const bottomLeftPath =
		"M-29.22277,6.64735c38.01389,0,60.89897,16.40309,64.42816,55.22414c1.24727,13.71996-2.72958,28.88487,3.06801,41.92944c9.90033,22.27574,28.29223,25.7886,36.81609,54.20147c4.81163,16.03877-6.55174,34.45063,1.02267,49.59946c8.79694,17.59389,26.69629,19.93339,37.83876,34.25942c19.84929,25.52051,20.96472,58.31373,20.96472,89.48355";

	const bottomRightPath =
		"M337.91546,208.11318c-31.76436,0-106.13985-17.677-132.43566-7.15868-33.96941,13.58776-2.10395,37.64406-24.54406,50.11079-22.25057,12.36143-62.384507,4.397975-86.926877,11.760685-10.48387,3.14516-13.426406,20.774909-23.010056,25.566729C46.228887,300.777664,20.52211,301.8,-5.70139,309.86877c-37.24587,11.46026-76.98721,15.90879-115.05028,23.52139";

	const topRightPath =
		"M92.47789,-7.25219C57.58008,6.70693,32.14667,49.91904,69.35983,78.8626c26.23432,20.40447,72.71886,20.80626,104.60924,20.80626c30.14677,0,63.95729-1.31279,93.05021-9.24722c33.59217-9.1615,67.31506-20.31663,102.87538-16.7606c35.32699,3.5327,98.311931,33.27798,134.662721,26.00782c40.43022-8.08604,48.547934-32.365296,101.719481-32.365296";

	return (
		<div aria-hidden="true" className={styles.wrapper}>
			<BackgroundLineItem
				animatedClassName={styles.bottomLeftAnimated}
				className={styles.bottomLeft}
				path={bottomLeftPath}
				viewBox="0 0 300 300"
			/>

			<BackgroundLineItem
				animatedClassName={styles.bottomRightAnimated}
				className={styles.bottomRight}
				path={bottomRightPath}
				viewBox="0 0 300 300"
			/>

			<BackgroundLineItem
				animatedClassName={styles.topRightAnimated}
				className={styles.topRight}
				path={topRightPath}
				strokeWidth={1.2}
				viewBox="0 0 600 120"
			/>
		</div>
	);
}
