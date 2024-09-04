import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Handle, Position } from 'reactflow'

function Box(props) {
  const ref = useRef()
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  )
}

function Scene() {
    return (
        <Canvas>
        <ambientLight />
            <pointLight position={[3, 3, 3]} />
            <Box position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[3, 3, 3]} />
        </Canvas>
    )
}

export function Output({data}) {
    return (
        <div className='output'>
        <Handle type="target" position={Position.Left} id="p" style={{top:60}}>
            <div className='text-white relative left-3 bottom-3'>Position</div>
        </Handle>
        <Handle type="target" position={Position.Left} id="r" style={{top:100}}>
            <div className='text-white relative left-3 bottom-3'>Rotation</div>
        </Handle>
        <Handle type="target" position={Position.Left} id="s" style={{top:140}}>
            <div className='text-white relative left-3 bottom-3'>Scale</div>
        </Handle>
            <div className="output--title">
                Output
            </div>
            <div>
                <Scene />
            </div>
        </div>
    )
}