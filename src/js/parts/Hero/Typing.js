import React,{useEffect, useState} from 'react';
import styles from './Typing.module.scss'
const technos = [
	{name: 'React', color : '#3498db', key: 'react'}, 
	{name: 'Javascript', color: '#f1c40f', key: 'js'}, 
	{name: 'Front End', color: '#e74c3c', key:'front'}, 
	// {name: 'Three.js', color: '#e67e22', key: 'three'}, 
	// {name: 'Node.js', color: '#27ae60', key: 'node'}
];

const time = 10000

// Set current
export default function Typing () {
	const [idx, setIdx] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			if(idx === technos.length - 1) {
				setIdx(0);
			}
			else {
				setIdx(idx + 1);
			}
		}, time)
	}, [idx])

	const keyName = technos[idx].key;
	const keyframes = `
			@keyframes ${keyName} {
				from {
					width: 0;
				}
				to {
					width: ${18 * technos[idx].name.length}px;
				}
			}
	`
	return(
		<>
		<style>
			{keyframes}
		</style>
			<span 
				className={styles.techno}
				style={
				{
					color: technos[idx].color,
					animation: `2s ${keyName}`,
					animationTimingFunction: `steps(${technos[idx].name.length})`
				}
			}>
				{technos[idx].name}
			</span>
		</>);
}
