import * as THREE from "three";
import vertexShader from "../shaders/boxToSphereVS.js";
import fragmentShader from "../shaders/boxToSphereFS.js";

console.log("vertexShader", vertexShader);
console.log("fragmentShader", fragmentShader);
const shaderMaterial = new THREE.ShaderMaterial({
  wireframe: true,
  uniforms: {
    color: { value: new THREE.Color(0xff0000) },
    u_time: { value: 0 },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

export default shaderMaterial;
