import React from 'react'
import Typing from './Typing';

import styles from './Header.module.scss';

export default function Header () {
	return (
		<header className={styles.content}>
			<div className={styles.typing}>Hello, I'm Gaetan Puleo</div>
			<span>A {' '} 
			<Typing />
			<span className={styles.cursor} /> Developer</span>

		</header>
	)
}
