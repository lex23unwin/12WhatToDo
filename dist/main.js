(()=>{"use strict";function e(){document.querySelector("#main-container"),document.querySelector("#main-tasks-header").textContent="Today's Tasks",document.querySelector("#main-tasks-content"),document.querySelector("#main-tasks-content-none"),document.querySelector("#new-task-button").addEventListener("click",t)}function t(){document.querySelector("#main-tasks-content-none").style.display="none",document.querySelector("#main-tasks-content-form").style.display="flex"}function n(){document.querySelector("#main-container"),document.querySelector("#main-tasks-header").textContent="General Tasks",document.querySelector("#main-tasks-content"),document.querySelector("#main-tasks-content-none"),document.querySelector("#new-task-button").addEventListener("click",o)}function o(){document.querySelector("#main-tasks-content-none").style.display="none",document.querySelector("#main-tasks-content-form").style.display="flex"}function c(){document.querySelector("#main-container"),document.querySelector("#main-tasks-header").textContent="Important Tasks",document.querySelector("#main-tasks-content"),document.querySelector("#main-tasks-content-none"),document.querySelector("#new-task-button").addEventListener("click",s)}function s(){document.querySelector("#main-tasks-content-none").style.display="none",document.querySelector("#main-tasks-content-form").style.display="flex"}function r(){document.querySelector("#main-container"),document.querySelector("#main-tasks-header").textContent="This Week's Tasks",document.querySelector("#main-tasks-content"),document.querySelector("#main-tasks-content-none"),document.querySelector("#new-task-button").addEventListener("click",l)}function l(){document.querySelector("#main-tasks-content-none").style.display="none",document.querySelector("#main-tasks-content-form").style.display="flex"}document.querySelector("#new-task-button").addEventListener("click",(()=>{document.querySelector("#main-tasks-content-none").style.display="none",document.querySelector("#main-tasks-content-form").style.display="flex"})),document.querySelector("#general").addEventListener("click",(function(){const e=document.querySelector("#main-tasks-content-form");document.querySelector("#form-id").reset(),"flex"===e.style.display&&(e.style.display="none"),function(){const e=document.querySelector("#main-tasks-content-none");!1===document.querySelector("#main-tasks-content").hasChildNodes()?(e.style.display="flex",n()):function(){const e=document.querySelector("#main-tasks-content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);document.querySelector("#main-tasks-content-none").style.display="flex",n()}()}()})),document.querySelector("#important").addEventListener("click",(function(){const e=document.querySelector("#main-tasks-content-form");document.querySelector("#form-id").reset(),"flex"===e.style.display&&(e.style.display="none"),function(){const e=document.querySelector("#main-tasks-content-none");!1===document.querySelector("#main-tasks-content").hasChildNodes()?(e.style.display="flex",c()):function(){const e=document.querySelector("#main-tasks-content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);document.querySelector("#main-tasks-content-none").style.display="flex",c()}()}()})),document.querySelector("#today").addEventListener("click",(function(){const t=document.querySelector("#main-tasks-content-form");document.querySelector("#form-id").reset(),"flex"===t.style.display&&(t.style.display="none"),function(){const t=document.querySelector("#main-tasks-content-none");!1===document.querySelector("#main-tasks-content").hasChildNodes()?(t.style.display="flex",e()):function(){const t=document.querySelector("#main-tasks-content");for(;t.hasChildNodes();)t.removeChild(t.lastChild);document.querySelector("#main-tasks-content-none").style.display="flex",e()}()}()})),document.querySelector("#week").addEventListener("click",(function(){const e=document.querySelector("#main-tasks-content-form");document.querySelector("#form-id").reset(),"flex"===e.style.display&&(e.style.display="none"),function(){const e=document.querySelector("#main-tasks-content-none");!1===document.querySelector("#main-tasks-content").hasChildNodes()?(e.style.display="flex",r()):function(){const e=document.querySelector("#main-tasks-content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);document.querySelector("#main-tasks-content-none").style.display="flex",r()}()}()}))})();