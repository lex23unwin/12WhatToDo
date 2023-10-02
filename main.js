(()=>{"use strict";const e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let t;const n=new Uint8Array(16);function o(){if(!t&&(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));const s=function(t,n,s){if(e.randomUUID&&!n&&!t)return e.randomUUID();const r=(t=t||{}).random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){s=s||0;for(let e=0;e<16;++e)n[s+e]=r[e];return n}return function(e,t=0){return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}(r)};class r{constructor(e){this.name=e,this.tasks=[],this.id=s()}addTask=e=>{this.tasks.includes(e)||this.tasks.push(e)};deleteTask=e=>{this.tasks=this.tasks.filter((t=>t.id!==e))}}const c=(()=>{let e=[];const t=e=>{const[t]=c.projects.filter((e=>{e.name}));return t};return{projects:e,clearAllProjects:()=>{e=[]},addProject:e=>{c.projects.some((t=>{t.name.toLowerCase(),e.name.toLowerCase()}))?alert("Duplicate project name, please enter a unique project name"):c.projects.push(e)},deleteProject:e=>{c.projects=c.projects.filter((t=>proj!==e))},getProjectByName:t,addInbox:()=>{t()||c.projects.push(new r("Inbox"))},getInboxProject:()=>{const[e]=c.projects.filter((e=>{e.name}));return e},getTaskById:(e,t)=>{const[n]=t.tasks.filter((e=>{e.id}));return n}}})(),d=c;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}class u{constructor(e,t,n){this.title=e,this.dueDate=void 0,this.completed=!1,this.id=s()}addDueDate=e=>{const t=new Date(e);(function(e){if(l(1,arguments),!function(e){return l(1,arguments),e instanceof Date||"object"===i(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=function(e){l(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===i(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(e);return!isNaN(Number(t))})(t)&&(this.dueDate=t)};toggleCompleted=()=>{this.completed=!this.completed};createTaskFromStorage=e=>{this.title=e.title,this.description=e.description,this.completed=e.completed,this.priority=e.priority,this.addDueDate(e.dueDate)}}const m=(()=>{const e=()=>{d.addInbox();const e=new r("Work"),t=new r("Personal");let n;d.getInboxProject(),d.addProject(e),n=new u("Do 313 Lab"),n.addDueDate(new Date),n.priority="medium",t.addTask(n),d.addProject(t)};return{save:()=>{localStorage.setItem("app",JSON.stringify(d.projects))},read:()=>{if(d.clearAllProjects(),localStorage.getItem("app"))try{JSON.parse(localStorage.getItem("app")).forEach((e=>{const t=new r(e.name);d.addProject(t),e.tasks.forEach((e=>{const n=new u;n.createTaskFromStorage(e),t.addTask(n)}))}))}catch(t){d.clearAllProjects(),e()}else e()}}})();m.read(),(()=>{const e=document.getElementById("nav-projects-content"),t=document.getElementById("new-project-button"),n=document.getElementById("pop-up-form"),o=document.getElementById("project-title"),a=document.getElementById("pop-up-add-project"),s=document.getElementById("main-tasks-header"),c=document.getElementById("main-tasks-content-none"),i=document.querySelector("#main-tasks-content-form"),l=(document.getElementById("new-task-button"),document.getElementById("form-id")),p=document.getElementById("task-title"),y=(document.getElementById("project-name"),document.getElementById("datetime-btn")),g=document.getElementById("main-tasks-content"),f=document.getElementById("form-x"),h=document.getElementById("form-x2");let v="";function b(e){g.innerHTML="",e.tasks.forEach((t=>{const n=document.createElement("div");n.classList.add("task-item-display");const o=document.createElement("div");o.textContent=t.title;const a=document.createElement("div");a.textContent=function(e){if(""==e)return"No Due Date";{const t={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString(void 0,t)}}(t.dueDate);const s=document.createElement("button");s.classList.add("delete-task-button"),s.textContent="X",s.addEventListener("click",(()=>{const n=t.id;e.deleteTask(n),b(e)})),n.appendChild(o),n.appendChild(a),n.appendChild(s),g.appendChild(n),m.save(),console.log("did a save")}))}t.addEventListener("click",(()=>{a.style.display="flex"})),h.addEventListener("click",(()=>{o.value="",a.style.display="none"})),n.addEventListener("submit",(()=>{const t=o.value,n=new r(t);d.addProject(n),function(t){const n=document.createElement("div");n.classList.add("project-item"),n.textContent=t.name,function(e,t){t.addEventListener("click",(()=>{b(e),v=e,s.textContent=e.name,c.textContent="";const t=document.createTextNode("Click on the plus sign to add more tasks!"),n=document.createElement("i");n.classList.add("fas","fa-plus"),n.style.cursor="pointer",function(e){e.addEventListener("click",(()=>{i.style.display="flex"})),m.save(),console.log("did a save")}(n),c.appendChild(n),c.appendChild(t)})),m.save(),console.log("did a save")}(t,n),e.appendChild(n),m.save(),console.log("did a save")}(n),a.style.display="none",o.value="",m.save(),console.log("did a save")})),f.addEventListener("click",(e=>{e.preventDefault(),console.log("we in here"),p.value="",y.value="",console.log(" reseting"),i.style.display="none",console.log("switched display"),m.save(),console.log("did a save")})),l.addEventListener("submit",(e=>{e.preventDefault();const t=function(e,t){const n=new u(e);return n.addDueDate(t),m.save(),console.log("did a save"),n}(p.value,y.value);v.addTask(t),p.value="",y.value="",i.style.display="none",b(v),m.save(),console.log("did a save")}))})()})();