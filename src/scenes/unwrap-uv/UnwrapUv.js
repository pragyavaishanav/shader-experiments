/* eslint-disable react/no-unknown-property */

import {
  duplicateSceneWithSource,
  createOrthoCamera,
  updateSceneMaterial,
} from "./utils";
import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import BakeShaderMaterial from "./material";

const UnwrapUv = () => {
  const { scene, gl } = useThree();
  const target = useMemo(() => new THREE.WebGLRenderTarget(1024, 1024), []);
  const shaderMaterial = BakeShaderMaterial();
  gl.setClearColor(0xffffff);

  const handlePlaneClick = () => {
    const cScene = duplicateSceneWithSource(scene);
    const camera = createOrthoCamera();

    gl.setClearColor(0xff00ff);
    gl.setRenderTarget(target);
    updateSceneMaterial(cScene, shaderMaterial);
    gl.render(cScene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0xffffff);
  };

  return (
    <mesh position={[0, 1, 0]} onClick={() => handlePlaneClick()}>
      <planeGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial map={target.texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default UnwrapUv;
