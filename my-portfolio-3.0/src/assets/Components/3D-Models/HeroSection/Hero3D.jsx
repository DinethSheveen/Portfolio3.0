import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import { HeroModel } from './HeroModel'
import {useMediaQuery} from "react-responsive"

function Hero3D() {

  const isMobile = useMediaQuery({query:"(max-width:768px)"})

  return (
    <Canvas camera={{position:[0,0,15], fov:45, near:0.1, far:1000}}>
      <ambientLight color="blue" intensity={0.6}/>
      <directionalLight position={[5,5,5]} intensity={1}/>
      <OrbitControls maxDistance={10} minDistance={5} enableZoom={!isMobile} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/4}/>

      <group position={isMobile?[0,-2,0]:[0,-2.5,0]} rotation={[0,-0.8,0]} scale={isMobile?0.9:1}>
        <HeroModel/>
      </group>
      
    </Canvas>
  )
}

export default Hero3D