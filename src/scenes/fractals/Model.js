import shaderMaterial from "./material";
import { useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Model = () => {
  const { size } = useThree();
  useFrame((state) => {
    shaderMaterial.uniforms.u_time.value = state.clock.getElapsedTime();
  });
  useEffect(() => {
    shaderMaterial.uniforms.u_resolution.value.set(size.width, size.height);
  }, [size.width, size.height]);
  return (
    <>
      <mesh>
        <planeGeometry attach="geometry" args={[4, 4, 10, 10]} />
        <primitive object={shaderMaterial} />
      </mesh>
      <OrthographicCamera
        position={[0, 0, 1]}
        left={-2}
        right={2}
        top={2}
        bottom={-2}
        near={0.5}
        far={10}
        makeDefault
      />
    </>
  );
};

export default Model;
