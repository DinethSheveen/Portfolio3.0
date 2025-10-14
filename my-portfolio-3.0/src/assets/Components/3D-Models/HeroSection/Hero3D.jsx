import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import { HeroModel } from './HeroModel'
import {useMediaQuery} from "react-responsive"

function Hero3D() {

  const isMobile = useMediaQuery({query:"(max-width:768px)"})

  return (
    <Canvas camera={{position:[0,0,15], fov:45, near:0.1, far:1000}}>
      {/* LIGHTINGS */}
      <spotLight position={[-2,1,-4]} color="#b603fc" penumbra={0.2} angle={3} intensity={30}/>
      <spotLight position={[2,1,-4]} color="#fc039d" penumbra={1} angle={3} intensity={15}/>
      <spotLight position={[2,-2,4]} color="#aba7aa" intensity={5}/>
      <spotLight position={[-3,-2,-2]} color="#aba7aa" intensity={5}/>

      {/* LIGHTING TO THE BACK RIGHT CONTROL*/}
      <spotLight position={[4,2,-4]} color="white" intensity={10} angle={30}/>

      {/* ORBIT CONTROLS */}
      <OrbitControls maxDistance={10} minDistance={5} enableZoom={!isMobile} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/4}/>

      {/* GROUP TO HAVE MORE CONTROL */}
      <group 
      position={isMobile?[0,-2,0]:[0,-2.5,0]} 
      rotation={[0,-1.4,0]}
      scale={isMobile?0.9:1}>
        {/* 3D MODEL */}
        <HeroModel/>
      </group>
      
    </Canvas>
  )
}

export default Hero3D