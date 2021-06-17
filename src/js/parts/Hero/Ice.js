import React from 'react'
import iceGltf from "url:../../../models/banquise.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {useLoader} from '@react-three/fiber';

export default function Ice() {
	const gltf = useLoader(GLTFLoader, iceGltf);
  return (
    <>
			<primitive object={gltf.nodes.Cube} scale={7} >
				<meshStandardMaterial color="#777" wireframe={true}></meshStandardMaterial>
			</primitive>
    </>
  );
};
