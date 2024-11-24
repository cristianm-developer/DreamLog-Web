import{a as j}from"./chunk-CUR5LKRQ.js";import{A as B,a as x,b as m,c as P,d as _,e as b,f as O,g as w,h as F,i as I,z as d}from"./chunk-KEYBXCQU.js";import"./chunk-FCPVGFSK.js";import{Aa as E,C as l,D as h,N as c,O as s,T as u,W as t,X as e,Y as a,_ as C,ca as r,ga as v,qa as N,xa as k,y as f,ya as M,za as y}from"./chunk-L5JFWJQF.js";import{h as g}from"./chunk-TTTF4TUG.js";var H=()=>["..","register"],S=class o{constructor(n,i,p){this.firebaseAuth=n;this.formBuilder=i;this.router=p;this.initializeFormGroup()}formGroup;initializeFormGroup(){this.formGroup=this.formBuilder.group({email:["",[m.required,m.email]],password:["",[m.required,m.maxLength(30)]]})}checkInputs(){return this.formGroup.invalid?(alert("Email and password required"),!1):!0}login(){return g(this,null,function*(){if(this.checkInputs())try{yield this.firebaseAuth.loginWithEmailAndPassword(this.formGroup.get("email").value,this.formGroup.get("password").value),alert("Welcome!"),this.router.navigate(["app","api"])}catch(n){alert(n)}})}static \u0275fac=function(i){return new(i||o)(s(d),s(F),s(M))};static \u0275cmp=l({type:o,selectors:[["app-login"]],decls:18,vars:3,consts:[[1,"card"],["id","Logo"],["src","/svg/logo.svg"],[3,"submit","formGroup"],[1,"inputWrapper"],["type","text","placeholder","myname@mail.com","formControlName","email"],["type","password","formControlName","password"],["type","submit",1,"button"],["id","RegisterLink",3,"routerLink"]],template:function(i,p){i&1&&(t(0,"main",0)(1,"div",1),a(2,"img",2),e(),t(3,"h3"),r(4,"Login"),e(),t(5,"form",3),C("submit",function(){return p.login()}),t(6,"div",4)(7,"label"),r(8,"Email"),e(),a(9,"input",5),e(),t(10,"div",4)(11,"label"),r(12,"Password"),e(),a(13,"input",6),e(),t(14,"button",7),r(15,"Login"),e()(),t(16,"a",8),r(17,"Don't have an account yet? Sign Up"),e()()),i&2&&(c(5),u("formGroup",p.formGroup),c(11),u("routerLink",v(2,H)))},dependencies:[y,b,x,P,_,O,w],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color-scheme:dark}main[_ngcontent-%COMP%]{padding:30px;display:flex;flex-direction:column;gap:8px}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}#Logo[_ngcontent-%COMP%]{height:30dvh;overflow:hidden;display:flex;justify-content:center}#Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:cover}#RegisterLink[_ngcontent-%COMP%]{opacity:.6;transition:opacity var(--timeHoverAnimation)}#RegisterLink[_ngcontent-%COMP%]:hover{opacity:1}.inputWrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.inputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:8px;height:1.4rem}h3[_ngcontent-%COMP%]{text-align:center;margin:0}"]})};var U=()=>["..","login"],L=class o{constructor(n,i,p){this.formBuilder=n;this.firebaseAuth=i;this.router=p;this.initializeFormGroup()}formGroup;initializeFormGroup(){this.formGroup=this.formBuilder.group({email:["",[m.required,m.email]],password:["",[m.required,m.maxLength(30)]],passwordConfirmation:["",[m.required,m.maxLength(30)]]})}checkInputs(){return this.formGroup.invalid?(alert("Email and password required"),!1):this.formGroup.get("password")?.value!=this.formGroup.get("passwordConfirmation")?.value?(alert("Password and password confirmation must be the same"),!1):!0}register(){return g(this,null,function*(){if(this.checkInputs())try{yield this.firebaseAuth.registerWithEmailAndPassword(this.formGroup.get("email").value,this.formGroup.get("password").value),alert("Welcome!"),this.router.navigate(["app","api"])}catch(n){alert(n)}})}static \u0275fac=function(i){return new(i||o)(s(F),s(d),s(M))};static \u0275cmp=l({type:o,selectors:[["app-register"]],decls:22,vars:3,consts:[[1,"card"],["id","Logo"],["src","/svg/logo.svg"],[3,"submit","formGroup"],[1,"inputWrapper"],["type","text","placeholder","myname@mail.com","formControlName","email"],["type","password","formControlName","password"],["type","password","formControlName","passwordConfirmation"],["type","submit",1,"button"],["id","RegisterLink",3,"routerLink"]],template:function(i,p){i&1&&(t(0,"main",0)(1,"div",1),a(2,"img",2),e(),t(3,"h3"),r(4,"Register"),e(),t(5,"form",3),C("submit",function(){return p.register()}),t(6,"div",4)(7,"label"),r(8,"Email"),e(),a(9,"input",5),e(),t(10,"div",4)(11,"label"),r(12,"Password"),e(),a(13,"input",6),e(),t(14,"div",4)(15,"label"),r(16,"Confirm Password"),e(),a(17,"input",7),e(),t(18,"button",8),r(19,"Register"),e(),t(20,"a",9),r(21,"Do you already have an account? Sign in here."),e()()()),i&2&&(c(5),u("formGroup",p.formGroup),c(15),u("routerLink",v(2,U)))},dependencies:[y,b,x,P,_,O,w],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color-scheme:dark}main[_ngcontent-%COMP%]{padding:30px;display:flex;flex-direction:column;gap:8px}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}#Logo[_ngcontent-%COMP%]{height:30dvh;overflow:hidden;display:flex;justify-content:center}#Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:cover}#RegisterLink[_ngcontent-%COMP%]{opacity:.6;transition:opacity var(--timeHoverAnimation)}#RegisterLink[_ngcontent-%COMP%]:hover{opacity:1}.inputWrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.inputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:8px;height:1.4rem}h3[_ngcontent-%COMP%]{text-align:center;margin:0}"]})};var R=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=l({type:o,selectors:[["app-auth"]],decls:5,vars:0,consts:[["id","BgImage"],["src","bg/bg1.webp"]],template:function(i,p){i&1&&(t(0,"div",0),a(1,"img",1),e(),t(2,"section"),a(3,"app-topbar")(4,"router-outlet"),e())},dependencies:[k,j],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;background-color:var(--colorBackground1)}[_nghost-%COMP%]   #BgImage[_ngcontent-%COMP%]{width:100%;height:100%;z-index:0;position:fixed}[_nghost-%COMP%]   #BgImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;opacity:.4}[_nghost-%COMP%]   [_ngcontent-%COMP%]:not(#BgImage){z-index:1}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   #ContentWrapper[_ngcontent-%COMP%]{height:100%;display:flex;position:relative;overflow:hidden}[_nghost-%COMP%]   #ContentWrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:100%;height:100%}"]})};var J=[{path:"",component:R,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:S},{path:"register",component:L}]}],A=class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=h({type:o});static \u0275inj=f({imports:[E.forChild(J),E]})};var q=class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=h({type:o});static \u0275inj=f({providers:[d],imports:[N,A,B,I]})};export{q as AuthModule};
