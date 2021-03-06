import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, TransformControls } from "@react-three/drei";

import model from '../assets/threeScenes/scene.gltf';

const Model = () => {
     const gltf = useLoader(GLTFLoader, model);
     const ref = useRef();
     useFrame(() => (ref.current.rotation.y += 0.005))

    return (
        <>
            <primitive 
            object={gltf.scene} 
            scale={0.006} 
            position={[0, -.6, 0]}
            ref={ref}
            />
        </>
    );
};

const ThreeHeardphones = () => {
    return (
        <Canvas >
            <ambientLight intensity={1} />
            <directionalLight color="#fff" position={[1, 1, 5]} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    )
}

export default ThreeHeardphones;