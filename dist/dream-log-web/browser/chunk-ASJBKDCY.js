import{Aa as h,C as m,D as p,N as s,T as u,W as t,X as n,Y as i,ca as r,ea as y,ga as f,qa as M,xa as v,y as c,za as b}from"./chunk-L5JFWJQF.js";import"./chunk-TTTF4TUG.js";var l=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"card"]],template:function(e,C){e&1&&(i(0,"div"),t(1,"main",0)(2,"h3"),r(3,"Save Your Dreams, Share Your World"),n(),t(4,"p"),r(5,"Welcome to Dream Log, a unique space where your dreams come to life. Here, you can record every detail of your nightly adventures, preserve them forever, and share them with a community that values imagination as much as you do. Explore the dreams of other dreamers, find inspiration, and build connections through worlds shaped by creativity."),n(),t(6,"b"),r(7,"Capture your dreams, inspire the world."),n()())},styles:["[_nghost-%COMP%]{display:flex;color:var(--colorText1);padding:24px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex:1}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:24px;background-color:var(--colorBackground1-opacity-8)}b[_ngcontent-%COMP%]{text-align:end}"]})};var _=()=>[""],L=()=>["app"],d=class o{flgUserWithLogin=!1;constructor(){this.flgUserWithLogin=!!localStorage.getItem("user")}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["app-landing-page"]],decls:17,vars:5,consts:[["id","BgImage"],["src","bg/bg2.webp"],["id","Logo"],[3,"routerLink"],["src","/svg/logo.svg"],[1,"button",3,"routerLink"],["href","https://github.com/cristianm-developer/DreamLog-Web","target","blank"],[1,"bi","bi-github"]],template:function(e,C){e&1&&(t(0,"div",0),i(1,"img",1),n(),t(2,"header")(3,"div",2)(4,"a",3),i(5,"img",4),n(),t(6,"h2"),r(7,"Dreamlog"),n()(),t(8,"div")(9,"a",5),r(10),n()()(),t(11,"main"),i(12,"router-outlet"),n(),t(13,"footer"),i(14,"div"),t(15,"a",6),i(16,"i",7),n()()),e&2&&(s(4),u("routerLink",f(3,_)),s(5),u("routerLink",f(4,L)),s(),y(" ",C.flgUserWithLogin?"Go to App":"Start now for free",""))},dependencies:[v,b],styles:["[_nghost-%COMP%]{height:100dvh;box-sizing:border-box;width:100dvw;display:flex;flex-direction:column;justify-content:space-between;background-color:var(--colorBackground1)}[_nghost-%COMP%]   #BgImage[_ngcontent-%COMP%]{width:100%;height:100%;z-index:0;position:fixed}[_nghost-%COMP%]   #BgImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;opacity:.9}[_nghost-%COMP%]   [_ngcontent-%COMP%]:not(#BgImage){z-index:1}#Logo[_ngcontent-%COMP%]{height:min-content;padding:4px;opacity:1;display:flex;gap:8px;color:var(--colorText1);cursor:pointer;transition:opacity var(--timeHoverAnimation)}#Logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}#Logo[_ngcontent-%COMP%]:hover{opacity:1}#Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;object-fit:scale-down}header[_ngcontent-%COMP%]{display:flex;background-color:var(--colorBackground1-opacity-8);padding:12px;justify-content:space-between;align-items:center;box-shadow:inset 0 -37px 53px 7px #0000006b}footer[_ngcontent-%COMP%]{display:flex;background-color:var(--colorBackground1-opacity-8);padding:12px;justify-content:space-between;align-items:center;box-shadow:inset 0 -37px 53px 7px #0000006b}.button[_ngcontent-%COMP%]{padding:12px}i.bi[_ngcontent-%COMP%]{font-size:2rem;color:var(--colorText1)}a[_ngcontent-%COMP%]{text-decoration:none}"]})};var w=[{path:"",component:d,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:l}]}],g=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=p({type:o});static \u0275inj=c({imports:[h.forChild(w),h]})};var P=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=p({type:o});static \u0275inj=c({imports:[M,g]})};export{P as LandingPageModule};
