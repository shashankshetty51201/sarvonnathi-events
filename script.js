/* ============ EDIT THIS BLOCK WITH REAL BUSINESS INFO ============ */
const IMG=["images/photo-01.webp", "images/photo-02.webp", "images/photo-03.webp", "images/photo-04.webp", "images/photo-05.webp", "images/photo-06.webp"];
const IMGF=["images/photo-07.webp", "images/photo-08.webp", "images/photo-09.webp", "images/photo-10.webp"];
const IMGK=["images/photo-11.webp", "images/photo-12.webp", "images/photo-13.webp"];
const IMGG=["images/photo-14.webp", "images/photo-15.webp", "images/photo-16.webp"];
const IMGM=["images/photo-17.webp", "images/photo-18.webp"];
const CONFIG={
  whatsapp:"918553526985",
  phone:"+918553526985", email:"",
  aboutImage:IMG[3],
  services:[
    {name:"Corporate Gifting",desc:"Premium, durable travel bags and backpacks with a custom branding option, for employee gifting, client appreciation, events & conferences and festive gifting. Bulk and customised orders welcome.",img:IMGG[0],pos:50},
    {name:"Housewarming Kitchen Décor",desc:"Turning your kitchen into a space of tradition, beauty and celebration for your Gruhapravesha. Starting from ₹4,999.",img:IMG[0],pos:78},
    {name:"Luxury Kitchen Décor",desc:"Luxury kitchen décor for housewarming at ₹8,999, with customisation available. DM or WhatsApp to order.",img:IMG[1],pos:40},
    {name:"Catering",desc:"Authentic recipes, fresh and hygienic food, made with love for your celebrations.",img:IMGF[1],pos:35}
  ],
  photos:[
    {src:IMG[0],alt:"Gruhapravesha décor on a kitchen counter with flowers, idols and peacocks",cat:"Kitchen Décor"},
    {src:IMG[1],alt:"Decorated idol with peacock cut-outs, brass lamps and a petal rangoli",cat:"Idols & Dolls"},
    {src:IMG[2],alt:"Elephant cut-outs with lotus flowers and stone mortars on a floral border",cat:"Kitchen Décor"},
    {src:IMG[3],alt:"Two decorated deity figures on a bed of coloured flower petals",cat:"Idols & Dolls"},
    {src:IMG[4],alt:"Green pots filled with grains, ringed with red and white petals",cat:"Kitchen Décor"},
    {src:IMG[5],alt:"Doll family in traditional attire beside marigold garlands",cat:"Idols & Dolls"},
    {src:IMGF[0],alt:"Spiced mixture being cooked in a large steel vessel",cat:"Catering"},
    {src:IMGF[1],alt:"Freshly prepared dishes packed in steel containers",cat:"Catering"},
    {src:IMGF[2],alt:"Stack of freshly made flatbreads",cat:"Catering"},
    {src:IMGF[3],alt:"Seasoned rice cooked in a steel vessel",cat:"Catering"},
    {src:IMGK[0],alt:"Pooja setup framed by white and red flower petals on a black counter",cat:"Kitchen Décor"},
    {src:IMGK[1],alt:"Elephant and doll figurines with a petal rangoli on a kitchen counter",cat:"Kitchen Décor"},
    {src:IMGK[2],alt:"Peacock cut-outs, brass lamps and sweets arranged on a marigold-petal border",cat:"Kitchen Décor"},
    {src:IMGG[0],alt:"Navy and teal travel duffel bags and a backpack for corporate gifting",cat:"Corporate Gifting"},
    {src:IMGG[1],alt:"Teal green and black backpack, available for bulk corporate orders",cat:"Corporate Gifting"},
    {src:IMGG[2],alt:"Backpack colour options: teal green, maroon, dark navy, navy blue, grey and black",cat:"Corporate Gifting"},
    {src:IMGM[0],alt:"Bags packed in plastic for a bulk corporate order",cat:"Corporate Gifting"},
    {src:IMGM[1],alt:"Three packed bags in navy, blue and olive ready for delivery",cat:"Corporate Gifting"}
  ]
};
/* ================================================================= */
const $=(s,r=document)=>r.querySelector(s);
const wa=t=>`https://wa.me/${CONFIG.whatsapp.replace(/\D/g,"")}${t?"?text="+encodeURIComponent(t):""}`;
$("#yr").textContent=new Date().getFullYear();
$("#waBtn").href=wa("Hello Sarvonnathi Events, I’d like to enquire about an event.");
$("#waFoot").href=wa("");
$("#contactLines").innerHTML=[CONFIG.phone&&`Phone: <a href="tel:+918553526985">8553526985</a>`,CONFIG.email&&`Email: <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`].filter(Boolean).join("<br>");
if(CONFIG.aboutImage){$("#aboutPh").outerHTML=`<img src="${CONFIG.aboutImage}" alt="An event by Sarvonnathi Events" loading="lazy" style="width:100%;border-radius:18px">`}

