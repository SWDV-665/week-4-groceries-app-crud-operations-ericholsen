(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tmrb:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab1PageModule",(function(){return p}));var i=n("TEn/"),o=n("ofXK"),r=n("3Pt+"),c=n("qtYk"),s=n("tyNb"),a=n("mrSG"),l=n("fXoL");let b=(()=>{class t{constructor(){this.items=[]}getItems(){return this.items}removeItem(t){this.items.splice(t,1)}editItem(t,e){this.items[e].name=t.name,this.items[e].quantity=t.quantity}addItem(t){this.items.push(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e){this.alertController=t,this.dataService=e}showPrompt(t,e,n){return Object(a.a)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({cssClass:"my-custom-class",header:t?"Edit Item":"Add Item",inputs:[{name:"name",placeholder:"Name",value:t?t.name:null},{name:"quantity",placeholder:"Quantity",value:t?t.quantity:null}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Save",handler:t=>{console.log("Confirm Save",t),void 0!==e?(this.dataService.editItem(t,e),n.close()):this.dataService.addItem(t)}}]});yield i.present()}))}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(i.a),l.Ob(b))},t.\u0275prov=l.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function m(t,e){1&t&&(l.Kb(0,"ion-item",9),l.Kb(1,"ion-label"),l.ec(2,"List is empty."),l.Jb(),l.Jb())}function u(t,e){if(1&t){const t=l.Lb();l.Kb(0,"ion-item-sliding",null,10),l.Kb(2,"ion-item"),l.Kb(3,"ion-label"),l.ec(4),l.Jb(),l.Kb(5,"p"),l.ec(6),l.Jb(),l.Jb(),l.Kb(7,"ion-item-options"),l.Kb(8,"ion-button",11),l.Sb("click",(function(){l.ac(t);const n=e.$implicit,i=e.index,o=l.Zb(1);return l.Ub().editItem(n,i,o)})),l.Ib(9,"ion-icon",12),l.Jb(),l.Kb(10,"ion-button",13),l.Sb("click",(function(){l.ac(t);const n=e.$implicit,i=e.index;return l.Ub().removeItem(n,i)})),l.Ib(11,"ion-icon",14),l.Jb(),l.ec(12," > "),l.Jb(),l.Jb()}if(2&t){const t=e.$implicit;l.xb(4),l.fc(t.name),l.xb(2),l.fc(t.quantity)}}const f=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.toastController=t,this.alertController=e,this.dataService=n,this.inputDialogService=i,this.title="Grocery App"}loadItems(){return this.dataService.getItems()}removeItem(t,e){return Object(a.a)(this,void 0,void 0,(function*(){console.log("Removing Item = ",t,e),(yield this.toastController.create({message:"Removing "+t.name+"...",duration:2e3})).present(),this.dataService.removeItem(e)}))}editItem(t,e,n){return Object(a.a)(this,void 0,void 0,(function*(){console.log("Edit Item = ",t,e),(yield this.toastController.create({message:"Editing "+t.name+"...",duration:2e3})).present(),console.log("Editing Item"),this.inputDialogService.showPrompt(t,e,n)}))}addItem(){return Object(a.a)(this,void 0,void 0,(function*(){console.log("Adding Item"),this.inputDialogService.showPrompt()}))}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(i.w),l.Hb(i.a),l.Hb(b),l.Hb(d))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-tab1"]],decls:15,vars:6,consts:[[3,"translucent"],["padding","",3,"fullscreen"],["collapse","condense"],["size","large"],["class","ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],[1,"ion-text-center"],["slidingItem",""],["ion-button","","color","primary","icon-start","",3,"click"],["name","create"],["ion-button","","color","danger","icon-start","",3,"click"],["name","trash"]],template:function(t,e){1&t&&(l.Kb(0,"ion-header",0),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-title"),l.ec(3),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content",1),l.Kb(5,"ion-header",2),l.Kb(6,"ion-toolbar"),l.Kb(7,"ion-title",3),l.ec(8),l.Jb(),l.Jb(),l.Jb(),l.dc(9,m,3,0,"ion-item",4),l.Kb(10,"ion-list"),l.dc(11,u,13,2,"ion-item-sliding",5),l.Jb(),l.Kb(12,"ion-fab",6),l.Kb(13,"ion-fab-button",7),l.Sb("click",(function(){return e.addItem()})),l.Ib(14,"ion-icon",8),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.Xb("translucent",!0),l.xb(3),l.gc(" ",e.title," "),l.xb(1),l.Xb("fullscreen",!0),l.xb(4),l.fc(e.title),l.xb(1),l.Xb("ngIf",0==e.loadItems().length),l.xb(2),l.Xb("ngForOf",e.loadItems()))},directives:[i.g,i.s,i.r,i.d,o.i,i.m,o.h,i.e,i.f,i.h,i.i,i.l,i.k,i.j,i.c],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(f)],s.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},imports:[[i.t,o.b,r.a,c.a,h]]}),t})()}}]);