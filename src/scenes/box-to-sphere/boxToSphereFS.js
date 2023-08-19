import shaderFunctions from "../shaders/shaderFunctions";
const fragmentShader = ` ${shaderFunctions}
in vec2 vUv;
uniform float u_time;
void main() {
    vec2 uv = vUv;
    uv = uv -0.5;
    uv = uv * 2.0;
    vec2 uv0 = uv;

    uv = uv * 2.0;
    uv = fract(uv);
    uv = uv - 0.5;

    float d = length(uv); //* exp(-length(uv0));
    vec3 color = paletteRainbow(length(uv0) + u_time *2.);

    d= sin(d * 15. + u_time * 3.)/15.; 
    d = abs(d);
    d= 0.01/d;

    color *= d;


    gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShader;
