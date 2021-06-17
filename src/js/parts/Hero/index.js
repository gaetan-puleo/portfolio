import React from 'react'
import styles from './index.module.scss';
import Scene from './Scene';
import Header from './Header'

export default function Hero() {
	return (<div className={styles.hero}>
		<Header />
		<Scene />
	</div>)
}
