import styles from "./button.module.scss";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	weight: "600",
	style: "normal",
	preload: false,
	variable: "--montserrat",
});

export default function Button({ text, onHover, onLeave, isDropOut }) {
	return (
		<>
			<button
				className={styles.button}
				onMouseEnter={onHover}
				onMouseLeave={onLeave}>
				<div className={`${styles.text} ${montserrat.className}`}>{text}</div>

				{isDropOut === true && <img className={styles.mark} src=''></img>}
			</button>
		</>
	);
}
