(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ol(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const pe={},Rs=[],Wt=()=>{},Qm=()=>!1,ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),al=t=>t.startsWith("onUpdate:"),ke=Object.assign,ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jm=Object.prototype.hasOwnProperty,le=(t,e)=>Jm.call(t,e),V=Array.isArray,ks=t=>Zi(t)==="[object Map]",Ys=t=>Zi(t)==="[object Set]",Oc=t=>Zi(t)==="[object Date]",K=t=>typeof t=="function",we=t=>typeof t=="string",Pt=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",oh=t=>(ge(t)||K(t))&&K(t.then)&&K(t.catch),ah=Object.prototype.toString,Zi=t=>ah.call(t),Xm=t=>Zi(t).slice(8,-1),lh=t=>Zi(t)==="[object Object]",cl=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zm=/-(\w)/g,Et=fo(t=>t.replace(Zm,(e,n)=>n?n.toUpperCase():"")),e_=/\B([A-Z])/g,ms=fo(t=>t.replace(e_,"-$1").toLowerCase()),po=fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ir=fo(t=>t?`on${po(t)}`:""),On=(t,e)=>!Object.is(t,e),wr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ch=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Dr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},t_=t=>{const e=we(t)?Number(t):NaN;return isNaN(e)?t:e};let Dc;const go=()=>Dc||(Dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function er(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=we(s)?r_(s):er(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(we(t)||ge(t))return t}const n_=/;(?![^(]*\))/g,s_=/:([^]+)/,i_=/\/\*[^]*?\*\//g;function r_(t){const e={};return t.replace(i_,"").split(n_).forEach(n=>{if(n){const s=n.split(s_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function dn(t){let e="";if(we(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=dn(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const o_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a_=ol(o_);function uh(t){return!!t||t===""}function l_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=as(t[s],e[s]);return n}function as(t,e){if(t===e)return!0;let n=Oc(t),s=Oc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Pt(t),s=Pt(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?l_(t,e):!1;if(n=ge(t),s=ge(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!as(t[o],e[o]))return!1}}return String(t)===String(e)}function ul(t,e){return t.findIndex(n=>as(n,e))}const dh=t=>!!(t&&t.__v_isRef===!0),Se=t=>we(t)?t:t==null?"":V(t)||ge(t)&&(t.toString===ah||!K(t.toString))?dh(t)?Se(t.value):JSON.stringify(t,hh,2):String(t),hh=(t,e)=>dh(e)?hh(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[qo(s,r)+" =>"]=i,n),{})}:Ys(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qo(n))}:Pt(e)?qo(e):ge(e)&&!V(e)&&!lh(e)?String(e):e,qo=(t,e="")=>{var n;return Pt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class c_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function u_(){return rt}let ye;const Go=new WeakSet;class fh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&rt.active&&rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Go.has(this)&&(Go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mc(this),mh(this);const e=ye,n=Rt;ye=this,Rt=!0;try{return this.fn()}finally{_h(this),ye=e,Rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,Mc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ia(this)&&this.run()}get dirty(){return Ia(this)}}let ph=0,pi,gi;function gh(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=pi,pi=t}function dl(){ph++}function hl(){if(--ph>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pi;){let e=pi;for(pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function mh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _h(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),fl(s),d_(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Ia(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ri))return;t.globalVersion=Ri;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ia(t)){t.flags&=-3;return}const n=ye,s=Rt;ye=t,Rt=!0;try{mh(t);const i=t.fn(t._value);(e.version===0||On(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ye=n,Rt=s,_h(t),t.flags&=-3}}function fl(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)fl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function d_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rt=!0;const yh=[];function Wn(){yh.push(Rt),Rt=!1}function jn(){const t=yh.pop();Rt=t===void 0?!0:t}function Mc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ye;ye=void 0;try{e()}finally{ye=n}}}let Ri=0;class h_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ye||!Rt||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new h_(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Eh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=s)}return n}trigger(e){this.version++,Ri++,this.notify(e)}notify(e){dl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hl()}}}function Eh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Eh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wa=new WeakMap,is=Symbol(""),Ta=Symbol(""),ki=Symbol("");function $e(t,e,n){if(Rt&&ye){let s=wa.get(t);s||wa.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new pl),i.map=s,i.key=n),i.track()}}function tn(t,e,n,s,i,r){const o=wa.get(t);if(!o){Ri++;return}const a=l=>{l&&l.trigger()};if(dl(),e==="clear")o.forEach(a);else{const l=V(t),c=l&&cl(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===ki||!Pt(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ki)),e){case"add":l?c&&a(o.get("length")):(a(o.get(is)),ks(t)&&a(o.get(Ta)));break;case"delete":l||(a(o.get(is)),ks(t)&&a(o.get(Ta)));break;case"set":ks(t)&&a(o.get(is));break}}hl()}function bs(t){const e=te(t);return e===t?e:($e(e,"iterate",ki),_t(t)?e:e.map(Be))}function mo(t){return $e(t=te(t),"iterate",ki),t}const f_={__proto__:null,[Symbol.iterator](){return zo(this,Symbol.iterator,Be)},concat(...t){return bs(this).concat(...t.map(e=>V(e)?bs(e):e))},entries(){return zo(this,"entries",t=>(t[1]=Be(t[1]),t))},every(t,e){return Xt(this,"every",t,e,void 0,arguments)},filter(t,e){return Xt(this,"filter",t,e,n=>n.map(Be),arguments)},find(t,e){return Xt(this,"find",t,e,Be,arguments)},findIndex(t,e){return Xt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xt(this,"findLast",t,e,Be,arguments)},findLastIndex(t,e){return Xt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ko(this,"includes",t)},indexOf(...t){return Ko(this,"indexOf",t)},join(t){return bs(this).join(t)},lastIndexOf(...t){return Ko(this,"lastIndexOf",t)},map(t,e){return Xt(this,"map",t,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...t){return ri(this,"push",t)},reduce(t,...e){return xc(this,"reduce",t,e)},reduceRight(t,...e){return xc(this,"reduceRight",t,e)},shift(){return ri(this,"shift")},some(t,e){return Xt(this,"some",t,e,void 0,arguments)},splice(...t){return ri(this,"splice",t)},toReversed(){return bs(this).toReversed()},toSorted(t){return bs(this).toSorted(t)},toSpliced(...t){return bs(this).toSpliced(...t)},unshift(...t){return ri(this,"unshift",t)},values(){return zo(this,"values",Be)}};function zo(t,e,n){const s=mo(t),i=s[e]();return s!==t&&!_t(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const p_=Array.prototype;function Xt(t,e,n,s,i,r){const o=mo(t),a=o!==t&&!_t(t),l=o[e];if(l!==p_[e]){const d=l.apply(t,r);return a?Be(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,Be(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function xc(t,e,n,s){const i=mo(t);let r=n;return i!==t&&(_t(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Be(a),l,t)}),i[e](r,...s)}function Ko(t,e,n){const s=te(t);$e(s,"iterate",ki);const i=s[e](...n);return(i===-1||i===!1)&&_l(n[0])?(n[0]=te(n[0]),s[e](...n)):i}function ri(t,e,n=[]){Wn(),dl();const s=te(t)[e].apply(t,n);return hl(),jn(),s}const g_=ol("__proto__,__v_isRef,__isVue"),Ch=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pt));function m_(t){Pt(t)||(t=String(t));const e=te(this);return $e(e,"has",t),e.hasOwnProperty(t)}class bh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?S_:Sh:r?Th:wh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!i){let l;if(o&&(l=f_[n]))return l;if(n==="hasOwnProperty")return m_}const a=Reflect.get(e,n,He(e)?e:s);return(Pt(n)?Ch.has(n):g_(n))||(i||$e(e,"get",n),r)?a:He(a)?o&&cl(n)?a:a.value:ge(a)?i?Rh(a):Qs(a):a}}class Ih extends bh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=ls(r);if(!_t(s)&&!ls(s)&&(r=te(r),s=te(s)),!V(e)&&He(r)&&!He(s))return l?!1:(r.value=s,!0)}const o=V(e)&&cl(n)?Number(n)<e.length:le(e,n),a=Reflect.set(e,n,s,He(e)?e:i);return e===te(i)&&(o?On(s,r)&&tn(e,"set",n,s):tn(e,"add",n,s)),a}deleteProperty(e,n){const s=le(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&tn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Pt(n)||!Ch.has(n))&&$e(e,"has",n),s}ownKeys(e){return $e(e,"iterate",V(e)?"length":is),Reflect.ownKeys(e)}}class __ extends bh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const v_=new Ih,y_=new __,E_=new Ih(!0);const Sa=t=>t,gr=t=>Reflect.getPrototypeOf(t);function C_(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Sa:e?Aa:Be;return!e&&$e(r,"iterate",l?Ta:is),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function mr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function b_(t,e){const n={get(i){const r=this.__v_raw,o=te(r),a=te(i);t||(On(i,a)&&$e(o,"get",i),$e(o,"get",a));const{has:l}=gr(o),c=e?Sa:t?Aa:Be;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&$e(te(i),"iterate",is),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=te(r),a=te(i);return t||(On(i,a)&&$e(o,"has",i),$e(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=te(a),c=e?Sa:t?Aa:Be;return!t&&$e(l,"iterate",is),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return ke(n,t?{add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear")}:{add(i){!e&&!_t(i)&&!ls(i)&&(i=te(i));const r=te(this);return gr(r).has.call(r,i)||(r.add(i),tn(r,"add",i,i)),this},set(i,r){!e&&!_t(r)&&!ls(r)&&(r=te(r));const o=te(this),{has:a,get:l}=gr(o);let c=a.call(o,i);c||(i=te(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?On(r,u)&&tn(o,"set",i,r):tn(o,"add",i,r),this},delete(i){const r=te(this),{has:o,get:a}=gr(r);let l=o.call(r,i);l||(i=te(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&tn(r,"delete",i,void 0),c},clear(){const i=te(this),r=i.size!==0,o=i.clear();return r&&tn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=C_(i,t,e)}),n}function gl(t,e){const n=b_(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(le(n,i)&&i in s?n:s,i,r)}const I_={get:gl(!1,!1)},w_={get:gl(!1,!0)},T_={get:gl(!0,!1)};const wh=new WeakMap,Th=new WeakMap,Sh=new WeakMap,S_=new WeakMap;function A_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function R_(t){return t.__v_skip||!Object.isExtensible(t)?0:A_(Xm(t))}function Qs(t){return ls(t)?t:ml(t,!1,v_,I_,wh)}function Ah(t){return ml(t,!1,E_,w_,Th)}function Rh(t){return ml(t,!0,y_,T_,Sh)}function ml(t,e,n,s,i){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=R_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ps(t){return ls(t)?Ps(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function _t(t){return!!(t&&t.__v_isShallow)}function _l(t){return t?!!t.__v_raw:!1}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function k_(t){return!le(t,"__v_skip")&&Object.isExtensible(t)&&ch(t,"__v_skip",!0),t}const Be=t=>ge(t)?Qs(t):t,Aa=t=>ge(t)?Rh(t):t;function He(t){return t?t.__v_isRef===!0:!1}function jt(t){return kh(t,!1)}function P_(t){return kh(t,!0)}function kh(t,e){return He(t)?t:new N_(t,e)}class N_{constructor(e,n){this.dep=new pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:te(e),this._value=n?e:Be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||_t(e)||ls(e);e=s?e:te(e),On(e,n)&&(this._rawValue=e,this._value=s?e:Be(e),this.dep.trigger())}}function rs(t){return He(t)?t.value:t}const O_={get:(t,e,n)=>e==="__v_raw"?t:rs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return He(i)&&!He(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ph(t){return Ps(t)?t:new Proxy(t,O_)}class D_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return gh(this,!0),!0}get value(){const e=this.dep.track();return vh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function M_(t,e,n=!1){let s,i;return K(t)?s=t:(s=t.get,i=t.set),new D_(s,i,n)}const _r={},Mr=new WeakMap;let Yn;function x_(t,e=!1,n=Yn){if(n){let s=Mr.get(n);s||Mr.set(n,s=[]),s.push(t)}}function L_(t,e,n=pe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:_t(O)||i===!1||i===0?nn(O,1):nn(O);let u,d,h,f,_=!1,I=!1;if(He(t)?(d=()=>t.value,_=_t(t)):Ps(t)?(d=()=>c(t),_=!0):V(t)?(I=!0,_=t.some(O=>Ps(O)||_t(O)),d=()=>t.map(O=>{if(He(O))return O.value;if(Ps(O))return c(O);if(K(O))return l?l(O,2):O()})):K(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){Wn();try{h()}finally{jn()}}const O=Yn;Yn=u;try{return l?l(t,3,[f]):t(f)}finally{Yn=O}}:d=Wt,e&&i){const O=d,Q=i===!0?1/0:i;d=()=>nn(O(),Q)}const M=u_(),x=()=>{u.stop(),M&&M.active&&ll(M.effects,u)};if(r&&e){const O=e;e=(...Q)=>{O(...Q),x()}}let N=I?new Array(t.length).fill(_r):_r;const F=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const Q=u.run();if(i||_||(I?Q.some((se,ie)=>On(se,N[ie])):On(Q,N))){h&&h();const se=Yn;Yn=u;try{const ie=[Q,N===_r?void 0:I&&N[0]===_r?[]:N,f];l?l(e,3,ie):e(...ie),N=Q}finally{Yn=se}}}else u.run()};return a&&a(F),u=new fh(d),u.scheduler=o?()=>o(F,!1):F,f=O=>x_(O,!1,u),h=u.onStop=()=>{const O=Mr.get(u);if(O){if(l)l(O,4);else for(const Q of O)Q();Mr.delete(u)}},e?s?F(!0):N=u.run():o?o(F.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function nn(t,e=1/0,n){if(e<=0||!ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,He(t))nn(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)nn(t[s],e,n);else if(Ys(t)||ks(t))t.forEach(s=>{nn(s,e,n)});else if(lh(t)){for(const s in t)nn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&nn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(t,e,n,s){try{return s?t(...s):t()}catch(i){_o(i,e,n)}}function Nt(t,e,n,s){if(K(t)){const i=tr(t,e,n,s);return i&&oh(i)&&i.catch(r=>{_o(r,e,n)}),i}if(V(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Nt(t[r],e,n,s));return i}}function _o(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pe;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Wn(),tr(r,null,10,[t,l,c]),jn();return}}F_(t,n,i,s,o)}function F_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const je=[];let Bt=-1;const Ns=[];let wn=null,ws=0;const Nh=Promise.resolve();let xr=null;function vo(t){const e=xr||Nh;return t?e.then(this?t.bind(this):t):e}function U_(t){let e=Bt+1,n=je.length;for(;e<n;){const s=e+n>>>1,i=je[s],r=Pi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function vl(t){if(!(t.flags&1)){const e=Pi(t),n=je[je.length-1];!n||!(t.flags&2)&&e>=Pi(n)?je.push(t):je.splice(U_(e),0,t),t.flags|=1,Oh()}}function Oh(){xr||(xr=Nh.then(Mh))}function $_(t){V(t)?Ns.push(...t):wn&&t.id===-1?wn.splice(ws+1,0,t):t.flags&1||(Ns.push(t),t.flags|=1),Oh()}function Lc(t,e,n=Bt+1){for(;n<je.length;n++){const s=je[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;je.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Dh(t){if(Ns.length){const e=[...new Set(Ns)].sort((n,s)=>Pi(n)-Pi(s));if(Ns.length=0,wn){wn.push(...e);return}for(wn=e,ws=0;ws<wn.length;ws++){const n=wn[ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wn=null,ws=0}}const Pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mh(t){try{for(Bt=0;Bt<je.length;Bt++){const e=je[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),tr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<je.length;Bt++){const e=je[Bt];e&&(e.flags&=-2)}Bt=-1,je.length=0,Dh(),xr=null,(je.length||Ns.length)&&Mh()}}let xe=null,xh=null;function Lr(t){const e=xe;return xe=t,xh=t&&t.type.__scopeId||null,e}function ot(t,e=xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zc(-1);const r=Lr(e);let o;try{o=t(...i)}finally{Lr(r),s._d&&zc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ct(t,e){if(xe===null)return t;const n=wo(xe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=pe]=e[i];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&nn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Gn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Wn(),Nt(l,n,8,[t.el,a,t,e]),jn())}}const B_=Symbol("_vte"),Lh=t=>t.__isTeleport,Tn=Symbol("_leaveCb"),vr=Symbol("_enterCb");function Fh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nr(()=>{t.isMounted=!0}),El(()=>{t.isUnmounting=!0}),t}const pt=[Function,Array],Uh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},$h=t=>{const e=t.subTree;return e.component?$h(e.component):e},V_={name:"BaseTransition",props:Uh,setup(t,{slots:e}){const n=wl(),s=Fh();return()=>{const i=e.default&&yl(e.default(),!0);if(!i||!i.length)return;const r=Bh(i),o=te(t),{mode:a}=o;if(s.isLeaving)return Yo(r);const l=Fc(r);if(!l)return Yo(r);let c=Ni(l,o,s,n,d=>c=d);l.type!==qe&&cs(l,c);let u=n.subTree&&Fc(n.subTree);if(u&&u.type!==qe&&!Xn(l,u)&&$h(n).type!==qe){let d=Ni(u,o,s,n);if(cs(u,d),a==="out-in"&&l.type!==qe)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Yo(r);a==="in-out"&&l.type!==qe?d.delayLeave=(h,f,_)=>{const I=Vh(s,u);I[String(u.key)]=u,h[Tn]=()=>{f(),h[Tn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Bh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==qe){e=n;break}}return e}const H_=V_;function Vh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ni(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:I,onBeforeAppear:M,onAppear:x,onAfterAppear:N,onAppearCancelled:F}=e,O=String(t.key),Q=Vh(n,t),se=(G,ee)=>{G&&Nt(G,s,9,ee)},ie=(G,ee)=>{const _e=ee[1];se(G,ee),V(G)?G.every(U=>U.length<=1)&&_e():G.length<=1&&_e()},Pe={mode:o,persisted:a,beforeEnter(G){let ee=l;if(!n.isMounted)if(r)ee=M||l;else return;G[Tn]&&G[Tn](!0);const _e=Q[O];_e&&Xn(t,_e)&&_e.el[Tn]&&_e.el[Tn](),se(ee,[G])},enter(G){let ee=c,_e=u,U=d;if(!n.isMounted)if(r)ee=x||c,_e=N||u,U=F||d;else return;let re=!1;const Ne=G[vr]=tt=>{re||(re=!0,tt?se(U,[G]):se(_e,[G]),Pe.delayedLeave&&Pe.delayedLeave(),G[vr]=void 0)};ee?ie(ee,[G,Ne]):Ne()},leave(G,ee){const _e=String(t.key);if(G[vr]&&G[vr](!0),n.isUnmounting)return ee();se(h,[G]);let U=!1;const re=G[Tn]=Ne=>{U||(U=!0,ee(),Ne?se(I,[G]):se(_,[G]),G[Tn]=void 0,Q[_e]===t&&delete Q[_e])};Q[_e]=t,f?ie(f,[G,re]):re()},clone(G){const ee=Ni(G,e,n,s,i);return i&&i(ee),ee}};return Pe}function Yo(t){if(yo(t))return t=Un(t),t.children=null,t}function Fc(t){if(!yo(t))return Lh(t.type)&&t.children?Bh(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&K(n.default))return n.default()}}function cs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,cs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yl(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ue?(o.patchFlag&128&&i++,s=s.concat(yl(o.children,e,a))):(e||o.type!==qe)&&s.push(a!=null?Un(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Ue(t,e){return K(t)?ke({name:t.name},e,{setup:t}):t}function Hh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fr(t,e,n,s,i=!1){if(V(t)){t.forEach((_,I)=>Fr(_,e&&(V(e)?e[I]:e),n,s,i));return}if(Os(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Fr(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?wo(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,d=a.setupState,h=te(d),f=d===pe?()=>!1:_=>le(h,_);if(c!=null&&c!==l&&(we(c)?(u[c]=null,f(c)&&(d[c]=null)):He(c)&&(c.value=null)),K(l))tr(l,a,12,[o,u]);else{const _=we(l),I=He(l);if(_||I){const M=()=>{if(t.f){const x=_?f(l)?d[l]:u[l]:l.value;i?V(x)&&ll(x,r):V(x)?x.includes(r)||x.push(r):_?(u[l]=[r],f(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,f(l)&&(d[l]=o)):I&&(l.value=o,t.k&&(u[t.k]=o))};o?(M.id=-1,it(M,n)):M()}}}go().requestIdleCallback;go().cancelIdleCallback;const Os=t=>!!t.type.__asyncLoader,yo=t=>t.type.__isKeepAlive;function W_(t,e){Wh(t,"a",e)}function j_(t,e){Wh(t,"da",e)}function Wh(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Eo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)yo(i.parent.vnode)&&q_(s,e,n,i),i=i.parent}}function q_(t,e,n,s){const i=Eo(e,t,s,!0);qh(()=>{ll(s[e],i)},n)}function Eo(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Wn();const a=sr(n),l=Nt(e,n,t,o);return a(),jn(),l});return s?i.unshift(r):i.push(r),r}}const mn=t=>(e,n=Fe)=>{(!Mi||t==="sp")&&Eo(t,(...s)=>e(...s),n)},G_=mn("bm"),nr=mn("m"),z_=mn("bu"),jh=mn("u"),El=mn("bum"),qh=mn("um"),K_=mn("sp"),Y_=mn("rtg"),Q_=mn("rtc");function J_(t,e=Fe){Eo("ec",t,e)}const Gh="components";function wt(t,e){return Kh(Gh,t,!0,e)||t}const zh=Symbol.for("v-ndc");function Cl(t){return we(t)?Kh(Gh,t,!1)||t:t||zh}function Kh(t,e,n=!0,s=!1){const i=xe||Fe;if(i){const r=i.type;{const a=Fv(r,!1);if(a&&(a===e||a===Et(e)||a===po(Et(e))))return r}const o=Uc(i[t]||r[t],e)||Uc(i.appContext[t],e);return!o&&s?r:o}}function Uc(t,e){return t&&(t[e]||t[Et(e)]||t[po(Et(e))])}function ct(t,e,n,s){let i;const r=n,o=V(t);if(o||we(t)){const a=o&&Ps(t);let l=!1;a&&(l=!_t(t),t=mo(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Be(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ge(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}function Yh(t,e,n={},s,i){if(xe.ce||xe.parent&&Os(xe.parent)&&xe.parent.ce)return L(),mt(ue,null,[Ce("slot",n,s)],64);let r=t[e];r&&r._c&&(r._d=!1),L();const o=r&&Qh(r(n)),a=n.key||o&&o.key,l=mt(ue,{key:(a&&!Pt(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Qh(t){return t.some(e=>Di(e)?!(e.type===qe||e.type===ue&&!Qh(e.children)):!0)?t:null}function X_(t,e){const n={};for(const s in t)n[Ir(s)]=t[s];return n}const Ra=t=>t?vf(t)?wo(t):Ra(t.parent):null,mi=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ra(t.parent),$root:t=>Ra(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xh(t),$forceUpdate:t=>t.f||(t.f=()=>{vl(t.update)}),$nextTick:t=>t.n||(t.n=vo.bind(t.proxy)),$watch:t=>yv.bind(t)}),Qo=(t,e)=>t!==pe&&!t.__isScriptSetup&&le(t,e),Z_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Qo(s,e))return o[e]=1,s[e];if(i!==pe&&le(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,r[e];if(n!==pe&&le(n,e))return o[e]=4,n[e];ka&&(o[e]=0)}}const u=mi[e];let d,h;if(u)return e==="$attrs"&&$e(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==pe&&le(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,le(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Qo(i,e)?(i[e]=n,!0):s!==pe&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==pe&&le(t,o)||Qo(e,o)||(a=r[0])&&le(a,o)||le(s,o)||le(mi,o)||le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $c(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ka=!0;function ev(t){const e=Xh(t),n=t.proxy,s=t.ctx;ka=!1,e.beforeCreate&&Bc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:_,activated:I,deactivated:M,beforeDestroy:x,beforeUnmount:N,destroyed:F,unmounted:O,render:Q,renderTracked:se,renderTriggered:ie,errorCaptured:Pe,serverPrefetch:G,expose:ee,inheritAttrs:_e,components:U,directives:re,filters:Ne}=e;if(c&&tv(c,s,null),o)for(const de in o){const oe=o[de];K(oe)&&(s[de]=oe.bind(n))}if(i){const de=i.call(n,n);ge(de)&&(t.data=Qs(de))}if(ka=!0,r)for(const de in r){const oe=r[de],Jt=K(oe)?oe.bind(n,n):K(oe.get)?oe.get.bind(n,n):Wt,yn=!K(oe)&&K(oe.set)?oe.set.bind(n):Wt,Mt=gt({get:Jt,set:yn});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Ye=>Mt.value=Ye})}if(a)for(const de in a)Jh(a[de],s,n,de);if(l){const de=K(l)?l.call(n):l;Reflect.ownKeys(de).forEach(oe=>{_i(oe,de[oe])})}u&&Bc(u,t,"c");function Te(de,oe){V(oe)?oe.forEach(Jt=>de(Jt.bind(n))):oe&&de(oe.bind(n))}if(Te(G_,d),Te(nr,h),Te(z_,f),Te(jh,_),Te(W_,I),Te(j_,M),Te(J_,Pe),Te(Q_,se),Te(Y_,ie),Te(El,N),Te(qh,O),Te(K_,G),V(ee))if(ee.length){const de=t.exposed||(t.exposed={});ee.forEach(oe=>{Object.defineProperty(de,oe,{get:()=>n[oe],set:Jt=>n[oe]=Jt})})}else t.exposed||(t.exposed={});Q&&t.render===Wt&&(t.render=Q),_e!=null&&(t.inheritAttrs=_e),U&&(t.components=U),re&&(t.directives=re),G&&Hh(t)}function tv(t,e,n=Wt){V(t)&&(t=Pa(t));for(const s in t){const i=t[s];let r;ge(i)?"default"in i?r=dt(i.from||s,i.default,!0):r=dt(i.from||s):r=dt(i),He(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Bc(t,e,n){Nt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jh(t,e,n,s){let i=s.includes(".")?ff(n,s):()=>n[s];if(we(t)){const r=e[t];K(r)&&Ms(i,r)}else if(K(t))Ms(i,t.bind(n));else if(ge(t))if(V(t))t.forEach(r=>Jh(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Ms(i,r,t)}}function Xh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ur(l,c,o,!0)),Ur(l,e,o)),ge(e)&&r.set(e,l),l}function Ur(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ur(t,r,n,!0),i&&i.forEach(o=>Ur(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=nv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nv={data:Vc,props:Hc,emits:Hc,methods:hi,computed:hi,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:hi,directives:hi,watch:iv,provide:Vc,inject:sv};function Vc(t,e){return e?t?function(){return ke(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function sv(t,e){return hi(Pa(t),Pa(e))}function Pa(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?ke(Object.create(null),t,e):e}function Hc(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:ke(Object.create(null),$c(t),$c(e??{})):e}function iv(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function Zh(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rv=0;function ov(t,e){return function(s,i=null){K(s)||(s=ke({},s)),i!=null&&!ge(i)&&(i=null);const r=Zh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:rv++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$v,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...d)):K(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const f=c._ceVNode||Ce(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(f,u,h),l=!0,c._container=u,u.__vue_app__=c,wo(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ds;Ds=c;try{return u()}finally{Ds=d}}};return c}}let Ds=null;function _i(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function dt(t,e,n=!1){const s=Fe||xe;if(s||Ds){const i=Ds?Ds._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const ef={},tf=()=>Object.create(ef),nf=t=>Object.getPrototypeOf(t)===ef;function av(t,e,n,s=!1){const i={},r=tf();t.propsDefaults=Object.create(null),sf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function lv(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=te(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Co(t.emitsOptions,h))continue;const f=e[h];if(l)if(le(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const _=Et(h);i[_]=Na(l,a,_,f,t,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{sf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!le(e,d)&&((u=ms(d))===d||!le(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Na(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!le(e,d))&&(delete r[d],c=!0)}c&&tn(t.attrs,"set","")}function sf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fi(l))continue;const c=e[l];let u;i&&le(i,u=Et(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Co(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=te(n),c=a||pe;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Na(i,l,d,c[d],t,!le(c,d))}}return o}function Na(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=sr(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ms(n))&&(s=!0))}return s}const cv=new WeakMap;function rf(t,e,n=!1){const s=n?cv:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=d=>{l=!0;const[h,f]=rf(d,e,!0);ke(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ge(t)&&s.set(t,Rs),Rs;if(V(r))for(let u=0;u<r.length;u++){const d=Et(r[u]);Wc(d)&&(o[d]=pe)}else if(r)for(const u in r){const d=Et(u);if(Wc(d)){const h=r[u],f=o[d]=V(h)||K(h)?{type:h}:ke({},h),_=f.type;let I=!1,M=!0;if(V(_))for(let x=0;x<_.length;++x){const N=_[x],F=K(N)&&N.name;if(F==="Boolean"){I=!0;break}else F==="String"&&(M=!1)}else I=K(_)&&_.name==="Boolean";f[0]=I,f[1]=M,(I||le(f,"default"))&&a.push(d)}}const c=[o,a];return ge(t)&&s.set(t,c),c}function Wc(t){return t[0]!=="$"&&!fi(t)}const of=t=>t[0]==="_"||t==="$stable",bl=t=>V(t)?t.map(Vt):[Vt(t)],uv=(t,e,n)=>{if(e._n)return e;const s=ot((...i)=>bl(e(...i)),n);return s._c=!1,s},af=(t,e,n)=>{const s=t._ctx;for(const i in t){if(of(i))continue;const r=t[i];if(K(r))e[i]=uv(i,r,s);else if(r!=null){const o=bl(r);e[i]=()=>o}}},lf=(t,e)=>{const n=bl(e);t.slots.default=()=>n},cf=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},dv=(t,e,n)=>{const s=t.slots=tf();if(t.vnode.shapeFlag&32){const i=e._;i?(cf(s,e,n),n&&ch(s,"_",i,!0)):af(e,s)}else e&&lf(t,e)},hv=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:cf(i,e,n):(r=!e.$stable,af(e,i)),o=e}else e&&(lf(t,e),o={default:1});if(r)for(const a in i)!of(a)&&o[a]==null&&delete i[a]},it=Sv;function fv(t){return pv(t)}function pv(t,e){const n=go();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=Wt,insertStaticContent:_}=t,I=(p,g,m,v=null,b=null,E=null,R=void 0,A=null,S=!!g.dynamicChildren)=>{if(p===g)return;p&&!Xn(p,g)&&(v=y(p),Ye(p,b,E,!0),p=null),g.patchFlag===-2&&(S=!1,g.dynamicChildren=null);const{type:w,ref:W,shapeFlag:P}=g;switch(w){case bo:M(p,g,m,v);break;case qe:x(p,g,m,v);break;case Xo:p==null&&N(g,m,v,R);break;case ue:U(p,g,m,v,b,E,R,A,S);break;default:P&1?Q(p,g,m,v,b,E,R,A,S):P&6?re(p,g,m,v,b,E,R,A,S):(P&64||P&128)&&w.process(p,g,m,v,b,E,R,A,S,$)}W!=null&&b&&Fr(W,p&&p.ref,E,g||p,!g)},M=(p,g,m,v)=>{if(p==null)s(g.el=a(g.children),m,v);else{const b=g.el=p.el;g.children!==p.children&&c(b,g.children)}},x=(p,g,m,v)=>{p==null?s(g.el=l(g.children||""),m,v):g.el=p.el},N=(p,g,m,v)=>{[p.el,p.anchor]=_(p.children,g,m,v,p.el,p.anchor)},F=({el:p,anchor:g},m,v)=>{let b;for(;p&&p!==g;)b=h(p),s(p,m,v),p=b;s(g,m,v)},O=({el:p,anchor:g})=>{let m;for(;p&&p!==g;)m=h(p),i(p),p=m;i(g)},Q=(p,g,m,v,b,E,R,A,S)=>{g.type==="svg"?R="svg":g.type==="math"&&(R="mathml"),p==null?se(g,m,v,b,E,R,A,S):G(p,g,b,E,R,A,S)},se=(p,g,m,v,b,E,R,A)=>{let S,w;const{props:W,shapeFlag:P,transition:H,dirs:z}=p;if(S=p.el=o(p.type,E,W&&W.is,W),P&8?u(S,p.children):P&16&&Pe(p.children,S,null,v,b,Jo(p,E),R,A),z&&Gn(p,null,v,"created"),ie(S,p,p.scopeId,R,v),W){for(const ve in W)ve!=="value"&&!fi(ve)&&r(S,ve,null,W[ve],E,v);"value"in W&&r(S,"value",null,W.value,E),(w=W.onVnodeBeforeMount)&&Ut(w,v,p)}z&&Gn(p,null,v,"beforeMount");const Z=gv(b,H);Z&&H.beforeEnter(S),s(S,g,m),((w=W&&W.onVnodeMounted)||Z||z)&&it(()=>{w&&Ut(w,v,p),Z&&H.enter(S),z&&Gn(p,null,v,"mounted")},b)},ie=(p,g,m,v,b)=>{if(m&&f(p,m),v)for(let E=0;E<v.length;E++)f(p,v[E]);if(b){let E=b.subTree;if(g===E||gf(E.type)&&(E.ssContent===g||E.ssFallback===g)){const R=b.vnode;ie(p,R,R.scopeId,R.slotScopeIds,b.parent)}}},Pe=(p,g,m,v,b,E,R,A,S=0)=>{for(let w=S;w<p.length;w++){const W=p[w]=A?Sn(p[w]):Vt(p[w]);I(null,W,g,m,v,b,E,R,A)}},G=(p,g,m,v,b,E,R)=>{const A=g.el=p.el;let{patchFlag:S,dynamicChildren:w,dirs:W}=g;S|=p.patchFlag&16;const P=p.props||pe,H=g.props||pe;let z;if(m&&zn(m,!1),(z=H.onVnodeBeforeUpdate)&&Ut(z,m,g,p),W&&Gn(g,p,m,"beforeUpdate"),m&&zn(m,!0),(P.innerHTML&&H.innerHTML==null||P.textContent&&H.textContent==null)&&u(A,""),w?ee(p.dynamicChildren,w,A,m,v,Jo(g,b),E):R||oe(p,g,A,null,m,v,Jo(g,b),E,!1),S>0){if(S&16)_e(A,P,H,m,b);else if(S&2&&P.class!==H.class&&r(A,"class",null,H.class,b),S&4&&r(A,"style",P.style,H.style,b),S&8){const Z=g.dynamicProps;for(let ve=0;ve<Z.length;ve++){const ce=Z[ve],nt=P[ce],Qe=H[ce];(Qe!==nt||ce==="value")&&r(A,ce,nt,Qe,b,m)}}S&1&&p.children!==g.children&&u(A,g.children)}else!R&&w==null&&_e(A,P,H,m,b);((z=H.onVnodeUpdated)||W)&&it(()=>{z&&Ut(z,m,g,p),W&&Gn(g,p,m,"updated")},v)},ee=(p,g,m,v,b,E,R)=>{for(let A=0;A<g.length;A++){const S=p[A],w=g[A],W=S.el&&(S.type===ue||!Xn(S,w)||S.shapeFlag&70)?d(S.el):m;I(S,w,W,null,v,b,E,R,!0)}},_e=(p,g,m,v,b)=>{if(g!==m){if(g!==pe)for(const E in g)!fi(E)&&!(E in m)&&r(p,E,g[E],null,b,v);for(const E in m){if(fi(E))continue;const R=m[E],A=g[E];R!==A&&E!=="value"&&r(p,E,A,R,b,v)}"value"in m&&r(p,"value",g.value,m.value,b)}},U=(p,g,m,v,b,E,R,A,S)=>{const w=g.el=p?p.el:a(""),W=g.anchor=p?p.anchor:a("");let{patchFlag:P,dynamicChildren:H,slotScopeIds:z}=g;z&&(A=A?A.concat(z):z),p==null?(s(w,m,v),s(W,m,v),Pe(g.children||[],m,W,b,E,R,A,S)):P>0&&P&64&&H&&p.dynamicChildren?(ee(p.dynamicChildren,H,m,b,E,R,A),(g.key!=null||b&&g===b.subTree)&&uf(p,g,!0)):oe(p,g,m,W,b,E,R,A,S)},re=(p,g,m,v,b,E,R,A,S)=>{g.slotScopeIds=A,p==null?g.shapeFlag&512?b.ctx.activate(g,m,v,R,S):Ne(g,m,v,b,E,R,S):tt(p,g,S)},Ne=(p,g,m,v,b,E,R)=>{const A=p.component=Ov(p,v,b);if(yo(p)&&(A.ctx.renderer=$),Dv(A,!1,R),A.asyncDep){if(b&&b.registerDep(A,Te,R),!p.el){const S=A.subTree=Ce(qe);x(null,S,g,m)}}else Te(A,p,g,m,b,E,R)},tt=(p,g,m)=>{const v=g.component=p.component;if(wv(p,g,m))if(v.asyncDep&&!v.asyncResolved){de(v,g,m);return}else v.next=g,v.update();else g.el=p.el,v.vnode=g},Te=(p,g,m,v,b,E,R)=>{const A=()=>{if(p.isMounted){let{next:P,bu:H,u:z,parent:Z,vnode:ve}=p;{const Lt=df(p);if(Lt){P&&(P.el=ve.el,de(p,P,R)),Lt.asyncDep.then(()=>{p.isUnmounted||A()});return}}let ce=P,nt;zn(p,!1),P?(P.el=ve.el,de(p,P,R)):P=ve,H&&wr(H),(nt=P.props&&P.props.onVnodeBeforeUpdate)&&Ut(nt,Z,P,ve),zn(p,!0);const Qe=qc(p),xt=p.subTree;p.subTree=Qe,I(xt,Qe,d(xt.el),y(xt),p,b,E),P.el=Qe.el,ce===null&&Tv(p,Qe.el),z&&it(z,b),(nt=P.props&&P.props.onVnodeUpdated)&&it(()=>Ut(nt,Z,P,ve),b)}else{let P;const{el:H,props:z}=g,{bm:Z,m:ve,parent:ce,root:nt,type:Qe}=p,xt=Os(g);zn(p,!1),Z&&wr(Z),!xt&&(P=z&&z.onVnodeBeforeMount)&&Ut(P,ce,g),zn(p,!0);{nt.ce&&nt.ce._injectChildStyle(Qe);const Lt=p.subTree=qc(p);I(null,Lt,m,v,p,b,E),g.el=Lt.el}if(ve&&it(ve,b),!xt&&(P=z&&z.onVnodeMounted)){const Lt=g;it(()=>Ut(P,ce,Lt),b)}(g.shapeFlag&256||ce&&Os(ce.vnode)&&ce.vnode.shapeFlag&256)&&p.a&&it(p.a,b),p.isMounted=!0,g=m=v=null}};p.scope.on();const S=p.effect=new fh(A);p.scope.off();const w=p.update=S.run.bind(S),W=p.job=S.runIfDirty.bind(S);W.i=p,W.id=p.uid,S.scheduler=()=>vl(W),zn(p,!0),w()},de=(p,g,m)=>{g.component=p;const v=p.vnode.props;p.vnode=g,p.next=null,lv(p,g.props,v,m),hv(p,g.children,m),Wn(),Lc(p),jn()},oe=(p,g,m,v,b,E,R,A,S=!1)=>{const w=p&&p.children,W=p?p.shapeFlag:0,P=g.children,{patchFlag:H,shapeFlag:z}=g;if(H>0){if(H&128){yn(w,P,m,v,b,E,R,A,S);return}else if(H&256){Jt(w,P,m,v,b,E,R,A,S);return}}z&8?(W&16&&ft(w,b,E),P!==w&&u(m,P)):W&16?z&16?yn(w,P,m,v,b,E,R,A,S):ft(w,b,E,!0):(W&8&&u(m,""),z&16&&Pe(P,m,v,b,E,R,A,S))},Jt=(p,g,m,v,b,E,R,A,S)=>{p=p||Rs,g=g||Rs;const w=p.length,W=g.length,P=Math.min(w,W);let H;for(H=0;H<P;H++){const z=g[H]=S?Sn(g[H]):Vt(g[H]);I(p[H],z,m,null,b,E,R,A,S)}w>W?ft(p,b,E,!0,!1,P):Pe(g,m,v,b,E,R,A,S,P)},yn=(p,g,m,v,b,E,R,A,S)=>{let w=0;const W=g.length;let P=p.length-1,H=W-1;for(;w<=P&&w<=H;){const z=p[w],Z=g[w]=S?Sn(g[w]):Vt(g[w]);if(Xn(z,Z))I(z,Z,m,null,b,E,R,A,S);else break;w++}for(;w<=P&&w<=H;){const z=p[P],Z=g[H]=S?Sn(g[H]):Vt(g[H]);if(Xn(z,Z))I(z,Z,m,null,b,E,R,A,S);else break;P--,H--}if(w>P){if(w<=H){const z=H+1,Z=z<W?g[z].el:v;for(;w<=H;)I(null,g[w]=S?Sn(g[w]):Vt(g[w]),m,Z,b,E,R,A,S),w++}}else if(w>H)for(;w<=P;)Ye(p[w],b,E,!0),w++;else{const z=w,Z=w,ve=new Map;for(w=Z;w<=H;w++){const st=g[w]=S?Sn(g[w]):Vt(g[w]);st.key!=null&&ve.set(st.key,w)}let ce,nt=0;const Qe=H-Z+1;let xt=!1,Lt=0;const ii=new Array(Qe);for(w=0;w<Qe;w++)ii[w]=0;for(w=z;w<=P;w++){const st=p[w];if(nt>=Qe){Ye(st,b,E,!0);continue}let Ft;if(st.key!=null)Ft=ve.get(st.key);else for(ce=Z;ce<=H;ce++)if(ii[ce-Z]===0&&Xn(st,g[ce])){Ft=ce;break}Ft===void 0?Ye(st,b,E,!0):(ii[Ft-Z]=w+1,Ft>=Lt?Lt=Ft:xt=!0,I(st,g[Ft],m,null,b,E,R,A,S),nt++)}const Pc=xt?mv(ii):Rs;for(ce=Pc.length-1,w=Qe-1;w>=0;w--){const st=Z+w,Ft=g[st],Nc=st+1<W?g[st+1].el:v;ii[w]===0?I(null,Ft,m,Nc,b,E,R,A,S):xt&&(ce<0||w!==Pc[ce]?Mt(Ft,m,Nc,2):ce--)}}},Mt=(p,g,m,v,b=null)=>{const{el:E,type:R,transition:A,children:S,shapeFlag:w}=p;if(w&6){Mt(p.component.subTree,g,m,v);return}if(w&128){p.suspense.move(g,m,v);return}if(w&64){R.move(p,g,m,$);return}if(R===ue){s(E,g,m);for(let P=0;P<S.length;P++)Mt(S[P],g,m,v);s(p.anchor,g,m);return}if(R===Xo){F(p,g,m);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(E),s(E,g,m),it(()=>A.enter(E),b);else{const{leave:P,delayLeave:H,afterLeave:z}=A,Z=()=>s(E,g,m),ve=()=>{P(E,()=>{Z(),z&&z()})};H?H(E,Z,ve):ve()}else s(E,g,m)},Ye=(p,g,m,v=!1,b=!1)=>{const{type:E,props:R,ref:A,children:S,dynamicChildren:w,shapeFlag:W,patchFlag:P,dirs:H,cacheIndex:z}=p;if(P===-2&&(b=!1),A!=null&&Fr(A,null,m,p,!0),z!=null&&(g.renderCache[z]=void 0),W&256){g.ctx.deactivate(p);return}const Z=W&1&&H,ve=!Os(p);let ce;if(ve&&(ce=R&&R.onVnodeBeforeUnmount)&&Ut(ce,g,p),W&6)pr(p.component,m,v);else{if(W&128){p.suspense.unmount(m,v);return}Z&&Gn(p,null,g,"beforeUnmount"),W&64?p.type.remove(p,g,m,$,v):w&&!w.hasOnce&&(E!==ue||P>0&&P&64)?ft(w,g,m,!1,!0):(E===ue&&P&384||!b&&W&16)&&ft(S,g,m),v&&Es(p)}(ve&&(ce=R&&R.onVnodeUnmounted)||Z)&&it(()=>{ce&&Ut(ce,g,p),Z&&Gn(p,null,g,"unmounted")},m)},Es=p=>{const{type:g,el:m,anchor:v,transition:b}=p;if(g===ue){Cs(m,v);return}if(g===Xo){O(p);return}const E=()=>{i(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:A}=b,S=()=>R(m,E);A?A(p.el,E,S):S()}else E()},Cs=(p,g)=>{let m;for(;p!==g;)m=h(p),i(p),p=m;i(g)},pr=(p,g,m)=>{const{bum:v,scope:b,job:E,subTree:R,um:A,m:S,a:w}=p;jc(S),jc(w),v&&wr(v),b.stop(),E&&(E.flags|=8,Ye(R,p,g,m)),A&&it(A,g),it(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ft=(p,g,m,v=!1,b=!1,E=0)=>{for(let R=E;R<p.length;R++)Ye(p[R],g,m,v,b)},y=p=>{if(p.shapeFlag&6)return y(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=h(p.anchor||p.el),m=g&&g[B_];return m?h(m):g};let D=!1;const k=(p,g,m)=>{p==null?g._vnode&&Ye(g._vnode,null,null,!0):I(g._vnode||null,p,g,null,null,null,m),g._vnode=p,D||(D=!0,Lc(),Dh(),D=!1)},$={p:I,um:Ye,m:Mt,r:Es,mt:Ne,mc:Pe,pc:oe,pbc:ee,n:y,o:t};return{render:k,hydrate:void 0,createApp:ov(k)}}function Jo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function uf(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Sn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&uf(o,a)),a.type===bo&&(a.el=o.el)}}function mv(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function df(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:df(e)}function jc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _v=Symbol.for("v-scx"),vv=()=>dt(_v);function Ms(t,e,n){return hf(t,e,n)}function hf(t,e,n=pe){const{immediate:s,deep:i,flush:r,once:o}=n,a=ke({},n),l=e&&s||!e&&r!=="post";let c;if(Mi){if(r==="sync"){const f=vv();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Wt,f.resume=Wt,f.pause=Wt,f}}const u=Fe;a.call=(f,_,I)=>Nt(f,u,_,I);let d=!1;r==="post"?a.scheduler=f=>{it(f,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(f,_)=>{_?f():vl(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const h=L_(t,e,a);return Mi&&(c?c.push(h):l&&h()),h}function yv(t,e,n){const s=this.proxy,i=we(t)?t.includes(".")?ff(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=sr(this),a=hf(i,r.bind(s),n);return o(),a}function ff(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ev=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Et(e)}Modifiers`]||t[`${ms(e)}Modifiers`];function Cv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let i=n;const r=e.startsWith("update:"),o=r&&Ev(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>we(u)?u.trim():u)),o.number&&(i=n.map(Dr)));let a,l=s[a=Ir(e)]||s[a=Ir(Et(e))];!l&&r&&(l=s[a=Ir(ms(e))]),l&&Nt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(c,t,6,i)}}function pf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=pf(c,e,!0);u&&(a=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ge(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):ke(o,r),ge(t)&&s.set(t,o),o)}function Co(t,e){return!t||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,ms(e))||le(t,e))}function qc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:f,ctx:_,inheritAttrs:I}=t,M=Lr(t);let x,N;try{if(n.shapeFlag&4){const O=i||s,Q=O;x=Vt(c.call(Q,O,u,d,f,h,_)),N=a}else{const O=e;x=Vt(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),N=e.props?a:bv(a)}}catch(O){vi.length=0,_o(O,t,1),x=Ce(qe)}let F=x;if(N&&I!==!1){const O=Object.keys(N),{shapeFlag:Q}=F;O.length&&Q&7&&(r&&O.some(al)&&(N=Iv(N,r)),F=Un(F,N,!1,!0))}return n.dirs&&(F=Un(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&cs(F,n.transition),x=F,Lr(M),x}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ho(n))&&((e||(e={}))[n]=t[n]);return e},Iv=(t,e)=>{const n={};for(const s in t)(!al(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function wv(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Gc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Co(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gc(s,o,c):!0:!!o;return!1}function Gc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Co(n,r))return!0}return!1}function Tv({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const gf=t=>t.__isSuspense;function Sv(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):$_(t)}const ue=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),vi=[];let ut=null;function L(t=!1){vi.push(ut=t?null:[])}function Av(){vi.pop(),ut=vi[vi.length-1]||null}let Oi=1;function zc(t,e=!1){Oi+=t,t<0&&ut&&e&&(ut.hasOnce=!0)}function mf(t){return t.dynamicChildren=Oi>0?ut||Rs:null,Av(),Oi>0&&ut&&ut.push(t),t}function B(t,e,n,s,i,r){return mf(C(t,e,n,s,i,r,!0))}function mt(t,e,n,s,i){return mf(Ce(t,e,n,s,i,!0))}function Di(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const _f=({key:t})=>t??null,Tr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||He(t)||K(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,s=0,i=null,r=t===ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_f(e),ref:e&&Tr(e),scopeId:xh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xe};return a?(Il(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),Oi>0&&!o&&ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ut.push(l),l}const Ce=Rv;function Rv(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===zh)&&(t=qe),Di(t)){const a=Un(t,e,!0);return n&&Il(a,n),Oi>0&&!r&&ut&&(a.shapeFlag&6?ut[ut.indexOf(t)]=a:ut.push(a)),a.patchFlag=-2,a}if(Uv(t)&&(t=t.__vccOpts),e){e=kv(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=dn(a)),ge(l)&&(_l(l)&&!V(l)&&(l=ke({},l)),e.style=er(l))}const o=we(t)?1:gf(t)?128:Lh(t)?64:ge(t)?4:K(t)?2:0;return C(t,e,n,s,i,o,r,!0)}function kv(t){return t?_l(t)||nf(t)?ke({},t):t:null}function Un(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Io(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&_f(c),ref:e&&e.ref?n&&r?V(r)?r.concat(Tr(e)):[r,Tr(e)]:Tr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&cs(u,l.clone(u)),u}function Le(t=" ",e=0){return Ce(bo,null,t,e)}function Dn(t="",e=!1){return e?(L(),mt(qe,null,t)):Ce(qe,null,t)}function Vt(t){return t==null||typeof t=="boolean"?Ce(qe):V(t)?Ce(ue,null,t.slice()):Di(t)?Sn(t):Ce(bo,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function Il(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Il(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!nf(e)?e._ctx=xe:i===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),s&64?(n=16,e=[Le(e)]):n=8);t.children=e,t.shapeFlag|=n}function Io(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=dn([e.class,s.class]));else if(i==="style")e.style=er([e.style,s.style]);else if(ho(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ut(t,e,n,s=null){Nt(t,e,7,[n,s])}const Pv=Zh();let Nv=0;function Ov(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Pv,r={uid:Nv++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new c_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rf(s,i),emitsOptions:pf(s,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cv.bind(null,r),t.ce&&t.ce(r),r}let Fe=null;const wl=()=>Fe||xe;let $r,Oa;{const t=go(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};$r=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),Oa=e("__VUE_SSR_SETTERS__",n=>Mi=n)}const sr=t=>{const e=Fe;return $r(t),t.scope.on(),()=>{t.scope.off(),$r(e)}},Kc=()=>{Fe&&Fe.scope.off(),$r(null)};function vf(t){return t.vnode.shapeFlag&4}let Mi=!1;function Dv(t,e=!1,n=!1){e&&Oa(e);const{props:s,children:i}=t.vnode,r=vf(t);av(t,s,r,e),dv(t,i,n);const o=r?Mv(t,e):void 0;return e&&Oa(!1),o}function Mv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Z_);const{setup:s}=n;if(s){Wn();const i=t.setupContext=s.length>1?Lv(t):null,r=sr(t),o=tr(s,t,0,[t.props,i]),a=oh(o);if(jn(),r(),(a||t.sp)&&!Os(t)&&Hh(t),a){if(o.then(Kc,Kc),e)return o.then(l=>{Yc(t,l)}).catch(l=>{_o(l,t,0)});t.asyncDep=o}else Yc(t,o)}else yf(t)}function Yc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Ph(e)),yf(t)}function yf(t,e,n){const s=t.type;t.render||(t.render=s.render||Wt);{const i=sr(t);Wn();try{ev(t)}finally{jn(),i()}}}const xv={get(t,e){return $e(t,"get",""),t[e]}};function Lv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xv),slots:t.slots,emit:t.emit,expose:e}}function wo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ph(k_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}})):t.proxy}function Fv(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function Uv(t){return K(t)&&"__vccOpts"in t}const gt=(t,e)=>M_(t,e,Mi);function Tl(t,e,n){const s=arguments.length;return s===2?ge(e)&&!V(e)?Di(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Di(n)&&(n=[n]),Ce(t,e,n))}const $v="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Da;const Qc=typeof window<"u"&&window.trustedTypes;if(Qc)try{Da=Qc.createPolicy("vue",{createHTML:t=>t})}catch{}const Ef=Da?t=>Da.createHTML(t):t=>t,Bv="http://www.w3.org/2000/svg",Vv="http://www.w3.org/1998/Math/MathML",en=typeof document<"u"?document:null,Jc=en&&en.createElement("template"),Hv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?en.createElementNS(Bv,t):e==="mathml"?en.createElementNS(Vv,t):n?en.createElement(t,{is:n}):en.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>en.createTextNode(t),createComment:t=>en.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>en.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Jc.innerHTML=Ef(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Jc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},En="transition",oi="animation",Bs=Symbol("_vtc"),Cf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},bf=ke({},Uh,Cf),Wv=t=>(t.displayName="Transition",t.props=bf,t),jv=Wv((t,{slots:e})=>Tl(H_,If(t),e)),Kn=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xc=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function If(t){const e={};for(const U in t)U in Cf||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,_=qv(i),I=_&&_[0],M=_&&_[1],{onBeforeEnter:x,onEnter:N,onEnterCancelled:F,onLeave:O,onLeaveCancelled:Q,onBeforeAppear:se=x,onAppear:ie=N,onAppearCancelled:Pe=F}=e,G=(U,re,Ne,tt)=>{U._enterCancelled=tt,In(U,re?u:a),In(U,re?c:o),Ne&&Ne()},ee=(U,re)=>{U._isLeaving=!1,In(U,d),In(U,f),In(U,h),re&&re()},_e=U=>(re,Ne)=>{const tt=U?ie:N,Te=()=>G(re,U,Ne);Kn(tt,[re,Te]),Zc(()=>{In(re,U?l:r),$t(re,U?u:a),Xc(tt)||eu(re,s,I,Te)})};return ke(e,{onBeforeEnter(U){Kn(x,[U]),$t(U,r),$t(U,o)},onBeforeAppear(U){Kn(se,[U]),$t(U,l),$t(U,c)},onEnter:_e(!1),onAppear:_e(!0),onLeave(U,re){U._isLeaving=!0;const Ne=()=>ee(U,re);$t(U,d),U._enterCancelled?($t(U,h),Ma()):(Ma(),$t(U,h)),Zc(()=>{U._isLeaving&&(In(U,d),$t(U,f),Xc(O)||eu(U,s,M,Ne))}),Kn(O,[U,Ne])},onEnterCancelled(U){G(U,!1,void 0,!0),Kn(F,[U])},onAppearCancelled(U){G(U,!0,void 0,!0),Kn(Pe,[U])},onLeaveCancelled(U){ee(U),Kn(Q,[U])}})}function qv(t){if(t==null)return null;if(ge(t))return[Zo(t.enter),Zo(t.leave)];{const e=Zo(t);return[e,e]}}function Zo(t){return t_(t)}function $t(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bs]||(t[Bs]=new Set)).add(e)}function In(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Bs];n&&(n.delete(e),n.size||(t[Bs]=void 0))}function Zc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Gv=0;function eu(t,e,n,s){const i=t._endId=++Gv,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=wf(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=f=>{f.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function wf(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${En}Delay`),r=s(`${En}Duration`),o=tu(i,r),a=s(`${oi}Delay`),l=s(`${oi}Duration`),c=tu(a,l);let u=null,d=0,h=0;e===En?o>0&&(u=En,d=o,h=r.length):e===oi?c>0&&(u=oi,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?En:oi:null,h=u?u===En?r.length:l.length:0);const f=u===En&&/\b(transform|all)(,|$)/.test(s(`${En}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function tu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>nu(n)+nu(t[s])))}function nu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ma(){return document.body.offsetHeight}function zv(t,e,n){const s=t[Bs];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const su=Symbol("_vod"),Kv=Symbol("_vsh"),Yv=Symbol(""),Qv=/(^|;)\s*display\s*:/;function Jv(t,e,n){const s=t.style,i=we(n);let r=!1;if(n&&!i){if(e)if(we(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Sr(s,a,"")}else for(const o in e)n[o]==null&&Sr(s,o,"");for(const o in n)o==="display"&&(r=!0),Sr(s,o,n[o])}else if(i){if(e!==n){const o=s[Yv];o&&(n+=";"+o),s.cssText=n,r=Qv.test(n)}}else e&&t.removeAttribute("style");su in t&&(t[su]=r?s.display:"",t[Kv]&&(s.display="none"))}const iu=/\s*!important$/;function Sr(t,e,n){if(V(n))n.forEach(s=>Sr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Xv(t,e);iu.test(n)?t.setProperty(ms(s),n.replace(iu,""),"important"):t[s]=n}}const ru=["Webkit","Moz","ms"],ea={};function Xv(t,e){const n=ea[e];if(n)return n;let s=Et(e);if(s!=="filter"&&s in t)return ea[e]=s;s=po(s);for(let i=0;i<ru.length;i++){const r=ru[i]+s;if(r in t)return ea[e]=r}return e}const ou="http://www.w3.org/1999/xlink";function au(t,e,n,s,i,r=a_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ou,e.slice(6,e.length)):t.setAttributeNS(ou,e,n):n==null||r&&!uh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Pt(n)?String(n):n)}function lu(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ef(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=uh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function sn(t,e,n,s){t.addEventListener(e,n,s)}function Zv(t,e,n,s){t.removeEventListener(e,n,s)}const cu=Symbol("_vei");function ey(t,e,n,s,i=null){const r=t[cu]||(t[cu]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=ty(e);if(s){const c=r[e]=iy(s,i);sn(t,a,c,l)}else o&&(Zv(t,a,o,l),r[e]=void 0)}}const uu=/(?:Once|Passive|Capture)$/;function ty(t){let e;if(uu.test(t)){e={};let s;for(;s=t.match(uu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ms(t.slice(2)),e]}let ta=0;const ny=Promise.resolve(),sy=()=>ta||(ny.then(()=>ta=0),ta=Date.now());function iy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Nt(ry(s,n.value),e,5,[s])};return n.value=t,n.attached=sy(),n}function ry(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const du=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,oy=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?zv(t,s,o):e==="style"?Jv(t,n,s):ho(e)?al(e)||ey(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ay(t,e,s,o))?(lu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&au(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!we(s))?lu(t,Et(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),au(t,e,s,o))};function ay(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&du(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return du(e)&&we(n)?!1:e in t}const Tf=new WeakMap,Sf=new WeakMap,Br=Symbol("_moveCb"),hu=Symbol("_enterCb"),ly=t=>(delete t.props.mode,t),cy=ly({name:"TransitionGroup",props:ke({},bf,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=wl(),s=Fh();let i,r;return jh(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!py(i[0].el,n.vnode.el,o))return;i.forEach(dy),i.forEach(hy);const a=i.filter(fy);Ma(),a.forEach(l=>{const c=l.el,u=c.style;$t(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[Br]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c[Br]=null,In(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=te(t),a=If(o);let l=o.tag||ue;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),cs(u,Ni(u,a,s,n)),Tf.set(u,u.el.getBoundingClientRect()))}r=e.default?yl(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&cs(u,Ni(u,a,s,n))}return Ce(l,null,r)}}}),uy=cy;function dy(t){const e=t.el;e[Br]&&e[Br](),e[hu]&&e[hu]()}function hy(t){Sf.set(t,t.el.getBoundingClientRect())}function fy(t){const e=Tf.get(t),n=Sf.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function py(t,e,n){const s=t.cloneNode(),i=t[Bs];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=wf(s);return r.removeChild(s),o}const $n=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>wr(e,n):e};function gy(t){t.target.composing=!0}function fu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vt=Symbol("_assign"),Zn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[vt]=$n(i);const r=s||i.props&&i.props.type==="number";sn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Dr(a)),t[vt](a)}),n&&sn(t,"change",()=>{t.value=t.value.trim()}),e||(sn(t,"compositionstart",gy),sn(t,"compositionend",fu),sn(t,"change",fu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[vt]=$n(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Dr(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},my={deep:!0,created(t,e,n){t[vt]=$n(n),sn(t,"change",()=>{const s=t._modelValue,i=Vs(t),r=t.checked,o=t[vt];if(V(s)){const a=ul(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Ys(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Af(t,r))})},mounted:pu,beforeUpdate(t,e,n){t[vt]=$n(n),pu(t,e,n)}};function pu(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(V(e))i=ul(e,s.props.value)>-1;else if(Ys(e))i=e.has(s.props.value);else{if(e===n)return;i=as(e,Af(t,!0))}t.checked!==i&&(t.checked=i)}const _y={created(t,{value:e},n){t.checked=as(e,n.props.value),t[vt]=$n(n),sn(t,"change",()=>{t[vt](Vs(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[vt]=$n(s),e!==n&&(t.checked=as(e,s.props.value))}},gu={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Ys(e);sn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Dr(Vs(o)):Vs(o));t[vt](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,vo(()=>{t._assigning=!1})}),t[vt]=$n(s)},mounted(t,{value:e}){mu(t,e)},beforeUpdate(t,e,n){t[vt]=$n(n)},updated(t,{value:e}){t._assigning||mu(t,e)}};function mu(t,e){const n=t.multiple,s=V(e);if(!(n&&!s&&!Ys(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=Vs(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ul(e,a)>-1}else o.selected=e.has(a);else if(as(Vs(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vs(t){return"_value"in t?t._value:t.value}function Af(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const vy=["ctrl","shift","alt","meta"],yy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vy.some(n=>t[`${n}Key`]&&!e.includes(n))},Ey=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=yy[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Cy=ke({patchProp:oy},Hv);let _u;function by(){return _u||(_u=fv(Cy))}const Rf=(...t)=>{const e=by().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=wy(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Iy(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Iy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wy(t){return we(t)?document.querySelector(t):t}const kf=Symbol("theme");function Ty(){const t=jt(localStorage.getItem("theme")||"light");Ms(t,n=>{localStorage.setItem("theme",n),document.documentElement.setAttribute("data-theme",n)});const e=()=>{t.value=t.value==="light"?"dark":"light"};return _i(kf,{theme:t,toggleTheme:e}),{theme:t,toggleTheme:e}}function Sy(){const t=dt(kf);if(!t)throw new Error("useTheme() 必須在 createTheme() 內使用");return t}const Ay=Ue({name:"ThemeProvider",setup(){Ty()}}),qn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};function Ry(t,e,n,s,i,r){return Yh(t.$slots,"default")}const ky=qn(Ay,[["render",Ry]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof document<"u";function Pf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Py(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pf(t.default)}const ae=Object.assign;function na(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ot(i)?i.map(t):t(i)}return n}const yi=()=>{},Ot=Array.isArray,Nf=/#/g,Ny=/&/g,Oy=/\//g,Dy=/=/g,My=/\?/g,Of=/\+/g,xy=/%5B/g,Ly=/%5D/g,Df=/%5E/g,Fy=/%60/g,Mf=/%7B/g,Uy=/%7C/g,xf=/%7D/g,$y=/%20/g;function Sl(t){return encodeURI(""+t).replace(Uy,"|").replace(xy,"[").replace(Ly,"]")}function By(t){return Sl(t).replace(Mf,"{").replace(xf,"}").replace(Df,"^")}function xa(t){return Sl(t).replace(Of,"%2B").replace($y,"+").replace(Nf,"%23").replace(Ny,"%26").replace(Fy,"`").replace(Mf,"{").replace(xf,"}").replace(Df,"^")}function Vy(t){return xa(t).replace(Dy,"%3D")}function Hy(t){return Sl(t).replace(Nf,"%23").replace(My,"%3F")}function Wy(t){return t==null?"":Hy(t).replace(Oy,"%2F")}function xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jy=/\/$/,qy=t=>t.replace(jy,"");function sa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Yy(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:xi(o)}}function Gy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zy(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Hs(e.matched[s],n.matched[i])&&Lf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ky(t[n],e[n]))return!1;return!0}function Ky(t,e){return Ot(t)?yu(t,e):Ot(e)?yu(e,t):t===e}function yu(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Yy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Li;(function(t){t.pop="pop",t.push="push"})(Li||(Li={}));var Ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ei||(Ei={}));function Qy(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qy(t)}const Jy=/^[^#]+#/;function Xy(t,e){return t.replace(Jy,"#")+e}function Zy(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const To=()=>({left:window.scrollX,top:window.scrollY});function eE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Zy(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Eu(t,e){return(history.state?history.state.position-e:-1)+t}const La=new Map;function tE(t,e){La.set(t,e)}function nE(t){const e=La.get(t);return La.delete(t),e}let sE=()=>location.protocol+"//"+location.host;function Ff(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),vu(l,"")}return vu(n,t)+s+i}function iE(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const f=Ff(t,location),_=n.value,I=e.value;let M=0;if(h){if(n.value=f,e.value=h,o&&o===_){o=null;return}M=I?h.position-I.position:0}else s(f);i.forEach(x=>{x(n.value,_,{delta:M,type:Li.pop,direction:M?M>0?Ei.forward:Ei.back:Ei.unknown})})};function l(){o=n.value}function c(h){i.push(h);const f=()=>{const _=i.indexOf(h);_>-1&&i.splice(_,1)};return r.push(f),f}function u(){const{history:h}=window;h.state&&h.replaceState(ae({},h.state,{scroll:To()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Cu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?To():null}}function rE(t){const{history:e,location:n}=window,s={value:Ff(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:sE()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](h)}}function o(l,c){const u=ae({},e.state,Cu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:To()});r(u.current,u,!0);const d=ae({},Cu(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function oE(t){t=Qy(t);const e=rE(t),n=iE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:Xy.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function aE(t){return typeof t=="string"||t&&typeof t=="object"}function Uf(t){return typeof t=="string"||typeof t=="symbol"}const $f=Symbol("");var bu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bu||(bu={}));function Ws(t,e){return ae(new Error,{type:t,[$f]:!0},e)}function Zt(t,e){return t instanceof Error&&$f in t&&(e==null||!!(t.type&e))}const Iu="[^/]+?",lE={sensitive:!1,strict:!1,start:!0,end:!0},cE=/[.+*?^${}()[\]/\\]/g;function uE(t,e){const n=ae({},lE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let f=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(cE,"\\$&"),f+=40;else if(h.type===1){const{value:_,repeatable:I,optional:M,regexp:x}=h;r.push({name:_,repeatable:I,optional:M});const N=x||Iu;if(N!==Iu){f+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${_}" (${N}): `+O.message)}}let F=I?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(F=M&&c.length<2?`(?:/${F})`:"/"+F),M&&(F+="?"),i+=F,f+=20,M&&(f+=-8),I&&(f+=-20),N===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",_=r[h-1];d[_.name]=f&&_.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:I,optional:M}=f,x=_ in c?c[_]:"";if(Ot(x)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const N=Ot(x)?x.join("/"):x;if(!N)if(M)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function dE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Bf(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=dE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wu(s))return 1;if(wu(i))return-1}return i.length-s.length}function wu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hE={type:0,value:""},fE=/[a-zA-Z0-9_]/;function pE(t){if(!t)return[[]];if(t==="/")return[[hE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:fE.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function gE(t,e,n){const s=uE(pE(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function mE(t,e){const n=[],s=new Map;e=Ru({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,h,f){const _=!f,I=Su(d);I.aliasOf=f&&f.record;const M=Ru(e,d),x=[I];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const Q of O)x.push(Su(ae({},I,{components:f?f.record.components:I.components,path:Q,aliasOf:f?f.record:I})))}let N,F;for(const O of x){const{path:Q}=O;if(h&&Q[0]!=="/"){const se=h.record.path,ie=se[se.length-1]==="/"?"":"/";O.path=h.record.path+(Q&&ie+Q)}if(N=gE(O,h,M),f?f.alias.push(N):(F=F||N,F!==N&&F.alias.push(N),_&&d.name&&!Au(N)&&o(d.name)),Vf(N)&&l(N),I.children){const se=I.children;for(let ie=0;ie<se.length;ie++)r(se[ie],N,f&&f.children[ie])}f=f||N}return F?()=>{o(F)}:yi}function o(d){if(Uf(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=yE(d,n);n.splice(h,0,d),d.record.name&&!Au(d)&&s.set(d.record.name,d)}function c(d,h){let f,_={},I,M;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw Ws(1,{location:d});M=f.record.name,_=ae(Tu(h.params,f.keys.filter(F=>!F.optional).concat(f.parent?f.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),d.params&&Tu(d.params,f.keys.map(F=>F.name))),I=f.stringify(_)}else if(d.path!=null)I=d.path,f=n.find(F=>F.re.test(I)),f&&(_=f.parse(I),M=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw Ws(1,{location:d,currentLocation:h});M=f.record.name,_=ae({},h.params,d.params),I=f.stringify(_)}const x=[];let N=f;for(;N;)x.unshift(N.record),N=N.parent;return{name:M,path:I,params:_,matched:x,meta:vE(x)}}t.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Tu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Su(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_E(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _E(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Au(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vE(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Ru(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function yE(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Bf(t,e[r])<0?s=r:n=r+1}const i=EE(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function EE(t){let e=t;for(;e=e.parent;)if(Vf(e)&&Bf(t,e)===0)return e}function Vf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function CE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Of," "),o=r.indexOf("="),a=xi(o<0?r:r.slice(0,o)),l=o<0?null:xi(r.slice(o+1));if(a in e){let c=e[a];Ot(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ku(t){let e="";for(let n in t){const s=t[n];if(n=Vy(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(r=>r&&xa(r)):[s&&xa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function bE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const IE=Symbol(""),Pu=Symbol(""),So=Symbol(""),Al=Symbol(""),Fa=Symbol("");function ai(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function An(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Ws(4,{from:n,to:e})):h instanceof Error?l(h):aE(h)?l(Ws(2,{from:e,to:h})):(o&&s.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function ia(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Pf(l)){const u=(l.__vccOpts||l)[e];u&&r.push(An(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Py(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&An(f,n,s,o,a,i)()}))}}return r}function Nu(t){const e=dt(So),n=dt(Al),s=gt(()=>{const l=rs(t.to);return e.resolve(l)}),i=gt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Hs.bind(null,u));if(h>-1)return h;const f=Ou(l[c-2]);return c>1&&Ou(u)===f&&d[d.length-1].path!==f?d.findIndex(Hs.bind(null,l[c-2])):h}),r=gt(()=>i.value>-1&&RE(n.params,s.value.params)),o=gt(()=>i.value>-1&&i.value===n.matched.length-1&&Lf(n.params,s.value.params));function a(l={}){if(AE(l)){const c=e[rs(t.replace)?"replace":"push"](rs(t.to)).catch(yi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:gt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function wE(t){return t.length===1?t[0]:t}const TE=Ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nu,setup(t,{slots:e}){const n=Qs(Nu(t)),{options:s}=dt(So),i=gt(()=>({[Du(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Du(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&wE(e.default(n));return t.custom?r:Tl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),SE=TE;function AE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ot(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ou(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Du=(t,e,n)=>t??e??n,kE=Ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=dt(Fa),i=gt(()=>t.route||s.value),r=dt(Pu,0),o=gt(()=>{let c=rs(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=gt(()=>i.value.matched[o.value]);_i(Pu,gt(()=>o.value+1)),_i(IE,a),_i(Fa,i);const l=jt();return Ms(()=>[l.value,a.value,t.name],([c,u,d],[h,f,_])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Hs(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Mu(n.default,{Component:h,route:c});const f=d.props[u],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,M=Tl(h,ae({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Mu(n.default,{Component:M,route:c})||M}}});function Mu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const PE=kE;function NE(t){const e=mE(t.routes,t),n=t.parseQuery||CE,s=t.stringifyQuery||ku,i=t.history,r=ai(),o=ai(),a=ai(),l=P_(Cn);let c=Cn;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=na.bind(null,y=>""+y),d=na.bind(null,Wy),h=na.bind(null,xi);function f(y,D){let k,$;return Uf(y)?(k=e.getRecordMatcher(y),$=D):$=y,e.addRoute($,k)}function _(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function I(){return e.getRoutes().map(y=>y.record)}function M(y){return!!e.getRecordMatcher(y)}function x(y,D){if(D=ae({},D||l.value),typeof y=="string"){const m=sa(n,y,D.path),v=e.resolve({path:m.path},D),b=i.createHref(m.fullPath);return ae(m,v,{params:h(v.params),hash:xi(m.hash),redirectedFrom:void 0,href:b})}let k;if(y.path!=null)k=ae({},y,{path:sa(n,y.path,D.path).path});else{const m=ae({},y.params);for(const v in m)m[v]==null&&delete m[v];k=ae({},y,{params:d(m)}),D.params=d(D.params)}const $=e.resolve(k,D),fe=y.hash||"";$.params=u(h($.params));const p=Gy(s,ae({},y,{hash:By(fe),path:$.path})),g=i.createHref(p);return ae({fullPath:p,hash:fe,query:s===ku?bE(y.query):y.query||{}},$,{redirectedFrom:void 0,href:g})}function N(y){return typeof y=="string"?sa(n,y,l.value.path):ae({},y)}function F(y,D){if(c!==y)return Ws(8,{from:D,to:y})}function O(y){return ie(y)}function Q(y){return O(ae(N(y),{replace:!0}))}function se(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:k}=D;let $=typeof k=="function"?k(y):k;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=N($):{path:$},$.params={}),ae({query:y.query,hash:y.hash,params:$.path!=null?{}:y.params},$)}}function ie(y,D){const k=c=x(y),$=l.value,fe=y.state,p=y.force,g=y.replace===!0,m=se(k);if(m)return ie(ae(N(m),{state:typeof m=="object"?ae({},fe,m.state):fe,force:p,replace:g}),D||k);const v=k;v.redirectedFrom=D;let b;return!p&&zy(s,$,k)&&(b=Ws(16,{to:v,from:$}),Mt($,$,!0,!1)),(b?Promise.resolve(b):ee(v,$)).catch(E=>Zt(E)?Zt(E,2)?E:yn(E):oe(E,v,$)).then(E=>{if(E){if(Zt(E,2))return ie(ae({replace:g},N(E.to),{state:typeof E.to=="object"?ae({},fe,E.to.state):fe,force:p}),D||v)}else E=U(v,$,!0,g,fe);return _e(v,$,E),E})}function Pe(y,D){const k=F(y,D);return k?Promise.reject(k):Promise.resolve()}function G(y){const D=Cs.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function ee(y,D){let k;const[$,fe,p]=OE(y,D);k=ia($.reverse(),"beforeRouteLeave",y,D);for(const m of $)m.leaveGuards.forEach(v=>{k.push(An(v,y,D))});const g=Pe.bind(null,y,D);return k.push(g),ft(k).then(()=>{k=[];for(const m of r.list())k.push(An(m,y,D));return k.push(g),ft(k)}).then(()=>{k=ia(fe,"beforeRouteUpdate",y,D);for(const m of fe)m.updateGuards.forEach(v=>{k.push(An(v,y,D))});return k.push(g),ft(k)}).then(()=>{k=[];for(const m of p)if(m.beforeEnter)if(Ot(m.beforeEnter))for(const v of m.beforeEnter)k.push(An(v,y,D));else k.push(An(m.beforeEnter,y,D));return k.push(g),ft(k)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),k=ia(p,"beforeRouteEnter",y,D,G),k.push(g),ft(k))).then(()=>{k=[];for(const m of o.list())k.push(An(m,y,D));return k.push(g),ft(k)}).catch(m=>Zt(m,8)?m:Promise.reject(m))}function _e(y,D,k){a.list().forEach($=>G(()=>$(y,D,k)))}function U(y,D,k,$,fe){const p=F(y,D);if(p)return p;const g=D===Cn,m=Ts?history.state:{};k&&($||g?i.replace(y.fullPath,ae({scroll:g&&m&&m.scroll},fe)):i.push(y.fullPath,fe)),l.value=y,Mt(y,D,k,g),yn()}let re;function Ne(){re||(re=i.listen((y,D,k)=>{if(!pr.listening)return;const $=x(y),fe=se($);if(fe){ie(ae(fe,{replace:!0,force:!0}),$).catch(yi);return}c=$;const p=l.value;Ts&&tE(Eu(p.fullPath,k.delta),To()),ee($,p).catch(g=>Zt(g,12)?g:Zt(g,2)?(ie(ae(N(g.to),{force:!0}),$).then(m=>{Zt(m,20)&&!k.delta&&k.type===Li.pop&&i.go(-1,!1)}).catch(yi),Promise.reject()):(k.delta&&i.go(-k.delta,!1),oe(g,$,p))).then(g=>{g=g||U($,p,!1),g&&(k.delta&&!Zt(g,8)?i.go(-k.delta,!1):k.type===Li.pop&&Zt(g,20)&&i.go(-1,!1)),_e($,p,g)}).catch(yi)}))}let tt=ai(),Te=ai(),de;function oe(y,D,k){yn(y);const $=Te.list();return $.length?$.forEach(fe=>fe(y,D,k)):console.error(y),Promise.reject(y)}function Jt(){return de&&l.value!==Cn?Promise.resolve():new Promise((y,D)=>{tt.add([y,D])})}function yn(y){return de||(de=!y,Ne(),tt.list().forEach(([D,k])=>y?k(y):D()),tt.reset()),y}function Mt(y,D,k,$){const{scrollBehavior:fe}=t;if(!Ts||!fe)return Promise.resolve();const p=!k&&nE(Eu(y.fullPath,0))||($||!k)&&history.state&&history.state.scroll||null;return vo().then(()=>fe(y,D,p)).then(g=>g&&eE(g)).catch(g=>oe(g,y,D))}const Ye=y=>i.go(y);let Es;const Cs=new Set,pr={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:I,resolve:x,options:t,push:O,replace:Q,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:Jt,install(y){const D=this;y.component("RouterLink",SE),y.component("RouterView",PE),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),Ts&&!Es&&l.value===Cn&&(Es=!0,O(i.location).catch(fe=>{}));const k={};for(const fe in Cn)Object.defineProperty(k,fe,{get:()=>l.value[fe],enumerable:!0});y.provide(So,D),y.provide(Al,Ah(k)),y.provide(Fa,l);const $=y.unmount;Cs.add(y),y.unmount=function(){Cs.delete(y),Cs.size<1&&(c=Cn,re&&re(),re=null,l.value=Cn,Es=!1,de=!1),$()}}};function ft(y){return y.reduce((D,k)=>D.then(()=>G(k)),Promise.resolve())}return pr}function OE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Hs(c,l))||i.push(l))}return[n,s,i]}function DE(){return dt(So)}function Hf(t){return dt(Al)}const ME=Ue({name:"NavBar",setup(){const t=jt(!1),e=jt(null),n=Hf(),{theme:s,toggleTheme:i}=Sy(),r=jt(!1),o=u=>{u.stopPropagation(),t.value=!t.value},a=u=>{e.value&&!e.value.contains(u.target)&&(t.value=!1)};return Ms(()=>n.fullPath,()=>{t.value=!1}),nr(()=>{document.addEventListener("click",a)}),El(()=>{document.removeEventListener("click",a)}),{isMenuOpen:t,toggleMenu:o,navBar:e,theme:s,isTransitioning:r,startThemeTransition:()=>{i(),r.value=!0},onOverlayAnimationEnd:()=>{r.value=!1}}}}),xE={ref:"navBar",class:"navbar"},LE={key:0,class:"close-icon"};function FE(t,e,n,s,i,r){const o=wt("router-link");return L(),B("nav",xE,[e[11]||(e[11]=C("div",{class:"navbar-left"},[C("div",{class:"logo-text"},"FeedME.io")],-1)),C("button",{class:"theme-toggle",onClick:e[0]||(e[0]=(...a)=>t.startThemeTransition&&t.startThemeTransition(...a))},Se(t.theme==="light"?"🌞 亮色模式":"🌙 黑暗模式"),1),C("button",{class:"hamburger",onClick:e[1]||(e[1]=a=>t.toggleMenu(a))},[t.isMenuOpen?(L(),B("span",LE,"−")):(L(),B(ue,{key:1},[e[3]||(e[3]=C("span",{class:"bar"},null,-1)),e[4]||(e[4]=C("span",{class:"bar"},null,-1)),e[5]||(e[5]=C("span",{class:"bar"},null,-1))],64))]),C("ul",{class:dn(["navbar-links",{open:t.isMenuOpen}])},[C("li",null,[Ce(o,{to:"/"},{default:ot(()=>e[6]||(e[6]=[Le("主頁")])),_:1})]),C("li",null,[Ce(o,{to:"/create-order"},{default:ot(()=>e[7]||(e[7]=[Le("建立訂單")])),_:1})]),C("li",null,[Ce(o,{to:"/cart"},{default:ot(()=>e[8]||(e[8]=[Le("購物車")])),_:1})]),C("li",null,[Ce(o,{to:"/order/history"},{default:ot(()=>e[9]||(e[9]=[Le("歷史訂單")])),_:1})]),C("li",null,[Ce(o,{to:"/order/sample"},{default:ot(()=>e[10]||(e[10]=[Le("下單頁面")])),_:1})])],2),t.isTransitioning?(L(),B("div",{key:0,class:"theme-overlay",onAnimationend:e[2]||(e[2]=(...a)=>t.onOverlayAnimationEnd&&t.onOverlayAnimationEnd(...a))},null,32)):Dn("",!0)],512)}const UE=qn(ME,[["render",FE],["__scopeId","data-v-c138cd5b"]]),$E=Ue({name:"FooterComp"}),BE={class:"footer"};function VE(t,e,n,s,i,r){return L(),B("footer",BE," © 2025 FeedME.io | 讓點餐更簡單 ")}const HE=qn($E,[["render",VE],["__scopeId","data-v-04f6f1a8"]]),WE=Ue({name:"App",components:{ThemeProvider:ky,NavBar:UE,FooterComp:HE}});function jE(t,e,n,s,i,r){const o=wt("NavBar"),a=wt("router-view"),l=wt("FooterComp"),c=wt("ThemeProvider");return L(),mt(c,null,{default:ot(()=>[Ce(o),C("main",null,[Ce(a)]),Ce(l)]),_:1})}const qE=qn(WE,[["render",jE]]),GE=Ue({name:"HomePage",setup(){const t=DE();return{goCreateOrder:()=>t.push("/create-order"),goSearchOrder:()=>t.push("/search-order"),goOrderList:()=>t.push("/order-list")}}}),zE={class:"home-page"},KE={class:"actions"};function YE(t,e,n,s,i,r){return L(),B("div",zE,[e[3]||(e[3]=C("h1",{class:"site-title"},"FeedME.IO",-1)),e[4]||(e[4]=C("p",{class:"subtitle"},"開啟你的點餐之旅",-1)),C("div",KE,[C("button",{class:"action-btn create-btn",onClick:e[0]||(e[0]=(...o)=>t.goCreateOrder&&t.goCreateOrder(...o))},"創建新訂單"),C("button",{class:"action-btn search-btn",onClick:e[1]||(e[1]=(...o)=>t.goSearchOrder&&t.goSearchOrder(...o))},"搜尋訂單"),C("button",{class:"action-btn list-btn",onClick:e[2]||(e[2]=(...o)=>t.goOrderList&&t.goOrderList(...o))},"查看訂單列表")])])}const QE=qn(GE,[["render",YE],["__scopeId","data-v-df99d12d"]]);var xu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Js(e)},Js=function(t){return new Error("Firebase Database ("+Wf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new XE;const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qf=function(t){const e=jf(t);return Rl.encodeByteArray(e,!0)},Vr=function(t){return qf(t).replace(/\./g,"")},Hr=function(t){try{return Rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){return Gf(void 0,t)}function Gf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eC(n)||(t[n]=Gf(t[n],e[n]));return t}function eC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=()=>tC().__FIREBASE_DEFAULTS__,sC=()=>{if(typeof process>"u"||typeof xu>"u")return;const t=xu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hr(t[1]);return e&&JSON.parse(e)},kl=()=>{try{return nC()||sC()||iC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zf=t=>{var e,n;return(n=(e=kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rC=t=>{const e=zf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Kf=()=>{var t;return(t=kl())===null||t===void 0?void 0:t.config},Yf=t=>{var e;return(e=kl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vr(JSON.stringify(n)),Vr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function aC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lC(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cC(){return Wf.NODE_ADMIN===!0}function Xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Zf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function uC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="FirebaseError";class Qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=dC,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?hC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,s)}}function hC(t,e){return t.replace(fC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const fC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Fi(Hr(r[0])||""),n=Fi(Hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},pC=function(t){const e=ep(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gC=function(t){const e=ep(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ua(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ui(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Lu(r)&&Lu(o)){if(!Ui(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Lu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function _C(t,e){const n=new vC(t,e);return n.subscribe.bind(n)}class vC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");yC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ra),i.error===void 0&&(i.error=ra),i.complete===void 0&&(i.complete=ra);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ra(){}function Nl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ro=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=1e3,bC=2,IC=4*60*60*1e3,wC=.5;function Fu(t,e=CC,n=bC){const s=e*Math.pow(n,t),i=Math.round(wC*s*(Math.random()-.5)*2);return Math.min(IC,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ao;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AC(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:SC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SC(t){return t===Qn?void 0:t}function AC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const kC={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},PC=he.INFO,NC={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},OC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=NC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ko{constructor(e){this.name=e,this._logLevel=PC,this._logHandler=OC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const DC=(t,e)=>e.some(n=>t instanceof n);let Uu,$u;function MC(){return Uu||(Uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xC(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tp=new WeakMap,$a=new WeakMap,np=new WeakMap,oa=new WeakMap,Ol=new WeakMap;function LC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tp.set(n,t)}).catch(()=>{}),Ol.set(e,t),e}function FC(t){if($a.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$a.set(t,e)}let Ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $a.get(t);if(e==="objectStoreNames")return t.objectStoreNames||np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UC(t){Ba=t(Ba)}function $C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(aa(this),e,...n);return np.set(s,e.sort?e.sort():[e]),Mn(s)}:xC().includes(t)?function(...e){return t.apply(aa(this),e),Mn(tp.get(this))}:function(...e){return Mn(t.apply(aa(this),e))}}function BC(t){return typeof t=="function"?$C(t):(t instanceof IDBTransaction&&FC(t),DC(t,MC())?new Proxy(t,Ba):t)}function Mn(t){if(t instanceof IDBRequest)return LC(t);if(oa.has(t))return oa.get(t);const e=BC(t);return e!==t&&(oa.set(t,e),Ol.set(e,t)),e}const aa=t=>Ol.get(t);function sp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Mn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const VC=["get","getKey","getAll","getAllKeys","count"],HC=["put","add","delete","clear"],la=new Map;function Bu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(la.get(e))return la.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=HC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||VC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return la.set(e,r),r}UC(t=>({...t,get:(e,n,s)=>Bu(e,n)||t.get(e,n,s),has:(e,n)=>!!Bu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Va="@firebase/app",Vu="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new ko("@firebase/app"),qC="@firebase/app-compat",GC="@firebase/analytics-compat",zC="@firebase/analytics",KC="@firebase/app-check-compat",YC="@firebase/app-check",QC="@firebase/auth",JC="@firebase/auth-compat",XC="@firebase/database",ZC="@firebase/data-connect",eb="@firebase/database-compat",tb="@firebase/functions",nb="@firebase/functions-compat",sb="@firebase/installations",ib="@firebase/installations-compat",rb="@firebase/messaging",ob="@firebase/messaging-compat",ab="@firebase/performance",lb="@firebase/performance-compat",cb="@firebase/remote-config",ub="@firebase/remote-config-compat",db="@firebase/storage",hb="@firebase/storage-compat",fb="@firebase/firestore",pb="@firebase/vertexai",gb="@firebase/firestore-compat",mb="firebase",_b="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="[DEFAULT]",vb={[Va]:"fire-core",[qC]:"fire-core-compat",[zC]:"fire-analytics",[GC]:"fire-analytics-compat",[YC]:"fire-app-check",[KC]:"fire-app-check-compat",[QC]:"fire-auth",[JC]:"fire-auth-compat",[XC]:"fire-rtdb",[ZC]:"fire-data-connect",[eb]:"fire-rtdb-compat",[tb]:"fire-fn",[nb]:"fire-fn-compat",[sb]:"fire-iid",[ib]:"fire-iid-compat",[rb]:"fire-fcm",[ob]:"fire-fcm-compat",[ab]:"fire-perf",[lb]:"fire-perf-compat",[cb]:"fire-rc",[ub]:"fire-rc-compat",[db]:"fire-gcs",[hb]:"fire-gcs-compat",[fb]:"fire-fst",[gb]:"fire-fst-compat",[pb]:"fire-vertex","fire-js":"fire-js",[mb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Map,yb=new Map,Wa=new Map;function Hu(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(Wa.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Wa.set(e,t);for(const n of jr.values())Hu(n,t);for(const n of yb.values())Hu(n,t);return!0}function vs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xn=new _s("app","Firebase",Eb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=_b;function ip(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ha,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(n||(n=Kf()),!n)throw xn.create("no-options");const r=jr.get(i);if(r){if(Ui(n,r.options)&&Ui(s,r.config))return r;throw xn.create("duplicate-app",{appName:i})}const o=new RC(i);for(const l of Wa.values())o.addComponent(l);const a=new Cb(n,s,o);return jr.set(i,a),a}function Dl(t=Ha){const e=jr.get(t);if(!e&&t===Ha&&Kf())return ip();if(!e)throw xn.create("no-app",{appName:t});return e}function yt(t,e,n){var s;let i=(s=vb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Kt(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="firebase-heartbeat-database",Ib=1,$i="firebase-heartbeat-store";let ca=null;function rp(){return ca||(ca=sp(bb,Ib,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($i)}catch(n){console.warn(n)}}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),ca}async function wb(t){try{const n=(await rp()).transaction($i),s=await n.objectStore($i).get(op(t));return await n.done,s}catch(e){if(e instanceof Qt)hn.warn(e.message);else{const n=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function Wu(t,e){try{const s=(await rp()).transaction($i,"readwrite");await s.objectStore($i).put(e,op(t)),await s.done}catch(n){if(n instanceof Qt)hn.warn(n.message);else{const s=xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(s.message)}}}function op(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=1024,Sb=30;class Ab{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ju();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Sb){const o=Pb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){hn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ju(),{heartbeatsToSend:s,unsentEntries:i}=Rb(this._heartbeatsCache.heartbeats),r=Vr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return hn.warn(n),""}}}function ju(){return new Date().toISOString().substring(0,10)}function Rb(t,e=Tb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xf()?Zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qu(t){return Vr(JSON.stringify({version:2,heartbeats:t})).length}function Pb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){Kt(new Dt("platform-logger",e=>new WC(e),"PRIVATE")),Kt(new Dt("heartbeat",e=>new Ab(e),"PRIVATE")),yt(Va,Vu,t),yt(Va,Vu,"esm2017"),yt("fire-js","")}Nb("");var Gu={};const zu="@firebase/database",Ku="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap="";function Ob(t){ap=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Db(e)}}catch{}return new Mb},es=lp("localStorage"),xb=lp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new ko("@firebase/database"),Lb=function(){let t=1;return function(){return t++}}(),cp=function(t){const e=EC(t),n=new mC;n.update(e);const s=n.digest();return Rl.encodeByteArray(s)},ir=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ir.apply(null,s):typeof s=="object"?e+=Ae(s):e+=s,e+=" "}return e};let Ci=null,Yu=!0;const Fb=function(t,e){T(!0,"Can't turn on custom loggers persistently."),xs.logLevel=he.VERBOSE,Ci=xs.log.bind(xs)},Ve=function(...t){if(Yu===!0&&(Yu=!1,Ci===null&&xb.get("logging_enabled")===!0&&Fb()),Ci){const e=ir.apply(null,t);Ci(e)}},rr=function(t){return function(...e){Ve(t,...e)}},ja=function(...t){const e="FIREBASE INTERNAL ERROR: "+ir(...t);xs.error(e)},fn=function(...t){const e=`FIREBASE FATAL ERROR: ${ir(...t)}`;throw xs.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+ir(...t);xs.warn(e)},Ub=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},up=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$b=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qs="[MIN_NAME]",us="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===qs||e===us)return-1;if(e===qs||t===us)return 1;{const n=Qu(t),s=Qu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Bb=function(t,e){return t===e?0:t<e?-1:1},li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},Ml=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ae(e[s]),n+=":",n+=Ml(t[e[s]]);return n+="}",n},dp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hp=function(t){T(!up(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Vb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const jb=new RegExp("^-?(0*)\\d{1,10}$"),qb=-2147483648,Gb=2147483647,Qu=function(t){if(jb.test(t)){const e=Number(t);if(e>=qb&&e<=Gb)return e}return null},ti=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},zb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class Ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ar.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="5",fp="v",pp="s",gp="r",mp="f",_p=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vp="ls",yp="p",qa="ac",Ep="websocket",Cp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=es.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&es.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Qb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ip(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Ep)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qb(t)&&(n.ns=t.namespace);const i=[];return et(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={},da={};function Ll(t){const e=t.toString();return ua[e]||(ua[e]=new Jb),ua[e]}function Xb(t,e){const n=t.toString();return da[n]||(da[n]=e()),da[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ti(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="start",eI="close",tI="pLPCommand",nI="pRTLPCB",wp="id",Tp="pw",Sp="ser",sI="cb",iI="seg",rI="ts",oI="d",aI="dframe",Ap=1870,Rp=30,lI=Ap-Rp,cI=25e3,uI=3e4;class Ss{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rr(e),this.stats_=Ll(n),this.urlFn=l=>(this.appCheckToken&&(l[qa]=this.appCheckToken),Ip(n,Cp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uI)),$b(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ju)this.id=a,this.password=l;else if(o===eI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ju]="t",s[Sp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[fp]=xl,this.transportSessionId&&(s[pp]=this.transportSessionId),this.lastSessionId&&(s[vp]=this.lastSessionId),this.applicationId&&(s[yp]=this.applicationId),this.appCheckToken&&(s[qa]=this.appCheckToken),typeof location<"u"&&location.hostname&&_p.test(location.hostname)&&(s[gp]=mp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ss.forceAllow_=!0}static forceDisallow(){Ss.forceDisallow_=!0}static isAvailable(){return Ss.forceAllow_?!0:!Ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vb()&&!Hb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qf(n),i=dp(s,lI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[aI]="t",s[wp]=e,s[Tp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lb(),window[tI+this.uniqueCallbackIdentifier]=e,window[nI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ve("frame writing exception"),a.stack&&Ve(a.stack),Ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wp]=this.myID,e[Tp]=this.myPW,e[Sp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rp+s.length<=Ap;){const o=this.pendingSegs.shift();s=s+"&"+iI+i+"="+o.seg+"&"+rI+i+"="+o.ts+"&"+oI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(cI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=16384,hI=45e3;let qr=null;typeof MozWebSocket<"u"?qr=MozWebSocket:typeof WebSocket<"u"&&(qr=WebSocket);class It{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rr(this.connId),this.stats_=Ll(n),this.connURL=It.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[fp]=xl,typeof location<"u"&&location.hostname&&_p.test(location.hostname)&&(o[gp]=mp),n&&(o[pp]=n),s&&(o[vp]=s),i&&(o[qa]=i),r&&(o[yp]=r),Ip(e,Ep,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,es.set("previous_websocket_failure",!0);try{let s;cC(),this.mySock=new qr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){It.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&qr!==null&&!It.forceDisallow_}static previouslyFailed(){return es.isInMemoryStorage||es.get("previous_websocket_failure")===!0}markConnectionHealthy(){es.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=dp(n,dI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}It.responsesRequiredToBeHealthy=2;It.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{static get ALL_TRANSPORTS(){return[Ss,It]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=It&&It.isAvailable();let s=n&&!It.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[It];else{const i=this.transports_=[];for(const r of Bi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Bi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=6e4,pI=5e3,gI=10*1024,mI=100*1024,ha="t",Xu="d",_I="s",Zu="r",vI="e",ed="o",td="a",nd="n",sd="p",yI="h";class EI{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rr("c:"+this.id+":"),this.transportManager_=new Bi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ha in e){const n=e[ha];n===td?this.upgradeIfSecondaryHealthy_():n===Zu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ed&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=li("t",e),s=li("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:td,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=li("t",e),s=li("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=li(ha,e);if(Xu in e){const s=e[Xu];if(n===yI){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_I?this.onConnectionShutdown_(s):n===Zu?this.onReset_(s):n===vI?ja("Server Error: "+s):n===ed?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ja("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xl!==s&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(es.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Pp{static getInstance(){return new Gr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=32,rd=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new me("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function Np(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Op(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function Re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new me(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=X(t),s=X(e);if(n===null)return e;if(n===s)return Ge(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mp(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class bI{constructor(e,n){this.errorPrefix_=n,this.parts_=Op(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ro(this.parts_[s]);xp(this)}}function II(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ro(e),xp(t)}function wI(t){const e=t.parts_.pop();t.byteLength_-=Ro(e),t.parts_.length>0&&(t.byteLength_-=1)}function xp(t){if(t.byteLength_>rd)throw new Error(t.errorPrefix_+"has a key path longer than "+rd+" bytes ("+t.byteLength_+").");if(t.parts_.length>id)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+id+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Pp{static getInstance(){return new Ul}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=1e3,TI=60*5*1e3,od=30*1e3,SI=1.3,AI=3e4,RI="server_kill",ad=3;class cn extends kp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cn.nextPersistentConnectionId_++,this.log_=rr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=TI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ul.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ae(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ao,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;cn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const s=js(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=od)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ja("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>AI&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new EI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Xe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(RI)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Xe(d),l())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ua(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ml(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ad&&(this.reconnectDelay_=od,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ad&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ap.replace(/\./g,"-")]=1,Pl()?e["framework.cordova"]=1:Jf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gr.getInstance().currentlyOnline();return Ua(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0;cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(qs,e),i=new Y(qs,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr;class Lp extends Po{static get __EMPTY_NODE(){return yr}static set __EMPTY_NODE(e){yr=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(us,yr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,yr)}toString(){return".key"}}const Ls=new Lp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??De.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new De(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class kI{copy(e,n,s,i,r){return this}insert(e,n,s){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Er(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Er(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Er(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Er(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new kI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){return ei(t.name,e.name)}function $l(t,e){return ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;function NI(t){Ga=t}const Fp=function(t){return typeof t=="number"?"number:"+hp(t):"string:"+t},Up=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else T(t===Ga||t.isEmpty(),"priority of unexpected type.");T(t===Ga||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;class Oe{static set __childrenNodeConstructor(e){ld=e}static get __childrenNodeConstructor(){return ld}constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Up(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:X(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=X(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hp(this.value_):e+=this.value_,this.lazyHash_=cp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),r=Oe.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $p,Bp;function OI(t){$p=t}function DI(t){Bp=t}class MI extends Po{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(us,new Oe("[PRIORITY-POST]",Bp))}makePost(e,n){const s=$p(e);return new Y(n,new Oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new MI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=Math.log(2);class LI{constructor(e){const n=r=>parseInt(Math.log(r)/xI,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new De(h,d.node,De.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=i(l,f),I=i(f+1,c);return d=t[f],h=n?n(d):d,new De(h,d.node,De.BLACK,_,I)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,I){const M=d-_,x=d;d-=_;const N=i(M+1,x),F=t[M],O=n?n(F):F;f(new De(O,F.node,I,null,N))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const I=l.nextBitIsOne(),M=Math.pow(2,l.count-(_+1));I?h(M,De.BLACK):(h(M,De.BLACK),h(M,De.RED))}return u},o=new LI(t.length),a=r(o);return new Je(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;const Is={};class rn{static get Default(){return T(Is&&Ie,"ChildrenNode.ts has not been loaded"),fa=fa||new rn({".priority":Is},{".priority":Ie}),fa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ls,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=zr(s,e.getCompare()):a=Is;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new rn(u,c)}addToIndexes(e,n){const s=Wr(this.indexes_,(i,r)=>{const o=js(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Is)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zr(a,o.getCompare())}else return Is;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new rn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Wr(this.indexes_,i=>{if(i===Is)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new rn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class j{static get EMPTY_NODE(){return ui||(ui=new j(new Je($l),null,rn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Up(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ui}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ui:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ui:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=X(e);if(s===null)return n;{T(X(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fp(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===or?-1:0}withIndex(e){if(e===Ls||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ls||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ls?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FI extends j{constructor(){super(new Je($l),j.EMPTY_NODE,rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const or=new FI;Object.defineProperties(Y,{MIN:{value:new Y(qs,j.EMPTY_NODE)},MAX:{value:new Y(us,or)}});Lp.__EMPTY_NODE=j.EMPTY_NODE;Oe.__childrenNodeConstructor=j;NI(or);DI(or);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=!0;function Me(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,Me(e))}if(!(t instanceof Array)&&UI){const n=[];let s=!1;if(et(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Me(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return j.EMPTY_NODE;const r=zr(n,PI,o=>o.name,$l);if(s){const o=zr(n,Ie.getCompare());return new j(r,Me(e),new rn({".priority":o},{".priority":Ie}))}else return new j(r,Me(e),rn.Default)}else{let n=j.EMPTY_NODE;return et(t,(s,i)=>{if(_n(t,s)&&s.substring(0,1)!=="."){const r=Me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Me(e))}}OI(Me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I extends Po{constructor(e){super(),this.indexPath_=e,T(!J(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ei(e.name,n.name):r}makePost(e,n){const s=Me(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,or);return new Y(us,e)}toString(){return Op(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI extends Po{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Me(e);return new Y(n,s)}toString(){return".value"}}const VI=new BI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){return{type:"value",snapshotNode:t}}function Gs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Vi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Vi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gs(n,s)):o.trackChildChange(Hi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(Vi(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Hi(i,r,o))}else s.trackChildChange(Gs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.indexedFilter_=new Bl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Hi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Vi(n,d));const I=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Gs(h.name,h.node)),I.updateImmediateChild(h.name,h.node)):I}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Vi(c.name,c.node)),r.trackChildChange(Gs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qs}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Vl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jI(t){return t.loadsAllData()?new Bl(t.getIndex()):t.hasLimit()?new WI(t):new Wi(t)}function cd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===VI?n="$value":t.index_===Ls?n="$key":(T(t.index_ instanceof $I,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ud(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends kp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=rr("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Kr.getListenId_(e,s),a={};this.listens_[o]=a;const l=cd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),js(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Kr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=cd(e._queryParams),s=e._path.toString(),i=new Ao;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fi(a.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return{value:null,children:new Map}}function Hp(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=X(e);t.children.has(s)||t.children.set(s,Yr());const i=t.children.get(s);e=Ee(e),Hp(i,e,n)}}function za(t,e,n){t.value!==null?n(e,t.value):GI(t,(s,i)=>{const r=new me(e.toString()+"/"+s);za(i,r,n)})}function GI(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&et(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=10*1e3,KI=30*1e3,YI=5*60*1e3;class QI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zI(e);const s=dd+(KI-dd)*Math.random();bi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;et(e,(i,r)=>{r>0&&_n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*YI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Wp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=Wp()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new Qr(ne(),n,this.revert)}}else return T(X(this.path)===e,"operationForChild called for unrelated child."),new Qr(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new ji(this.source,ne()):new ji(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return J(this.path)?new ds(this.source,ne(),this.snap.getImmediateChild(e)):new ds(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new ds(this.source,ne(),n.value):new qi(this.source,ne(),n)}else return T(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XI(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(HI(o.childName,o.snapshotNode))}),di(t,i,"child_removed",e,s,n),di(t,i,"child_added",e,s,n),di(t,i,"child_moved",r,s,n),di(t,i,"child_changed",e,s,n),di(t,i,"value",e,s,n),i}function di(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>ew(t,a,l)),o.forEach(a=>{const l=ZI(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ZI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ew(t,e,n){if(e.childName==null||n.childName==null)throw Js("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e){return{eventCache:t,serverCache:e}}function Ii(t,e,n,s){return No(new Vn(e,n,s),t.serverCache)}function jp(t,e,n,s){return No(t.eventCache,new Vn(e,n,s))}function Jr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;const tw=()=>(pa||(pa=new Je(Bb)),pa);class be{static fromObject(e){let n=new be(null);return et(e,(s,i)=>{n=n.set(new me(s),i)}),n}constructor(e,n=tw()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(J(e))return null;{const s=X(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ee(e),n);return r!=null?{path:Re(new me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=X(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new be(null)}}set(e,n){if(J(e))return new be(n,this.children);{const s=X(e),r=(this.children.get(s)||new be(null)).set(Ee(e),n),o=this.children.insert(s,r);return new be(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=X(e),s=this.children.get(n);if(s){const i=s.remove(Ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(J(e))return this.value;{const n=X(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(J(e))return n;{const s=X(e),r=(this.children.get(s)||new be(null)).setTree(Ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new be(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(J(e))return null;{const r=X(e),o=this.children.get(r);return o?o.findOnPath_(Ee(e),Re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const i=X(e),r=this.children.get(i);return r?r.foreachOnPath_(Ee(e),Re(n,i),s):new be(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new be(null))}}function wi(t,e,n){if(J(e))return new kt(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ge(i,e);return r=r.updateChild(o,n),new kt(t.writeTree_.set(i,r))}else{const i=new be(n),r=t.writeTree_.setTree(e,i);return new kt(r)}}}function hd(t,e,n){let s=t;return et(n,(i,r)=>{s=wi(s,Re(e,i),r)}),s}function fd(t,e){if(J(e))return kt.empty();{const n=t.writeTree_.setTree(e,new be(null));return new kt(n)}}function Ka(t,e){return ys(t,e)!=null}function ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function pd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function Ln(t,e){if(J(e))return t;{const n=ys(t,e);return n!=null?new kt(new be(n)):new kt(t.writeTree_.subtree(e))}}function Ya(t){return t.writeTree_.isEmpty()}function zs(t,e){return qp(ne(),t.writeTree_,e)}function qp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qp(Re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Re(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t,e){return Yp(e,t)}function nw(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=wi(t.visibleWrites,e,n)),t.lastWriteId=s}function sw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function iw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rw(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ow(t),!0;if(s.snap)t.visibleWrites=fd(t.visibleWrites,s.path);else{const a=s.children;et(a,l=>{t.visibleWrites=fd(t.visibleWrites,Re(s.path,l))})}return!0}else return!1}function rw(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(Re(t.path,n),e))return!0;return!1}function ow(t){t.visibleWrites=Gp(t.allWrites,aw,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function aw(t){return t.visible}function Gp(t,e,n){let s=kt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=Ge(n,o),s=wi(s,a,r.snap)):Tt(o,n)&&(a=Ge(o,n),s=wi(s,ne(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=Ge(n,o),s=hd(s,a,r.children);else if(Tt(o,n))if(a=Ge(o,n),J(a))s=hd(s,ne(),r.children);else{const l=js(r.children,X(a));if(l){const c=l.getChild(Ee(a));s=wi(s,ne(),c)}}}else throw Js("WriteRecord should have .snap or .children")}}return s}function zp(t,e,n,s,i){if(!s&&!i){const r=ys(t.visibleWrites,e);if(r!=null)return r;{const o=Ln(t.visibleWrites,e);if(Ya(o))return n;if(n==null&&!Ka(o,ne()))return null;{const a=n||j.EMPTY_NODE;return zs(o,a)}}}else{const r=Ln(t.visibleWrites,e);if(!i&&Ya(r))return n;if(!i&&n==null&&!Ka(r,ne()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=Gp(t.allWrites,o,e),l=n||j.EMPTY_NODE;return zs(a,l)}}}function lw(t,e,n){let s=j.EMPTY_NODE;const i=ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ln(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=zs(Ln(r,new me(o)),a);s=s.updateImmediateChild(o,l)}),pd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ln(t.visibleWrites,e);return pd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function cw(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Re(e,n);if(Ka(t.visibleWrites,r))return null;{const o=Ln(t.visibleWrites,r);return Ya(o)?i.getChild(n):zs(o,i.getChild(n))}}function uw(t,e,n,s){const i=Re(e,n),r=ys(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ln(t.visibleWrites,i);return zs(o,s.getNode().getImmediateChild(n))}else return null}function dw(t,e){return ys(t.visibleWrites,e)}function hw(t,e,n,s,i,r,o){let a;const l=Ln(t.visibleWrites,e),c=ys(l,ne());if(c!=null)a=c;else if(n!=null)a=zs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=h.getNext();for(;f&&u.length<i;)d(f,s)!==0&&u.push(f),f=h.getNext();return u}else return[]}function fw(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Xr(t,e,n,s){return zp(t.writeTree,t.treePath,e,n,s)}function jl(t,e){return lw(t.writeTree,t.treePath,e)}function gd(t,e,n,s){return cw(t.writeTree,t.treePath,e,n,s)}function Zr(t,e){return dw(t.writeTree,Re(t.treePath,e))}function pw(t,e,n,s,i,r){return hw(t.writeTree,t.treePath,e,n,s,i,r)}function ql(t,e,n){return uw(t.writeTree,t.treePath,e,n)}function Kp(t,e){return Yp(Re(t.treePath,e),t.writeTree)}function Yp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Hi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Vi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Gs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Hi(s,e.snapshotNode,i.oldSnap));else throw Js("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Qp=new mw;class Gl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ql(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),r=pw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){return{filter:t}}function vw(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yw(t,e,n,s,i){const r=new gw;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=Qa(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=eo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=Cw(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ja(t,e,c.path,c.children,s,i,a,r))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=ww(t,e,c.path,s,i,r):o=bw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===St.LISTEN_COMPLETE)o=Iw(t,e,n.path,s,r);else throw Js("Unknown operation type: "+n.type);const l=r.getChanges();return Ew(e,o,l),{viewCache:o,changes:l}}function Ew(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Jr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Vp(Jr(e)))}}function Jp(t,e,n,s,i,r){const o=e.eventCache;if(Zr(s,n)!=null)return e;{let a,l;if(J(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hs(e),u=c instanceof j?c:j.EMPTY_NODE,d=jl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Xr(s,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=X(n);if(c===".priority"){T(Bn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=gd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ee(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=gd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ql(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ii(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function eo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=X(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const _=Ee(n),M=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=u.updatePriority(l.getNode(),M):c=u.updateChild(l.getNode(),f,M,_,Qp,null)}const d=jp(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),h=new Gl(i,d,r);return Jp(t,d,n,i,h,a)}function Qa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Gl(i,e,r);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ii(e,c,!0,t.filter.filtersNodes());else{const d=X(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ii(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ee(n),f=a.getNode().getImmediateChild(d);let _;if(J(h))_=s;else{const I=u.getCompleteChild(d);I!=null?Np(h)===".priority"&&I.getChild(Dp(h)).isEmpty()?_=I:_=I.updateChild(h,s):_=j.EMPTY_NODE}if(f.equals(_))l=e;else{const I=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=Ii(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function md(t,e){return t.eventCache.isCompleteForChild(e)}function Cw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Re(n,l);md(e,X(u))&&(a=Qa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Re(n,l);md(e,X(u))||(a=Qa(t,a,u,c,i,r,o))}),a}function _d(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ja(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),_=_d(t,f,h);l=eo(t,l,new me(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const _=e.serverCache.getNode().getImmediateChild(d),I=_d(t,_,h);l=eo(t,l,new me(d),I,i,r,o,a)}}),l}function bw(t,e,n,s,i,r,o){if(Zr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return eo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(J(n)){let c=new be(null);return l.getNode().forEachChild(Ls,(u,d)=>{c=c.set(new me(u),d)}),Ja(t,e,n,c,i,r,a,o)}else return e}else{let c=new be(null);return s.foreach((u,d)=>{const h=Re(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ja(t,e,n,c,i,r,a,o)}}function Iw(t,e,n,s,i){const r=e.serverCache,o=jp(e,r.getNode(),r.isFullyInitialized()||J(n),r.isFiltered());return Jp(t,o,n,s,Qp,i)}function ww(t,e,n,s,i,r){let o;if(Zr(s,n)!=null)return e;{const a=new Gl(s,e,i),l=e.eventCache.getNode();let c;if(J(n)||X(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xr(s,hs(e));else{const d=e.serverCache.getNode();T(d instanceof j,"serverChildren would be complete if leaf node"),u=jl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=X(n);let d=ql(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ee(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,Ee(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xr(s,hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zr(s,ne())!=null,Ii(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Bl(s.getIndex()),r=jI(s);this.processor_=_w(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new Vn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Vn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=No(d,u),this.eventGenerator_=new JI(this.query_)}get query(){return this.query_}}function Sw(t){return t.viewCache_.serverCache.getNode()}function Aw(t){return Jr(t.viewCache_)}function Rw(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function vd(t){return t.eventRegistrations_.length===0}function kw(t,e){t.eventRegistrations_.push(e)}function yd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ed(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(T(hs(t.viewCache_),"We should always have a full cache before handling merges"),T(Jr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=yw(t.processor_,i,e,n,s);return vw(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Pw(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(Gs(r,o))}),n.isFullyInitialized()&&s.push(Vp(n.getNode())),Xp(t,s,n.getNode(),e)}function Xp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return XI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class Zp{constructor(){this.views=new Map}}function Nw(t){T(!to,"__referenceConstructor has already been defined"),to=t}function Ow(){return T(to,"Reference.ts has not been loaded"),to}function Dw(t){return t.views.size===0}function zl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Ed(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ed(o,e,n,s));return r}}function eg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Xr(n,i?s:null),l=!1;a?l=!0:s instanceof j?(a=jl(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=No(new Vn(a,l,!1),new Vn(s,i,!1));return new Tw(e,c)}return o}function Mw(t,e,n,s,i,r){const o=eg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),kw(o,n),Pw(o,n)}function xw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Hn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(yd(c,n,s)),vd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(yd(l,n,s)),vd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Hn(t)&&r.push(new(Ow())(e._repo,e._path)),{removed:r,events:o}}function tg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Fn(t,e){let n=null;for(const s of t.views.values())n=n||Rw(s,e);return n}function ng(t,e){if(e._queryParams.loadsAllData())return Do(t);{const s=e._queryIdentifier;return t.views.get(s)}}function sg(t,e){return ng(t,e)!=null}function Hn(t){return Do(t)!=null}function Do(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;function Lw(t){T(!no,"__referenceConstructor has already been defined"),no=t}function Fw(){return T(no,"Reference.ts has not been loaded"),no}let Uw=1;class Cd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=fw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ig(t,e,n,s,i){return nw(t.pendingWriteTree_,e,n,s,i),i?lr(t,new ds(Wp(),e,n)):[]}function ts(t,e,n=!1){const s=sw(t.pendingWriteTree_,e);if(iw(t.pendingWriteTree_,e)){let r=new be(null);return s.snap!=null?r=r.set(ne(),!0):et(s.children,o=>{r=r.set(new me(o),!0)}),lr(t,new Qr(s.path,r,n))}else return[]}function ar(t,e,n){return lr(t,new ds(Hl(),e,n))}function $w(t,e,n){const s=be.fromObject(n);return lr(t,new qi(Hl(),e,s))}function Bw(t,e){return lr(t,new ji(Hl(),e))}function Vw(t,e,n){const s=Yl(t,n);if(s){const i=Ql(s),r=i.path,o=i.queryId,a=Ge(r,e),l=new ji(Wl(o),a);return Jl(t,r,l)}else return[]}function rg(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||sg(o,e))){const l=xw(o,e,n,s);Dw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>Hn(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=qw(h);for(let _=0;_<f.length;++_){const I=f[_],M=I.query,x=cg(t,I);t.listenProvider_.startListening(Ti(M),Gi(t,M),x.hashFn,x.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ti(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(Mo(h));t.listenProvider_.stopListening(Ti(h),f)}))}Gw(t,c)}return a}function og(t,e,n,s){const i=Yl(t,s);if(i!=null){const r=Ql(i),o=r.path,a=r.queryId,l=Ge(o,e),c=new ds(Wl(a),l,n);return Jl(t,o,c)}else return[]}function Hw(t,e,n,s){const i=Yl(t,s);if(i){const r=Ql(i),o=r.path,a=r.queryId,l=Ge(o,e),c=be.fromObject(n),u=new qi(Wl(a),l,c);return Jl(t,o,u)}else return[]}function Ww(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const _=Ge(h,i);r=r||Fn(f,_),o=o||Hn(f)});let a=t.syncPointTree_.get(i);a?(o=o||Hn(a),r=r||Fn(a,ne())):(a=new Zp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,_)=>{const I=Fn(_,ne());I&&(r=r.updateImmediateChild(f,I))}));const c=sg(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Mo(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=zw();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=Oo(t.pendingWriteTree_,i);let d=Mw(a,e,n,u,r,l);if(!c&&!o&&!s){const h=ng(a,e);d=d.concat(Kw(t,e,h))}return d}function Kl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ge(o,e),c=Fn(a,l);if(c)return c});return zp(i,e,r,n,!0)}function jw(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ge(c,n);s=s||Fn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Fn(i,ne()):(i=new Zp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Vn(s,!0,!1):null,a=Oo(t.pendingWriteTree_,e._path),l=eg(i,e,a,r?o.getNode():j.EMPTY_NODE,r);return Aw(l)}function lr(t,e){return ag(e,t.syncPointTree_,null,Oo(t.pendingWriteTree_,ne()))}function ag(t,e,n,s){if(J(t.path))return lg(t,e,n,s);{const i=e.get(ne());n==null&&i!=null&&(n=Fn(i,ne()));let r=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Kp(s,o);r=r.concat(ag(a,l,c,u))}return i&&(r=r.concat(zl(i,t,s,n))),r}}function lg(t,e,n,s){const i=e.get(ne());n==null&&i!=null&&(n=Fn(i,ne()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Kp(s,o),u=t.operationForChild(o);u&&(r=r.concat(lg(u,a,l,c)))}),i&&(r=r.concat(zl(i,t,s,n))),r}function cg(t,e){const n=e.query,s=Gi(t,n);return{hashFn:()=>(Sw(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Vw(t,n._path,s):Bw(t,n._path);{const r=Wb(i,n);return rg(t,n,null,r)}}}}function Gi(t,e){const n=Mo(e);return t.queryToTagMap.get(n)}function Mo(t){return t._path.toString()+"$"+t._queryIdentifier}function Yl(t,e){return t.tagToQueryMap.get(e)}function Ql(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function Jl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Oo(t.pendingWriteTree_,e);return zl(s,n,i,null)}function qw(t){return t.fold((e,n,s)=>{if(n&&Hn(n))return[Do(n)];{let i=[];return n&&(i=tg(n)),et(s,(r,o)=>{i=i.concat(o)}),i}})}function Ti(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Fw())(t._repo,t._path):t}function Gw(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Mo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function zw(){return Uw++}function Kw(t,e,n){const s=e._path,i=Gi(t,e),r=cg(t,n),o=t.listenProvider_.startListening(Ti(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Hn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!J(c)&&u&&Hn(u))return[Do(u).query];{let h=[];return u&&(h=h.concat(tg(u).map(f=>f.query))),et(d,(f,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ti(u),Gi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xl(n)}node(){return this.node_}}class Zl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new Zl(this.syncTree_,n)}node(){return Kl(this.syncTree_,this.path_)}}const Yw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Qw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Jw(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Qw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Jw=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Xw=function(t,e,n,s){return ec(e,new Zl(n,t),s)},ug=function(t,e,n){return ec(t,new Xl(e),n)};function ec(t,e,n){const s=t.getPriority().val(),i=bd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=bd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,Me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Oe(i))),o.forEachChild(Ie,(a,l)=>{const c=ec(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nc(t,e){let n=e instanceof me?e:new me(e),s=t,i=X(n);for(;i!==null;){const r=js(s.node.children,i)||{children:{},childCount:0};s=new tc(i,s,r),n=Ee(n),i=X(n)}return s}function ni(t){return t.node.value}function dg(t,e){t.node.value=e,Xa(t)}function hg(t){return t.node.childCount>0}function Zw(t){return ni(t)===void 0&&!hg(t)}function xo(t,e){et(t.node.children,(n,s)=>{e(new tc(n,t,s))})}function fg(t,e,n,s){n&&e(t),xo(t,i=>{fg(i,e,!0)})}function eT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function cr(t){return new me(t.parent===null?t.name:cr(t.parent)+"/"+t.name)}function Xa(t){t.parent!==null&&tT(t.parent,t.name,t)}function tT(t,e,n){const s=Zw(n),i=_n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Xa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=/[\[\].#$\/\u0000-\u001F\u007F]/,sT=/[\[\].#$\u0000-\u001F\u007F]/,ga=10*1024*1024,pg=function(t){return typeof t=="string"&&t.length!==0&&!nT.test(t)},gg=function(t){return typeof t=="string"&&t.length!==0&&!sT.test(t)},iT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gg(t)},mg=function(t,e,n,s){s&&e===void 0||sc(Nl(t,"value"),e,n)},sc=function(t,e,n){const s=n instanceof me?new bI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(s)+" with contents = "+e.toString());if(up(e))throw new Error(t+"contains "+e.toString()+" "+Jn(s));if(typeof e=="string"&&e.length>ga/3&&Ro(e)>ga)throw new Error(t+"contains a string greater than "+ga+" utf8 bytes "+Jn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(et(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!pg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);II(s,o),sc(t,a,s),wI(s)}),i&&r)throw new Error(t+' contains ".value" child '+Jn(s)+" in addition to actual children.")}},_g=function(t,e,n,s){if(!gg(n))throw new Error(Nl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_g(t,e,n)},ic=function(t,e){if(X(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iT(n))throw new Error(Nl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vg(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Mp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yt(t,e,n){vg(t,n),lT(t,s=>Tt(s,e)||Tt(e,s))}function lT(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(cT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ci&&Ve("event: "+n.toString()),ti(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="repo_interrupt",dT=25;class hT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yr(),this.transactionQueueTree_=new tc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fT(t,e,n){if(t.stats_=Ll(t.repoInfo_),t.forceRestClient_||zb())t.server_=new Kr(t.repoInfo_,(s,i,r,o)=>{Id(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new cn(t.repoInfo_,e,(s,i,r,o)=>{Id(t,s,i,r,o)},s=>{wd(t,s)},s=>{pT(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Xb(t.repoInfo_,()=>new QI(t.stats_,t.server_)),t.infoData_=new qI,t.infoSyncTree_=new Cd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ar(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),oc(t,"connected",!1),t.serverSyncTree_=new Cd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Yt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function yg(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rc(t){return Yw({timestamp:yg(t)})}function Id(t,e,n,s,i){t.dataUpdateCount++;const r=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Wr(n,c=>Me(c));o=Hw(t.serverSyncTree_,r,l,i)}else{const l=Me(n);o=og(t.serverSyncTree_,r,l,i)}else if(s){const l=Wr(n,c=>Me(c));o=$w(t.serverSyncTree_,r,l)}else{const l=Me(n);o=ar(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fo(t,r)),Yt(t.eventQueue_,a,o)}function wd(t,e){oc(t,"connected",e),e===!1&&_T(t)}function pT(t,e){et(e,(n,s)=>{oc(t,n,s)})}function oc(t,e,n){const s=new me("/.info/"+e),i=Me(n);t.infoData_.updateSnapshot(s,i);const r=ar(t.infoSyncTree_,s,i);Yt(t.eventQueue_,s,r)}function Eg(t){return t.nextWriteId_++}function gT(t,e,n){const s=jw(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Me(i).withIndex(e._queryParams.getIndex());Ww(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ar(t.serverSyncTree_,e._path,r);else{const a=Gi(t.serverSyncTree_,e);o=og(t.serverSyncTree_,e._path,r,a)}return Yt(t.eventQueue_,e._path,o),rg(t.serverSyncTree_,e,n,null,!0),r},i=>(Lo(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function mT(t,e,n,s,i){Lo(t,"set",{path:e.toString(),value:n,priority:s});const r=rc(t),o=Me(n,s),a=Kl(t.serverSyncTree_,e),l=ug(o,a,r),c=Eg(t),u=ig(t.serverSyncTree_,e,l,c,!0);vg(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const _=h==="ok";_||Xe("set at "+e+" failed: "+h);const I=ts(t.serverSyncTree_,c,!_);Yt(t.eventQueue_,e,I),yT(t,i,h,f)});const d=Tg(t,e);Fo(t,d),Yt(t.eventQueue_,d,[])}function _T(t){Lo(t,"onDisconnectEvents");const e=rc(t),n=Yr();za(t.onDisconnect_,ne(),(i,r)=>{const o=Xw(i,r,t.serverSyncTree_,e);Hp(n,i,o)});let s=[];za(n,ne(),(i,r)=>{s=s.concat(ar(t.serverSyncTree_,i,r));const o=Tg(t,i);Fo(t,o)}),t.onDisconnect_=Yr(),Yt(t.eventQueue_,ne(),s)}function vT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uT)}function Lo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function yT(t,e,n,s){e&&ti(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Cg(t,e,n){return Kl(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function ac(t,e=t.transactionQueueTree_){if(e||Uo(t,e),ni(e)){const n=Ig(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ET(t,cr(e),n)}else hg(e)&&xo(e,n=>{ac(t,n)})}function ET(t,e,n){const s=n.map(c=>c.currentWriteId),i=Cg(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ge(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Lo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(ts(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Uo(t,nc(t.transactionQueueTree_,e)),ac(t,t.transactionQueueTree_),Yt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ti(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Xe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Fo(t,e)}},o)}function Fo(t,e){const n=bg(t,e),s=cr(n),i=Ig(t,n);return CT(t,i,s),s}function CT(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ge(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dT)u=!0,d="maxretry",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Cg(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){sc("transaction failed: Data returned ",f,l.path);let _=Me(f);typeof f=="object"&&f!=null&&_n(f,".priority")||(_=_.updatePriority(h.getPriority()));const M=l.currentWriteId,x=rc(t),N=ug(_,h,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=N,l.currentWriteId=Eg(t),o.splice(o.indexOf(M),1),i=i.concat(ig(t.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),i=i.concat(ts(t.serverSyncTree_,M,!0))}else u=!0,d="nodata",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0))}Yt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Uo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ti(s[a]);ac(t,t.transactionQueueTree_)}function bg(t,e){let n,s=t.transactionQueueTree_;for(n=X(e);n!==null&&ni(s)===void 0;)s=nc(s,n),e=Ee(e),n=X(e);return s}function Ig(t,e){const n=[];return wg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function wg(t,e,n){const s=ni(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);xo(e,i=>{wg(t,i,n)})}function Uo(t,e){const n=ni(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,dg(e,n.length>0?n:void 0)}xo(e,s=>{Uo(t,s)})}function Tg(t,e){const n=cr(bg(t,e)),s=nc(t.transactionQueueTree_,e);return eT(s,i=>{ma(t,i)}),ma(t,s),fg(s,i=>{ma(t,i)}),n}function ma(t,e){const n=ni(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dg(e,void 0):n.length=r+1,Yt(t.eventQueue_,cr(e),i);for(let o=0;o<s.length;o++)ti(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function IT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Td=function(t,e){const n=wT(t),s=n.namespace;n.domain==="firebase.com"&&fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ub();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new me(n.pathString)}},wT=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=bT(t.substring(u,d)));const h=IT(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",TT=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Sd.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Sd.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class AT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return J(this._path)?null:Np(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=ud(this._queryParams),n=Ml(e);return n==="{}"?"default":n}get _queryObject(){return ud(this._queryParams)}isEqual(e){if(e=Ke(e),!(e instanceof lc))return!1;const n=this._repo===e._repo,s=Mp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+CI(this._path)}}class vn extends lc{constructor(e,n){super(e,n,new Vl,!1)}get parent(){const e=Dp(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=Yi(this.ref,e);return new zi(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zi(i,Yi(this.ref,s),Ie)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ki(t,e){return t=Ke(t),t._checkNotDeleted("ref"),e!==void 0?Yi(t._root,e):t._root}function Yi(t,e){return t=Ke(t),X(t._path)===null?rT("child","path",e):_g("child","path",e),new vn(t._repo,Re(t._path,e))}function kT(t,e){t=Ke(t),ic("push",t._path),mg("push",e,t._path,!0);const n=yg(t._repo),s=TT(n),i=Yi(t,s),r=Yi(t,s);let o;return e!=null?o=cc(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function PT(t){return ic("remove",t._path),cc(t,null)}function cc(t,e){t=Ke(t),ic("set",t._path),mg("set",e,t._path,!1);const n=new Ao;return mT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Sg(t){t=Ke(t);const e=new RT(()=>{}),n=new uc(e);return gT(t._repo,t,n).then(s=>new zi(s,new vn(t._repo,t._path),t._queryParams.getIndex()))}class uc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ST("value",this,new zi(e.snapshotNode,new vn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new AT(this,e,n):null}matches(e){return e instanceof uc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Nw(vn);Lw(vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="FIREBASE_DATABASE_EMULATOR_HOST",Za={};let OT=!1;function DT(t,e,n,s){t.repoInfo_=new bp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function MT(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Td(r,i),a=o.repoInfo,l;typeof process<"u"&&Gu&&(l=Gu[NT]),l?(r=`http://${l}?ns=${a.namespace}`,o=Td(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Yb(t.name,t.options,e);oT("Invalid Firebase Database URL",o),J(o.path)||fn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=LT(a,t,c,new Kb(t,n));return new FT(u,t)}function xT(t,e){const n=Za[e];(!n||n[t.key]!==t)&&fn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vT(t),delete n[t.key]}function LT(t,e,n,s){let i=Za[e.name];i||(i={},Za[e.name]=i);let r=i[t.toURLString()];return r&&fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hT(t,OT,n,s),i[t.toURLString()]=r,r}class FT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fn("Cannot call "+e+" on a deleted database.")}}function Ag(t=Dl(),e){const n=vs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=rC("database");s&&UT(n,...s)}return n}function UT(t,e,n,s={}){t=Ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&fn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ar(Ar.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:oC(s.mockUserToken,t.app.options.projectId);r=new Ar(o)}DT(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){Ob(Zs),Kt(new Dt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return MT(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yt(zu,Ku,t),yt(zu,Ku,"esm2017")}cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$T();var BT="firebase",VT="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(BT,VT,"app");const Rg="@firebase/installations",dc="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=1e4,Pg=`w:${dc}`,Ng="FIS_v2",HT="https://firebaseinstallations.googleapis.com/v1",WT=60*60*1e3,jT="installations",qT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fs=new _s(jT,qT,GT);function Og(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg({projectId:t}){return`${HT}/projects/${t}/installations`}function Mg(t){return{token:t.token,requestStatus:2,expiresIn:KT(t.expiresIn),creationTime:Date.now()}}async function xg(t,e){const s=(await e.json()).error;return fs.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Lg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zT(t,{refreshToken:e}){const n=Lg(t);return n.append("Authorization",YT(e)),n}async function Fg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function KT(t){return Number(t.replace("s","000"))}function YT(t){return`${Ng} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Dg(t),i=Lg(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Ng,appId:t.appId,sdkVersion:Pg},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Fg(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Mg(c.authToken)}}else throw await xg("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=/^[cdef][\w-]{21}$/,el="";function ZT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=eS(t);return XT.test(n)?n:el}catch{return el}}function eS(t){return JT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function Bg(t,e){const n=$o(t);Vg(n,e),tS(n,e)}function Vg(t,e){const n=$g.get(t);if(n)for(const s of n)s(e)}function tS(t,e){const n=nS();n&&n.postMessage({key:t,fid:e}),sS()}let ns=null;function nS(){return!ns&&"BroadcastChannel"in self&&(ns=new BroadcastChannel("[Firebase] FID Change"),ns.onmessage=t=>{Vg(t.data.key,t.data.fid)}),ns}function sS(){$g.size===0&&ns&&(ns.close(),ns=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="firebase-installations-database",rS=1,ps="firebase-installations-store";let _a=null;function hc(){return _a||(_a=sp(iS,rS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ps)}}})),_a}async function so(t,e){const n=$o(t),i=(await hc()).transaction(ps,"readwrite"),r=i.objectStore(ps),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Bg(t,e.fid),e}async function Hg(t){const e=$o(t),s=(await hc()).transaction(ps,"readwrite");await s.objectStore(ps).delete(e),await s.done}async function Bo(t,e){const n=$o(t),i=(await hc()).transaction(ps,"readwrite"),r=i.objectStore(ps),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Bg(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t){let e;const n=await Bo(t.appConfig,s=>{const i=oS(s),r=aS(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===el?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function oS(t){const e=t||{fid:ZT(),registrationStatus:0};return Wg(e)}function aS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=lS(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cS(t)}:{installationEntry:e}}async function lS(t,e){try{const n=await QT(t,e);return so(t.appConfig,n)}catch(n){throw Og(n)&&n.customData.serverCode===409?await Hg(t.appConfig):await so(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cS(t){let e=await Ad(t.appConfig);for(;e.registrationStatus===1;)await Ug(100),e=await Ad(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await fc(t);return s||n}return e}function Ad(t){return Bo(t,e=>{if(!e)throw fs.create("installation-not-found");return Wg(e)})}function Wg(t){return uS(t)?{fid:t.fid,registrationStatus:0}:t}function uS(t){return t.registrationStatus===1&&t.registrationTime+kg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS({appConfig:t,heartbeatServiceProvider:e},n){const s=hS(t,n),i=zT(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Pg,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Fg(()=>fetch(s,a));if(l.ok){const c=await l.json();return Mg(c)}else throw await xg("Generate Auth Token",l)}function hS(t,{fid:e}){return`${Dg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t,e=!1){let n;const s=await Bo(t.appConfig,r=>{if(!jg(r))throw fs.create("not-registered");const o=r.authToken;if(!e&&gS(o))return r;if(o.requestStatus===1)return n=fS(t,e),r;{if(!navigator.onLine)throw fs.create("app-offline");const a=_S(r);return n=pS(t,a),a}});return n?await n:s.authToken}async function fS(t,e){let n=await Rd(t.appConfig);for(;n.authToken.requestStatus===1;)await Ug(100),n=await Rd(t.appConfig);const s=n.authToken;return s.requestStatus===0?pc(t,e):s}function Rd(t){return Bo(t,e=>{if(!jg(e))throw fs.create("not-registered");const n=e.authToken;return vS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pS(t,e){try{const n=await dS(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await so(t.appConfig,s),n}catch(n){if(Og(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hg(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await so(t.appConfig,s)}throw n}}function jg(t){return t!==void 0&&t.registrationStatus===2}function gS(t){return t.requestStatus===2&&!mS(t)}function mS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+WT}function _S(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vS(t){return t.requestStatus===1&&t.requestTime+kg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t){const e=t,{installationEntry:n,registrationPromise:s}=await fc(e);return s?s.catch(console.error):pc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e=!1){const n=t;return await CS(n),(await pc(n,e)).token}async function CS(t){const{registrationPromise:e}=await fc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){if(!t||!t.options)throw va("App Configuration");if(!t.name)throw va("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw va(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function va(t){return fs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="installations",IS="installations-internal",wS=t=>{const e=t.getProvider("app").getImmediate(),n=bS(e),s=vs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},TS=t=>{const e=t.getProvider("app").getImmediate(),n=vs(e,qg).getImmediate();return{getId:()=>yS(n),getToken:i=>ES(n,i)}};function SS(){Kt(new Dt(qg,wS,"PUBLIC")),Kt(new Dt(IS,TS,"PRIVATE"))}SS();yt(Rg,dc);yt(Rg,dc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="analytics",AS="firebase_id",RS="origin",kS=60*1e3,PS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new ko("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ht=new _s("analytics","Analytics",NS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){if(!t.startsWith(gc)){const e=ht.create("invalid-gtag-resource",{gtagURL:t});return Ze.warn(e.message),""}return t}function Gg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function DS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MS(t,e){const n=DS("firebase-js-sdk-policy",{createScriptURL:OS}),s=document.createElement("script"),i=`${gc}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function xS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function LS(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Gg(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ze.error(a)}t("config",i,r)}async function FS(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Gg(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ze.error(r)}}function US(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await FS(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await LS(t,e,n,s,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){Ze.error(a)}}return i}function $S(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=US(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function BS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=30,HS=1e3;class WS{constructor(e={},n=HS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zg=new WS;function jS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qS(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:jS(s)},r=PS.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function GS(t,e=zg,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw ht.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ht.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YS;return setTimeout(async()=>{a.abort()},kS),Kg({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Kg(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=zg){var r;const{appId:o,measurementId:a}=t;try{await zS(s,e)}catch(l){if(a)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await qS(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!KS(c)){if(i.deleteThrottleMetadata(o),a)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Fu(n,i.intervalMillis,VS):Fu(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),Ze.debug(`Calling attemptFetch again in ${u} millis`),Kg(t,d,s,i)}}function zS(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KS(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QS(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(){if(Xf())try{await Zf()}catch(t){return Ze.warn(ht.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ze.warn(ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XS(t,e,n,s,i,r,o){var a;const l=GS(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ze.error(f)),e.push(l);const c=JS().then(f=>{if(f)return s.getId()}),[u,d]=await Promise.all([l,c]);BS(r)||MS(r,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[RS]="firebase",h.update=!0,d!=null&&(h[AS]=d),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.app=e}_delete(){return delete Si[this.app.options.appId],Promise.resolve()}}let Si={},kd=[];const Pd={};let ya="dataLayer",e0="gtag",Nd,Yg,Od=!1;function t0(){const t=[];if(Qf()&&t.push("This is a browser extension environment."),uC()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ht.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function n0(t,e,n){t0();const s=t.options.appId;if(!s)throw ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ht.create("no-api-key");if(Si[s]!=null)throw ht.create("already-exists",{id:s});if(!Od){xS(ya);const{wrappedGtag:r,gtagCore:o}=$S(Si,kd,Pd,ya,e0);Yg=r,Nd=o,Od=!0}return Si[s]=XS(t,kd,Pd,e,Nd,ya,n),new ZS(t)}function s0(t=Dl()){t=Ke(t);const e=vs(t,io);return e.isInitialized()?e.getImmediate():i0(t)}function i0(t,e={}){const n=vs(t,io);if(n.isInitialized()){const i=n.getImmediate();if(Ui(e,n.getOptions()))return i;throw ht.create("already-initialized")}return n.initialize({options:e})}function r0(t,e,n,s){t=Ke(t),QS(Yg,Si[t.app.options.appId],e,n,s).catch(i=>Ze.error(i))}const Dd="@firebase/analytics",Md="0.10.11";function o0(){Kt(new Dt(io,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return n0(s,i,n)},"PUBLIC")),Kt(new Dt("analytics-internal",t,"PRIVATE")),yt(Dd,Md),yt(Dd,Md,"esm2017");function t(e){try{const n=e.getProvider(io).getImmediate();return{logEvent:(s,i,r)=>r0(n,s,i,r)}}catch(n){throw ht.create("interop-component-reg-failed",{reason:n})}}}o0();function mc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Qg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a0=Qg,Jg=new _s("auth","Firebase",Qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new ko("@firebase/auth");function l0(t,...e){ro.logLevel<=he.WARN&&ro.warn(`Auth (${Zs}): ${t}`,...e)}function Rr(t,...e){ro.logLevel<=he.ERROR&&ro.error(`Auth (${Zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw _c(t,...e)}function qt(t,...e){return _c(t,...e)}function Xg(t,e,n){const s=Object.assign(Object.assign({},a0()),{[e]:n});return new _s("auth","Firebase",s).create(e,{appName:t.name})}function os(t){return Xg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _c(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Jg.create(t,...e)}function q(t,e,...n){if(!t)throw _c(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rr(e),new Error(e)}function gn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function c0(){return xd()==="http:"||xd()==="https:"}function xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(c0()||Qf()||"connection"in navigator)?navigator.onLine:!0}function d0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Pl()||Jf()}get(){return u0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=new ur(3e4,6e4);function yc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,s,i={}){return em(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return aC()||(c.referrerPolicy="no-referrer"),Zg.fetch()(tm(t,t.config.apiHost,n,a),c)})}async function em(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},h0),e);try{const i=new g0(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Cr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xg(t,u,c);pn(t,u)}}catch(i){if(i instanceof Qt)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function p0(t,e,n,s,i={}){const r=await si(t,e,n,s,i);return"mfaPendingCredential"in r&&pn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function tm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?vc(t.config,i):`${t.config.apiScheme}://${i}`}class g0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),f0.get())})}}function Cr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=qt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function nm(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _0(t,e=!1){const n=Ke(t),s=await n.getIdToken(e),i=Ec(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ai(Ea(i.auth_time)),issuedAtTime:Ai(Ea(i.iat)),expirationTime:Ai(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ea(t){return Number(t)*1e3}function Ec(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hr(n);return i?JSON.parse(i):(Rr("Failed to decode base64 JWT payload"),null)}catch(i){return Rr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ld(t){const e=Ec(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Qt&&v0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function v0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Qi(t,nm(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?sm(r.providerUserInfo):[],a=C0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function E0(t){const e=Ke(t);await oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function sm(t){return t.map(e=>{var{providerId:n}=e,s=mc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t,e){const n=await em(t,{},async()=>{const s=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=tm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function I0(t,e){return si(t,"POST","/v2/accounts:revokeToken",yc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Ld(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await b0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Fs;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Qi(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _0(this,e)}reload(){return E0(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await oo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await Qi(this,m0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:O,isAnonymous:Q,providerData:se,stsTokenManager:ie}=n;q(F&&ie,e,"internal-error");const Pe=Fs.fromJSON(this.name,ie);q(typeof F=="string",e,"internal-error"),bn(d,e.name),bn(h,e.name),q(typeof O=="boolean",e,"internal-error"),q(typeof Q=="boolean",e,"internal-error"),bn(f,e.name),bn(_,e.name),bn(I,e.name),bn(M,e.name),bn(x,e.name),bn(N,e.name);const G=new an({uid:F,auth:e,email:h,emailVerified:O,displayName:d,isAnonymous:Q,photoURL:_,phoneNumber:f,tenantId:I,stsTokenManager:Pe,createdAt:x,lastLoginAt:N});return se&&Array.isArray(se)&&(G.providerData=se.map(ee=>Object.assign({},ee))),M&&(G._redirectEventId=M),G}static async _fromIdTokenResponse(e,n,s=!1){const i=new Fs;i.updateFromServerResponse(n);const r=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await oo(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?sm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Fs;a.updateFromIdToken(s);const l=new an({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new nl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Map;function ln(t){gn(t instanceof Function,"Expected a class definition");let e=Fd.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}im.type="NONE";const Ud=im;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=kr(this.userKey,i.apiKey,r),this.fullPersistenceKey=kr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Us(ln(Ud),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ln(Ud);const o=kr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=an._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Us(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Us(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(um(e))return"Blackberry";if(dm(e))return"Webos";if(om(e))return"Safari";if((e.includes("chrome/")||am(e))&&!e.includes("edge/"))return"Chrome";if(cm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rm(t=ze()){return/firefox\//i.test(t)}function om(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function am(t=ze()){return/crios\//i.test(t)}function lm(t=ze()){return/iemobile/i.test(t)}function cm(t=ze()){return/android/i.test(t)}function um(t=ze()){return/blackberry/i.test(t)}function dm(t=ze()){return/webos/i.test(t)}function Cc(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w0(t=ze()){var e;return Cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T0(){return lC()&&document.documentMode===10}function hm(t=ze()){return Cc(t)||cm(t)||dm(t)||um(t)||/windows phone/i.test(t)||lm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e=[]){let n;switch(t){case"Browser":n=$d(ze());break;case"Worker":n=`${$d(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(t,e={}){return si(t,"GET","/v2/passwordPolicy",yc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=6;class k0{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:R0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new S0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nm(this,{idToken:e}),s=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(os(this));const n=e?Ke(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A0(this),n=new k0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await I0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&l0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bc(t){return Ke(t)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=_C(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N0(t){Ic=t}function O0(t){return Ic.loadJS(t)}function D0(){return Ic.gapiScript}function M0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t,e){const n=vs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ui(r,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function L0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function F0(t,e,n){const s=bc(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=pm(e),{host:o,port:a}=U0(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),$0()}function pm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function U0(t){const e=pm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Vd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Vd(o)}}}function Vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){return p0(t,"POST","/v1/accounts:signInWithIdp",yc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="http://localhost";class gs extends gm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=mc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new gs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,$s(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:B0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends mm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends dr{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return kn.credential(n,s)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends dr{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends dr{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Nn.credential(n,s)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await an._fromIdTokenResponse(e,s,i),o=Hd(s);return new Ks({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Hd(s);return new Ks({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Qt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ao.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ao(e,n,s,i)}}function _m(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ao._fromErrorAndOperation(t,r,e,s):r})}async function V0(t,e,n=!1){const s=await Qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ks._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(t,e,n=!1){const{auth:s}=t;if(Ht(s.app))return Promise.reject(os(s));const i="reauthenticate";try{const r=await Qi(t,_m(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=Ec(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),Ks._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&pn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t,e,n=!1){if(Ht(t.app))return Promise.reject(os(t));const s="signIn",i=await _m(t,s,e),r=await Ks._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function j0(t,e,n,s){return Ke(t).onIdTokenChanged(e,n,s)}function q0(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}const lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lo,"1"),this.storage.removeItem(lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=1e3,z0=10;class ym extends vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);T0()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,z0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},G0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ym.type="LOCAL";const K0=ym;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Em.type="SESSION";const Cm=Em;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Vo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Y0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=wc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function J0(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function X0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eA(){return bm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="firebaseLocalStorageDb",tA=1,co="firebaseLocalStorage",wm="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(t,e){return t.transaction([co],e?"readwrite":"readonly").objectStore(co)}function nA(){const t=indexedDB.deleteDatabase(Im);return new hr(t).toPromise()}function sl(){const t=indexedDB.open(Im,tA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(co,{keyPath:wm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(co)?e(s):(s.close(),await nA(),e(await sl()))})})}async function Wd(t,e,n){const s=Ho(t,!0).put({[wm]:e,value:n});return new hr(s).toPromise()}async function sA(t,e){const n=Ho(t,!1).get(e),s=await new hr(n).toPromise();return s===void 0?null:s.value}function jd(t,e){const n=Ho(t,!0).delete(e);return new hr(n).toPromise()}const iA=800,rA=3;class Tm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>rA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X0(),!this.activeServiceWorker)return;this.sender=new Q0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sl();return await Wd(e,lo,"1"),await jd(e,lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ho(i,!1).getAll();return new hr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tm.type="LOCAL";const oA=Tm;new ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e){return e?ln(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends gm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lA(t){return W0(t.auth,new Tc(t),t.bypassAuthState)}function cA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),H0(n,new Tc(t),t.bypassAuthState)}async function uA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),V0(n,new Tc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return uA;case"reauthViaPopup":case"reauthViaRedirect":return cA;default:pn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new ur(2e3,1e4);class As extends Sm{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dA.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="pendingRedirect",Pr=new Map;class fA extends Sm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Pr.get(this.auth._key());if(!e){try{const s=await pA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Pr.set(this.auth._key(),e)}return this.bypassAuthState||Pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pA(t,e){const n=_A(e),s=mA(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function gA(t,e){Pr.set(t._key(),e)}function mA(t){return ln(t._redirectPersistence)}function _A(t){return kr(hA,t.config.apiKey,t.name)}async function vA(t,e,n=!1){if(Ht(t.app))return Promise.reject(os(t));const s=bc(t),i=aA(s,e),o=await new fA(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=10*60*1e3;class EA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Am(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yA&&this.cachedEventUids.clear(),this.cachedEventUids.has(qd(e))}saveEventToCache(e){this.cachedEventUids.add(qd(e)),this.lastProcessedEventTime=Date.now()}}function qd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Am({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Am(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e={}){return si(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wA=/^https?/;async function TA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bA(t);for(const n of e)try{if(SA(n))return}catch{}pn(t,"unauthorized-domain")}function SA(t){const e=tl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!wA.test(n))return!1;if(IA.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new ur(3e4,6e4);function Gd(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RA(t){return new Promise((e,n)=>{var s,i,r;function o(){Gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gd(),n(qt(t,"network-request-failed"))},timeout:AA.get()})}if(!((i=(s=Gt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Gt().gapi)===null||r===void 0)&&r.load)o();else{const a=M0("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},O0(`${D0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Nr=null,e})}let Nr=null;function kA(t){return Nr=Nr||RA(t),Nr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new ur(5e3,15e3),NA="__/auth/iframe",OA="emulator/auth/iframe",DA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xA(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vc(e,OA):`https://${t.config.authDomain}/${NA}`,s={apiKey:e.apiKey,appName:t.name,v:Zs},i=MA.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xs(s).slice(1)}`}async function LA(t){const e=await kA(t),n=Gt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:xA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DA,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Gt().setTimeout(()=>{r(o)},PA.get());function l(){Gt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UA=500,$A=600,BA="_blank",VA="http://localhost";class zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HA(t,e,n,s=UA,i=$A){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FA),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ze().toLowerCase();n&&(a=am(c)?BA:n),rm(c)&&(e=e||VA,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,_])=>`${h}${f}=${_},`,"");if(w0(c)&&a!=="_self")return WA(e||"",a),new zd(null);const d=window.open(e||"",a,u);q(d,t,"popup-blocked");try{d.focus()}catch{}return new zd(d)}function WA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="__/auth/handler",qA="emulator/auth/handler",GA=encodeURIComponent("fac");async function Kd(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Zs,eventId:i};if(e instanceof mm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ua(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof dr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${GA}=${encodeURIComponent(l)}`:"";return`${zA(t)}?${Xs(a).slice(1)}${c}`}function zA({config:t}){return t.emulator?vc(t,qA):`https://${t.authDomain}/${jA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="webStorageSupport";class KA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=vA,this._overrideRedirectResult=gA}async _openPopup(e,n,s,i){var r;gn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Kd(e,n,s,tl(),i);return HA(e,o,wc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Kd(e,n,s,tl(),i);return J0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(gn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await LA(e),s=new EA(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ca];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hm()||om()||Cc()}}const YA=KA;var Yd="@firebase/auth",Qd="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XA(t){Kt(new Dt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fm(t)},c=new P0(s,i,r,l);return L0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kt(new Dt("auth-internal",e=>{const n=bc(e.getProvider("auth").getImmediate());return(s=>new QA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(Yd,Qd,JA(t)),yt(Yd,Qd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=5*60,eR=Yf("authIdTokenMaxAge")||ZA;let Jd=null;const tR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>eR)return;const i=n==null?void 0:n.token;Jd!==i&&(Jd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nR(t=Dl()){const e=vs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=x0(t,{popupRedirectResolver:YA,persistence:[oA,K0,Cm]}),s=Yf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=tR(r.toString());q0(n,o,()=>o(n.currentUser)),j0(n,a=>o(a))}}const i=zf("auth");return i&&F0(n,`http://${i}`),n}function sR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}N0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=qt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",sR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XA("Browser");const iR={apiKey:"AIzaSyAKxj1vJ4BlMRnpgzVakwf9x5zC_keQ0wg",authDomain:"feedme-io-v2.firebaseapp.com",projectId:"feedme-io-v2",storageBucket:"feedme-io-v2.firebasestorage.app",messagingSenderId:"1070286672015",appId:"1:1070286672015:web:e50abd7748ef77c8dde0fa",measurementId:"G-RGPWZ5C5LH"},Sc=ip(iR);s0(Sc);nR(Sc);const Ji=Ag(Sc);var rR=Object.defineProperty,Xd=Object.getOwnPropertySymbols,oR=Object.prototype.hasOwnProperty,aR=Object.prototype.propertyIsEnumerable,Zd=(t,e,n)=>e in t?rR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Rm=(t,e)=>{for(var n in e||(e={}))oR.call(e,n)&&Zd(t,n,e[n]);if(Xd)for(var n of Xd(e))aR.call(e,n)&&Zd(t,n,e[n]);return t},Wo=t=>typeof t=="function",jo=t=>typeof t=="string",km=t=>jo(t)&&t.trim().length>0,lR=t=>typeof t=="number",ss=t=>typeof t>"u",Xi=t=>typeof t=="object"&&t!==null,cR=t=>zt(t,"tag")&&km(t.tag),Pm=t=>window.TouchEvent&&t instanceof TouchEvent,Nm=t=>zt(t,"component")&&Om(t.component),uR=t=>Wo(t)||Xi(t),Om=t=>!ss(t)&&(jo(t)||uR(t)||Nm(t)),eh=t=>Xi(t)&&["height","width","right","left","top","bottom"].every(e=>lR(t[e])),zt=(t,e)=>(Xi(t)||Wo(t))&&e in t,dR=(t=>()=>t++)(0);function ba(t){return Pm(t)?t.targetTouches[0].clientX:t.clientX}function th(t){return Pm(t)?t.targetTouches[0].clientY:t.clientY}var hR=t=>{ss(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},fr=t=>Nm(t)?fr(t.component):cR(t)?Ue({render(){return t}}):typeof t=="string"?t:te(rs(t)),fR=t=>{if(typeof t=="string")return t;const e=zt(t,"props")&&Xi(t.props)?t.props:{},n=zt(t,"listeners")&&Xi(t.listeners)?t.listeners:{};return{component:fr(t),props:e,listeners:n}},pR=()=>typeof window<"u",Ac=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},gR=t=>["on","off","emit"].every(e=>zt(t,e)&&Wo(t[e])),at;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(at||(at={}));var uo;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(uo||(uo={}));var lt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(lt||(lt={}));var At="Vue-Toastification",bt={type:{type:String,default:at.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Dm={type:bt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Or={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:bt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},il={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Mm={transition:{type:[Object,String],default:`${At}__bounce`}},mR={position:{type:String,default:uo.TOP_RIGHT},draggable:bt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:bt.trueBoolean,pauseOnHover:bt.trueBoolean,closeOnClick:bt.trueBoolean,timeout:il.timeout,hideProgressBar:il.hideProgressBar,toastClassName:bt.classNames,bodyClassName:bt.classNames,icon:Dm.customIcon,closeButton:Or.component,closeButtonClassName:Or.classNames,showCloseButtonOnHover:Or.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new Ac}},_R={id:{type:[String,Number],required:!0,default:0},type:bt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},vR={container:{type:[Object,Function],default:()=>document.body},newestOnTop:bt.trueBoolean,maxToasts:{type:Number,default:20},transition:Mm.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:bt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},un={CORE_TOAST:mR,TOAST:_R,CONTAINER:vR,PROGRESS_BAR:il,ICON:Dm,TRANSITION:Mm,CLOSE_BUTTON:Or},xm=Ue({name:"VtProgressBar",props:un.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${At}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function yR(t,e){return L(),B("div",{style:er(t.style),class:dn(t.cpClass)},null,6)}xm.render=yR;var ER=xm,Lm=Ue({name:"VtCloseButton",props:un.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?fr(this.component):"button"},classes(){const t=[`${At}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),CR=Le(" × ");function bR(t,e){return L(),mt(Cl(t.buttonComponent),Io({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:ot(()=>[CR]),_:1},16,["aria-label","class"])}Lm.render=bR;var IR=Lm,Fm={},wR={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},TR=C("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),SR=[TR];function AR(t,e){return L(),B("svg",wR,SR)}Fm.render=AR;var RR=Fm,Um={},kR={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},PR=C("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),NR=[PR];function OR(t,e){return L(),B("svg",kR,NR)}Um.render=OR;var nh=Um,$m={},DR={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},MR=C("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),xR=[MR];function LR(t,e){return L(),B("svg",DR,xR)}$m.render=LR;var FR=$m,Bm={},UR={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},$R=C("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),BR=[$R];function VR(t,e){return L(),B("svg",UR,BR)}Bm.render=VR;var HR=Bm,Vm=Ue({name:"VtIcon",props:un.ICON,computed:{customIconChildren(){return zt(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return jo(this.customIcon)?this.trimValue(this.customIcon):zt(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return zt(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Om(this.customIcon)?fr(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[at.DEFAULT]:nh,[at.INFO]:nh,[at.SUCCESS]:RR,[at.ERROR]:HR,[at.WARNING]:FR}[this.type]},iconClasses(){const t=[`${At}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return km(t)?t.trim():e}}});function WR(t,e){return L(),mt(Cl(t.component),{class:dn(t.iconClasses)},{default:ot(()=>[Le(Se(t.customIconChildren),1)]),_:1},8,["class"])}Vm.render=WR;var jR=Vm,Hm=Ue({name:"VtToast",components:{ProgressBar:ER,CloseButton:IR,Icon:jR},inheritAttrs:!1,props:Object.assign({},un.CORE_TOAST,un.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${At}__toast`,`${At}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${At}__toast--rtl`),t},bodyClasses(){return[`${At}__toast-${jo(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return eh(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:zt,getVueComponentFromObj:fr,closeToast(){this.eventBus.emit(lt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:ba(t),y:th(t)},this.dragStart=ba(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:ba(t),y:th(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,eh(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),qR=["role"];function GR(t,e){const n=wt("Icon"),s=wt("CloseButton"),i=wt("ProgressBar");return L(),B("div",{class:dn(t.classes),style:er(t.draggableStyle),onClick:e[0]||(e[0]=(...r)=>t.clickHandler&&t.clickHandler(...r)),onMouseenter:e[1]||(e[1]=(...r)=>t.hoverPause&&t.hoverPause(...r)),onMouseleave:e[2]||(e[2]=(...r)=>t.hoverPlay&&t.hoverPlay(...r))},[t.icon?(L(),mt(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Dn("v-if",!0),C("div",{role:t.accessibility.toastRole||"alert",class:dn(t.bodyClasses)},[typeof t.content=="string"?(L(),B(ue,{key:0},[Le(Se(t.content),1)],2112)):(L(),mt(Cl(t.getVueComponentFromObj(t.content)),Io({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},X_(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,qR),t.closeButton?(L(),mt(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:Ey(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Dn("v-if",!0),t.timeout?(L(),mt(i,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Dn("v-if",!0)],38)}Hm.render=GR;var zR=Hm,Wm=Ue({name:"VtTransition",props:un.TRANSITION,emits:["leave"],methods:{hasProp:zt,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function KR(t,e){return L(),mt(uy,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:ot(()=>[Yh(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Wm.render=KR;var YR=Wm,jm=Ue({name:"VueToastification",devtools:{hide:!0},components:{Toast:zR,VtTransition:YR},props:Object.assign({},un.CORE_TOAST,un.CONTAINER,un.TRANSITION),data(){return{count:0,positions:Object.values(uo),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(lt.ADD,this.addToast),t.on(lt.CLEAR,this.clearToasts),t.on(lt.DISMISS,this.dismissToast),t.on(lt.UPDATE,this.updateToast),t.on(lt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){Wo(t)&&(t=await t()),hR(this.$el),t.appendChild(this.$el)},setToast(t){ss(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=fR(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!ss(e)&&!ss(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){ss(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${At}__container`,t].concat(this.defaults.containerClassName)}}});function QR(t,e){const n=wt("Toast"),s=wt("VtTransition");return L(),B("div",null,[(L(!0),B(ue,null,ct(t.positions,i=>(L(),B("div",{key:i},[Ce(s,{transition:t.defaults.transition,class:dn(t.getClasses(i))},{default:ot(()=>[(L(!0),B(ue,null,ct(t.getPositionToasts(i),r=>(L(),mt(n,Io({key:r.id},r),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}jm.render=QR;var JR=jm,sh=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new Ac;e&&vo(()=>{const r=Rf(JR,Rm({},t)),o=r.mount(document.createElement("div")),a=t.onMounted;if(ss(a)||a(o,r),t.shareAppContext){const l=t.shareAppContext;l===!0?console.warn(`[${At}] App to share context with was not provided.`):(r._context.components=l._context.components,r._context.directives=l._context.directives,r._context.mixins=l._context.mixins,r._context.provides=l._context.provides,r.config.globalProperties=l.config.globalProperties)}});const s=(r,o)=>{const a=Object.assign({},{id:dR(),type:at.DEFAULT},o,{content:r});return n.emit(lt.ADD,a),a.id};s.clear=()=>n.emit(lt.CLEAR,void 0),s.updateDefaults=r=>{n.emit(lt.UPDATE_DEFAULTS,r)},s.dismiss=r=>{n.emit(lt.DISMISS,r)};function i(r,{content:o,options:a},l=!1){const c=Object.assign({},a,{content:o});n.emit(lt.UPDATE,{id:r,options:c,create:l})}return s.update=i,s.success=(r,o)=>s(r,Object.assign({},o,{type:at.SUCCESS})),s.info=(r,o)=>s(r,Object.assign({},o,{type:at.INFO})),s.error=(r,o)=>s(r,Object.assign({},o,{type:at.ERROR})),s.warning=(r,o)=>s(r,Object.assign({},o,{type:at.WARNING})),s},XR=()=>{const t=()=>console.warn(`[${At}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function qm(t){return pR()?gR(t)?sh({eventBus:t},!1):sh(t,!0):XR()}var Gm=Symbol("VueToastification"),zm=new Ac,ZR=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=qm(Rm({eventBus:zm},e));t.provide(Gm,n)},Rc=t=>{const e=wl()?dt(Gm,void 0):void 0;return e||qm(zm)},ek=ZR;const tk=Ue({name:"CreateOrder",setup(){const t=Rc(),e=jt(""),n=Qs({name:"",validUntil:"",menuItems:[]});return{order:n,orderLink:e,addMenuItem:()=>{n.menuItems.push({name:"",optionCategories:[]})},removeMenuItem:h=>{n.menuItems.splice(h,1)},addCategory:h=>{n.menuItems[h].optionCategories.push({name:"",selectionType:"single",details:[]})},removeCategory:(h,f)=>{n.menuItems[h].optionCategories.splice(f,1)},addDetail:(h,f)=>{n.menuItems[h].optionCategories[f].details.push("")},removeDetail:(h,f,_)=>{n.menuItems[h].optionCategories[f].details.splice(_,1)},applyTemplate:(h,f)=>{f&&(f==="drink"?n.menuItems[h].optionCategories=[{name:"甜度",selectionType:"single",details:["正常","少糖","微糖","無糖"]},{name:"冰塊",selectionType:"single",details:["正常冰","少冰","微冰","去冰"]},{name:"配料",selectionType:"multiple",details:["珍珠","椰果","仙草"]}]:f==="meal"&&(n.menuItems[h].optionCategories=[{name:"加飯",selectionType:"single",details:["不加","加飯"]},{name:"加辣",selectionType:"single",details:["小辣","中辣","大辣"]}]))},createOrder:async()=>{if(!n.name||!n.validUntil){t.error("請輸入訂單名稱及有效時間！");return}try{const h=Date.now().toString(),f=Ki(Ag(Ji.app),`orders/${h}`);await cc(f,{name:n.name,validUntil:n.validUntil,menuItems:n.menuItems,createdAt:new Date().toISOString()}),t.success("訂單建立成功！"),e.value=`${window.location.origin}/order/${h}`,n.name="",n.validUntil="",n.menuItems=[]}catch(h){t.error("建立訂單失敗："+h.message)}},copyLink:async()=>{if(e.value)try{await navigator.clipboard.writeText(e.value),t.success("連結已複製到剪貼簿！")}catch(h){t.error("複製連結失敗："+h.message)}}}}}),nk={class:"create-order-page container"},sk={class:"card form-card"},ik={class:"form-group"},rk={class:"form-group"},ok={class:"card form-card"},ak={class:"form-group"},lk=["onUpdate:modelValue"],ck={class:"form-group"},uk=["onUpdate:modelValue","onChange"],dk={class:"option-categories"},hk={class:"form-group"},fk=["onUpdate:modelValue"],pk={class:"form-group"},gk=["onUpdate:modelValue"],mk={class:"option-details"},_k={class:"input-with-remove"},vk=["onUpdate:modelValue"],yk=["onClick"],Ek=["onClick"],Ck=["onClick"],bk=["onClick"],Ik=["onClick"],wk={key:0,class:"card order-link-card"},Tk=["value"];function Sk(t,e,n,s,i,r){return L(),B("div",nk,[e[17]||(e[17]=C("h1",{class:"page-title"},"建立新訂單",-1)),C("div",sk,[C("div",ik,[e[5]||(e[5]=C("label",{for:"orderName"},"訂單名稱:",-1)),Ct(C("input",{id:"orderName",class:"input-field","onUpdate:modelValue":e[0]||(e[0]=o=>t.order.name=o),placeholder:"輸入訂單名稱"},null,512),[[Zn,t.order.name]])]),C("div",rk,[e[6]||(e[6]=C("label",{for:"validUntil"},"下單有效時間:",-1)),Ct(C("input",{id:"validUntil",class:"input-field",type:"datetime-local","onUpdate:modelValue":e[1]||(e[1]=o=>t.order.validUntil=o)},null,512),[[Zn,t.order.validUntil]])])]),C("div",ok,[e[15]||(e[15]=C("h2",{class:"section-title"},"菜單項目",-1)),(L(!0),B(ue,null,ct(t.order.menuItems,(o,a)=>(L(),B("div",{key:a,class:"card menu-item-card"},[C("div",ak,[e[7]||(e[7]=C("label",null,"項目名稱:",-1)),Ct(C("input",{class:"input-field","onUpdate:modelValue":l=>o.name=l,placeholder:"例如：紅茶"},null,8,lk),[[Zn,o.name]])]),C("div",ck,[e[9]||(e[9]=C("label",null,"套用模板:",-1)),Ct(C("select",{class:"input-field","onUpdate:modelValue":l=>o.template=l,onChange:l=>t.applyTemplate(a,o.template)},e[8]||(e[8]=[C("option",{value:""},"-- 不套用 --",-1),C("option",{value:"drink"},"飲料模板",-1),C("option",{value:"meal"},"餐點模板",-1)]),40,uk),[[gu,o.template]])]),C("div",dk,[e[14]||(e[14]=C("h3",{class:"subsection-title"},"選項分類",-1)),(L(!0),B(ue,null,ct(o.optionCategories,(l,c)=>(L(),B("div",{key:c,class:"card option-card"},[C("div",hk,[e[10]||(e[10]=C("label",null,"分類名稱:",-1)),Ct(C("input",{class:"input-field","onUpdate:modelValue":u=>l.name=u,placeholder:"例如：冰塊"},null,8,fk),[[Zn,l.name]])]),C("div",pk,[e[12]||(e[12]=C("label",null,"選擇模式:",-1)),Ct(C("select",{class:"input-field","onUpdate:modelValue":u=>l.selectionType=u},e[11]||(e[11]=[C("option",{value:"single"},"單選",-1),C("option",{value:"multiple"},"複選",-1)]),8,gk),[[gu,l.selectionType]])]),C("div",mk,[e[13]||(e[13]=C("h4",{class:"subsection-title"},"細項",-1)),(L(!0),B(ue,null,ct(l.details,(u,d)=>(L(),B("div",{key:d,class:"detail-item"},[C("div",_k,[Ct(C("input",{class:"input-field","onUpdate:modelValue":h=>l.details[d]=h,placeholder:"例如：少冰"},null,8,vk),[[Zn,l.details[d]]]),C("span",{class:"remove-icon",onClick:h=>t.removeDetail(a,c,d)},"×",8,yk)])]))),128)),C("button",{class:"btn add-btn",onClick:u=>t.addDetail(a,c)},"新增細項",8,Ek)]),C("button",{class:"btn remove-btn",onClick:u=>t.removeCategory(a,c)},"移除此分類",8,Ck)]))),128)),C("button",{class:"btn add-btn",onClick:l=>t.addCategory(a)},"新增選項分類",8,bk)]),C("button",{class:"btn remove-btn",onClick:l=>t.removeMenuItem(a)},"移除此項目",8,Ik)]))),128)),C("button",{class:"btn add-btn",onClick:e[2]||(e[2]=(...o)=>t.addMenuItem&&t.addMenuItem(...o))},"新增菜單項目")]),C("button",{class:"btn main-btn",onClick:e[3]||(e[3]=(...o)=>t.createOrder&&t.createOrder(...o))},"建立訂單"),t.orderLink?(L(),B("div",wk,[e[16]||(e[16]=C("p",null,"訂單已建立，連結如下：",-1)),C("input",{type:"text",value:t.orderLink,readonly:"",class:"link-input"},null,8,Tk),C("button",{class:"btn main-btn",onClick:e[4]||(e[4]=(...o)=>t.copyLink&&t.copyLink(...o))},"複製連結")])):Dn("",!0)])}const Ak=qn(tk,[["render",Sk],["__scopeId","data-v-8f903373"]]);/*! js-cookie v3.0.5 | MIT */function br(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)t[s]=n[s]}return t}var Rk={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function rl(t,e){function n(i,r,o){if(!(typeof document>"u")){o=br({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in o)o[l]&&(a+="; "+l,o[l]!==!0&&(a+="="+o[l].split(";")[0]));return document.cookie=i+"="+t.write(r,i)+a}}function s(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var r=document.cookie?document.cookie.split("; "):[],o={},a=0;a<r.length;a++){var l=r[a].split("="),c=l.slice(1).join("=");try{var u=decodeURIComponent(l[0]);if(o[u]=t.read(c,u),i===u)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:s,remove:function(i,r){n(i,"",br({},r,{expires:-1}))},withAttributes:function(i){return rl(this.converter,br({},this.attributes,i))},withConverter:function(i){return rl(br({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var ih=rl(Rk,{path:"/"});const rh="userId",kk=30;function Km(){let t=ih.get(rh);return t||(t=Pk(),ih.set(rh,t,{expires:kk})),t}function Pk(){return Math.random().toString(36).substr(2,9)}const Nk=Ue({name:"PlaceOrder",setup(){const e=Hf().params.orderId,n=Rc(),s=jt(null),i=jt(""),r=Qs({});return nr(async()=>{var a;try{const l=await Sg(Ki(Ji,`orders/${e}`));l.exists()?(s.value=l.val(),(a=s.value)==null||a.menuItems.forEach(c=>{r[c.name]={quantity:0},c.optionCategories.forEach(u=>{u.selectionType==="single"?r[c.name][u.name]="":r[c.name][u.name]=[]})})):n.error("找不到該訂單！")}catch(l){n.error("讀取訂單資料錯誤："+l.message)}}),{orderData:s,userName:i,userSelections:r,addToCart:async()=>{var l;if(!i.value){n.error("請輸入您的姓名！");return}let a=!1;for(const c in r)if(r[c].quantity>0){a=!0;break}if(!a){n.error("請至少選擇一個菜單項目的數量大於 0");return}try{const c=Km(),u={userName:i.value,selections:JSON.parse(JSON.stringify(r)),submittedAt:new Date().toISOString(),orderId:e,orderName:((l=s.value)==null?void 0:l.name)||`訂單-${e}`},d=Ki(Ji,`carts/${c}/${e}`);await kT(d,u),n.success("已加入購物車！"),i.value="",Object.keys(r).forEach(h=>{r[h].quantity=0})}catch(c){n.error("加入購物車失敗："+c.message)}}}}}),Ok={class:"place-order container"},Dk={class:"card user-info-card"},Mk={key:0,class:"card order-info-card"},xk={class:"order-title"},Lk={class:"order-time"},Fk={class:"menu-item-name"},Uk={class:"form-group"},$k=["onUpdate:modelValue"],Bk={class:"category-title"},Vk={key:0,class:"single-option-group"},Hk=["name","value","onUpdate:modelValue"],Wk={key:1,class:"multiple-option-group"},jk=["value","onUpdate:modelValue"],qk={key:1};function Gk(t,e,n,s,i,r){return L(),B("div",Ok,[e[6]||(e[6]=C("h1",{class:"page-title"},"下單頁面",-1)),C("div",Dk,[e[2]||(e[2]=C("label",{class:"label-text"},"您的姓名:",-1)),Ct(C("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.userName=o),type:"text",class:"input-field",placeholder:"請輸入您的姓名"},null,512),[[Zn,t.userName]])]),t.orderData?(L(),B("div",Mk,[C("h2",xk,"訂單: "+Se(t.orderData.name),1),C("p",Lk,[e[3]||(e[3]=C("strong",null,"有效時間:",-1)),Le(" "+Se(t.orderData.validUntil),1)]),(L(!0),B(ue,null,ct(t.orderData.menuItems,(o,a)=>(L(),B("div",{key:a,class:"card menu-item-card"},[C("h3",Fk,Se(o.name),1),C("div",Uk,[e[4]||(e[4]=C("label",{class:"label-text"},"數量:",-1)),Ct(C("input",{type:"number","onUpdate:modelValue":l=>t.userSelections[o.name].quantity=l,min:"0",class:"input-field small-width"},null,8,$k),[[Zn,t.userSelections[o.name].quantity,void 0,{number:!0}]])]),(L(!0),B(ue,null,ct(o.optionCategories,(l,c)=>(L(),B("div",{key:c,class:"card option-card"},[C("p",Bk,[C("strong",null,Se(l.name)+" ("+Se(l.selectionType)+")",1)]),l.selectionType==="single"?(L(),B("div",Vk,[(L(!0),B(ue,null,ct(l.details,(u,d)=>(L(),B("div",{key:d,class:"radio-option"},[C("label",null,[Ct(C("input",{type:"radio",name:o.name+"-"+l.name,value:u,"onUpdate:modelValue":h=>t.userSelections[o.name][l.name]=h},null,8,Hk),[[_y,t.userSelections[o.name][l.name]]]),Le(" "+Se(u),1)])]))),128))])):l.selectionType==="multiple"?(L(),B("div",Wk,[(L(!0),B(ue,null,ct(l.details,(u,d)=>(L(),B("div",{key:d,class:"checkbox-option"},[C("label",null,[Ct(C("input",{type:"checkbox",value:u,"onUpdate:modelValue":h=>t.userSelections[o.name][l.name]=h},null,8,jk),[[my,t.userSelections[o.name][l.name]]]),Le(" "+Se(u),1)])]))),128))])):Dn("",!0)]))),128))]))),128)),C("button",{class:"btn add-cart-btn",onClick:e[1]||(e[1]=(...o)=>t.addToCart&&t.addToCart(...o))},"加入購物車")])):(L(),B("div",qk,e[5]||(e[5]=[C("p",null,"載入訂單資料中...",-1)])))])}const zk=qn(Nk,[["render",Gk],["__scopeId","data-v-64f0c908"]]),Kk=Ue({name:"ShoppingCart",setup(){const t=Rc(),e=Km(),n=jt(null),s=jt(null),i=async()=>{try{const c=await Sg(Ki(Ji,`carts/${e}`));c.exists()?n.value=c.val():(n.value=null,t.info("購物車目前是空的。"))}catch(c){t.error("讀取購物車資料失敗："+c.message)}},r=gt(()=>{const c=[];if(n.value)for(const u in n.value){const d=n.value[u],h=Object.keys(d).map(_=>({id:_,...d[_]})),f=h.length>0?h[0].orderName:`訂單-${u}`;c.push({orderId:u,orderName:f,items:h})}return c}),o=c=>{s.value=s.value===c?null:c},a=async(c,u)=>{try{await PT(Ki(Ji,`carts/${e}/${c}/${u}`)),t.success("已移除該項目"),i()}catch(d){t.error("移除項目失敗："+d.message)}},l=c=>{t.success(`訂單 "${c}" 結帳功能尚未實作`)};return nr(()=>{i()}),{cartGroups:r,expandedOrderId:s,toggleGroup:o,removeCartItem:a,checkout:l}}}),Yk={class:"shopping-cart"},Qk={class:"container"},Jk={key:0,class:"card"},Xk=["onClick"],Zk={class:"order-name"},eP={key:0},tP={key:1},nP={key:0,class:"group-details"},sP={class:"item-list"},iP={key:0},rP={key:1},oP=["onClick"],aP=["onClick"];function lP(t,e,n,s,i,r){const o=wt("router-link");return L(),B("div",Yk,[e[5]||(e[5]=C("div",{class:"section-dark"},[C("h1",{class:"page-title"},"我的購物車")],-1)),C("div",Qk,[t.cartGroups.length===0?(L(),B("div",Jk,e[0]||(e[0]=[C("p",null,"購物車目前是空的。",-1)]))):Dn("",!0),(L(!0),B(ue,null,ct(t.cartGroups,a=>(L(),B("div",{key:a.orderId,class:"card group-card"},[C("div",{class:"group-header",onClick:l=>t.toggleGroup(a.orderId)},[C("h2",Zk,[Le(" 訂單名稱："+Se(a.orderName)+" ",1),t.expandedOrderId===a.orderId?(L(),B("span",eP,"[-]")):(L(),B("span",tP,"[+]"))])],8,Xk),Ce(jv,{name:"fade"},{default:ot(()=>[t.expandedOrderId===a.orderId?(L(),B("div",nP,[C("ul",sP,[(L(!0),B(ue,null,ct(a.items,l=>(L(),B("li",{key:l.id,class:"card item-card"},[C("p",null,[e[1]||(e[1]=C("strong",null,"用戶名稱：",-1)),Le(Se(l.userName),1)]),C("p",null,[e[2]||(e[2]=C("strong",null,"加入時間：",-1)),Le(Se(l.submittedAt),1)]),(L(!0),B(ue,null,ct(l.selections,(c,u)=>(L(),B("div",{key:u,class:"selection-block"},[C("p",null,[e[3]||(e[3]=C("strong",null,"菜單項目：",-1)),Le(Se(u)+" - 數量："+Se(c.quantity),1)]),(L(!0),B(ue,null,ct(Object.entries(c).filter(([d])=>d!=="quantity"),([d,h])=>(L(),B("div",{key:d},[C("p",null,[C("strong",null,Se(d)+"：",1),Array.isArray(h)?(L(),B("span",iP,Se(h.join("、")),1)):(L(),B("span",rP,Se(h),1))])]))),128))]))),128)),C("button",{class:"btn btn-danger",onClick:c=>t.removeCartItem(a.orderId,l.id)}," 移除 ",8,oP)]))),128))]),Ce(o,{to:`/order/${a.orderId}`,class:"btn btn-primary order-link-btn"},{default:ot(()=>e[4]||(e[4]=[Le(" 前往下單 ")])),_:2},1032,["to"]),C("button",{class:"btn checkout-btn",onClick:l=>t.checkout(a.orderId)}," 結帳此訂單 ",8,aP)])):Dn("",!0)]),_:2},1024)]))),128))])])}const cP=qn(Kk,[["render",lP],["__scopeId","data-v-65927449"]]),uP=[{path:"/",name:"Home",component:QE},{path:"/create-order",name:"CreateOrder",component:Ak},{path:"/order/:orderId",name:"PlaceOrder",component:zk},{path:"/cart",name:"ShoppingCart",component:cP}],Ym=NE({history:oE("/"),routes:uP});Ym.afterEach(t=>{t.name==="Home"?document.body.style.overflow="hidden":document.body.style.overflow=""});const kc=Rf(qE);kc.use(Ym);kc.use(ek);kc.mount("#app");
