import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import { HeroModel } from './HeroModel'

function Hero3D() {
  return (
    <Canvas camera={{position:[0,0,15], fov:45, near:0.1, far:1000}}>
      <ambientLight color="blue" intensity={2}/>
      <directionalLight position={[5,5,5]} intensity={1}/>
      <OrbitControls maxDistance={10} minDistance={5}/>

      <group position={[1,-2.5,0]}>
        <HeroModel/>
      </group>
      
    </Canvas>
  )
}

export default Hero3D