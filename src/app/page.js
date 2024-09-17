import styles from "../styles/home.module.scss";

import Navbar from "../components/main/navbar/navbar";

export default function Home() {
	return (
		<>
			<div className={styles.home}>
				<Navbar></Navbar>
			</div>
		</>
	);
}
