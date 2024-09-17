"use client";

import React, { useState } from "react";

import Button from "../../other/navbar-button/button";

import styles from "./navbar.module.scss";

export default function Navbar() {
	const [hoveredItem, setHoveredItem] = useState(null);

	const handleHover = (item) => {
		setHoveredItem(item);
	};

	const handleLeave = () => {
		setHoveredItem(null);
	};

	return (
		<nav className={styles.navbar}>
			<header className={styles.hat}>
				<div className={styles.logo}></div>

				<menu className={styles.buttons}>
					<Button
						className={styles.aboutButton}
						text='О нас'
						onHover={() => handleHover("about")}
						onLeave={() => handleLeave()}
						isDropOut={true}></Button>

					<Button
						className={styles.scheduleButton}
						text='Расписание'
						onHover={() => handleHover("schedule")}
						onLeave={() => handleLeave}
						isDropOut={true}></Button>

					<Button
						className={styles.programButton}
						text='Программа'
						onHover={() => handleHover("program")}
						onLeave={() => handleLeave}
						isDropOut={true}></Button>

					<Button
						className={styles.photoButton}
						text='Фото и видео'
						onHover={() => handleHover("photo")}
						onLeave={() => handleLeave}
						isDropOut={false}></Button>

					<Button
						className={styles.teamButton}
						text='Команда'
						onHover={() => handleHover("team")}
						onLeave={() => handleLeave}
						isDropOut={false}></Button>

					<Button
						className={styles.contactsButton}
						text='Контакты'
						onHover={() => handleHover("contacts")}
						onLeave={() => handleLeave}
						isDropOut={false}></Button>
				</menu>

				<button className={styles.phoneButton}></button>
				<button className={styles.vkButton}></button>
				<button className={styles.tgButton}></button>
				<button className={styles.signUpButton}></button>

				<button className={styles.addressButton}></button>
				<button className={styles.subwayButton}></button>
			</header>
		</nav>
	);
}
