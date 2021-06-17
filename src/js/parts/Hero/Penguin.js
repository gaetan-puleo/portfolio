import React from 'react'
import penguinGltf from "url:../../../models/penguin.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {useLoader} from '@react-three/fiber';

export default function Penguin() {
    const gltf = useLoader(GLTFLoader, penguinGltf);
    return (
        <>
            <primitive object={gltf.scene.children[2]} scale={0.02} position={[0, 2.1, 0]}>
                <meshStandardMaterial color="rgb(150,150, 150)" wireframe={true}></meshStandardMaterial>
            </primitive>
        </>
    );
}
