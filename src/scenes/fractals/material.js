import * as THREE from "three";
import vertexShader from "./vertex.js";
import fragmentShader from "./fragment.js";

const shaderMaterial = new THREE.ShaderMaterial({
  // wireframe: true,
  uniforms: {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2() },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

export default shaderMaterial;
