import * as THREE from "three";

const shaderMaterial = new THREE.ShaderMaterial({
  wireframe: true,
  uniforms: {
    color: { value: new THREE.Color(0xff0000) },
  },
  vertexShader: `
      varying vec3 vColor;
      uniform vec3 color;
      void main() {
        vColor = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  fragmentShader: `
      varying vec3 vColor;
      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,
});

export default shaderMaterial;
