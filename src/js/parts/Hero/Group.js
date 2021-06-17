import React, {forwardRef, Suspense} from 'react';
import Penguin from './Penguin';
import Ice from './Ice';
import {useFrame} from '@react-three/fiber';

const Group = forwardRef((props,ref) => {
	useFrame(()  => { 
		ref.current.rotation.y -= 0.01
	})

	return <group ref={ref}>
		<Suspense fallback={null}>
			<Penguin />
			<Ice />
		</Suspense>
	</group>
})

export default Group;
