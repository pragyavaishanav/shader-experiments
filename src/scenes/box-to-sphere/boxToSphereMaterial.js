import * as THREE from "three";
import vertexShader from "./boxToSphereVS.js";
import fragmentShader from "./boxToSphereFS.js";

const shaderMaterial = new THREE.ShaderMaterial({
  wireframe: true,
  uniforms: {
    u_time: { value: 0 },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

export default shaderMaterial;