/* Services */
const svcs=CONFIG.services.length?CONFIG.services:[1,2,3].map(n=>({name:"Service "+n,desc:"Add a verified service from the Instagram account.",ph:1}));
$("#svcGrid").innerHTML=svcs.map(s=>`<article class="card">${s.img?`<img src="${s.img}" alt="${s.name}" loading="lazy" style="width:100%;aspect-ratio:16/10;object-fit:cover;object-position:50% ${s.pos||50}%">`:`<div class="ph">Photo placeholder</div>`}<div class="body"><h3>${s.name}</h3><p>${s.desc}</p><a class="link" href="#contact" data-svc="${s.ph?"":s.name}">Enquire about this →</a></div></article>`).join("");
CONFIG.services.forEach(s=>{$("#types").insertAdjacentHTML("beforeend",`<option value="${s.name}">`);$("#footSvc").insertAdjacentHTML("beforeend",`<li><a href="#services">${s.name}</a></li>`)});
if(!CONFIG.services.length)$("#footSvc").innerHTML=`<li><a href="#services">View services</a></li>`;
document.addEventListener("click",e=>{const a=e.target.closest("[data-svc]");if(a&&a.dataset.svc)$("#type").value=a.dataset.svc});

/* Gallery + filters + lightbox */
const photos=CONFIG.photos.length?CONFIG.photos:Array.from({length:6},(_,i)=>({ph:1,cat:"All",h:[220,300,240,320,260,280][i]}));
const cats=[...new Set(CONFIG.photos.map(p=>p.cat).filter(Boolean))];
function draw(c){$("#gallery").innerHTML=photos.filter(p=>!c||c==="All"||p.cat===c).map(p=>p.ph?`<div class="ph" style="min-height:${p.h}px;margin-bottom:16px">Event photo placeholder</div>`:`<button data-src="${p.src}" aria-label="Open ${p.alt||"photo"}"><img src="${p.src}" alt="${p.alt||"Event photo"}" loading="lazy"></button>`).join("")}
if(cats.length>1){const f=$("#filters");["All",...cats].forEach((c,i)=>{const b=document.createElement("button");b.textContent=c;b.setAttribute("aria-pressed",i==0);b.onclick=()=>{[...f.children].forEach(x=>x.setAttribute("aria-pressed",x===b));draw(c)};f.append(b)})}
draw();
const lb=$("#lb");
$("#gallery").addEventListener("click",e=>{const b=e.target.closest("button[data-src]");if(b){$("img",lb).src=b.dataset.src;lb.classList.add("on");$("button",lb).focus()}});
const close=()=>lb.classList.remove("on");
lb.addEventListener("click",e=>{if(e.target!==$("img",lb))close()});
addEventListener("keydown",e=>{if(e.key==="Escape")close()});

/* Mobile menu */
const m=$("#menu"),nav=$("#nav");
m.onclick=()=>m.setAttribute("aria-expanded",nav.classList.toggle("open"));
nav.onclick=e=>{if(e.target.tagName==="A"){nav.classList.remove("open");m.setAttribute("aria-expanded",false)}};

