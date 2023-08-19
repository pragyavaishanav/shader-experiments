import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./scenes/mandla-art/MandlaArt";

function App() {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor("black");
      }}
    >
      <ambientLight />
      <Model />
      <OrbitControls />
      <directionalLight position={[0, 10, 5]} intensity={1} />
    </Canvas>
  );
}

export default App;
