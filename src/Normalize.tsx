/* eslint-disable react/no-unknown-property */
import { Center, CenterProps } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export interface NormalizeProps extends CenterProps {
  position?: Vector3;
  children: React.ReactNode;
}
export const Normalize: React.FC<NormalizeProps> = (props) => (
  <Center
    {...props}
    onCentered={({ width, height, container }) => {
      container.scale.setScalar(1.0 / Math.max(width, height));
      container.matrixWorldNeedsUpdate = true;
    }}
  >
    {props.children}
  </Center>
);

/**
 * Props for ScaleToBBox, same as NormalizeProps also has bbox: THREE.Box3
 */
export interface ScaleToBBoxProps extends NormalizeProps {
  bbox: THREE.Box3;
  fitSide: "x" | "y" | "z";
}

/**
 * ScaleToBBox:  Component used to normalize the size of the children to be
 *  the same as one of the sides of the bounding box
 * @param props
 */
export const ScaleToBBox: React.FC<ScaleToBBoxProps> = ({
  bbox,
  fitSide,
  ...props
}) => {
  const size = bbox.getSize(new THREE.Vector3());
  const scale = size[fitSide];
  const position = bbox.getCenter(new THREE.Vector3());
  return (
    <group scale={[scale, scale, scale]} position={position}>
      <Normalize {...props} />
    </group>
  );
};
