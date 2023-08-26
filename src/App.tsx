/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Center,
  Gltf,
  Grid,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Plane,
  TorusKnot,
} from "@react-three/drei";
import { Normalize } from "./Normalize";
import "scenes/unwrap-uv/BakeShaderMaterial";

interface SceneProps {
  glbSrc: string;
}

const Scene = ({ glbSrc }: SceneProps) => {
  return (
    <>
      <Center top>
        <Normalize>
          <Gltf src={glbSrc} />
        </Normalize>
      </Center>
      <Plane args={[2, 2]} position={[0, -0.1, 0]} rotation={[-1.57, 0, 0]}>
        <meshBasicMaterial attach="material">
          <RenderTexture attach="map" sourceFile={""}>
            <color attach="background" args={["#aaccff"]} />
            <ambientLight intensity={0.5} />
            <Gltf src={glbSrc} inject={<bakeShaderMaterial wireframe />} />
          </RenderTexture>
        </meshBasicMaterial>
      </Plane>
    </>
  );
};

const App = () => {
  const glbSrc = "/assets/bibimbap3.glb";
  return (
    <Canvas>
      <color attach="background" args={["#ffccaa"]} />
      <PerspectiveCamera makeDefault position={[1, 1, 1]} />
      <OrbitControls target={[0, 0.4, 0]} />
      <Grid />
      <Environment files="/Equirectangular_IBL.hdr" />
      <Scene glbSrc={glbSrc} />
    </Canvas>
  );
};

export default App;
