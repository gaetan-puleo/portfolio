import React, {Suspense} from 'react'
// import iceGltf from "url:../../../models/banquise.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {useLoader} from '@react-three/fiber';
import Model from '../../../models/Banquise-min'
export default function Ice() {
	// const gltf = useLoader(GLTFLoader, iceGltf);
  return (
    <>
		<Suspense fallback={null}>
			<Model>
			{/* <primitive object={gltf.nodes.Cube} scale={7} position={[0,-4.29,0]} > */}
				{/* <meshStandardMaterial color="#777" wireframe={true}></meshStandardMaterial> */}
			{/* </primitive> */}
			</Model>
		</Suspense>
    </>
  );
};
