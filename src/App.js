import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./elements/box-to-sphere/Model";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <Model />
      <OrbitControls />
      <directionalLight position={[0, 10, 5]} intensity={1} />
    </Canvas>
  );
}

export default App;
