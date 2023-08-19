import shaderMaterial from "./Material";

const Model = () => {
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[2, 2, 2, 10, 10, 10]} />
      <primitive object={shaderMaterial} />
    </mesh>
  );
};

export default Model;
