import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function App() {
  const shaderMaterial = new THREE.ShaderMaterial({
    wireframe: true,
    uniforms: {
      color: { value: new THREE.Color(0xff0000) },
    },
    vertexShader: `
      varying vec3 vColor;
      uniform vec3 color;
      void main() {
        vColor = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,
  });

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <mesh>
        <boxGeometry attach="geometry" args={[2, 2, 2, 10, 10, 10]} />
        <primitive object={shaderMaterial} />
      </mesh>
      <OrbitControls />
      <directionalLight position={[0, 10, 5]} intensity={1} />
    </Canvas>
  );
}

export default App;
