/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { normalizeObjectView } from "./utils";
import { useMemo } from "react";
import UnwrapUv from "./UnwrapUv";

const Model = () => {
  const gltf = useGLTF("/assets/bibimbap3.glb");

  useMemo(() => {
    gltf.scene.name = "sourceImage";
    normalizeObjectView(gltf.scene);
  }, [gltf]);

  return (
    <group>
      <OrbitControls />
      <primitive object={gltf.scene} />;
      <UnwrapUv />
    </group>
  );
};

export default Model;
