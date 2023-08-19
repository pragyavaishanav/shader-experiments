import * as THREE from "three";

const shaderMaterial = new THREE.ShaderMaterial({
  wireframe: true,
  uniforms: {
    color: { value: new THREE.Color(0xff0000) },
    u_time: { value: 0 },
  },
  vertexShader: `
      varying vec3 vColor;
      uniform vec3 color;
      uniform float u_time;
      void main() {
        float radius = 1.0;
        vColor = color;
        float delta = 0.5 + sin(u_time) * 0.5;
        vec3 v = normalize(position) * radius;
        vec3 pos = mix(position, v, delta);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
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
