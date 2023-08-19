// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { DirectionalLight } from "three";
import * as THREE from "three";

const StyledCanvas = styled(Canvas)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// Define custom shader material
const MyShaderMaterial = shaderMaterial(
  { color: new THREE.Color(0xff0000) }, // Uniforms
  // Vertex shader
  `
    varying vec3 vColor;
    void main() {
      vColor = color;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, 1.0);
    }
  `
);

// // Extend react-three-fiber to include the custom shader material
extend({ MyShaderMaterial });

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
        {/* <meshStandardMaterial
          attach="material"
          color="blue"
          wireframe={true}
        /> */}
      </mesh>
      <OrbitControls />
      <directionalLight position={[0, 10, 5]} intensity={1} />
    </Canvas>
  );
}

export default App;
