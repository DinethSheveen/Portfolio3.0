import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { HeroModel } from "./HeroModel";
import { useMediaQuery } from "react-responsive";

// Loader component
function Loader() {
  return (
    <Html center>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "rgba(0, 0, 0, 0.7)",
        borderRadius: "10px"
      }}>
        <div className="spinner"></div>
        <span style={{ marginLeft: "10px", color: "white" }}>Loading 3D Model...</span>
      </div>
      <style>{`
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #6200ee;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
}

// Full screen loader for initial load
function FullScreenLoader() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#000"
    }}>
      <div className="spinner-large"></div>
      <p style={{ marginTop: "20px", color: "#333" }}>Loading 3D Environment...</p>
      <style>{`
        .spinner-large {
          border: 6px solid #e0e0e0;
          border-top: 6px solid #6200ee;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function Hero3D() {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  // Show fallback for a minimum time to prevent flickering
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(false);
    }, 1000); // Minimum 1 second loader display
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFallback && !isModelLoaded && <FullScreenLoader />}
      
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 45, near: 0.1, far: 1000 }}
        style={{ 
          opacity: isModelLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          width: "100%",
          height: "100%"
        }}
      >
        {/* LIGHTS */}
        <spotLight position={[-2, 1, -4]} color="#b603fc" penumbra={0.2} angle={3} intensity={30} />
        <spotLight position={[2, 1, -4]} color="#fc039d" penumbra={1} angle={3} intensity={15} />
        <spotLight position={[2, -2, 4]} color="#aba7aa" intensity={5} />
        <spotLight position={[-3, -2, -2]} color="#aba7aa" intensity={5} />
        <spotLight position={[4, 2, -4]} color="white" intensity={10} angle={30} />

        <OrbitControls
          maxDistance={10}
          minDistance={5}
          enableZoom={!isMobile}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          enabled={isModelLoaded} // Disable controls while loading
        />

        <Suspense fallback={<Loader />}>
          <group
            position={isMobile ? [0, -2, 0] : [0, -2.5, 0]}
            rotation={[0, -1.4, 0]}
            scale={isMobile ? 0.9 : 1}
          >
            <HeroModel 
              onLoad={() => setIsModelLoaded(true)}
            />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Hero3D;