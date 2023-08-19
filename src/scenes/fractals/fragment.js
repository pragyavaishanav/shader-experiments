import shaderFunctions from "../shaders/shaderFunctions";
const fragmentShader = `${shaderFunctions}

in vec2 vUv;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = vUv;
  uv.x *= u_resolution.x / u_resolution.y; // Correct the aspect ratio
  uv.x -= (u_resolution.x - u_resolution.y) / u_resolution.y / 2.0; // Center the image
  uv = uv -0.5;
  uv = uv * 2.0;
  vec2 uv0 = uv;

  float angle = u_time*0.1;
  for(float i = 0.0; i<32.0 ; i+= 1.0){

    //all 4 quadrants are considered
    uv0 = abs(uv0);
    //all 4 quads get a sphere looking geo
    uv0 -= 0.5;

    uv0 *= 1.1;

    uv0 *= mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  vec3 col = paletteRainbow(length(uv0) + u_time *0.2);

  float d = pow(0.05/col.x, 1.5);

  col *= d;

  // d= pow(0.005/d,1.2);


  gl_FragColor = vec4(col, 1.0);
}`;

export default fragmentShader;
