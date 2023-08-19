import shaderMaterial from "./boxToSphereMaterial";
import { useFrame } from "@react-three/fiber";

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
    </>
  );
};

export default Model;
