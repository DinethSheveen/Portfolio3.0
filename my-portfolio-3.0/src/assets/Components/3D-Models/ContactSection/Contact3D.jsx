import React from 'react'
import {Canvas} from "@react-three/fiber"
import { ContactModel } from './ContactModel'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

function Contact3D() {

    const isMobile = useMediaQuery({query:"(max-width:768px)"})

  return (
    <Canvas camera={{position:[0,0,25], fov:45, near:0.1, far:1000}}>
          {/* LIGHTINGS */}
          <directionalLight position={[1,1,2]} color="white" intensity={10}/>
          <spotLight position={[-1,0.2,-4]} color="orange" penumbra={0.8} angle={0.8} intensity={15}/>
    
          {/* ORBIT CONTROLS */}
          <OrbitControls enableZoom={!isMobile} maxDistance={10} minDistance={5} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/4}/>
    
          {/* GROUP TO HAVE MORE CONTROL */}
          <group
          scale={0.04}
          position={isMobile?[0.5,-2,1]:[0,-2,1]}
          rotation={[0.1,3.2,0]}
          >
            {/* 3D MODEL */}
            <ContactModel/>
          </group>
          
        </Canvas>
  )
}

export default Contact3D