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

  vec3 finalColor = vec3(0.0);

  for (float i = 0.0; i < 2.0; i++) {

  uv = uv * 2.0;
  uv = fract(uv);
  uv = uv - 0.5;

  float d = sdStar(uv, 1., 4, 10.)* exp(-length(uv0));

  vec3 color = paletteFire(length(uv0) + i*.4 + u_time *2.);


  d= sin(d * 15. + u_time * 3.)/15.; 
  d = abs(d);
  d= pow(0.005/d,1.2);

  color *= d;
  finalColor += color;

  }

  gl_FragColor = vec4(finalColor, 1.0);
}`;

export default fragmentShader;
