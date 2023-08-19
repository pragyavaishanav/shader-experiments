import * as THREE from "three";
import vertexShader from "./vertex.js";
import fragmentShader from "./fragment.js";

const shaderMaterial = new THREE.ShaderMaterial({
  wireframe: true,
  uniforms: {
    u_time: { value: 0 },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

export default shaderMaterial;
