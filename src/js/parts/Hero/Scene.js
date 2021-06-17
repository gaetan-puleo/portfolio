import React, {useRef} from 'react'
import {Canvas} from '@react-three/fiber';
import Group from './Group';
import { EffectComposer, Bloom, Noise, Vignette , Glitch, DepthOfField} from '@react-three/postprocessing'
import styles from './Scene.module.scss'
import {PerspectiveCamera} from '@react-three/drei';

export default function Scene () {
	const ref = useRef();
	
	return (	
		<Canvas className={styles.canvas} >
			<ambientLight color="#fff" />
			<Group ref={ref}/>	
			<PerspectiveCamera makeDefault far={80} position={[0, 2, 10]} />
			<EffectComposer>
				<Glitch delay={[4,10]} strength={[0.1,0.2]}/>
			 	{/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={0.2} height={480} /> */}
        {/* <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={200} /> */}
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
		  	<Noise opacity={0.3}  />
			</EffectComposer>
		</Canvas>)
}
