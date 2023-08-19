import { Canvas } from "@react-three/fiber";
import Model from "./scenes/fractals/Model";

function App() {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor("black");
      }}
    >
      <ambientLight />
      <Model />
      <directionalLight position={[0, 10, 5]} intensity={1} />
    </Canvas>
  );
}

export default App;
