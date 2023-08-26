import { MaterialNode, extend } from "@react-three/fiber";
import { ShaderMaterial } from "three";

export class BakeShaderMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {},
      vertexShader: `
      void main() {
        // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = vec4(uv* 2.0 - 1.0 , 0.0, 1.0);
      }
    `,
      fragmentShader: `
      void main() {
        gl_FragColor = vec4(1.0,0.0, 0.0, 1.0);
      }
    `,
    });
  }
}

extend({ BakeShaderMaterial });

declare module "@react-three/fiber" {
  export interface ThreeElements {
    bakeShaderMaterial: MaterialNode<BakeShaderMaterial, typeof BakeShaderMaterial>;
  }
}
