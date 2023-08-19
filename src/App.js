import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./elements/components/BoxToSphere";

function App() {
  return (
    <Canvas
      // colorManagement={false}
      onCreated={({ gl }) => {
        gl.setClearColor("black");
      }}
      // camera={{ position: [0, 0, 5] }}
    >
      <ambientLight />
      <Model />
      <OrbitControls />
      <directionalLight position={[0, 10, 5]} intensity={1} />
    </Canvas>
  );
}

export default App;
