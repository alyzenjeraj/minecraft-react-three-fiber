import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import FPV from './components/FPV'
import Ground from './components/Ground'
import Player from './components/Player'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}/>
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='cursor absolute center'>+</div>
    </>
  )
}

export default App
