import * as THREE from "three";
import vertexShader from "./mandlaArtVS.js";
import fragmentShader from "./mandlaArtFS.js";

const shaderMaterial = new THREE.ShaderMaterial({
  // wireframe: true,
  uniforms: {
    color: { value: new THREE.Color(0xff0000) },
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2() },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

export default shaderMaterial;
