import{r as e,j as n,u as M}from"./index-CLeo20Aj.js";import{R as j,u as b,M as A,b as w,A as E,V as S,S as R,c as _,d as P,e as L,C as D}from"./react-three-fiber.esm-C7CyqFbW.js";const V=()=>parseInt(j.replace(/\D+/g,"")),N=V(),F=e.forwardRef(({children:o,enabled:s=!0,speed:r=1,rotationIntensity:m=1,floatIntensity:c=1,floatingRange:l=[-.1,.1],autoInvalidate:d=!1,...y},f)=>{const a=e.useRef(null);e.useImperativeHandle(f,()=>a.current,[]);const t=e.useRef(Math.random()*1e4);return b(u=>{var v,i;if(!s||r===0)return;d&&u.invalidate();const p=t.current+u.clock.elapsedTime;a.current.rotation.x=Math.cos(p/4*r)/8*m,a.current.rotation.y=Math.sin(p/4*r)/8*m,a.current.rotation.z=Math.sin(p/4*r)/20*m;let x=Math.sin(p/4*r)/10;x=A.mapLinear(x,-.1,.1,(v=l==null?void 0:l[0])!==null&&v!==void 0?v:-.1,(i=l==null?void 0:l[1])!==null&&i!==void 0?i:.1),a.current.position.y=x*c,a.current.updateMatrix()}),e.createElement("group",y,e.createElement("group",{ref:a,matrixAutoUpdate:!1},o))});class I extends _{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${N>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const T=o=>new S().setFromSpherical(new R(o,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),B=e.forwardRef(({radius:o=100,depth:s=50,count:r=5e3,saturation:m=0,factor:c=4,fade:l=!1,speed:d=1},y)=>{const f=e.useRef(),[a,t,u]=e.useMemo(()=>{const i=[],p=[],x=Array.from({length:r},()=>(.5+.5*Math.random())*c),h=new w;let g=o+s;const z=s/r;for(let C=0;C<r;C++)g-=z*Math.random(),i.push(...T(g).toArray()),h.setHSL(C/r,m,.9),p.push(h.r,h.g,h.b);return[new Float32Array(i),new Float32Array(p),new Float32Array(x)]},[r,s,c,o,m]);b(i=>f.current&&(f.current.uniforms.time.value=i.clock.elapsedTime*d));const[v]=e.useState(()=>new I);return e.createElement("points",{ref:y},e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",args:[a,3]}),e.createElement("bufferAttribute",{attach:"attributes-color",args:[t,3]}),e.createElement("bufferAttribute",{attach:"attributes-size",args:[u,1]})),e.createElement("primitive",{ref:f,object:v,attach:"material",blending:E,"uniforms-fade-value":l,depthWrite:!1,transparent:!0,vertexColors:!0}))}),W=`
uniform float uTime;
uniform float uAmp;
varying float vNoise;
varying vec3 vNormalW;
varying vec3 vViewDir;

// Classic 3D simplex noise (Ashima Arts), trimmed.
vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0*C.xxx;
  vec3 x2 = x0 - i2 + 2.0*C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0*C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
  float t = uTime * 0.28;
  float n = snoise(normal * 1.4 + t);
  n += 0.5 * snoise(normal * 3.1 - t * 1.3);
  vNoise = n;
  vec3 displaced = position + normal * n * uAmp;

  vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);

  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,k=`
precision highp float;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying float vNoise;
varying vec3 vNormalW;
varying vec3 vViewDir;

void main() {
  float fres = pow(1.0 - clamp(dot(vNormalW, vViewDir), 0.0, 1.0), 2.2);
  float m = smoothstep(-1.0, 1.0, vNoise);

  vec3 base = mix(uColorB, uColorA, m);
  base = mix(base, uColorC, smoothstep(0.4, 1.0, m));

  // Iridescent rim.
  vec3 color = base + fres * (uColorC * 0.9 + uColorA * 0.3);
  color += fres * 0.35;

  float alpha = 0.62 + fres * 0.38;
  gl_FragColor = vec4(color, alpha);
}
`;function G({reducedMotion:o=!1}){const s=e.useRef(null),r=e.useRef(null),m=P(t=>t.gl),c=e.useRef(0),l=e.useRef(0),d=e.useRef(new L),y=e.useRef(0),f=e.useRef(.34),a=e.useMemo(()=>({uTime:{value:0},uAmp:{value:.34},uColorA:{value:new w("#7c5cff")},uColorB:{value:new w("#36e0c8")},uColorC:{value:new w("#ff6fb5")}}),[]);return e.useEffect(()=>{const t=m.domElement,u=()=>c.current=1,v=()=>l.current=1,i=()=>l.current=0;return t.addEventListener("pointerdown",u),t.addEventListener("pointerenter",v),t.addEventListener("pointerleave",i),()=>{t.removeEventListener("pointerdown",u),t.removeEventListener("pointerenter",v),t.removeEventListener("pointerleave",i)}},[m]),b((t,u)=>{const v=t.pointer.x-d.current.x,i=t.pointer.y-d.current.y;d.current.set(t.pointer.x,t.pointer.y);const p=Math.min(1,Math.hypot(v,i)*7);if(y.current+=(p-y.current)*.1,c.current*=.93,s.current){o||(s.current.uniforms.uTime.value+=u);const x=o?.34:.34+c.current*.5+y.current*.35+l.current*.07;f.current+=(x-f.current)*.12,s.current.uniforms.uAmp.value=f.current}if(r.current){const x=o?0:u*(.12+c.current*.6);r.current.rotation.y+=x;const h=t.pointer.x*.25,g=t.pointer.y*.25;r.current.rotation.x+=(g-r.current.rotation.x)*.04,r.current.position.x+=(h-r.current.position.x)*.04;const z=1+c.current*.06;r.current.scale.setScalar(z)}}),n.jsxs("group",{ref:r,children:[n.jsxs("mesh",{children:[n.jsx("icosahedronGeometry",{args:[1.5,64]}),n.jsx("shaderMaterial",{ref:s,vertexShader:W,fragmentShader:k,uniforms:a,transparent:!0,wireframe:!1})]}),n.jsxs("mesh",{scale:1.08,children:[n.jsx("icosahedronGeometry",{args:[1.5,6]}),n.jsx("meshBasicMaterial",{color:"#7c5cff",wireframe:!0,transparent:!0,opacity:.06})]})]})}function H(){const o=M();return n.jsx(D,{camera:{position:[0,0,5],fov:45},dpr:[1,2],gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},style:{position:"absolute",inset:0},children:n.jsxs(e.Suspense,{fallback:null,children:[n.jsx("ambientLight",{intensity:.6}),n.jsx("pointLight",{position:[4,3,5],intensity:1.2,color:"#7c5cff"}),n.jsx("pointLight",{position:[-4,-2,2],intensity:.8,color:"#36e0c8"}),n.jsx(F,{speed:o?0:1.1,rotationIntensity:o?0:.4,floatIntensity:o?0:.6,children:n.jsx(G,{reducedMotion:o})}),n.jsx(B,{radius:60,depth:40,count:o?800:2600,factor:3,saturation:0,fade:!0,speed:o?0:.6})]})})}export{H as default};
