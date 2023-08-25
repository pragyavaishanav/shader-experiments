import { ShaderMaterial } from "three";

const BakeShaderMaterial = () => {
  return new ShaderMaterial({
    uniforms: {
      tDiffuse: { value: null },
      near: { value: 0.0 },
    },

    vertexShader: `
      void main() {
        // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = vec4(uv*2.0 -1.0 , 0.0, 1.0);
      }
    `,

    fragmentShader: `
      void main() {
        gl_FragColor = vec4(1.0,0.0, 0.0, 1.0);
      }
    `,
  });
};

export default BakeShaderMaterial;
