/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
const RELIC_URI = `${process.env.REACT_APP_ASSETS_URL}/lion-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Lion: THREE.Mesh
  }
  materials: {
    ['Lion.001']: THREE.MeshStandardMaterial
  }
}

export default function Lion({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(RELIC_URI, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Lion.geometry} material={materials['Lion.001']} position={[0.02, 0.01, -0.01]} />
    </group>
  )
}

useGLTF.preload(RELIC_URI)
