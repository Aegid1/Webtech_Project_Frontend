(function(){"use strict";var e={4151:function(e,t,o){var n=o(9242),a=o(3396);function i(e,t){const o=(0,a.up)("router-link"),n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(o,{to:"/Home"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(o,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})]),(0,a.Wm)(n)],64)}var r=o(89);const l={},s=(0,r.Z)(l,[["render",i]]);var c=s,d=o(2483);const u=(0,a._)("head",null,[(0,a._)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"}),(0,a._)("link",{rel:"stylesheet",href:"path/to/font-awesome/css/font-awesome.min.css"})],-1),f={class:"background"},m=(0,a.uE)('<div class="left-side"><div class="left-side-container"><div><div class="profile-picture"><div class="circle button"><i class="fa fa-upload fa-2x"></i></div></div><div class="profile-button button button::before button:hover::before button:hover button:active"><i class="fa fa-user icons-left-side"></i> Profile </div></div><div><div class="settings-button button button::before button:hover::before button:hover button:active"><i class="fa fa-cog icons-left-side"></i> Settings </div><div class="logout-button button button::before button:hover::before button:hover button:active"><i class="gg-log-out icons-left-side" style="margin-right:18%;"></i> Logout </div></div></div></div>',1),p={class:"main-part"},b=(0,a._)("div",{class:"to-do-header"},[(0,a._)("span",null,[(0,a._)("h1",null,"TO DO's ")])],-1),v={class:"to-do-body"},h={class:"TODO"},g=(0,a._)("div",{class:"right-side"},null,-1);function y(e,t,o,i,r,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[u,(0,a._)("div",f,[m,(0,a._)("div",p,[b,(0,a._)("div",v,[(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.todoName=e),type:"text",class:"input",placeholder:"To-do"},null,512),[[n.nr,r.todoName]]),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.todoDate=e),class:"input",placeholder:"Date"},null,512),[[n.nr,r.todoDate]]),(0,a._)("i",{class:"fa fa-plus fa-lg edit-button edit-button i todo_add_button",onClick:t[2]||(t[2]=e=>l.addTask())})])])]),g])],64)}var w={name:"HomeView",components:{},data(){return{todolist:[],todoName:"",todoDate:""}},methods:{addTask(){const e={todoName:this.todoName,todoDate:this.todoDate},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:8080/add",t).then((e=>e.json())).then((e=>{const t=document.getElementById("todoTable"),o=document.createElement("tr"),n=document.createElement("td"),a=document.createElement("td"),i=document.createElement("i"),r=document.createElement("i"),l=document.createElement("i");o.classList.add("TODO"),n.classList.add("TODO_name"),a.classList.add("TODO_date"),i.classList.add("fas","fa-edit","fa-lg","edit-button","i"),r.classList.add("fas","fa-trash","fa-lg","edit-button","i"),l.classList.add("fa","fa-check-circle","fa-lg","edit-button","i"),o.appendChild(n),o.appendChild(a),o.appendChild(i),o.appendChild(r),o.appendChild(l),t.appendChild(o)})).catch((e=>{console.log(e)}))},loadTasks(){const e="http://localhost:8080/todo/1",t={method:"GET",redirect:"follow"};fetch(e,t).then((e=>e.json())).then((e=>e((e=>{this.todolist=e})))).catch((e=>console.log("todos cant be loaded",e)))}},mounted(){this.loadTasks()}};const k=(0,r.Z)(w,[["render",y]]);var _=k;const E={class:"container"},O=(0,a.uE)('<h1>Login into your Home</h1><br><br><div class="row"><div class="col-md-3"></div><div class="col-md-6"><form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"><div id="emailHelp" class="form-text">We&#39;ll never share your email with anyone else.</div></div><div class="mb-3"><label for="exampleInputPassword1" class="form-label">Password</label><input type="password" class="form-control" id="exampleInputPassword1"></div><div class="mb-3 form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label></div><button type="submit" class="btn btn-primary">Submit</button></form></div><div class="col-md-3"></div></div>',4),T=[O];function x(e,t,o,n,i,r){return(0,a.wg)(),(0,a.iD)("div",E,T)}var C={name:"LoginView"};const j=(0,r.Z)(C,[["render",x]]);var P=j;const D={class:"container"},N=(0,a.uE)('<h1>Registration Page</h1><br><br><div class="row"><div class="col-md-3"></div><div class="col-md-6"><form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"><div id="emailHelp" class="form-text">We&#39;ll never share your email with anyone else.</div></div><div class="mb-3"><label for="exampleInputPassword1" class="form-label">Password</label><input type="password" class="form-control" id="exampleInputPassword1"></div><div class="mb-3 form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label></div><button type="submit" class="btn btn-primary">Submit</button></form></div><div class="col-md-3"></div></div>',4),H=[N];function L(e,t,o,n,i,r){return(0,a.wg)(),(0,a.iD)("div",D,H)}var S={name:"RegistrationView"};const I=(0,r.Z)(S,[["render",L]]);var W=I;const R=[{path:"/home",name:"home",component:_},{path:"/login",name:"login",component:P},{path:"/registration",name:"registration",component:W},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,7381))}],A=(0,d.p7)({history:(0,d.PO)("/WEBTECH_PROJECT_FRONTEND/"),routes:R});var U=A;(0,n.ri)(c).use(U).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,i){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<r&&(r=i));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.6a675e72.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="webtech_project_frontend:";o.l=function(n,a,i,r){if(e[n])e[n].push(a);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+i),l.src=n),e[n]=[a];var f=function(t,o){l.onerror=l.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/WEBTECH_PROJECT_FRONTEND/"}(),function(){var e={143:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=i);var r=o.p+o.u(t),l=new Error,s=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}};o.l(r,s,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,r=n[0],l=n[1],s=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(s)var d=s(o)}for(t&&t(n);c<r.length;c++)i=r[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkwebtech_project_frontend"]=self["webpackChunkwebtech_project_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4151)}));n=o.O(n)})();
//# sourceMappingURL=app.71ca75dd.js.map