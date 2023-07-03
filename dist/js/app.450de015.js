(function(){"use strict";var e={3809:function(e,t,a){var o=a(9242),n=a(3396);function l(e,t){const a=(0,n.up)("router-link"),o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",null,[(0,n.Wm)(a,{to:"/Home"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Uk)(" | "),(0,n.Wm)(a,{to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1})]),(0,n.Wm)(o)],64)}var i=a(89);const d={},s=(0,i.Z)(d,[["render",l]]);var r=s,c=a(2483),u=a(7139);const f=(0,n._)("head",null,[(0,n._)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"}),(0,n._)("link",{rel:"stylesheet",href:"path/to/font-awesome/css/font-awesome.min.css"})],-1),p={class:"background"},h={class:"left-side"},b={class:"left-side-container"},m=(0,n.uE)('<div><div class="profile-picture"><div class="circle button"><i class="fa fa-upload fa-2x"></i></div></div><div class="profile-button button button::before button:hover::before button:hover button:active"><i class="fa fa-user icons-left-side"></i> Profile </div></div>',1),v=(0,n._)("div",{class:"settings-button button button::before button:hover::before button:hover button:active"},[(0,n._)("i",{class:"fa fa-cog icons-left-side"}),(0,n.Uk)(" Settings ")],-1),g=(0,n._)("i",{class:"gg-log-out icons-left-side",style:{"margin-right":"18%"}},null,-1),_={class:"main-part"},w=(0,n._)("div",{class:"to-do-header"},[(0,n._)("span",null,[(0,n._)("h1",null,"TO DO's ")])],-1),y={class:"to-do-body"},k={key:0,id:"todoTable"},T={class:"TODO_name"},D={class:"TODO_deadline"},O=(0,n._)("td",null,[(0,n._)("i",{class:"fas fa-edit fa-lg edit-button edit-button i"})],-1),E=["onClick"],C=(0,n._)("td",null,[(0,n._)("i",{class:"fa fa-check-circle fa-lg edit-button edit-button i"})],-1),x={key:1,id:"todoTable"},F=(0,n._)("tr",{class:"TODOS"},[(0,n._)("td",{class:"TODO_name"}),(0,n._)("td",{class:"TODO_date"})],-1),P=[F],j={class:"TODO_input"},I={class:"right-side"};function S(e,t,a,l,i,d){const s=(0,n.up)("ScoreboardView");return(0,n.wg)(),(0,n.iD)(n.HY,null,[f,(0,n._)("div",p,[(0,n._)("div",h,[(0,n._)("div",b,[m,(0,n._)("div",null,[v,(0,n._)("div",{class:"logout-button button button::before button:hover::before button:hover button:active",onClick:t[0]||(t[0]=e=>d.navigateToLogin())},[g,(0,n.Uk)(" Logout ")])])])]),(0,n._)("div",_,[w,(0,n._)("div",y,[i.todolist&&i.todolist.length>0?((0,n.wg)(),(0,n.iD)("table",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.todolist,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id,class:"TODOS"},[(0,n._)("td",T,(0,u.zw)(e.name?e.name:" "),1),(0,n._)("td",D,(0,u.zw)(e.date?e.date:" "),1),O,(0,n._)("td",null,[(0,n._)("i",{class:"fas fa-trash fa-lg edit-button edit-button i",id:"'deleteTodo-' + todo.id",onClick:t=>d.deleteTodo(e.id)},null,8,E)]),C])))),128))])):((0,n.wg)(),(0,n.iD)("table",x,P)),(0,n._)("div",j,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.todoName=e),type:"text",class:"input",placeholder:"To-do"},null,512),[[o.nr,i.todoName]]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.todoDate=e),class:"input",placeholder:"Date"},null,512),[[o.nr,i.todoDate]]),(0,n._)("i",{class:"fa fa-plus fa-lg edit-button edit-button i todo_add_button",onClick:t[3]||(t[3]=(...e)=>d.addTask&&d.addTask(...e))})])])]),(0,n._)("div",I,[(0,n.Wm)(s)])])],64)}a(7658);const L=(0,n._)("head",null,[(0,n._)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"}),(0,n._)("link",{rel:"stylesheet",href:"path/to/font-awesome/css/font-awesome.min.css"})],-1),B=(0,n._)("h1",{class:"title"}," Scoreboard ",-1),H={class:"layout"},A={key:0,id:"group"},U={key:1,id:"group"},N=(0,n._)("tr",{class:"TODOS"},[(0,n._)("td",null," NO USERS AVAILABLE ")],-1),V=[N];function W(e,t,a,o,l,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[L,(0,n._)("div",null,[B,(0,n._)("div",H,[l.group&&l.group.length>0?((0,n.wg)(),(0,n.iD)("table",A,[(0,n.Uk)(" Diese Zeile geht durch alle To-do's durch "),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.group,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,u.zw)(e.firstname?e.firstname:" "),1),(0,n._)("td",null,(0,u.zw)(e.score?e.score:" "),1)])))),128))])):((0,n.wg)(),(0,n.iD)("table",U,V))])])],64)}var q={name:"ScoreboardView",components:{},data(){return{group:[],firstname:"",userScore:""}},methods:{loadScores(e){const t="http://localhost:8080/getGroup/"+e,a={method:"GET",redirect:"follow"};fetch(t,a).then((e=>e.json())).then((e=>{this.group=e})).catch((e=>console.log("scores cant be loaded",e)))}},mounted(){const e=this.$route.params.id;this.loadScores(e)}};const z=(0,i.Z)(q,[["render",W]]);var R=z,Z={name:"HomeView",components:{ScoreboardView:R},data(){return{todolist:[],todoName:"",todoDate:""}},methods:{navigateToLogin(){this.$router.push("/login")},addTask(){const e={todoName:this.todoName,todoDeadline:this.todoDate},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:8080/add",t).then((e=>e.json())).then((e=>{const t=document.getElementById("todoTable"),a=document.createElement("tr"),o=document.createElement("td"),n=document.createElement("td"),l=document.createElement("i"),i=document.createElement("i"),d=document.createElement("i");a.classList.add("TODO"),o.classList.add("TODO_name"),n.classList.add("TODO_deadline"),l.classList.add("fas","fa-edit","fa-lg","edit-button","i"),i.classList.add("fas","fa-trash","fa-lg","edit-button","i"),d.classList.add("fa","fa-check-circle","fa-lg","edit-button","i"),a.appendChild(o),a.appendChild(n),a.appendChild(l),a.appendChild(i),a.appendChild(d),t.appendChild(a)})).catch((e=>{console.log(e)}))},loadTasks(e){const t="http://localhost:8080/alltodos/"+e,a={method:"GET",redirect:"follow"};fetch(t,a).then((e=>e.json())).then((e=>{this.todolist=e})).catch((e=>console.log("todos cant be loaded",e)))},deleteTodo(e){const t=this.todolist.findIndex((t=>t.id===e));-1!==t&&this.todolist.splice(t,1);const a="http://localhost:8080/delete/"+e,o={method:"DELETE",redirect:"follow"};fetch(a,o).then((e=>{e.ok||console.log("Todo deletion failed")})).catch((e=>{console.log("Todo deletion failed",e)}))}},mounted(){const e=this.$route.params.id;this.loadTasks(e)}};const Y=(0,i.Z)(Z,[["render",S]]);var M=Y;const $=e=>((0,n.dD)("data-v-67addf74"),e=e(),(0,n.Cn)(),e),G={class:"container"},J={class:"DivWrapper"},K=$((()=>(0,n._)("div",{class:"firstDiv"},null,-1))),Q={class:"secondDiv"},X=$((()=>(0,n._)("h1",null,"Login into your Home",-1))),ee={class:"WrapperLoginForm"},te=(0,n.uE)('<div class="loginForm" data-v-67addf74><label for="exampleInputEmail1" class="Form-titles" data-v-67addf74><b data-v-67addf74><h2 data-v-67addf74>Email Address</h2></b></label><input type="email" class="InputFields" id="exampleInputEmail1" required aria-describedby="emailHelp" data-v-67addf74><div id="emailHelp" class="form-text" data-v-67addf74>We&#39;ll never share your email with anyone else.</div></div><div class="loginForm" data-v-67addf74><label for="exampleInputPassword1" class="Form-titles" data-v-67addf74><b data-v-67addf74><h2 data-v-67addf74>Password</h2></b></label><input type="password" class="InputFields" id="exampleInputPassword1" required data-v-67addf74></div><div class="ForgotPassword" data-v-67addf74><a href="http://localhost:3000/login" data-v-67addf74><b data-v-67addf74>Passwort vergessen?</b></a><br data-v-67addf74></div><div class="Checkbox" data-v-67addf74><input type="checkbox" class="form-check-input" id="exampleCheck1" data-v-67addf74><label class="form-check-label" for="exampleCheck1" data-v-67addf74>  Check me out</label></div>',4),ae={class:"LoginButtonDiv"},oe=$((()=>(0,n._)("b",null,"Login",-1))),ne=[oe],le=$((()=>(0,n._)("br",null,null,-1))),ie=$((()=>(0,n._)("br",null,null,-1))),de=$((()=>(0,n._)("b",null,"Registrieren",-1))),se=$((()=>(0,n._)("div",{class:"thirdDiv"},null,-1)));function re(e,t,a,o,l,i){return(0,n.wg)(),(0,n.iD)("div",G,[(0,n._)("div",J,[K,(0,n._)("div",Q,[(0,n._)("form",null,[X,(0,n._)("div",ee,[te,(0,n._)("div",ae,[(0,n._)("button",{type:"submit",class:"LoginButton",onClick:t[0]||(t[0]=e=>i.navigateToHomeView())},ne),le,ie,(0,n._)("a",{onClick:t[1]||(t[1]=e=>i.navigateToRegistrationView())},[(0,n.Uk)("Noch keinen Account? "),de])])])])]),se])])}var ce={name:"LoginView",methods:{navigateToHomeView(){this.$router.push("/")},navigateToRegistrationView(){this.$router.push("/registration")}}};const ue=(0,i.Z)(ce,[["render",re],["__scopeId","data-v-67addf74"]]);var fe=ue;const pe=e=>((0,n.dD)("data-v-b1f042d8"),e=e(),(0,n.Cn)(),e),he={class:"container"},be={class:"DivWrapper"},me=pe((()=>(0,n._)("div",{class:"firstDiv"},null,-1))),ve={class:"secondDiv"},ge=pe((()=>(0,n._)("h1",null,"Register To Manage Your Shared Flat",-1))),_e={class:"WrapperLoginForm"},we=(0,n.uE)('<div class="loginForm" data-v-b1f042d8><label for="exampleInputEmail1" class="Form-titles" data-v-b1f042d8><b data-v-b1f042d8><h2 data-v-b1f042d8>Email Address</h2></b></label><input type="email" class="InputFields" id="exampleInputEmail1" required aria-describedby="emailHelp" data-v-b1f042d8><label for="exampleInputEmail1" class="Form-titles" data-v-b1f042d8><b data-v-b1f042d8><h2 data-v-b1f042d8>Confirm Email Address</h2></b></label><input type="email" class="InputFields" id="confirmEmail" required aria-describedby="emailHelp" data-v-b1f042d8></div><div class="loginForm" data-v-b1f042d8><label for="exampleInputPassword1" class="Form-titles" data-v-b1f042d8><b data-v-b1f042d8><h2 data-v-b1f042d8>Password</h2></b></label><input type="password" class="InputFields" id="exampleInputPassword1" required data-v-b1f042d8><label for="exampleInputPassword1" class="Form-titles" data-v-b1f042d8><b data-v-b1f042d8><h2 data-v-b1f042d8>Confirm Password</h2></b></label><input type="password" class="InputFields" id="confirmPassword" required data-v-b1f042d8></div><div class="ForgotPassword" data-v-b1f042d8><a href="http://localhost:3000/login" data-v-b1f042d8><b data-v-b1f042d8>Passwort vergessen?</b></a><br data-v-b1f042d8></div><div class="Checkbox" data-v-b1f042d8><input type="checkbox" class="form-check-input" id="exampleCheck1" data-v-b1f042d8><label class="form-check-label" for="exampleCheck1" data-v-b1f042d8>  Check me out</label></div>',4),ye={class:"LoginButtonDiv"},ke=pe((()=>(0,n._)("b",null,"Register",-1))),Te=[ke],De=pe((()=>(0,n._)("br",null,null,-1))),Oe=pe((()=>(0,n._)("br",null,null,-1))),Ee=pe((()=>(0,n._)("a",{href:"http://localhost:3000/login"},[(0,n.Uk)("Schon einen Account? "),(0,n._)("b",null,"Zum Login")],-1))),Ce=pe((()=>(0,n._)("div",{class:"thirdDiv"},null,-1)));function xe(e,t,a,o,l,i){return(0,n.wg)(),(0,n.iD)("div",he,[(0,n._)("div",be,[me,(0,n._)("div",ve,[(0,n._)("form",null,[ge,(0,n._)("div",_e,[we,(0,n._)("div",ye,[(0,n._)("button",{type:"submit",class:"LoginButton",onClick:t[0]||(t[0]=(...e)=>i.addUser&&i.addUser(...e))},Te),De,Oe,Ee])])])]),Ce])])}var Fe={name:"RegistrationView",methods:{addUser(){const e=document.getElementById("exampleInputEmail1").value,t=document.getElementById("confirmEmail").value,a=document.getElementById("exampleInputPassword1").value,o=document.getElementById("confirmPassword").value;if(""===e||""===t||""===a||""===o)return void alert("Bitte füllen Sie alle Felder aus");if(e!==t)return void alert("Die E-Mail-Adressen stimmen nicht überein");if(a!==o)return void alert("Die Passwörter stimmen nicht überein");const n={email:e,password:a},l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("http://localhost:8080/register",l).then((e=>e.json())).then((e=>{e.ok?console.log("Benutzer wurde erfolgreich erstellt"):console.log("Fehler bei der Benutzererstellung")})).catch((e=>{console.error("Fehler:",e)})),console.log("Neuer Benutzer:",n)}}};const Pe=(0,i.Z)(Fe,[["render",xe],["__scopeId","data-v-b1f042d8"]]);var je=Pe;const Ie=[{path:"/",name:"home",component:M},{path:"/login",name:"login",component:fe},{path:"/registration",name:"registration",component:je},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,7381))}],Se=(0,c.p7)({history:(0,c.PO)("/Webtech_Project_Frontend/"),base:"/Webtech_Project_Frontend/",routes:Ie});var Le=Se;(0,o.ri)(r).use(Le).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,l){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],l=e[c][2];for(var d=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[s])}))?o.splice(s--,1):(d=!1,l<i&&(i=l));if(d){e.splice(c--,1);var r=n();void 0!==r&&(t=r)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,n,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.ff84e40f.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="webtech_project_frontend:";a.l=function(o,n,l,i){if(e[o])e[o].push(n);else{var d,s;if(void 0!==l)for(var r=document.getElementsByTagName("script"),c=0;c<r.length;c++){var u=r[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+l){d=u;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",t+l),d.src=o),e[o]=[n];var f=function(t,a){d.onerror=d.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),s&&document.head.appendChild(d)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/Webtech_Project_Frontend/"}(),function(){var e={143:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var l=new Promise((function(a,o){n=e[t]=[a,o]}));o.push(n[2]=l);var i=a.p+a.u(t),d=new Error,s=function(o){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;d.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",d.name="ChunkLoadError",d.type=l,d.request=i,n[1](d)}};a.l(i,s,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,l,i=o[0],d=o[1],s=o[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(n in d)a.o(d,n)&&(a.m[n]=d[n]);if(s)var c=s(a)}for(t&&t(o);r<i.length;r++)l=i[r],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},o=self["webpackChunkwebtech_project_frontend"]=self["webpackChunkwebtech_project_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(3809)}));o=a.O(o)})();
//# sourceMappingURL=app.450de015.js.map