/* Form */
const f=$("#f");
f.addEventListener("submit",e=>{
  e.preventDefault();let ok=true;
  const rules={name:v=>v.trim()?"":"Please enter your name.",phone:v=>/^[+\d][\d\s-]{6,}$/.test(v.trim())?"":"Enter a valid phone number.",email:v=>!v||/^\S+@\S+\.\S+$/.test(v)?"":"Enter a valid email.",type:v=>v.trim()?"":"Tell us the event type."};
  for(const k in rules){const el=$("#"+k),msg=rules[k](el.value);el.nextElementSibling.textContent=msg;el.setAttribute("aria-invalid",!!msg);if(msg)ok=false}
  if(!ok){$("#status").textContent="Please fix the highlighted fields.";return}
  const g=id=>$("#"+id).value.trim()||"-";
  const text=`New enquiry – Sarvonnathi Events\nName: ${g("name")}\nPhone: ${g("phone")}\nEmail: ${g("email")}\nEvent type: ${g("type")}\nDate: ${g("date")}\nLocation: ${g("loc")}\nBudget: ${g("budget")}\nRequirements: ${g("req")}`;
  window.open(wa(text),"_blank","noopener");
  $("#status").textContent="Opening WhatsApp with your enquiry…";f.reset();
});

/* Reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv,.card,.steps li").forEach(el=>{el.classList.add("rv");io.observe(el)});

/* Visual effects */
(()=>{
const R=matchMedia("(prefers-reduced-motion:reduce)").matches;
[1,2,3].forEach((n,i)=>{const im=document.querySelectorAll(".arch img")[i],p=CONFIG.photos[n];if(im&&p){im.src=p.src}});
const bar=document.createElement("div");bar.id="bar";document.body.prepend(bar);
const ar=[...document.querySelectorAll(".arch")];
const onS=()=>{const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(m>0?y/m:0)+")";if(!R&&y<900)ar.forEach((a,i)=>a.style.setProperty("--py",(y*(.05+i*.04))+"px"))};
addEventListener("scroll",onS,{passive:true});onS();
document.querySelectorAll(".card").forEach(k=>{k.addEventListener("pointermove",e=>{if(R||e.pointerType!=="mouse")return;const r=k.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;k.style.transition="transform .1s";k.style.transform="perspective(800px) rotateY("+dx*8+"deg) rotateX("+(-dy*8)+"deg) translateY(-6px)"});k.addEventListener("pointerleave",()=>{k.style.transition="transform .6s";k.style.transform=""})});
const c=document.getElementById("petals"),x=c.getContext("2d");let W,H;const cols=["#f0cf7a","#e8b923","#c8203a","#ffffff","#e85d8a"],ps=[];
const rs=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight};rs();addEventListener("resize",rs);
const N=innerWidth<700?20:42;for(let i=0;i<N;i++)ps.push({x:Math.random()*W,y:Math.random()*H,r:4+Math.random()*7,s:.3+Math.random()*.9,a:Math.random()*6,v:.01+Math.random()*.02,c:cols[i%5]});
let vis=true;new IntersectionObserver(e=>{vis=e[0].isIntersecting}).observe(c);
const tick=()=>{if(vis){x.clearRect(0,0,W,H);ps.forEach(p=>{p.y+=p.s;p.a+=p.v;p.x+=Math.sin(p.a)*.6;if(p.y>H+10){p.y=-10;p.x=Math.random()*W}x.save();x.translate(p.x,p.y);x.rotate(p.a);x.globalAlpha=.75;x.fillStyle=p.c;x.beginPath();x.ellipse(0,0,p.r,p.r*.5,0,0,7);x.fill();x.restore()})}requestAnimationFrame(tick)};
if(!R)tick();
})();

/* Floating buttons */
(()=>{const w=document.getElementById("waFab"),t=document.getElementById("toTop");w.href=wa("Hello Sarvonnathi Events, I’d like to enquire about an event.");addEventListener("scroll",()=>t.classList.toggle("show",scrollY>600),{passive:true});t.onclick=()=>scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"})})();
