import shaderMaterial from "../materials/mandlaArtMaterial";
import { useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";

const Model = () => {
  useFrame((state) => {
    shaderMaterial.uniforms.u_time.value = state.clock.getElapsedTime();
  });
  return (
    <>
      <mesh>
        {/* <boxGeometry attach="geometry" args={[2, 2, 2, 10, 10, 10]} /> */}
        <planeGeometry attach="geometry" args={[2, 2, 10, 10]} />
        <primitive object={shaderMaterial} />
      </mesh>
      <OrthographicCamera position={[0, 0, 1]} makeDefault />
    </>
  );
};

export default Model;
