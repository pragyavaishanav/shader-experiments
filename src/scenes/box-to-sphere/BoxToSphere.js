import shaderMaterial from "./boxToSphereMaterial";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Model = () => {
  useFrame((state) => {
    shaderMaterial.uniforms.u_time.value = state.clock.getElapsedTime();
  });
  return (
    <>
      <mesh>
        <boxGeometry attach="geometry" args={[2, 2, 2, 10, 10, 10]} />
        <primitive object={shaderMaterial} />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default Model;
