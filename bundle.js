!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/galko/",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,r=t=>"function"==typeof t&&s.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,h=new RegExp(`${c}|${d}`),p="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],r=document.createTreeWalker(e.content,133,null,!1);let o=0,n=-1,a=0;const{strings:l,values:{length:d}}=t;for(;a<d;){const t=r.nextNode();if(null!==t){if(n++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)m(e[t].name,p)&&s++;for(;s-- >0;){const e=l[a],i=y.exec(e)[2],s=i.toLowerCase()+p,r=t.getAttribute(s);t.removeAttribute(s);const o=r.split(h);this.parts.push({type:"attribute",index:n,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const s=t.parentNode,r=e.split(h),o=r.length-1;for(let e=0;e<o;e++){let i,o=r[e];if(""===o)i=f();else{const t=y.exec(o);null!==t&&m(t[2],p)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),i=document.createTextNode(o)}s.insertBefore(i,t),this.parts.push({type:"node",index:++n})}""===r[o]?(s.insertBefore(f(),t),i.push(t)):t.data=r[o],a+=o}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==o||(n++,e.insertBefore(f(),t)),o=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const m=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},g=t=>-1!==t.index,f=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,n=0,a=0,l=s.nextNode();for(;n<i.length;)if(r=i[n],g(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=e.pop(),l=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));n++}else this.__parts.push(void 0),n++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class b{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const o=y.exec(t);e+=null===o?t+(i?c:d):t.substr(0,o.index)+o[1]+o[2]+p+o[3]+c}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(_(t)||!w(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||_(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=f()),t.__insert(this.endNode=f())}insertAfterPart(t){t.__insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)void 0===(i=e[s])&&(i=new k(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class N extends S{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends x{}let j=!1;try{const t={get capture(){return j=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(j?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new class{handleAttributeExpressions(t,e,i,s){const r=e[0];return"."===r?new N(t,e.slice(1),i).parts:"@"===r?[new T(t,e.slice(1),s.eventContext)]:"?"===r?[new P(t,e.slice(1),i)]:new S(t,e,i).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function E(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(c);return void 0===(i=e.keyString.get(s))&&(i=new u(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const $=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const M=(t,...e)=>new b(t,e,"html",O),R=133;function z(t,e){const{element:{content:i},parts:s}=t,r=document.createTreeWalker(i,R,null,!1);let o=I(s),n=s[o],a=-1,l=0;const c=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==n&&n.index===a;)n.index=null!==d?-1:n.index-l,n=s[o=I(s,o)]}c.forEach(t=>t.parentNode.removeChild(t))}const U=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,R,null,!1);for(;i.nextNode();)e++;return e},I=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(g(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const G=t=>e=>{const i=B(e.type,t);let s=$.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},$.set(i,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(c);if(void 0===(r=s.keyString.get(o))){const i=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,t),r=new u(e,i),s.keyString.set(o,r)}return s.stringsArray.set(e.strings,r),r},H=["html","svg"],q=new Set,D=(t,e,i)=>{q.add(t);const s=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const n=document.createElement("style");for(let t=0;t<o;t++){const e=r[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}(t=>{H.forEach(e=>{const i=$.get(B(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),z(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:r}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,R,null,!1);let n=I(r),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=U(e),i.parentNode.insertBefore(e,i));-1!==n&&r[n].index===l;){if(a>0){for(;-1!==n;)r[n].index+=a,n=I(r,n);return}n=I(r,n)}}(i,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(n,a.firstChild);const t=new Set;t.add(n),z(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const L={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:W},J=Promise.resolve(!0),K=1,Q=4,Z=8,X=16,tt=32,et="finalized";class it extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const s=this[t];this[i]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(et)||t.finalize(),this[et]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=W){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||L,r="function"==typeof s?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||L.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Y){const s=this.constructor,r=s._attributeNameForProperty(t,i);if(void 0!==r){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|Z,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Z}}_attributeToProperty(t,e){if(this._updateState&Z)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i._classProperties.get(s)||Y;this._updateState=this._updateState|X,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,r=s._classProperties.get(t)||Y;s._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{t=i,e=s});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&K}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}it[et]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),rt=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign({},e,{finisher(i){i.createProperty(e.key,t)}}),ot=(t,e,i)=>{e.constructor.createProperty(i,t)};function nt(t){return(e,i)=>void 0!==i?ot(t,e,i):rt(t,e)}const at="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol();class ct{constructor(t,e){if(e!==lt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(at?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const dt=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof ct)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new ct(i,lt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ht=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let s=0,r=e.length;s<r;s++){const r=e[s];Array.isArray(r)?t(r,i):i.push(r)}return i}(t);class pt extends it{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ht(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?at?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}pt.finalized=!0,pt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=V.has(e),o=F&&11===e.nodeType&&!!e.host,a=o&&!q.has(s),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=V.get(e);void 0===s&&(n(e,e.firstChild),V.set(e,s=new k(Object.assign({templateFactory:E},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:G(s)},i)),a){const t=V.get(l);V.delete(l);const i=t.value instanceof v?t.value.template:void 0;D(s,l,i),n(e,e.firstChild),e.appendChild(l),V.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var ut=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let mt=class extends pt{constructor(){super(...arguments),this.type="button",this.primary=!1,this.icon=!1,this.disabled=!1}static get styles(){return dt`
      :host[disabled] {
        pointer-events: none;
      }

      .button {
        font-family: var(--font-family);
        font-size: var(--font-size);
        background: none;
        border: none;
        box-shadow: 1px 1px 2px 0px var(--shadow-colour),
          0px 0px 1px 0px var(--shadow-colour);
        padding: 5px 10px;
        margin: 0 2px;
        cursor: pointer;
      }
      .button:hover {
        background-color: hsl(0, 0%, 95%);
      }

      .button--primary {
        background-color: var(--secondary-colour);
        color: var(--secondary-contrast);
      }
      .button--primary:hover {
        background-color: var(--secondary-colour-hovered);
      }

      .button--icon {
        padding: 2px 8px;
        border-radius: 50%;
        box-shadow: none;
        font-size: 1.25rem;
      }
      .button--icon:hover {
        background-color: initial;
        box-shadow: 1px 1px 2px 0px var(--shadow-colour),
          0px 0px 1px 0px var(--shadow-colour);
      }

      .button:disabled {
        background-color: var(--disabled-colour);
        cursor: default;
      }
    `}render(){const t=["button",this.primary&&"button--primary",this.icon&&"button--icon"].filter(t=>!!t).join(" ");return M`
      <button
        type="${this.type}"
        class="${t}"
        ?disabled=${this.disabled}
        @click="${this.handleClick}"
      >
        <slot></slot>
      </button>
    `}handleClick(){const t=new CustomEvent("press",{bubbles:!0,composed:!0,detail:null});this.dispatchEvent(t)}};ut([nt({type:String})],mt.prototype,"type",void 0),ut([nt({type:Boolean})],mt.prototype,"primary",void 0),ut([nt({type:Boolean})],mt.prototype,"icon",void 0),ut([nt({type:Boolean})],mt.prototype,"disabled",void 0),mt=ut([st("glk-button")],mt);var gt=dt`
  /* Shared sizing */
  :host,
  .card,
  .card__axis,
  .card__front,
  .card__back {
    width: var(--card-width);
    height: var(--card-height);
  }

  /* Card */
  .card {
    /* clear button styles */
    background: none;
    border: none;
    display: block;
    padding: 0;
    /* clear button styles */

    perspective: 1000px;
  }

  .card--clickable {
    cursor: pointer;
  }

  .card--clickable:focus,
  .card--clickable:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }

  /* Axis */
  .card__axis {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }
  .card--touched .card__axis {
    transform: rotateY(180deg);
  }

  /* Sides */
  .card__front,
  .card__back,
  .card__image {
    border-radius: 0.3rem;
  }

  .card__front,
  .card__back {
    box-shadow: 1px 1px 2px 0px var(--card-shadow),
      0px 0px 5px 0px var(--card-shadow);

    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }

  .card__back {
    background-color: var(--card-colour);
    /* for firefox 31 */
    transform: rotateY(0deg);
  }

  .card__front {
    transform: rotateY(180deg);
  }

  .card--touched .card__front {
    z-index: 2;
  }
`,ft=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let yt=class extends pt{constructor(){super(...arguments),this.isFaceUp=!1,this.isHidden=!1,this.cardId="",this.name="",this.image=null,this.width=103,this.height=160}static get styles(){return gt}render(){return this.isHidden?M``:M`
      <button
        type="button"
        class="card card--clickable ${this.isFaceUp?"card--touched":""}"
        @click="${this.handleClick}"
      >
        <div class="card__axis">
          <div class="card__front">
            <img
              src=${this.image}
              alt=${this.name}
              width=${this.width}
              height=${this.height}
            />
          </div>
          <div class="card__back"></div>
        </div>
      </button>
    `}handleClick(){const t=new CustomEvent("flipped",{bubbles:!0,composed:!0,detail:{cardId:this.cardId}});this.dispatchEvent(t)}};ft([nt({type:Boolean})],yt.prototype,"isFaceUp",void 0),ft([nt({type:Boolean})],yt.prototype,"isHidden",void 0),ft([nt({type:String})],yt.prototype,"cardId",void 0),ft([nt({type:String})],yt.prototype,"name",void 0),ft([nt({type:String})],yt.prototype,"image",void 0),ft([nt({type:Number})],yt.prototype,"width",void 0),ft([nt({type:Number})],yt.prototype,"height",void 0),yt=ft([st("glk-card")],yt);var vt=M`
  <style>
    @keyframes growth {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      20% {
        transform: scale(0.2);
        opacity: 0.3;
      }

      40% {
        transform: scale(0.5);
        opacity: 0.6;
      }

      60% {
        transform: scale(0.9);
        opacity: 0.9;
      }

      80% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(1);
      }
    }

    glk-card {
      position: relative;
    }
    glk-card::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      font-size: 7rem;
      opacity: 0;
      animation-name: growth;
      animation-delay: 0.2s;
      animation-duration: 1.1s;
      animation-timing-function: ease-in-out;
      animation-play-state: paused;
    }
  </style>
`,bt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let _t=class extends pt{constructor(){super(...arguments),this.cards=[],this.selected=[],this.removed=[],this.hasMatch=!1}static get styles(){return dt`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, 103px);
        grid-auto-rows: 1fr;
        grid-gap: 16px;
        padding: 16px;
        width: calc(100% - 32px);

        /* Centering */
        justify-content: center;
        min-width: 400px;
        max-width: 95%;
        margin: auto;
      }
    `}render(){const t=2===this.selected.length;return M`
      ${vt}
      ${t?M`
            <style>
              .glk-card--flipped::before {
                animation-play-state: running;
                /* Bad match specific */
                content: '❌︎';
                color: var(--danger-colour);
                left: -5px;
              }
              .glk-card--matched::before {
                content: '✓︎';
                color: var(--success-colour);
                left: 0;
                font-size: 8.5rem;
              }
            </style>
          `:""}
      ${this.cards.map(t=>{const e=this.removed.includes(t.id),i=this.selected.includes(t.id),s=[i?"glk-card--flipped":"",i&&this.hasMatch?"glk-card--matched":""].join(" ");return M`
          <glk-card
            class="${s}"
            cardId=${t.id}
            name=${t.name}
            image=${t.image}
            ?isFaceUp=${i}
            ?isHidden=${e}
          ></glk-card>
        `})}
    `}};bt([nt({type:Array})],_t.prototype,"cards",void 0),bt([nt({type:Array})],_t.prototype,"selected",void 0),bt([nt({type:Array})],_t.prototype,"removed",void 0),bt([nt({type:Boolean})],_t.prototype,"hasMatch",void 0),_t=bt([st("glk-card-grid")],_t);var wt=dt`
  .has-float-label {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
  }
  .has-float-label label {
    position: absolute;
    left: 5px;
    top: 1px;
    cursor: text;
    font-size: 0.75em;
    opacity: 1;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  .has-float-label select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .has-float-label input,
  .has-float-label select {
    font-size: inherit;
    padding: 0 0.5em;
    padding-top: 1em;
    margin-bottom: 2px;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  .has-float-label input::-webkit-input-placeholder,
  .has-float-label select::-webkit-input-placeholder {
    opacity: 1;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  .has-float-label
    input:placeholder-shown:not(:focus)::-webkit-input-placeholder,
  .has-float-label
    select:placeholder-shown:not(:focus)::-webkit-input-placeholder {
    opacity: 0;
  }
  .has-float-label
    input:placeholder-shown:not(:focus)
    + :not(.input-has-content),
  .has-float-label
    select:placeholder-shown:not(:focus)
    + :not(.input-has-content) {
    font-size: 1.3em;
    opacity: 0.7;
    pointer-events: none;
    top: 0.5em;
    left: 0.3em;
  }
  .has-float-label input:focus,
  .has-float-label select:focus {
    outline: none;
    border-color: var(--primary-colour);
  }
  .has-float-label.input-list-container input {
    padding-bottom: 0.3em;
  }
  .has-float-label.input-list-container
    input:placeholder-shown:not(:focus)
    + :not(.input-has-content) {
    font-size: 1.3em;
    opacity: 0.7;
    pointer-events: none;
    top: 1em;
  }
  .has-float-label select {
    padding: 0.75em 0.25em 0 0.75em;
    margin-bottom: 0;
  }
  .has-float-label.select-container::after {
    content: '⌵';
    position: absolute;
    top: 75%;
    right: 5px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-weight: 700;
    font-size: 0.75em;
    pointer-events: none;
    height: calc(100% - 0.75em);
  }
`;const St=new class{constructor(t,e){this.storeName="",this.defaultValue=null,this.storeName=t,this.defaultValue=e}get(){const t=localStorage.getItem(this.storeName)||"";return t?JSON.parse(t):this.defaultValue}set(t){const e=this.get(),i=Object.assign({},e,t);return localStorage.setItem(this.storeName,JSON.stringify(i)),i}replace(t){const e=JSON.stringify(t);return localStorage.setItem(this.storeName,e),this.get()}upgrade(...t){const e=this.get(),i=t.reduce((t,e)=>e(t),e);this.replace(i)}}("glkOptions",{startingPairs:15});var xt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let kt=class extends pt{constructor(){super(...arguments),this.startingPairs=0}static get styles(){return[wt,dt`
        :host {
          margin: 10px;
        }

        .options__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .glk-control {
          display: flex;
          flex-direction: column;
        }

        .button-block {
          margin: 1rem 0;
        }
      `]}firstUpdated(){const t=St.get();this.startingPairs=t.startingPairs}render(){const t=this.isValidForm();return M`
      <div class="options">
        <h1 class="options__title">Options</h1>
        <form @submit=${this.handleSave}>
          <div class="glk-control has-float-label">
            <label for="startingPairs">Starting Pairs</label>
            <input
              id="startingPairs"
              class="glk-control__input"
              type="number"
              min="1"
              max="26"
              value=${this.startingPairs}
              @input=${this.onUserInput}
            />
          </div>
          <div class="button-block">
            <glk-button
              primary
              type="submit"
              ?disabled=${!t}
              @press=${this.handleSave}
            >
              Save
            </glk-button>
          </div>
        </form>
      </div>
    `}onUserInput(t){const e=t.target,i=Number(e.value);this.startingPairs=St.set({startingPairs:i}).startingPairs}isValidForm(){return this.startingPairs>=1&&this.startingPairs<=26}handleSave(t){if(t.preventDefault(),!this.isValidForm())return;const e=new CustomEvent("close");this.dispatchEvent(e)}};xt([nt({type:Number})],kt.prototype,"startingPairs",void 0),kt=xt([st("glk-options")],kt);var Pt=()=>(`${1e7}`+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>{const e=Number(t);return(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)});function Nt(t){const e=[...t];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const Ct=[{id:2,image:"https://i.imgur.com/3xdrczj.jpg",name:"Kagari Ayaka"},{id:138,image:"https://i.imgur.com/QPrBt63.jpg",name:'Musashi "Shinmen Takezo" Miyamoto'},{id:115,image:"https://i.imgur.com/1OUzKib.jpg",name:'Yoshikage "Kosaku Kawajiri" Kira'},{id:20,image:"https://i.imgur.com/683Ik90.jpg",name:'Satellizer "The Untouchable Queen" el Bridget'},{id:48,image:"https://i.imgur.com/NBxXvev.jpg",name:"Yato"},{id:32,image:"https://i.imgur.com/8ymura9.jpg",name:"Ichigo Kurosaki"},{id:11,image:"https://i.imgur.com/NTkNb9T.jpg",name:"Bishamonten"},{id:40,image:"https://i.imgur.com/gMJAWdX.jpg",name:"Orochimaru"},{id:21,image:"https://i.imgur.com/9MEHWVh.jpg",name:"Miku Okazaki"},{id:3,image:"https://i.imgur.com/5hLv07N.jpg",name:"Shiraki Meiko"},{id:13,image:"https://i.imgur.com/5VuqVkF.jpg",name:'Yang "Mountain King, Yo Tan Wa" Duanhe'},{id:239,image:"https://i.imgur.com/Jk6HeCy.jpg",name:"Akira Midousuji"},{id:109,image:"https://i.imgur.com/akFHhlw.jpg",name:"Dio Brando"},{id:33,image:"https://i.imgur.com/mGMQOO7.jpg",name:"Sousuke Aizen"},{id:191,image:"https://i.imgur.com/LyZQeYb.jpg",name:"Violet Evergarden"},{id:22,image:"https://i.imgur.com/qRWfMKQ.jpg",name:"Bayonetta"},{id:27,image:"https://i.imgur.com/ZWm3fNe.jpg",name:'Robin "Devil Child, Miss All Sunday" Nico'},{id:86,image:"https://i.imgur.com/7poPX27.jpg",name:"Rin Okumura"},{id:396,image:"https://i.imgur.com/Nf0BJMt.jpg",name:'Diavolo "Boss, Soliddo Nazo"'},{id:53,image:"https://i.imgur.com/YlMZthp.jpg",name:"Galko"},{id:189,image:"https://i.imgur.com/tDlZzmA.jpg",name:"Reinhard von Lohengramm"},{id:188,image:"https://i.imgur.com/S96jdf0.jpg",name:"Eikichi Onizuka"},{id:395,image:"https://i.imgur.com/AduEgP3.jpg",name:"Vinegar Doppio"},{id:196,image:"https://i.imgur.com/onYbGUZ.jpg",name:'Giorno "Haruno Shiobana" Giovanna'},{id:5,image:"https://i.imgur.com/hwpbszY.jpg",name:"Kiryuin Satsuki"},{id:23,image:"https://i.imgur.com/FT9mPXZ.jpg",name:'Saichi "The Immortal" Sugimoto'}],jt=t=>({characterId:t.id,id:Pt(),image:t.image,name:t.name});function Tt(t,e,i="0"){return(t=t.toString()).length>=e?t:new Array(e-t.length+1).join(i)+t}var At=new class{constructor(){this.interval=0,this.paused=!0,this.gameTime=0,this.callback=()=>null}get time(){const t=Math.floor(this.gameTime/60),e=this.gameTime%60;return`${Tt(t,2)}m ${Tt(e,2)}s`}get isPaused(){return this.paused}subscribe(t){return this.callback=t,this.reset(),this.start(),()=>{const t=this.time;return this.callback=()=>null,this.reset(),t}}start(){this.paused=!1,clearInterval(this.interval),this.interval=window.setInterval(()=>{this.gameTime+=1,this.callback(this.time)},1e3)}stop(){this.paused=!0,clearInterval(this.interval)}reset(){this.stop(),this.gameTime=0}},Ot=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Et=class extends pt{constructor(){super(...arguments),this.showOptions=!1,this.timer=0,this.inGame=!1,this.timeElapsed="00m 00s",this.gameSummary=[],this.hasMatch=!1,this.pairs=[],this.choices=[],this.cards=[],this.unsubTimer=()=>""}static get styles(){return dt`
      :host,
      main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .action-bar {
        display: flex;
        align-items: center;
        background-color: var(--primary-colour);
        padding: 10px 15px;
        box-shadow: 1px 1px 2px 2px var(--shadow-colour);
      }

      .content {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 51px); /* account for action-bar */
      }

      .summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--secondary-colour);
        color: var(--secondary-contrast);
        padding: 5px;
        margin: 10px 5px;
        white-space: pre-line;
      }

      /* Helpers */
      .flex-spacer {
        display: flex;
        flex: 1;
      }

      /* Responsive */
      @media (max-width: 479px) {
        .action-bar {
          flex-direction: column;
        }
        .action-bar > * {
          margin: 5px 0;
        }
        .flex-spacer {
          display: none;
        }
      }
    `}render(){const t=this.pairs.length,e=t?t/2:0,i=this.gameSummary.length>0;return M`
      <main>
        <div class="action-bar">
          ${this.inGame?M`
                <div>Time: ${this.timeElapsed}</div>
              `:""}
          <div class="flex-spacer"></div>
          ${this.showOptions?"":M`
                <div>
                  <glk-button
                    primary
                    ?disabled=${this.inGame}
                    @press="${this.newGame}"
                    >New game</glk-button
                  >
                  <glk-button
                    primary
                    ?disabled=${!this.inGame}
                    @press="${()=>this.endGame(!1)}"
                    >Quit game</glk-button
                  >
                </div>
              `}

          <div class="flex-spacer"></div>
          ${this.inGame?M`
                <div>${e} Pairs found</div>
              `:""}
          ${this.inGame?"":M`
                <glk-button icon @press=${()=>this.showOptions=!0}
                  >⚙︎</glk-button
                >
              `}
        </div>
        ${this.showOptions?M`
              <glk-options
                @close=${()=>this.showOptions=!1}
              ></glk-options>
            `:M`
              <div class="content">
                ${i?M`
                      <div class="summary">
                        ${this.gameSummary.map(t=>M`
                              <div>${t}</div>
                            `)}
                      </div>
                    `:""}
                <glk-card-grid
                  .cards=${this.cards}
                  .selected=${this.choices}
                  .removed=${this.pairs}
                  ?hasMatch=${this.hasMatch}
                  @flipped="${this.onCardFlip}"
                >
                </glk-card-grid>
              </div>
            `}
      </main>
    `}newGame(){this.gameSummary=[],this.choices=[],this.cards=function(){const t=St.get(),e=Nt(Ct).slice(0,t.startingPairs);return Nt([...e,...e]).map(jt)}(),this.inGame=!0,this.unsubTimer=At.subscribe(t=>this.timeElapsed=t)}endGame(t=!1){const e=this.unsubTimer(),i=this.pairs.length;this.inGame=!1,this.pairs=[],this.choices=this.cards.map(t=>t.id),this.gameSummary=[t?"You found all the pairs!":"Quitters always quit.",`${i} pairs found in ${e}`]}onCardFlip(t){if(2===this.choices.length)return;const e=t.detail;!this.choices.includes(e.cardId)&&(this.choices=[...this.choices,e.cardId],this.checkCards())}checkCards(){if(2!==this.choices.length)return;const t=this.choices.map(t=>{const e=this.cards.find(e=>e.id===t);if(e)return e.characterId}),e=1===new Set(t).size;this.hasMatch=e,clearTimeout(this.timer),this.timer=window.setTimeout(()=>{e&&(this.pairs=[...this.pairs,...this.choices]),this.choices=[],this.hasMatch=!1,this.checkGameState()},1500)}checkGameState(){this.cards.length===this.pairs.length&&0!==this.pairs.length&&this.endGame(!0)}};Ot([nt({type:Boolean})],Et.prototype,"showOptions",void 0),Ot([nt({type:Number})],Et.prototype,"timer",void 0),Ot([nt({type:Boolean})],Et.prototype,"inGame",void 0),Ot([nt({type:String})],Et.prototype,"timeElapsed",void 0),Ot([nt({type:Array})],Et.prototype,"gameSummary",void 0),Ot([nt({type:Boolean})],Et.prototype,"hasMatch",void 0),Ot([nt({type:Array})],Et.prototype,"pairs",void 0),Ot([nt({type:Array})],Et.prototype,"choices",void 0),Ot([nt({type:Array})],Et.prototype,"cards",void 0),Ot([nt({type:Function})],Et.prototype,"unsubTimer",void 0),Et=Ot([st("glk-app")],Et)}]);