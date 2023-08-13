//TODO: put react 3 Fiber code here

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
//.import { TextGeometry } from '@react-three/TextGeometry';




export function Passport() {
  return (
    <div style={{width: "50vw", height: "50vh"}}>
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
    <button>
        SetRemote
      </button>
    <button>
      Mint Passaporta
    </button>
    <button>
      Send Passaporta
    </button>
    </div>
  )
}


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.z += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[.1, 1, 1.4]} />
      <meshStandardMaterial color={hovered ? 'silver' : 'orange'} />
    </mesh>
  )
}



/* PassaPorta code should include:
1. Check if you've minted a PassaPorta
2. If you have, display the PassaPorta
3. PassaPorta should be rotating Card for P0
4. Each Attestation should be a stampIf we can make it multipage*/