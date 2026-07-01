import{u as p,j as a,r as l}from"./index-uHBt_fOz.js";import{C as v,B as x,a as u,b as d,u as h,A as g}from"./react-three-fiber.esm-B_HYbn-R.js";const S=`
uniform float uTime;
uniform float uMotion;
attribute float aSeed;
attribute float aScale;
varying float vSeed;

void main() {
  vSeed = aSeed;
  vec3 p = position;

  // Lightweight curl-ish flow: layered sines drive a slow drift.
  float t = uTime * 0.06 * uMotion;
  p.x += sin(t + p.y * 0.35 + aSeed * 6.2831) * 0.9;
  p.y += cos(t * 0.9 + p.x * 0.3 + aSeed * 3.14) * 0.7;
  p.z += sin(t * 0.7 + p.x * 0.2 + aSeed * 1.7) * 0.6;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aScale * (90.0 / -mv.z);
}
`,w=`
precision mediump float;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying float vSeed;

void main() {
  // Soft round sprite.
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float alpha = smoothstep(0.5, 0.0, d);
  vec3 color = mix(uColorA, uColorB, vSeed);
  gl_FragColor = vec4(color, alpha * 0.5);
}
`;function y({reduced:t}){const s=l.useRef(null),r=t?600:1700,m=l.useMemo(()=>{const e=new Float32Array(r*3),i=new Float32Array(r),c=new Float32Array(r);for(let o=0;o<r;o++)e[o*3]=(Math.random()-.5)*34,e[o*3+1]=(Math.random()-.5)*22,e[o*3+2]=(Math.random()-.5)*14-4,i[o]=Math.random(),c[o]=.5+Math.random()*1.6;const n=new x;return n.setAttribute("position",new u(e,3)),n.setAttribute("aSeed",new u(i,1)),n.setAttribute("aScale",new u(c,1)),n},[r]),f=l.useMemo(()=>({uTime:{value:0},uMotion:{value:t?0:1},uColorA:{value:new d("#7c5cff")},uColorB:{value:new d("#36e0c8")}}),[t]);return h((e,i)=>{s.current&&!t&&(s.current.uniforms.uTime.value+=i),e.camera.position.x+=(e.pointer.x*1.2-e.camera.position.x)*.02,e.camera.position.y+=(e.pointer.y*.8-e.camera.position.y)*.02,e.camera.lookAt(0,0,0)}),a.jsx("points",{geometry:m,children:a.jsx("shaderMaterial",{ref:s,vertexShader:S,fragmentShader:w,uniforms:f,transparent:!0,depthWrite:!1,blending:g})})}function C(){const t=p();return a.jsx("div",{"aria-hidden":!0,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"},children:a.jsx(v,{camera:{position:[0,0,16],fov:60},dpr:[1,1.5],gl:{antialias:!1,alpha:!0,powerPreference:"low-power"},children:a.jsx(y,{reduced:t})})})}export{C as default};
