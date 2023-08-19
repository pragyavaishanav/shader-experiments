uniform float u_time;
out vec2 vUv;
void main() {
    float radius = 1.0;
    float delta = 0.5 + sin(u_time) * 0.5;
    vec3 v = normalize(position) * radius;
    vec3 pos = mix(position, v, delta);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
