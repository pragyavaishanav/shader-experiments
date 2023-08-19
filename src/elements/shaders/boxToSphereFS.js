const fragmentShader = `



in vec2 vUv;
uniform float u_time;
// #include shaderFunctions;
vec3 palette( in float t){
    vec3 a = vec3(0.2, 0.5, 0.7);
    vec3 b = vec3(0.2, 0.5, 0.7);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.6);
    return a + b*cos( 6.28318*(c*t+d) );
}

float sdStar( in vec2 p, in float r, in int n, in float m){
    // next 4 lines can be precomputed for a given shape
    float an = 3.141593/float(n);
    float en = 3.141593/m;  // m is between 2 and n
    vec2  acs = vec2(cos(an),sin(an));
    vec2  ecs = vec2(cos(en),sin(en));
    float bn = mod(atan(p.x,p.y),2.0*an) - an;
    p = length(p)*vec2(cos(bn),abs(sin(bn)));
    p -= r*acs;
    p += ecs*clamp( -dot(p,ecs), 0.0, r*acs.y/ecs.y);
    return length(p)*sign(p.x);
    }


void main() {
    vec2 uv = vUv;
    uv = uv -0.5;
    uv = uv * 2.0;
    vec2 uv0 = uv;

    uv = uv * 2.0;
    uv = fract(uv);
    uv = uv - 0.5;

    float d = length(uv); //* exp(-length(uv0));
    vec3 color = palette(length(uv0) + u_time *2.);

    d= sin(d * 15. + u_time * 3.)/15.; 
    d = abs(d);
    d= 0.01/d;

    color *= d;


    gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShader;
