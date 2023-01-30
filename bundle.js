/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={753:(e,t,i)=>{t.Z=void 0;var s,a=(s=i(153))&&s.__esModule?s:{default:s};function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.appRoutes=[],this.baseUrl="/",this.baseTitle="",this.listeners=[],this.appRoutes=t,this.baseUrl=i.baseUrl||"/",this.baseTitle=i.baseTitle||"",this.listenToPopState()}var t,i;return t=e,i=[{key:"base",get:function(){return this.baseUrl}},{key:"currentRoute",get:function(){var e=this.guardPath("/".concat(window.location.pathname.replace(this.baseUrl,"")));return this.appRoutes.find((function(t){return t.url===e}))}},{key:"subscribe",value:function(e){var t=this;return this.listeners.push(e),function(){var i=t.listeners.indexOf(e);t.listeners.splice(i,1)}}},{key:"push",value:function(e){var t=this.currentRoute,i=this.guardPath(e.replace(this.baseUrl,"")),s=this.appRoutes.find((function(e){return e.url===i}));if(s){var a=e.startsWith(this.baseUrl)?e:"".concat(this.baseUrl).concat(e),r="".concat(window.location.origin).concat(a);window.history.pushState(null,"",r),this.setPageTitle(s.title),this.publishChange(s,t)}else console.error("Unknown route",i)}},{key:"guardPath",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this.baseUrl;var i=t?e.split("?")[0]:e;return(i=(i=(i=i.replace(/\/\//g,"/")).startsWith("/")?i:"/".concat(i)).endsWith("/")?i.slice(0,-1):i)||this.baseUrl}},{key:"setPageTitle",value:function(e){var t;(e||this.baseTitle)&&(t=e&&this.baseTitle?"".concat(e," | ").concat(this.baseTitle):e||this.baseTitle,document.title=t)}},{key:"listenToPopState",value:function(){var e=this;window.onpopstate=function(){var t=e.guardPath("/".concat(window.location.pathname.replace(e.baseUrl,""))),i=e.appRoutes.find((function(e){return e.url===t}));i?(e.setPageTitle(i.title),e.publishChange(i)):console.error("Unknown route",t)}}},{key:"publishChange",value:function(e,t){var i={key:(0,a.default)(),fromRoute:t,toRoute:e};this.listeners.forEach((function(e){return e(i)}))}}],i&&o(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=n},293:(e,t,i)=>{t.fg=void 0;var s=r(i(762)),a=r(i(405));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},n=(0,s.default)(o,a.default);t.fg=n,(0,s.default)((function(e){return e.split(" ").map(o).join(" ")}),a.default)},490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"true"===e||"false"!==e&&(t?!!e:e)}},762:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}},387:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.freeze(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);t.default=i},125:(e,t,i)=>{t.Z=void 0;var s=o(i(762)),a=o(i(234)),r=o(i(490));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var s,a,r=[],o=!0,n=!1;try{for(i=i.call(e);!(o=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}var l=(0,s.default)((function(e){return(0,r.default)(e,!1)}),a.default,decodeURIComponent);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("?").pop().split("&").reduce((function(e,t){var i=c(t.split("="),2),s=i[0],a=i[1];if(void 0===a)return e;var r=l(a);return m(m({},e),{},d({},s,r))}),{})}},665:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return"";var t=new Date(e);return"".concat((0,a.default)(t.getDate(),2)," ").concat(s.default[t.getMonth()]," ").concat(t.getFullYear())};var s=r(i(387)),a=r(i(889));function r(e){return e&&e.__esModule?e:{default:e}}},787:(e,t,i)=>{t.Z=function(e){return"".concat((0,s.default)(e)," @ ").concat((0,a.default)(e))};var s=r(i(665)),a=r(i(236));function r(e){return e&&e.__esModule?e:{default:e}}},236:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e?"".concat((0,a.default)(new Date(e).getHours(),2),":").concat((0,a.default)(new Date(e).getMinutes(),2)):""};var s,a=(s=i(889))&&s.__esModule?s:{default:s}},405:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return e.replace(/([a-z\d])([A-Z])/g,"$1"+t+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+t+"$2").toLowerCase()}},153:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return("".concat(1e7)+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){var t=Number(e);return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}},527:(e,t)=>{t.Z=function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){var t=e.currentTarget;if(t&&t.getAttribute){var i=t.getAttribute("target")||"";if(/\b_blank\b/i.test(i))return}return e.preventDefault(),!0}}},989:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.prop=function(e,t){return e[t]}},362:(e,t,i)=>{t.Z=void 0;var s=i(989);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var m=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storeName=t,this.defaultValue=i}var t,i;return t=e,i=[{key:"storage",get:function(){return"undefined"!=typeof localStorage?localStorage:{getItem:function(e){return""},setItem:function(e,t){}}}},{key:"get",value:function(){var e=this.storage.getItem(this.storeName)||"",t=e?JSON.parse(e):this.defaultValue;return r(r({},this.defaultValue),t)}},{key:"getKey",value:function(e){var t,i=this.storage.getItem(this.storeName)||"",a=i?JSON.parse(i):this.defaultValue;return null!==(t=(0,s.prop)(a,e))&&void 0!==t?t:(0,s.prop)(this.defaultValue,e)}},{key:"set",value:function(e){var t=r(r({},this.get()),e);return this.storage.setItem(this.storeName,JSON.stringify(t)),t}},{key:"replace",value:function(e){var t=JSON.stringify(e);return this.storage.setItem(this.storeName,t),this.get()}},{key:"upgrade",value:function(){for(var e=this.get(),t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];var a=i.reduce((function(e,t){return t(e)}),e);this.replace(a)}}],i&&n(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=m},859:(e,t)=>{function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var s,a,r=[],o=!0,n=!1;try{for(i=i.call(e);!(o=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}t.Z=void 0;var o=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return[].concat(i).map((function(t){return t.replace(/\[([^\[\]]*)\]/g,".$1.").split(".").filter((function(e){return""!==e})).reduce((function(e,t){return e&&e[t]}),e)}))};t.Z=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s(e).sort((function(e,s){return t.reduce((function(t,r,n){var m=o(e,r)[0],d=o(s,r)[0];if(0===t){var c=i(a&&"desc"===a[n]?[d,m]:[m,d],2),g=c[0],l=c[1];t=g>l?1:g<l?-1:0}return t}),0)}))}},889:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return(e=e.toString()).length>=t?e:new Array(t-e.length+1).join(i)+e}},234:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(/\D/.test(e))return e;var t=parseInt(e,10);return isNaN(t)?e:t}},149:(e,t)=>{function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}t.Z=function(e){for(var t=function(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),s=t.length-1;s>0;s--){var a=Math.floor(Math.random()*(s+1)),r=[t[a],t[s]];t[s]=r[0],t[a]=r[1]}return t}},434:(e,t)=>{t.Z=function(e){return e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,i),r.exports}(()=>{const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${a}`),o="$lit$";class n{constructor(e,t){this.parts=[],this.element=t;const i=[],a=[],n=document.createTreeWalker(t.content,133,null,!1);let d=0,l=-1,u=0;const{strings:p,values:{length:h}}=e;for(;u<h;){const e=n.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)m(t[e].name,o)&&s++;for(;s-- >0;){const t=p[u],i=g.exec(t)[2],s=i.toLowerCase()+o,a=e.getAttribute(s);e.removeAttribute(s);const n=a.split(r);this.parts.push({type:"attribute",index:l,name:i,strings:n}),u+=n.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,a=t.split(r),n=a.length-1;for(let t=0;t<n;t++){let i,r=a[t];if(""===r)i=c();else{const e=g.exec(r);null!==e&&m(e[2],o)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-o.length)+e[3]),i=document.createTextNode(r)}s.insertBefore(i,e),this.parts.push({type:"node",index:++l})}""===a[n]?(s.insertBefore(c(),e),i.push(e)):e.data=a[n],u+=n}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&l!==d||(l++,t.insertBefore(c(),e)),d=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(i.push(e),l--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else n.currentNode=a.pop()}for(const e of i)e.parentNode.removeChild(e)}}const m=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,c=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(e,t){const{element:{content:i},parts:s}=e,a=document.createTreeWalker(i,133,null,!1);let r=p(s),o=s[r],n=-1,m=0;const d=[];let c=null;for(;a.nextNode();){n++;const e=a.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&m++;void 0!==o&&o.index===n;)o.index=null!==c?-1:o.index-m,r=p(s,r),o=s[r]}d.forEach((e=>e.parentNode.removeChild(e)))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(d(t))return i}return-1},h=new WeakMap,f=e=>"function"==typeof e&&h.has(e),y={},k={};class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,a=document.createTreeWalker(t,133,null,!1);let r,o=0,n=0,m=a.nextNode();for(;o<s.length;)if(r=s[o],d(r)){for(;n<r.index;)n++,"TEMPLATE"===m.nodeName&&(i.push(m),a.currentNode=m.content),null===(m=a.nextNode())&&(a.currentNode=i.pop(),m=a.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(m.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(m,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),j=` ${s} `;class I{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const m=g.exec(e);t+=null===m?e+(i?j:a):e.substr(0,m.index)+m[1]+m[2]+o+m[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new _(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!S(e))return e}let s="";for(let a=0;a<t;a++){s+=e[a];const t=i[a];if(void 0!==t){const e=t.value;if(w(e)||!S(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||w(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class M{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof I?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===k?(this.value=k,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const a of e)i=t[s],void 0===i&&(i=new M(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(a),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class O extends x{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends _{}let T=!1;(()=>{try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class N{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=$(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const $=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function C(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(s);return i=t.keyString.get(a),void 0===i&&(i=new n(e,e.getTemplateElement()),t.keyString.set(a,i)),t.stringsArray.set(e.strings,i),i}const R=new Map,K=new WeakMap,B=new class{handleAttributeExpressions(e,t,i,s){const a=t[0];return"."===a?new O(e,t.slice(1),i).parts:"@"===a?[new N(e,t.slice(1),s.eventContext)]:"?"===a?[new P(e,t.slice(1),i)]:new x(e,t,i).parts}handleTextExpression(e){return new M(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const H=(e,...t)=>new I(e,t,"html",B),D=(e,t)=>`${e}--${t}`;let E=!0;void 0===window.ShadyCSS?E=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),E=!1);const z=e=>t=>{const i=D(t.type,e);let a=R.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},R.set(i,a));let r=a.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(s);if(r=a.keyString.get(o),void 0===r){const i=t.getTemplateElement();E&&window.ShadyCSS.prepareTemplateDom(i,e),r=new n(t,i),a.keyString.set(o,r)}return a.stringsArray.set(t.strings,r),r},G=["html","svg"],U=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const L={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),V={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:F};class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=V){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const a=this[e];this[t]=s,this.requestUpdateInternal(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||V}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=F){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||L,a="function"==typeof s?s:s.fromAttribute;return a?a(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||L.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=V){const s=this.constructor,a=s._attributeNameForProperty(e,i);if(void 0!==a){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(a):this.setAttribute(a,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const a=this.constructor;i=i||a.getPropertyOptions(e),a._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Y.finalized=!0;const J=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),W=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Z(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):W(e,t)}const X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;const q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class ee{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const i=t.reduce(((t,i,s)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1]),e[0]);return new ee(i,Q)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ie={};class se extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),s=[];i.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!q){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new ee(String(t),Q)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?q?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ie&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ie}}function ae(...e){return e.filter((e=>!!e)).join(" ")}se.finalized=!0,se.render=(e,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const a=s.scopeName,r=K.has(i),o=E&&11===i.nodeType&&!!i.host,n=o&&!U.has(a),m=n?document.createDocumentFragment():i;if(((e,i,s)=>{let a=K.get(i);void 0===a&&(t(i,i.firstChild),K.set(i,a=new M(Object.assign({templateFactory:C},s))),a.appendInto(i)),a.setValue(e),a.commit()})(e,m,Object.assign({templateFactory:z(a)},s)),n){const e=K.get(m);K.delete(m);((e,t,i)=>{U.add(e);const s=i?i.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:r}=a;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=a[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{G.forEach((t=>{const i=R.get(D(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),l(e,i)}))}))})(e);const n=s.content;i?function(e,t,i=null){const{element:{content:s},parts:a}=e;if(null==i)return void s.appendChild(t);const r=document.createTreeWalker(s,133,null,!1);let o=p(a),n=0,m=-1;for(;r.nextNode();)for(m++,r.currentNode===i&&(n=u(t),i.parentNode.insertBefore(t,i));-1!==o&&a[o].index===m;){if(n>0){for(;-1!==o;)a[o].index+=n,o=p(a,o);return}o=p(a,o)}}(i,o,n.firstChild):n.insertBefore(o,n.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const m=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==m)t.insertBefore(m.cloneNode(!0),t.firstChild);else if(i){n.insertBefore(o,n.firstChild);const e=new Set;e.add(o),l(i,e)}})(a,m,e.value instanceof b?e.value.template:void 0),t(i,i.firstChild),i.appendChild(m),K.set(i,e)}!r&&o&&window.ShadyCSS.styleElement(i.host)},se.shadowRootOptions={mode:"open"};var re=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let oe=class extends se{constructor(){super(...arguments),this.type="button",this.primary=!1,this.danger=!1,this.icon=!1,this.disabled=!1}static get styles(){return te`
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

      .button--icon {
        padding: 2px 6px;
        border-radius: 50%;
        box-shadow: none;
        font-size: var(--icon-font-size, 1.25rem);
      }
      .button--icon:hover {
        background-color: initial;
        box-shadow: 1px 1px 2px 0px var(--shadow-colour),
          0px 0px 1px 0px var(--shadow-colour);
      }

      .button--primary {
        background-color: var(--secondary-colour);
        color: var(--secondary-contrast);
      }
      .button--primary:hover {
        background-color: var(--secondary-colour-hovered);
      }

      .button--danger {
        background-color: var(--danger-colour);
        color: #fff;
      }
      .button--danger:hover {
        background-color: var(--danger-colour-hovered);
      }

      .button:disabled {
        background-color: var(--disabled-colour);
        color: inherit;
        cursor: default;
      }
    `}render(){const e=ae("button",this.primary&&"button--primary",this.icon&&"button--icon",this.danger&&"button--danger");return H`
      <button
        type="${this.type}"
        class="${e}"
        ?disabled=${this.disabled}
        @click="${this.handleClick}"
      >
        <slot></slot>
      </button>
    `}handleClick(){const e=new CustomEvent("press",{bubbles:!0,composed:!0,detail:null});this.dispatchEvent(e)}};re([Z({type:String})],oe.prototype,"type",void 0),re([Z({type:Boolean})],oe.prototype,"primary",void 0),re([Z({type:Boolean})],oe.prototype,"danger",void 0),re([Z({type:Boolean})],oe.prototype,"icon",void 0),re([Z({type:Boolean})],oe.prototype,"disabled",void 0),oe=re([J("glk-button")],oe);const ne="/galko",me=new(i(753).Z)([{name:"home",render:()=>H` <glk-home></glk-home> `,url:ne},{name:"options",render:()=>H` <glk-options></glk-options> `,title:"Options",url:"/options"},{name:"scores",render:()=>H` <glk-scores></glk-scores> `,title:"Scores",url:"/scores"},{name:"decks",render:()=>H` <glk-decks></glk-decks> `,title:"Decks",url:"/decks"},{name:"decks-builder",render:()=>H` <glk-decks-builder></glk-decks-builder> `,title:"Deck Builder",url:"/decks-builder"}],{baseUrl:ne,baseTitle:"Galko"});var de=i(527),ce=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let ge=class extends se{constructor(){super(...arguments),this.href="",this.buttonise=!1}static get styles(){return te`
      .router-link {
        color: var(--link-colour);
      }
      .router-link:hover {
        color: var(--link-colour-hovered);
      }
      .router-link--as-button {
        text-decoration: none;
        color: inherit;
        font-family: var(--font-family);
        font-size: inherit;
        background: none;
        border: none;
        padding: 5px 10px;
        margin: 0 2px;
        cursor: pointer;
      }
      .router-link--as-button:hover {
        color: var(--secondary-colour-hovered);
      }
    `}render(){const e="router-link"+(this.buttonise?" router-link--as-button":""),t=this.resolveLocation();return H`
      <a class="${e}" href="${t}" @click=${this.handleClick}>
        <slot></slot>
      </a>
    `}handleClick(e){if((0,de.Z)(e)){const e=this.resolveLocation();me.push(e)}}resolveLocation(){const e=this.href.startsWith(me.base)?this.href:`${me.base}${this.href}`;return me.guardPath(e,!1)}};var le;ce([Z({type:String})],ge.prototype,"href",void 0),ce([Z({type:Boolean})],ge.prototype,"buttonise",void 0),ge=ce([J("glk-router-link")],ge),function(e){e.XXS="xxs",e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg"}(le||(le={}));function ue(e,t){switch(e){case le.LG:return te`
    @media (min-width: ${1200}px) {
      ${t}
    }
  `;case le.MD:return(e=>te`
    @media (min-width: ${992}px) and (max-width: ${1199}px) {
      ${e}
    }
  `)(t);case le.SM:return(e=>te`
    @media (min-width: ${768}px) and (max-width: ${991}px) {
      ${e}
    }
  `)(t);case le.XS:return(e=>te`
    @media (min-width: ${480}px) and (max-width: ${767}px) {
      ${e}
    }
  `)(t);case le.XXS:return(e=>te`
    @media (max-width: ${479}px) {
      ${e}
    }
  `)(t)}}const pe=[{size:le.LG,num:1},{size:le.MD,num:1},{size:le.SM,num:1.5},{size:le.XS,num:2},{size:le.XXS,num:2}].map((({size:e,num:t})=>ue(e,te`
      .grid--standard {
        grid-template-columns: repeat(
          auto-fill,
          calc(var(--card-width) * ${t})
        );
        grid-auto-rows: 1fr;
        gap: calc(25px / ${t});
      }
    `))),he=[te`
    .grid {
      display: grid;
      padding: 0 5px;
      margin: 20px 0;
      list-style-type: none;
    }
  `,...pe];var fe;!function(e){e.argyle="argyle",e.blueprint="blueprint",e.chevrons="chevrons",e.honeyCombs="honeyCombs",e.shippo="shippo",e.subtleDots="subtleDots"}(fe||(fe={}));var ye=i(362);const ke=new ye.Z("glkOptions",{cardBack:fe.subtleDots,deckId:"",hideOnMatch:!0,startingPairs:15}),be=new ye.Z("glkData",{decks:[],history:[]});be.upgrade((e=>{if(!e)return e;const t=(e.history||[]).map((e=>({...e,turns:e.turns?e.turns:0})));return{...e,history:t}}));var ve=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let je=class extends se{constructor(){super(...arguments),this.decks=[]}static get styles(){return[...he,te`
        :host {
          margin: 10px;
        }

        .decks__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .deck-item {
          --icon-font-size: 1.1rem;
          display: flex;
          align-items: center;
          padding: 5px 0;
          font-size: var(--icon-font-size);
        }
        glk-button {
          margin: 0 5px;
        }
      `]}firstUpdated(){this.decks=be.getKey("decks")}render(){return H`
      <section class="decks">
        <header class="header">
          <h2 class="decks__title">Decks</h2>
          <glk-router-link .href=${"/decks-builder"}
            >Create a new deck</glk-router-link
          >
        </header>

        <div class="deck-view">
          <ul class="grid deck-list">
            ${this.decks.map((e=>H`
                <li class="deck-item">
                  <div>
                    <glk-router-link .href=${`/decks-builder?deck=${e.id}`}
                      >${e.name}</glk-router-link
                    >
                    <div>${e.characterIds.length} character(s)</div>
                  </div>
                  <glk-button icon danger @press=${()=>this.dropDeck(e.id)}
                    >❌︎</glk-button
                  >
                </li>
              `))}
          </ul>
        </div>
      </section>
    `}dropDeck(e){let t=be.getKey("decks");t=t.filter((t=>t.id!==e)),be.set({decks:t}),this.decks=t}};ve([Z({type:Array})],je.prototype,"decks",void 0),je=ve([J("glk-decks")],je);var Ie=i(125),we=i(153),Se=i(434);const xe=(e,t)=>{const i=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,a=i.insertBefore(c(),s);i.insertBefore(c(),s);const r=new M(e.options);return r.insertAfterNode(a),r},_e=(e,t)=>(e.setValue(t),e.commit(),e),Me=(e,t,i)=>{const s=e.startNode.parentNode,a=i?i.startNode:e.endNode,r=t.endNode.nextSibling;r!==a&&((e,t,i=null,s=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,s),t=i}})(s,t.startNode,r,a)},Pe=e=>{t(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},Oe=(e,t,i)=>{const s=new Map;for(let a=t;a<=i;a++)s.set(e[a],a);return s},Ae=new WeakMap,Te=new WeakMap,Ne=($e=(e,t,i)=>{let s;return void 0===i?i=t:void 0!==t&&(s=t),t=>{if(!(t instanceof M))throw new Error("repeat can only be used in text bindings");const a=Ae.get(t)||[],r=Te.get(t)||[],o=[],n=[],m=[];let d,c,g=0;for(const t of e)m[g]=s?s(t,g):g,n[g]=i(t,g),g++;let l=0,u=a.length-1,p=0,h=n.length-1;for(;l<=u&&p<=h;)if(null===a[l])l++;else if(null===a[u])u--;else if(r[l]===m[p])o[p]=_e(a[l],n[p]),l++,p++;else if(r[u]===m[h])o[h]=_e(a[u],n[h]),u--,h--;else if(r[l]===m[h])o[h]=_e(a[l],n[h]),Me(t,a[l],o[h+1]),l++,h--;else if(r[u]===m[p])o[p]=_e(a[u],n[p]),Me(t,a[u],a[l]),u--,p++;else if(void 0===d&&(d=Oe(m,p,h),c=Oe(r,l,u)),d.has(r[l]))if(d.has(r[u])){const e=c.get(m[p]),i=void 0!==e?a[e]:null;if(null===i){const e=xe(t,a[l]);_e(e,n[p]),o[p]=e}else o[p]=_e(i,n[p]),Me(t,i,a[l]),a[e]=null;p++}else Pe(a[u]),u--;else Pe(a[l]),l++;for(;p<=h;){const e=xe(t,o[h+1]);_e(e,n[p]),o[p++]=e}for(;l<=u;){const e=a[l++];null!==e&&Pe(e)}Ae.set(t,o),Te.set(t,m)}},(...e)=>{const t=$e(...e);return h.set(t,!0),t});var $e,Ce=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Re=class extends se{constructor(){super(...arguments),this.timer=0}static get styles(){return te`
      /* Shared sizing */
      :host,
      .image,
      .image__image {
        width: var(--card-width);
        height: var(--card-height);
      }
    `}firstUpdated(){this.image=this.images[0]}render(){return H`
      <div
        class="image"
        @mouseenter=${this.startCycler}
        @mouseleave=${this.stopCycler}
      >
        <img
          src=${this.image}
          alt=${this.alt}
          class="image__image"
          loading="lazy"
        />
      </div>
    `}startCycler(){this.images.length<2||(clearInterval(this.timer),this.timer=window.setInterval((()=>{const e=this.images.findIndex((e=>e===this.image)),t=e+1>=this.images.length?0:e+1,i=this.images[t];this.image=i}),1e3))}stopCycler(){clearInterval(this.timer)}};Ce([Z({type:Array})],Re.prototype,"images",void 0),Ce([Z({type:String})],Re.prototype,"alt",void 0),Ce([Z({type:String})],Re.prototype,"image",void 0),Ce([Z({type:Number})],Re.prototype,"timer",void 0),Re=Ce([J("glk-image-cycler")],Re);const Ke=JSON.parse('[{"id":92,"image":"https://i.imgur.com/Q0uAHi8.jpg","images":[],"name":"Accelerator","seriesId":40},{"id":265,"image":"https://i.imgur.com/HtOG1j5.jpg","images":[],"name":"Ace Portgas D.","seriesId":21},{"id":313,"image":"https://i.imgur.com/2YF2H0F.jpg","images":[],"name":"Adrian \\"Alucard\\" Tepes","seriesId":101},{"id":444,"image":"https://i.imgur.com/0pOYMTN.jpg","images":[],"name":"Agnes","seriesId":141},{"id":434,"image":"https://i.imgur.com/p4QSWLs.jpg","images":[],"name":"Ai \\"Miyano Shiho, Sherry\\" Haibara","seriesId":89},{"id":228,"image":"https://i.imgur.com/jsUwwgq.jpg","images":[],"name":"Ai Kisugi","seriesId":45},{"id":363,"image":"https://i.imgur.com/BuhQ4Ys.jpg","images":[],"name":"Akane Awakusu","seriesId":54},{"id":81,"image":"https://i.imgur.com/ELsbWMP.jpg","images":[],"name":"Akeno Himejima","seriesId":36},{"id":239,"image":"https://i.imgur.com/Jk6HeCy.jpg","images":[],"name":"Akira Midousuji","seriesId":90},{"id":17,"image":"https://i.imgur.com/o4NBdt0.jpg","images":[],"name":"Albedo","seriesId":12},{"id":130,"image":"https://i.imgur.com/2y2pK2I.jpg","images":[],"name":"Alice Nakiri","seriesId":55},{"id":377,"image":"https://i.imgur.com/Qn7UWMW.jpg","images":[],"name":"All Might \\"Toshinori Yagi\\"","seriesId":56},{"id":317,"image":"https://i.imgur.com/8XhZ8Ai.jpg","images":[],"name":"Anjou","seriesId":103},{"id":119,"image":"https://i.imgur.com/cnlLuv9.jpg","images":[],"name":"Ann \\"Panther\\" Takamaki","seriesId":52},{"id":451,"image":"https://i.imgur.com/XZz58d1.jpg","images":[],"name":"Anzu \\"Téa Gardner\\" Mazaki","seriesId":142},{"id":47,"image":"https://i.imgur.com/cCy2CB2.jpg","images":[],"name":"Aquarius","seriesId":24},{"id":350,"image":"https://i.imgur.com/zjcf7BF.jpg","images":[],"name":"Arataka Reigen","seriesId":115},{"id":106,"image":"https://i.imgur.com/9QoceWQ.jpg","images":[],"name":"Archer","seriesId":46},{"id":427,"image":"https://i.imgur.com/MR3emu2.jpg","images":[],"name":"Armin Arlert","seriesId":136},{"id":163,"image":"https://i.imgur.com/tvzTNI5.jpg","images":[],"name":"Arsene Lupin III","seriesId":63},{"id":321,"image":"https://i.imgur.com/p2oEyL1.jpg","images":[],"name":"Asirpa","seriesId":18},{"id":331,"image":"https://i.imgur.com/Mxh5eLg.jpg","images":[],"name":"Asta \\"Asta Sutaria\\"","seriesId":107},{"id":347,"image":"https://i.imgur.com/dqZl7GH.jpg","images":[],"name":"Asuka \\"Rupture\\" Ootorii","seriesId":112},{"id":392,"image":"https://i.imgur.com/cx7eybc.jpg","images":[],"name":"Atsushi Murasakibara","seriesId":121},{"id":244,"image":"https://i.imgur.com/XAVtdP9.jpg","images":[],"name":"Atsushi Nakajima","seriesId":92},{"id":252,"image":"https://i.imgur.com/rSqzjha.jpg","images":[],"name":"Ayame Sarutobi","seriesId":93},{"id":353,"image":"https://i.imgur.com/Jvj2nVA.jpg","images":[],"name":"Bang \\"Silver Fang\\"","seriesId":65},{"id":288,"image":"https://i.imgur.com/VnUCeYS.jpg","images":[],"name":"Baraggan Louisenbairn","seriesId":22},{"id":22,"image":"https://i.imgur.com/qRWfMKQ.jpg","images":[],"name":"Bayonetta","seriesId":17},{"id":322,"image":"https://i.imgur.com/2sylQm8.jpg","images":[],"name":"Beelzebub","seriesId":104},{"id":178,"image":"https://i.imgur.com/tXXCZUq.jpg","images":[],"name":"Beerus \\"God of Destruction\\"","seriesId":67},{"id":11,"image":"https://i.imgur.com/NTkNb9T.jpg","images":[{"url":"https://i.imgur.com/zQa4bKq.jpg"},{"url":"https://i.imgur.com/vsTz636.jpg"},{"url":"https://i.imgur.com/NBbfc5k.png"}],"name":"Bishamonten","seriesId":6},{"id":94,"image":"https://i.imgur.com/Dgxwcbd.jpg","images":[],"name":"Bocchi Hitori","seriesId":42},{"id":66,"image":"https://i.imgur.com/StaXFpY.jpg","images":[],"name":"Brook \\"Soul King\\"","seriesId":21},{"id":224,"image":"https://i.imgur.com/Tjavfku.jpg","images":[],"name":"Bruno \\"Bucciarati\\" Buccellati","seriesId":81},{"id":204,"image":"https://i.imgur.com/YTBsQwU.jpg","images":[],"name":"Byakuya Kuchiki","seriesId":22},{"id":74,"image":"https://i.imgur.com/5qmtJmp.jpg","images":[],"name":"C.C. \\"C2\\"","seriesId":33},{"id":314,"image":"https://i.imgur.com/g6gCB1f.png","images":[],"name":"Carmilla","seriesId":101},{"id":328,"image":"https://i.imgur.com/6o1u25J.jpg","images":[],"name":"Casca","seriesId":5},{"id":103,"image":"https://i.imgur.com/Ah7d30O.jpg","images":[],"name":"Caster \\"Medea\\"","seriesId":46},{"id":126,"image":"https://i.imgur.com/PxWnLsF.jpg","images":[],"name":"Celty Sturluson","seriesId":54},{"id":124,"image":"https://i.imgur.com/FyYSfwS.jpg","images":[],"name":"Centorea Shianus","seriesId":53},{"id":54,"image":"https://i.imgur.com/69qIura.jpg","images":[],"name":"Chamber \\"Tin Can\\"","seriesId":29},{"id":301,"image":"https://i.imgur.com/Out8ifx.jpg","images":[],"name":"Chane Laforet","seriesId":98},{"id":99,"image":"https://i.imgur.com/UZXsSD5.jpg","images":[],"name":"Chie Satonaka","seriesId":47},{"id":65,"image":"https://i.imgur.com/XPsSKbJ.jpg","images":[],"name":"Chopper Tony Tony","seriesId":21},{"id":302,"image":"https://i.imgur.com/WiDDhSG.jpg","images":[],"name":"Claire \\"Vino, Felix Walken\\" Stanfield","seriesId":98},{"id":78,"image":"https://i.imgur.com/lJtELjS.jpg","images":[],"name":"Clare","seriesId":35},{"id":212,"image":"https://i.imgur.com/WIx5iEe.jpg","images":[],"name":"Cobra \\"Joe Gillian\\"","seriesId":10},{"id":234,"image":"https://i.imgur.com/h35KBQM.jpg","images":[],"name":"Conan \\"Kudou Shinichi\\" Edogawa","seriesId":89},{"id":287,"image":"https://i.imgur.com/cOMRiIT.jpg","images":[],"name":"Coyote Starrk","seriesId":22},{"id":283,"image":"https://i.imgur.com/6zWZBNS.jpg","images":[],"name":"Crocodile","seriesId":21},{"id":388,"image":"https://i.imgur.com/sEMQ7hc.jpg","images":[],"name":"Daiki Aomine","seriesId":121},{"id":164,"image":"https://i.imgur.com/SYJ5UrL.jpg","images":[],"name":"Daisuke Jigen","seriesId":63},{"id":396,"image":"https://i.imgur.com/Nf0BJMt.jpg","images":[],"name":"Diavolo \\"Boss, Soliddo Nazo\\"","seriesId":81},{"id":109,"image":"https://i.imgur.com/akFHhlw.jpg","images":[{"url":"https://i.imgur.com/YUZBYMq.jpg"},{"url":"https://i.imgur.com/XtBTbfS.jpg"}],"name":"Dio Brando","seriesId":48},{"id":266,"image":"https://i.imgur.com/FI54zbY.jpg","images":[],"name":"Doflamingo Donquixote","seriesId":21},{"id":246,"image":"https://i.imgur.com/u4vYoab.jpg","images":[],"name":"Doppo Kunikida","seriesId":92},{"id":194,"image":"https://i.imgur.com/cE7XBpB.jpg","images":[],"name":"Dr. Necro","seriesId":79},{"id":242,"image":"https://i.imgur.com/i5DZxyb.jpg","images":[],"name":"Duke \\"Golgo 13\\" Togo","seriesId":91},{"id":376,"image":"https://i.imgur.com/GHby8c9.jpg","images":[],"name":"Ebisu","seriesId":6},{"id":188,"image":"https://i.imgur.com/S96jdf0.jpg","images":[],"name":"Eikichi Onizuka","seriesId":73},{"id":369,"image":"https://i.imgur.com/PG7mPdT.jpg","images":[],"name":"Emma","seriesId":117},{"id":413,"image":"https://i.imgur.com/JAFosQd.jpg","images":[],"name":"Emma","seriesId":129},{"id":315,"image":"https://i.imgur.com/nrTmTKJ.jpg","images":[],"name":"Emu \\"Hǔ Qinglán\\" Hino","seriesId":100},{"id":423,"image":"https://i.imgur.com/kgP5aSL.jpg","images":[],"name":"Eren Yeager","seriesId":136},{"id":128,"image":"https://i.imgur.com/PEx5z7Y.jpg","images":[],"name":"Erina \\"God\'s Tongue\\" Nakiri","seriesId":55},{"id":422,"image":"https://i.imgur.com/moz14tc.jpg","images":[],"name":"Erwin Smith","seriesId":136},{"id":43,"image":"https://i.imgur.com/rwiy0S0.jpg","images":[],"name":"Erza \\"Titania\\" Scarlet","seriesId":24},{"id":340,"image":"https://i.imgur.com/0gMYjJA.jpg","images":[],"name":"Evermilion \\"White Princess\\"","seriesId":2},{"id":67,"image":"https://i.imgur.com/s69RGA5.jpg","images":[],"name":"Franky","seriesId":21},{"id":180,"image":"https://i.imgur.com/LsrQ2PL.jpg","images":[],"name":"Frieza","seriesId":67},{"id":171,"image":"https://i.imgur.com/OScW3oA.jpg","images":[],"name":"Fubuki \\"Hellish Blizzard\\"","seriesId":65},{"id":165,"image":"https://i.imgur.com/cXjRefc.jpg","images":[],"name":"Fujiko Mine","seriesId":63},{"id":137,"image":"https://i.imgur.com/mYf0d4s.jpg","images":[],"name":"Fumikage \\"Tsukuyomi\\" Tokoyami","seriesId":56},{"id":430,"image":"https://i.imgur.com/g5JNWXm.png","images":[],"name":"Fuyuki Minami","seriesId":139},{"id":62,"image":"https://i.imgur.com/cqmrT5i.jpg","images":[],"name":"Gaara","seriesId":23},{"id":53,"image":"https://i.imgur.com/YlMZthp.jpg","images":[{"url":"https://i.imgur.com/RmR8CMv.jpg"},{"url":"https://i.imgur.com/Q1bLhEc.jpg"},{"url":"https://i.imgur.com/Jqr0v0f.jpg"}],"name":"Galko","seriesId":28},{"id":172,"image":"https://i.imgur.com/5NZHbxz.jpg","images":[],"name":"Garou \\"Human Monster, Hero Hunter\\"","seriesId":65},{"id":320,"image":"https://i.imgur.com/DqBZn5N.jpg","images":[],"name":"Genjirou Tanigaki","seriesId":18},{"id":170,"image":"https://i.imgur.com/W1ZNDId.jpg","images":[],"name":"Genos \\"Demon Cyborg\\"","seriesId":65},{"id":104,"image":"https://i.imgur.com/NvQbfSp.jpg","images":[],"name":"Gilgamesh \\"Archer\\"","seriesId":46},{"id":49,"image":"https://i.imgur.com/ve04nur.jpg","images":[],"name":"Ginko","seriesId":25},{"id":247,"image":"https://i.imgur.com/hWSsGLc.jpg","images":[],"name":"Gintoki \\"Yorozuya, Shiroyasha\\" Sakata","seriesId":93},{"id":196,"image":"https://i.imgur.com/onYbGUZ.jpg","images":[],"name":"Giorno \\"Haruno Shiobana\\" Giovanna","seriesId":81},{"id":166,"image":"https://i.imgur.com/pwZW0hb.jpg","images":[],"name":"Goemon Ishikawa XIII","seriesId":63},{"id":175,"image":"https://i.imgur.com/0jliWHP.jpg","images":[],"name":"Gokuu \\"Kakarot\\" Son","seriesId":67},{"id":295,"image":"https://i.imgur.com/G6uYdfm.jpg","images":[],"name":"Gon Freecss","seriesId":97},{"id":44,"image":"https://i.imgur.com/iu1DDFW.jpg","images":[],"name":"Gray Fullbuster","seriesId":24},{"id":50,"image":"https://i.imgur.com/sGnruvT.jpg","images":[],"name":"Griffith \\"The White Hawk, The Hawk of Light, Femto\\"","seriesId":5},{"id":56,"image":"https://i.imgur.com/cm3PAyu.jpg","images":[],"name":"Grimmjow Jaegerjaquez","seriesId":22},{"id":307,"image":"https://i.imgur.com/7kdKKdI.jpg","images":[],"name":"Guido Mista","seriesId":81},{"id":8,"image":"https://i.imgur.com/0c3p5VT.jpg","images":[],"name":"Guts","seriesId":5},{"id":276,"image":"https://i.imgur.com/FwIAk8v.jpg","images":[],"name":"Guy Might","seriesId":23},{"id":71,"image":"https://i.imgur.com/v9yrumq.jpg","images":[],"name":"Hachiman Hikigaya","seriesId":31},{"id":400,"image":"https://i.imgur.com/4kYIneM.jpg","images":[],"name":"Hagoromo \\"Yamabuki Otome\\" Gitsune","seriesId":125},{"id":419,"image":"https://i.imgur.com/wluoGWl.jpg","images":[{"url":"https://i.imgur.com/FZLoxPX.jpg"},{"url":"https://i.imgur.com/4DptjMB.jpg"},{"url":"https://i.imgur.com/IFrmX3V.jpg"},{"url":"https://i.imgur.com/HP7jR3E.jpg"},{"url":"https://i.imgur.com/qskRlSf.jpg"}],"name":"Hamyuts Meseta","seriesId":134},{"id":31,"image":"https://i.imgur.com/RAIKFsj.jpg","images":[],"name":"Hancock \\"Snake Princess, Pirate Empress\\" Boa","seriesId":21},{"id":425,"image":"https://i.imgur.com/nmEJtME.jpg","images":[],"name":"Hange Zoë","seriesId":136},{"id":208,"image":"https://i.imgur.com/0IyCaRf.jpg","images":[],"name":"Hanma Baki","seriesId":82},{"id":219,"image":"https://i.imgur.com/R1bbIau.jpg","images":[],"name":"Haruya Iinuma","seriesId":68},{"id":361,"image":"https://i.imgur.com/n7N32pI.jpg","images":[],"name":"Haruya Shiki","seriesId":54},{"id":225,"image":"https://i.imgur.com/MnY3Grz.jpg","images":[],"name":"Hayato \\"Umibouzu, Falcon\\" Ijuuin","seriesId":44},{"id":409,"image":"https://i.imgur.com/Q0Yg0NV.jpg","images":[],"name":"Hazuki \\"Zuki\\" Kakio","seriesId":127},{"id":235,"image":"https://i.imgur.com/dy6u27S.jpg","images":[],"name":"Heiji Hattori","seriesId":89},{"id":428,"image":"https://i.imgur.com/aNsgBX9.jpg","images":[{"url":"https://i.imgur.com/Tc7aRFJ.jpg"},{"url":"https://i.imgur.com/H3WIu4G.jpg"}],"name":"Hestia","seriesId":137},{"id":61,"image":"https://i.imgur.com/dP46RFX.jpg","images":[],"name":"Hinata Hyuuga","seriesId":23},{"id":222,"image":"https://i.imgur.com/ateQ05x.jpg","images":[],"name":"Hinomaru \\"Onimaru\\" Ushio","seriesId":86},{"id":435,"image":"https://i.imgur.com/Ktx4VoU.jpg","images":[],"name":"Hiroshi Agasa","seriesId":89},{"id":187,"image":"https://i.imgur.com/L1DUkTR.jpg","images":[],"name":"Hiroshi Uchiyamada","seriesId":73},{"id":450,"image":"https://i.imgur.com/NF3ouDz.jpg","images":[],"name":"Hiroto \\"Tristan Taylor\\" Honda","seriesId":142},{"id":297,"image":"https://i.imgur.com/R5CduHe.jpg","images":[],"name":"Hisoka Morow","seriesId":97},{"id":255,"image":"https://i.imgur.com/PTkjcB8.jpg","images":[],"name":"Hitagi Senjougahara","seriesId":13},{"id":227,"image":"https://i.imgur.com/UomYvLI.jpg","images":[],"name":"Hitomi Kisugi","seriesId":45},{"id":373,"image":"https://i.imgur.com/zQLavH8.jpg","images":[],"name":"Hiyori Iki","seriesId":6},{"id":346,"image":"https://i.imgur.com/iCicM4f.jpg","images":[],"name":"Hyakkimaru","seriesId":111},{"id":319,"image":"https://i.imgur.com/XlfJDob.jpg","images":[],"name":"Hyakunosuke Ogata","seriesId":18},{"id":32,"image":"https://i.imgur.com/8ymura9.jpg","images":[{"url":"https://i.imgur.com/Q6ta2PR.jpg"},{"url":"https://i.imgur.com/MReySFd.jpg"}],"name":"Ichigo Kurosaki","seriesId":22},{"id":279,"image":"https://i.imgur.com/GcajvU4.jpg","images":[],"name":"Ikkaku Madarame","seriesId":22},{"id":132,"image":"https://i.imgur.com/1Y7KMWx.jpg","images":[],"name":"Ikumi \\"Nikumi\\" Mito","seriesId":55},{"id":273,"image":"https://i.imgur.com/j4EnT68.jpg","images":[],"name":"Ino Yamanaka","seriesId":23},{"id":366,"image":"https://i.imgur.com/OjbBuKE.jpg","images":[],"name":"Ira \\"Impenetrable Shield\\" Gamagoori","seriesId":4},{"id":19,"image":"https://i.imgur.com/WWplfTf.jpg","images":[],"name":"Isaac \\"Zack\\" Foster","seriesId":14},{"id":299,"image":"https://i.imgur.com/8tn6nIB.jpg","images":[],"name":"Isaac Netero","seriesId":97},{"id":368,"image":"https://i.imgur.com/Nf7yrHP.jpg","images":[],"name":"Isabella \\"Mama\\"","seriesId":117},{"id":39,"image":"https://i.imgur.com/Jn2gjSG.jpg","images":[],"name":"Itachi Uchiha","seriesId":23},{"id":360,"image":"https://i.imgur.com/clWjo6M.jpg","images":[],"name":"Izaya Orihara","seriesId":54},{"id":133,"image":"https://i.imgur.com/63g47OM.jpg","images":[],"name":"Izuku \\"Deku\\" Midoriya","seriesId":56},{"id":223,"image":"https://i.imgur.com/I4D5gAG.jpg","images":[],"name":"Jean-Pierre Polnareff","seriesId":50},{"id":264,"image":"https://i.imgur.com/MiQGTzZ.jpg","images":[],"name":"Jinbe \\"Knight of the Sea\\"","seriesId":21},{"id":177,"image":"https://i.imgur.com/6Ki0P5l.jpg","images":[],"name":"Jinzouningen 18-gou \\"Android 18\\"","seriesId":67},{"id":271,"image":"https://i.imgur.com/L44kNfE.jpg","images":[],"name":"Jiraiya \\"Ero-Sennin\\"","seriesId":23},{"id":110,"image":"https://i.imgur.com/WCBl6QP.jpg","images":[],"name":"Jonathan Joestar","seriesId":48},{"id":9,"image":"https://i.imgur.com/0jtjOQD.jpg","images":[],"name":"Joseph Joestar","seriesId":49},{"id":116,"image":"https://i.imgur.com/MXzmXGm.jpg","images":[],"name":"Jousuke Higashikata","seriesId":51},{"id":114,"image":"https://i.imgur.com/jabv6uq.jpg","images":[],"name":"Joutarou Kuujou","seriesId":50},{"id":46,"image":"https://i.imgur.com/q8plpgT.jpg","images":[],"name":"Juvia Lockser","seriesId":24},{"id":2,"image":"https://i.imgur.com/3xdrczj.jpg","images":[{"url":"https://i.imgur.com/QPjrW3P.jpg"},{"url":"https://i.imgur.com/XGaESzm.jpg"},{"url":"https://i.imgur.com/AWT4Pt1.jpg"},{"url":"https://i.imgur.com/KZ708BF.jpg"}],"name":"Kagari Ayaka","seriesId":2},{"id":249,"image":"https://i.imgur.com/D5vkxWL.jpg","images":[],"name":"Kagura","seriesId":93},{"id":356,"image":"https://i.imgur.com/3MdEsOG.jpg","images":[],"name":"Kaguya \\"Berserk\\" Yamai","seriesId":110},{"id":64,"image":"https://i.imgur.com/pKacs1x.jpg","images":[],"name":"Kaguya Ootsutsuki","seriesId":23},{"id":348,"image":"https://i.imgur.com/PDmwb9r.jpg","images":[],"name":"Kaito \\"Phantom Thief, Kaitou Kid\\" Kuroba","seriesId":113},{"id":269,"image":"https://i.imgur.com/OcxAvmD.jpg","images":[],"name":"Kakashi Hatake","seriesId":23},{"id":12,"image":"https://i.imgur.com/GWa7Hj4.jpg","images":[],"name":"Kanako Sumiyoshi","seriesId":8},{"id":226,"image":"https://i.imgur.com/cPigUeu.jpg","images":[],"name":"Kaori Makimura","seriesId":44},{"id":210,"image":"https://i.imgur.com/ZCbveY8.jpg","images":[],"name":"Kaoru Hanayama","seriesId":82},{"id":135,"image":"https://i.imgur.com/XnMfgVg.jpg","images":[],"name":"Katsuki \\"Kacchan\\" Bakugou","seriesId":56},{"id":449,"image":"https://i.imgur.com/NZR9ROt.jpg","images":[],"name":"Katsuya \\"Joey Wheeler\\" Jounouchi","seriesId":142},{"id":174,"image":"https://i.imgur.com/cFI3zad.jpg","images":[],"name":"Kazehana \\"Sekirei No.03\\"","seriesId":66},{"id":374,"image":"https://i.imgur.com/1gAaEjJ.jpg","images":[],"name":"Kazuma","seriesId":6},{"id":211,"image":"https://i.imgur.com/Z0rpSyc.jpg","images":[],"name":"Ken \\"Eyepatch\\" Kaneki","seriesId":83},{"id":35,"image":"https://i.imgur.com/iYknvHR.jpg","images":[],"name":"Kenpachi Zaraki","seriesId":22},{"id":232,"image":"https://i.imgur.com/0vNRMMV.jpg","images":[],"name":"Kenshirou","seriesId":88},{"id":349,"image":"https://i.imgur.com/vDZnGqK.jpg","images":[],"name":"Keroro","seriesId":114},{"id":294,"image":"https://i.imgur.com/4JmugEi.jpg","images":[],"name":"Killua Zoldyck","seriesId":97},{"id":185,"image":"https://i.imgur.com/0iPCFn6.jpg","images":[],"name":"Killy","seriesId":71},{"id":341,"image":"https://i.imgur.com/hK1bnq8.jpg","images":[],"name":"Kirari Momobami","seriesId":32},{"id":6,"image":"https://i.imgur.com/xRWCpHW.jpg","images":[],"name":"Kiryuin Ragyo","seriesId":4},{"id":5,"image":"https://i.imgur.com/hwpbszY.jpg","images":[{"url":"https://i.imgur.com/v9YOjiZ.jpg"},{"url":"https://i.imgur.com/pzYcmPJ.jpg"},{"url":"https://i.imgur.com/tZvmrJv.jpg"},{"url":"https://i.imgur.com/y7QmZng.jpg"},{"url":"https://i.imgur.com/lqdssuQ.jpg"}],"name":"Kiryuin Satsuki","seriesId":4},{"id":285,"image":"https://i.imgur.com/mf2uuMY.jpg","images":[],"name":"Kisame Hoshigaki","seriesId":23},{"id":203,"image":"https://i.imgur.com/eAxPyWu.jpg","images":[],"name":"Kisuke Urahara","seriesId":22},{"id":441,"image":"https://i.imgur.com/khgTgRO.jpg","images":[],"name":"Kitarou","seriesId":141},{"id":198,"image":"https://i.imgur.com/UVIo3hD.jpg","images":[],"name":"Kiyoshi Fujino","seriesId":3},{"id":84,"image":"https://i.imgur.com/vvBiqFS.jpg","images":[],"name":"Kobayashi","seriesId":20},{"id":433,"image":"https://i.imgur.com/XVGwshW.jpg","images":[],"name":"Kogorou \\"Nemuri no Kogorou\\" Mouri","seriesId":89},{"id":139,"image":"https://i.imgur.com/pohKwyn.jpg","images":[],"name":"Kojirou \\"Ganryuu\\" Sasaki","seriesId":57},{"id":420,"image":"https://i.imgur.com/8TpUVBm.jpg","images":[],"name":"Kongou","seriesId":135},{"id":358,"image":"https://i.imgur.com/Dbq4GKe.jpg","images":[],"name":"Kotori \\"Efreet, Flame Spirit\\" Itsuka","seriesId":110},{"id":167,"image":"https://i.imgur.com/bM2aET8.jpg","images":[],"name":"Kouichi \\"Pops\\" Zenigata","seriesId":63},{"id":305,"image":"https://i.imgur.com/blXFasm.jpg","images":[],"name":"Kouichi Hirose","seriesId":51},{"id":257,"image":"https://i.imgur.com/mPdZtzA.jpg","images":[],"name":"Koyomi Araragi","seriesId":13},{"id":375,"image":"https://i.imgur.com/l0Gr6Cs.jpg","images":[],"name":"Kuraha","seriesId":6},{"id":296,"image":"https://i.imgur.com/esbowcj.jpg","images":[],"name":"Kurapika","seriesId":97},{"id":197,"image":"https://i.imgur.com/RA6TxGD.jpg","images":[],"name":"Kurihara \\"Chairman\\"","seriesId":3},{"id":4,"image":"https://i.imgur.com/3BeLYsy.jpg","images":[],"name":"Kurihara Mari","seriesId":3},{"id":77,"image":"https://i.imgur.com/VxtuCuB.jpg","images":[],"name":"Kurisu Makise","seriesId":34},{"id":93,"image":"https://i.imgur.com/dF7kUpB.jpg","images":[],"name":"Kurohime","seriesId":41},{"id":394,"image":"https://i.imgur.com/FHX1U9S.jpg","images":[],"name":"Kurumi","seriesId":122},{"id":342,"image":"https://i.imgur.com/MGZjegs.jpg","images":[],"name":"Kurumi \\"Nightmare\\" Tokisaki","seriesId":110},{"id":381,"image":"https://i.imgur.com/lmjK7Y6.jpg","images":[],"name":"Kyoko Himuro","seriesId":119},{"id":416,"image":"https://i.imgur.com/izwl4HG.jpg","images":[],"name":"Kyousuke \\"Major\\" Hyoubu","seriesId":131},{"id":253,"image":"https://i.imgur.com/oq7z5Yl.jpg","images":[],"name":"Kyuubei Yagyuu","seriesId":93},{"id":415,"image":"https://i.imgur.com/VNiKAqs.jpg","images":[],"name":"L \\"Ryuga Hideki, Ryuzaki\\" Lawliet","seriesId":130},{"id":300,"image":"https://i.imgur.com/qkn5heu.jpg","images":[],"name":"Ladd Russo","seriesId":98},{"id":14,"image":"https://i.imgur.com/CyDl29X.jpg","images":[],"name":"Lady Armaroid","seriesId":10},{"id":207,"image":"https://i.imgur.com/siXJVfe.jpg","images":[],"name":"Last Order \\"Misaka clone No. 20001\\"","seriesId":40},{"id":68,"image":"https://i.imgur.com/cmfpuFA.jpg","images":[],"name":"Law Trafalgar","seriesId":21},{"id":220,"image":"https://i.imgur.com/ZsUgLd4.jpg","images":[],"name":"Legoshi","seriesId":85},{"id":73,"image":"https://i.imgur.com/1aJblNF.jpg","images":[],"name":"Lelouch \\"Lelouch vi Britannia, Zero\\" Lamperouge","seriesId":33},{"id":308,"image":"https://i.imgur.com/ZW0fFYj.jpg","images":[],"name":"Leone Abbacchio","seriesId":81},{"id":424,"image":"https://i.imgur.com/tb9wMXW.jpg","images":[],"name":"Levi","seriesId":136},{"id":414,"image":"https://i.imgur.com/bUI4lcv.jpg","images":[],"name":"Light \\"Kira\\" Yagami","seriesId":130},{"id":113,"image":"https://i.imgur.com/LpoT47F.jpg","images":[],"name":"Lisa Lisa","seriesId":49},{"id":221,"image":"https://i.imgur.com/2svaNjA.jpg","images":[],"name":"Louis","seriesId":85},{"id":45,"image":"https://i.imgur.com/WLzBUod.jpg","images":[],"name":"Lucy Heartfilia","seriesId":24},{"id":30,"image":"https://i.imgur.com/FxZH28x.jpg","images":[],"name":"Luffy \\"Mugiwara, Straw Hat, Lucy\\" Monkey D.","seriesId":21},{"id":15,"image":"https://i.imgur.com/NhTB1af.jpg","images":[],"name":"Macrophage","seriesId":11},{"id":63,"image":"https://i.imgur.com/MC2c5Dy.jpg","images":[],"name":"Madara Uchiha","seriesId":23},{"id":452,"image":"https://i.imgur.com/m0vjk8B.jpg","images":[],"name":"Mai \\"Mai Valentine\\" Kujaku","seriesId":142},{"id":192,"image":"https://i.imgur.com/7l1hlJQ.jpg","images":[],"name":"Maki \\"Air Master\\" Aikawa","seriesId":77},{"id":365,"image":"https://i.imgur.com/VtFJBmG.jpg","images":[],"name":"Mako Mankanshoku","seriesId":4},{"id":120,"image":"https://i.imgur.com/GGMxuKj.jpg","images":[],"name":"Makoto \\"Queen\\" Niijima","seriesId":52},{"id":443,"image":"https://i.imgur.com/llxTL5u.png","images":[],"name":"Mana Inuyama","seriesId":141},{"id":24,"image":"https://i.imgur.com/8Qo8x37.jpg","images":[],"name":"Manji \\"Hundred Man Killer\\"","seriesId":19},{"id":384,"image":"https://i.imgur.com/utyA4J3.jpg","images":[],"name":"Masaru Saiga","seriesId":120},{"id":7,"image":"https://i.imgur.com/Gq8ulAp.jpg","images":[],"name":"Matoi Ryuuko","seriesId":4},{"id":57,"image":"https://i.imgur.com/oA9jhln.jpg","images":[],"name":"Mayuri Kurotsuchi","seriesId":22},{"id":417,"image":"https://i.imgur.com/dYKOb6Y.jpg","images":[],"name":"Megumi Amano","seriesId":132},{"id":129,"image":"https://i.imgur.com/xFt99fI.jpg","images":[],"name":"Megumi Tadokoro","seriesId":55},{"id":407,"image":"https://i.imgur.com/Rgp3d44.jpg","images":[],"name":"Mei Momozono","seriesId":127},{"id":88,"image":"https://i.imgur.com/AU1UI2J.jpg","images":[],"name":"Mephisto \\"Johann Faust V, Samael\\" Pheles","seriesId":38},{"id":298,"image":"https://i.imgur.com/1gmerBa.jpg","images":[],"name":"Meruem","seriesId":97},{"id":122,"image":"https://i.imgur.com/IDRmCOH.jpg","images":[],"name":"Miia","seriesId":53},{"id":426,"image":"https://i.imgur.com/BgiyWVq.jpg","images":[],"name":"Mikasa Ackerman","seriesId":136},{"id":355,"image":"https://i.imgur.com/hfnFtzN.jpg","images":[],"name":"Miku \\"Diva\\" Izayoi","seriesId":110},{"id":21,"image":"https://i.imgur.com/9MEHWVh.jpg","images":[],"name":"Miku Okazaki","seriesId":16},{"id":378,"image":"https://i.imgur.com/3rBsK3O.jpg","images":[],"name":"Minoru \\"Grape Juice\\" Mineta","seriesId":56},{"id":231,"image":"https://i.imgur.com/EAF3HTk.jpg","images":[],"name":"Mitsuki","seriesId":87},{"id":352,"image":"https://i.imgur.com/1mfOyEe.jpg","images":[],"name":"Miyako \\"Mya-nee\\" Hoshino","seriesId":116},{"id":364,"image":"https://i.imgur.com/ECpb6o5.jpg","images":[],"name":"Mizuki \\"Awakusu\'s Red Demon\\" Akabayashi","seriesId":54},{"id":216,"image":"https://i.imgur.com/FD5A21Z.jpg","images":[],"name":"Momo \\"Creati\\" Yaoyorozu","seriesId":56},{"id":16,"image":"https://i.imgur.com/u7va11D.jpg","images":[],"name":"Momonga \\"Ainz Ooal Gown, Momon\\"","seriesId":12},{"id":469,"image":"https://i.imgur.com/7toDpex.jpg","images":[{"url":"https://i.imgur.com/H1VnewC.jpg"},{"url":"https://i.imgur.com/BKGic5j.jpg"},{"url":"https://i.imgur.com/weChkn7.jpg"}],"name":"Motoko \\"Major\\" Kusanagi","seriesId":144},{"id":138,"image":"https://i.imgur.com/QPrBt63.jpg","images":[],"name":"Musashi \\"Shinmen Takezo\\" Miyamoto","seriesId":57},{"id":25,"image":"https://i.imgur.com/UnJgkzi.jpg","images":[],"name":"Nagate Tanikaze","seriesId":20},{"id":26,"image":"https://i.imgur.com/36agf7L.jpg","images":[],"name":"Nami","seriesId":21},{"id":186,"image":"https://i.imgur.com/KHvoxge.jpg","images":[],"name":"Nanashi","seriesId":72},{"id":101,"image":"https://i.imgur.com/51YLncW.jpg","images":[],"name":"Naoto Shirogane","seriesId":47},{"id":309,"image":"https://i.imgur.com/HL9owgg.jpg","images":[],"name":"Narancia Ghirga","seriesId":81},{"id":382,"image":"https://i.imgur.com/iq7yjHt.jpg","images":[],"name":"Narumi Katou","seriesId":120},{"id":37,"image":"https://i.imgur.com/yEIuwDP.jpg","images":[],"name":"Naruto Uzumaki","seriesId":23},{"id":42,"image":"https://i.imgur.com/Cw32b1u.jpg","images":[],"name":"Natsu \\"Salamander\\" Dragneel","seriesId":24},{"id":357,"image":"https://i.imgur.com/gdEFASN.jpg","images":[],"name":"Natsumi \\"Witch\\"","seriesId":110},{"id":442,"image":"https://i.imgur.com/MVhdnkz.jpg","images":[],"name":"Neko Musume","seriesId":141},{"id":201,"image":"https://i.imgur.com/CSdrcAw.png","images":[],"name":"Nelliel \\"Nel\\" Tu Oderschvank","seriesId":22},{"id":445,"image":"https://i.imgur.com/APNY1Uw.jpg","images":[],"name":"Nezumi Otoko \\"Rat Man\\"","seriesId":141},{"id":278,"image":"https://i.imgur.com/bfOIzDt.jpg","images":[],"name":"Nnoitra Gilga","seriesId":22},{"id":333,"image":"https://i.imgur.com/3ytqsHt.jpg","images":[],"name":"Noelle Silva","seriesId":107},{"id":371,"image":"https://i.imgur.com/JtnYjUO.jpg","images":[],"name":"Norman","seriesId":117},{"id":182,"image":"https://i.imgur.com/k7PCjRX.jpg","images":[],"name":"Oboro Shintou","seriesId":69},{"id":217,"image":"https://i.imgur.com/ZQeR5J6.jpg","images":[],"name":"Ochako \\"Uravity\\" Uraraka","seriesId":56},{"id":306,"image":"https://i.imgur.com/DLFBY33.jpg","images":[],"name":"Okuyasu Nijimura","seriesId":51},{"id":379,"image":"https://i.imgur.com/IciCRp5.jpg","images":[],"name":"Onee-san","seriesId":118},{"id":58,"image":"https://i.imgur.com/9XX98Ws.jpg","images":[],"name":"Orihime \\"Hime\\" Inoue","seriesId":22},{"id":316,"image":"https://i.imgur.com/18w47UP.jpg","images":[],"name":"Oriko \\"Okko\\" Seki","seriesId":102},{"id":40,"image":"https://i.imgur.com/gMJAWdX.jpg","images":[],"name":"Orochimaru","seriesId":23},{"id":243,"image":"https://i.imgur.com/JUI1f55.jpg","images":[],"name":"Osamu Dazai","seriesId":92},{"id":272,"image":"https://i.imgur.com/eAe33o1.jpg","images":[],"name":"Pain","seriesId":23},{"id":310,"image":"https://i.imgur.com/GbNUmPg.jpg","images":[],"name":"Pannacotta Fugo","seriesId":81},{"id":453,"image":"https://i.imgur.com/DkqIVNf.jpg","images":[],"name":"Pegasus J. \\"Maximillion Pegasus\\" Crawford","seriesId":142},{"id":123,"image":"https://i.imgur.com/JTFVkrW.jpg","images":[],"name":"Rachnera Arachnera","seriesId":53},{"id":237,"image":"https://i.imgur.com/YVczrgu.jpg","images":[],"name":"Ran Mouri","seriesId":89},{"id":290,"image":"https://i.imgur.com/LmQIe7p.jpg","images":[],"name":"Rangiku Matsumoto","seriesId":22},{"id":181,"image":"https://i.imgur.com/BFaZ00J.jpg","images":[],"name":"Ranna Himawari","seriesId":68},{"id":233,"image":"https://i.imgur.com/TR3QKAc.jpg","images":[],"name":"Raou \\"Ken-Oh\\"","seriesId":88},{"id":370,"image":"https://i.imgur.com/qdxTgwm.jpg","images":[],"name":"Ray","seriesId":117},{"id":214,"image":"https://i.imgur.com/b4YmASG.jpg","images":[],"name":"Rei Miyamoto","seriesId":84},{"id":284,"image":"https://i.imgur.com/kxMaAut.jpg","images":[],"name":"Reiju Vinsmoke","seriesId":21},{"id":345,"image":"https://i.imgur.com/PHG4ONE.jpg","images":[],"name":"Reine Murasame","seriesId":110},{"id":189,"image":"https://i.imgur.com/tDlZzmA.jpg","images":[],"name":"Reinhard von Lohengramm","seriesId":74},{"id":118,"image":"https://i.imgur.com/sefKw1G.jpg","images":[],"name":"Ren \\"Joker\\" Amamiya","seriesId":52},{"id":205,"image":"https://i.imgur.com/LXeLtMD.jpg","images":[],"name":"Renji Abarai","seriesId":22},{"id":280,"image":"https://i.imgur.com/SoaWWM7.jpg","images":[],"name":"Retsu Unohana","seriesId":22},{"id":80,"image":"https://i.imgur.com/qeKX5ch.jpg","images":[],"name":"Rias \\"Buchou\\" Gremory","seriesId":36},{"id":412,"image":"https://i.imgur.com/JKQ1p3H.jpg","images":[],"name":"Rider \\"Bewitching Black Serpent\\"","seriesId":46},{"id":399,"image":"https://i.imgur.com/sV8mZ3y.jpg","images":[],"name":"Rikuo \\"Third Supreme Commander\\" Nura","seriesId":125},{"id":86,"image":"https://i.imgur.com/7poPX27.jpg","images":[],"name":"Rin Okumura","seriesId":38},{"id":107,"image":"https://i.imgur.com/svnAM7A.jpg","images":[],"name":"Rin Toosaka","seriesId":46},{"id":76,"image":"https://i.imgur.com/8Gh4i7f.jpg","images":[],"name":"Rintarou \\"Hououin Kyouma\\" Okabe","seriesId":34},{"id":393,"image":"https://i.imgur.com/GGobBIb.jpg","images":[],"name":"Risotto Nero","seriesId":81},{"id":111,"image":"https://i.imgur.com/bpL03Rf.jpg","images":[],"name":"Robert E. O. Speedwagon","seriesId":48},{"id":27,"image":"https://i.imgur.com/ZWm3fNe.jpg","images":[],"name":"Robin \\"Devil Child, Miss All Sunday\\" Nico","seriesId":21},{"id":275,"image":"https://i.imgur.com/ESLXXHc.jpg","images":[],"name":"Rock Lee","seriesId":23},{"id":112,"image":"https://i.imgur.com/Y77wH2s.jpg","images":[],"name":"Rohan Kishibe","seriesId":51},{"id":304,"image":"https://i.imgur.com/AJSbm05.jpg","images":[],"name":"Rudol von Stroheim","seriesId":49},{"id":97,"image":"https://i.imgur.com/ruZx9r0.jpg","images":[],"name":"Rui Kisugi","seriesId":45},{"id":202,"image":"https://i.imgur.com/QyKhidE.jpg","images":[],"name":"Rukia Kuchiki","seriesId":22},{"id":418,"image":"https://i.imgur.com/3NIapbS.jpg","images":[],"name":"Rushuna \\"Grenadier\\" Tendou","seriesId":133},{"id":131,"image":"https://i.imgur.com/evKIEPa.jpg","images":[],"name":"Ryou Kurokiba","seriesId":55},{"id":96,"image":"https://i.imgur.com/puenEw7.jpg","images":[],"name":"Ryou Saeba","seriesId":44},{"id":390,"image":"https://i.imgur.com/4TMHMJR.jpg","images":[],"name":"Ryouta Kise","seriesId":121},{"id":245,"image":"https://i.imgur.com/YO2N4SZ.jpg","images":[],"name":"Ryuunosuke Akutagawa","seriesId":92},{"id":108,"image":"https://i.imgur.com/xeHzTjY.jpg","images":[],"name":"Saber","seriesId":46},{"id":121,"image":"https://i.imgur.com/2tAenZe.jpg","images":[],"name":"Sae Niijima","seriesId":52},{"id":98,"image":"https://i.imgur.com/JRcU8Uv.jpg","images":[],"name":"Saeko \\"Sayaka\\" Nogami","seriesId":44},{"id":213,"image":"https://i.imgur.com/vJ6KRFZ.jpg","images":[],"name":"Saeko Busujima","seriesId":84},{"id":274,"image":"https://i.imgur.com/reBVgAI.jpg","images":[],"name":"Sai","seriesId":23},{"id":23,"image":"https://i.imgur.com/FT9mPXZ.jpg","images":[],"name":"Saichi \\"The Immortal\\" Sugimoto","seriesId":18},{"id":169,"image":"https://i.imgur.com/2NKSoPw.jpg","images":[],"name":"Saitama","seriesId":65},{"id":238,"image":"https://i.imgur.com/UVCmNXA.jpg","images":[],"name":"Sakamichi Onoda","seriesId":90},{"id":60,"image":"https://i.imgur.com/tMYttYN.jpg","images":[],"name":"Sakura Haruno","seriesId":23},{"id":28,"image":"https://i.imgur.com/nZrP7st.jpg","images":[],"name":"Sanji \\"Black Leg, Mr. Prince\\"","seriesId":21},{"id":230,"image":"https://i.imgur.com/hhMMvZP.jpg","images":[],"name":"Sarada Uchiha","seriesId":87},{"id":38,"image":"https://i.imgur.com/7VMhgCo.jpg","images":[],"name":"Sasuke Uchiha","seriesId":23},{"id":20,"image":"https://i.imgur.com/683Ik90.jpg","images":[],"name":"Satellizer \\"The Untouchable Queen\\" el Bridget","seriesId":15},{"id":215,"image":"https://i.imgur.com/N4zvxx9.jpg","images":[],"name":"Saya Takagi","seriesId":84},{"id":190,"image":"https://i.imgur.com/Xcy3Wra.jpg","images":[],"name":"Seigen Irako","seriesId":75},{"id":389,"image":"https://i.imgur.com/SlbZkXG.jpg","images":[],"name":"Seijuurou Akashi","seriesId":121},{"id":55,"image":"https://i.imgur.com/XTXriWl.jpg","images":[{"url":"https://i.imgur.com/ieVxXSc.jpg"},{"url":"https://i.imgur.com/0rMkx6L.jpg"},{"url":"https://i.imgur.com/MHyKgkl.jpg"}],"name":"Selvaria \\"War Witch\\" Bles","seriesId":30},{"id":323,"image":"https://i.imgur.com/3u7SSaa.jpg","images":[],"name":"Senpai","seriesId":105},{"id":91,"image":"https://i.imgur.com/yyv8gx6.jpg","images":[],"name":"Sesshoumaru","seriesId":39},{"id":448,"image":"https://i.imgur.com/jQbwo6G.jpg","images":[],"name":"Seto Kaiba","seriesId":142},{"id":1,"image":"https://i.imgur.com/jLwdACg.jpg","images":[],"name":"Shidare Hotaru","seriesId":1},{"id":90,"image":"https://i.imgur.com/AfWIvkA.jpg","images":[],"name":"Shiemi Moriyama","seriesId":38},{"id":281,"image":"https://i.imgur.com/cmy9kXy.jpg","images":[],"name":"Shigekuni Yamamoto-Genryuusai","seriesId":22},{"id":351,"image":"https://i.imgur.com/qwZSoqC.jpg","images":[],"name":"Shigeo \\"Mob, White T-Poison\\" Kageyama","seriesId":115},{"id":270,"image":"https://i.imgur.com/gxJc3KU.jpg","images":[],"name":"Shikamaru Nara","seriesId":23},{"id":82,"image":"https://i.imgur.com/h7wwEf3.jpg","images":[],"name":"Shimei Ryomou","seriesId":37},{"id":18,"image":"https://i.imgur.com/YymnlMK.jpg","images":[],"name":"Shinobu \\"Kiss-shot Acerola-orion Heart-under-blade\\" Oshino","seriesId":13},{"id":248,"image":"https://i.imgur.com/ZvG5yjG.jpg","images":[],"name":"Shinpachi Shimura","seriesId":93},{"id":359,"image":"https://i.imgur.com/0RAp5aj.jpg","images":[],"name":"Shinra Kishitani","seriesId":54},{"id":251,"image":"https://i.imgur.com/jpmyrWy.jpg","images":[],"name":"Shinsuke Takasugi","seriesId":93},{"id":391,"image":"https://i.imgur.com/HD8JQAR.jpg","images":[],"name":"Shintarou Midorima","seriesId":121},{"id":291,"image":"https://i.imgur.com/leCZLm7.jpg","images":[],"name":"Shirahoshi \\"Mermaid Princess\\"","seriesId":21},{"id":3,"image":"https://i.imgur.com/5hLv07N.jpg","images":[{"url":"https://i.imgur.com/9xMWW31.jpg"},{"url":"https://i.imgur.com/WnJqE9A.jpg"},{"url":"https://i.imgur.com/lMnNnw5.jpg"},{"url":"https://i.imgur.com/wzhVveq.jpg"},{"url":"https://i.imgur.com/i5exzn6.jpg"},{"url":"https://i.imgur.com/3OpScm1.jpg"}],"name":"Shiraki Meiko","seriesId":3},{"id":383,"image":"https://i.imgur.com/UXv009I.jpg","images":[],"name":"Shirogane \\"Eleonore\\" Saiga","seriesId":120},{"id":105,"image":"https://i.imgur.com/9KkKcUh.jpg","images":[],"name":"Shirou Emiya","seriesId":46},{"id":70,"image":"https://i.imgur.com/hliVzd8.jpg","images":[],"name":"Shizuka Hiratsuka","seriesId":31},{"id":125,"image":"https://i.imgur.com/pK38qJo.jpg","images":[],"name":"Shizuo Heiwajima","seriesId":54},{"id":240,"image":"https://i.imgur.com/ZjiuM8S.jpg","images":[],"name":"Shoukichi \\"Speed Star of Naniwa\\" Naruko","seriesId":90},{"id":303,"image":"https://i.imgur.com/n8Fyvsv.jpg","images":[],"name":"Shouko Komi","seriesId":99},{"id":184,"image":"https://i.imgur.com/LNPTAhG.jpg","images":[],"name":"Shouko Nishimiya","seriesId":70},{"id":218,"image":"https://i.imgur.com/FMm1PaW.jpg","images":[],"name":"Shouta \\"Eraserhead\\" Aizawa","seriesId":56},{"id":134,"image":"https://i.imgur.com/w1QiOSd.jpg","images":[],"name":"Shouto Todoroki","seriesId":56},{"id":206,"image":"https://i.imgur.com/VQnJ8rr.jpg","images":[],"name":"Shunsui Kyouraku","seriesId":22},{"id":241,"image":"https://i.imgur.com/hGqJGoH.jpg","images":[],"name":"Shunsuke Imaizumi","seriesId":90},{"id":89,"image":"https://i.imgur.com/Jq8AJzx.jpg","images":[],"name":"Shura Kirigakure","seriesId":38},{"id":267,"image":"https://i.imgur.com/EvVvd3T.jpg","images":[],"name":"Smoker","seriesId":21},{"id":59,"image":"https://i.imgur.com/o5bF7Ln.jpg","images":[],"name":"Soi Fon","seriesId":22},{"id":127,"image":"https://i.imgur.com/Tr26Qg3.jpg","images":[],"name":"Souma Yukihira","seriesId":55},{"id":33,"image":"https://i.imgur.com/mGMQOO7.jpg","images":[],"name":"Sousuke Aizen","seriesId":22},{"id":367,"image":"https://i.imgur.com/7DkteiF.jpg","images":[],"name":"Tabira","seriesId":112},{"id":387,"image":"https://i.imgur.com/uBmJAeK.jpg","images":[],"name":"Taiga Kagami","seriesId":121},{"id":421,"image":"https://i.imgur.com/SpzTUIQ.jpg","images":[],"name":"Takao \\"Tsundere Heavy Cruiser\\"","seriesId":135},{"id":199,"image":"https://i.imgur.com/qarKA1x.jpg","images":[],"name":"Takehito \\"Gakuto\\" Morokuzu","seriesId":3},{"id":52,"image":"https://i.imgur.com/dSu2COt.jpg","images":[],"name":"Takizawa Kyouko","seriesId":27},{"id":380,"image":"https://i.imgur.com/CvlsEwg.jpg","images":[],"name":"Tamama","seriesId":114},{"id":431,"image":"https://i.imgur.com/jlQFPj8.jpg","images":[],"name":"Tanya \\"Devil of the Rhine\\" Degurechaff","seriesId":140},{"id":268,"image":"https://i.imgur.com/REFr9AE.jpg","images":[],"name":"Tashigi","seriesId":21},{"id":286,"image":"https://i.imgur.com/cy2676p.jpg","images":[],"name":"Temari","seriesId":23},{"id":79,"image":"https://i.imgur.com/Bjtv3M1.jpg","images":[],"name":"Teresa \\"Teresa of the Faint Smile\\"","seriesId":35},{"id":386,"image":"https://i.imgur.com/Rd1NSoF.jpg","images":[],"name":"Tetsuya \\"The Phantom Sixth Member\\" Kuroko","seriesId":121},{"id":339,"image":"https://i.imgur.com/BkELoMN.jpg","images":[],"name":"Thorfinn \\"Karlsefni\\"","seriesId":109},{"id":277,"image":"https://i.imgur.com/GzmiBJk.jpg","images":[],"name":"Tier \\"Halibel\\" Harribel","seriesId":22},{"id":354,"image":"https://i.imgur.com/ngbDYOI.jpg","images":[],"name":"Tooka \\"Princess\\" Yatogami","seriesId":110},{"id":193,"image":"https://i.imgur.com/pJua8m2.jpg","images":[],"name":"Toua Tokuchi","seriesId":78},{"id":250,"image":"https://i.imgur.com/m5SUSXK.jpg","images":[],"name":"Toushirou \\"Demonic Vice-Commander\\" Hijikata","seriesId":93},{"id":289,"image":"https://i.imgur.com/XIokRk1.jpg","images":[],"name":"Toushirou Hitsugaya","seriesId":22},{"id":256,"image":"https://i.imgur.com/ZquHO9Q.jpg","images":[],"name":"Tsubasa Hanekawa","seriesId":13},{"id":173,"image":"https://i.imgur.com/iK9aAZR.jpg","images":[],"name":"Tsukiumi \\"Sekirei No.09\\"","seriesId":66},{"id":254,"image":"https://i.imgur.com/vZCdvXZ.jpg","images":[],"name":"Tsukuyo","seriesId":93},{"id":85,"image":"https://i.imgur.com/nwCkpSm.jpg","images":[],"name":"Tsumugi Shiraui","seriesId":20},{"id":41,"image":"https://i.imgur.com/Q2YwBrF.jpg","images":[],"name":"Tsunade","seriesId":23},{"id":136,"image":"https://i.imgur.com/Nmfr19d.jpg","images":[],"name":"Tsuyu \\"Froppy\\" Asui","seriesId":56},{"id":34,"image":"https://i.imgur.com/IMF965c.jpg","images":[],"name":"Ulquiorra Cifer","seriesId":22},{"id":83,"image":"https://i.imgur.com/F9zny9g.jpg","images":[],"name":"Unchou Kan\'u","seriesId":37},{"id":282,"image":"https://i.imgur.com/lhkW9tM.jpg","images":[],"name":"Uryuu Ishida","seriesId":22},{"id":69,"image":"https://i.imgur.com/BanaH0D.jpg","images":[],"name":"Usopp \\"Sogeking, GodUsopp\\"","seriesId":21},{"id":179,"image":"https://i.imgur.com/pcVU6Bv.jpg","images":[],"name":"Vados","seriesId":67},{"id":329,"image":"https://i.imgur.com/9YQMpQ7.jpg","images":[],"name":"Vanessa \\"The Drunken Witch\\" Enoteca","seriesId":107},{"id":176,"image":"https://i.imgur.com/bDytUuu.jpg","images":[],"name":"Vegeta \\"Prince of All Saiyans\\"","seriesId":67},{"id":236,"image":"https://i.imgur.com/UQonx1k.jpg","images":[],"name":"Vermouth \\"Sharon Vineyard\\"","seriesId":89},{"id":432,"image":"https://i.imgur.com/u3ZcVhe.jpg","images":[],"name":"Viktoriya Ivanovna \\"Visha\\" Serebryakova","seriesId":140},{"id":75,"image":"https://i.imgur.com/VvFClEJ.jpg","images":[],"name":"Villetta \\"Chigusa\\" Nu","seriesId":33},{"id":395,"image":"https://i.imgur.com/AduEgP3.jpg","images":[],"name":"Vinegar Doppio","seriesId":81},{"id":191,"image":"https://i.imgur.com/LyZQeYb.jpg","images":[],"name":"Violet Evergarden","seriesId":76},{"id":312,"image":"https://i.imgur.com/wB9bLpl.png","images":[],"name":"Vlad \\"Dracula\\" Tepes","seriesId":101},{"id":362,"image":"https://i.imgur.com/v5MgUGH.jpg","images":[],"name":"Vorona \\"Ворона\\"","seriesId":54},{"id":334,"image":"https://i.imgur.com/xGMqJvu.png","images":[],"name":"Witch Queen","seriesId":107},{"id":200,"image":"https://i.imgur.com/dyqaVVG.jpg","images":[],"name":"Xin \\"Shin Li\\" Li","seriesId":9},{"id":330,"image":"https://i.imgur.com/h43z20q.jpg","images":[],"name":"Yami \\"Destruction God\\" Sukehiro","seriesId":107},{"id":446,"image":"https://i.imgur.com/jVw5GhS.jpg","images":[],"name":"Yami Yuugi \\"Pharaoh\\"","seriesId":142},{"id":13,"image":"https://i.imgur.com/5VuqVkF.jpg","images":[],"name":"Yang \\"Mountain King, Yo Tan Wa\\" Duanhe","seriesId":9},{"id":48,"image":"https://i.imgur.com/NBxXvev.jpg","images":[],"name":"Yato","seriesId":6},{"id":408,"image":"https://i.imgur.com/ic7gpET.jpg","images":[],"name":"Yayoi Kuribayashi","seriesId":127},{"id":311,"image":"https://i.imgur.com/lxEtINv.jpg","images":[],"name":"Yo \\"Crying Freeman, Long Taiyáng\\" Hinomura","seriesId":100},{"id":36,"image":"https://i.imgur.com/81rMmeY.jpg","images":[],"name":"Yoruichi Shihouin","seriesId":22},{"id":115,"image":"https://i.imgur.com/1OUzKib.jpg","images":[{"url":"https://i.imgur.com/jtQyqo3.jpg"},{"url":"https://i.imgur.com/isTCbMN.jpg"},{"url":"https://i.imgur.com/cGQPmEu.jpg"}],"name":"Yoshikage \\"Kosaku Kawajiri\\" Kira","seriesId":51},{"id":343,"image":"https://i.imgur.com/UwsIB6o.jpg","images":[],"name":"Yoshino \\"Hermit\\"","seriesId":110},{"id":318,"image":"https://i.imgur.com/nQShgWs.jpg","images":[],"name":"Yoshitake Shiraishi","seriesId":18},{"id":117,"image":"https://i.imgur.com/XHwWe3p.jpg","images":[],"name":"Yukako Yamagishi","seriesId":51},{"id":100,"image":"https://i.imgur.com/ORPpKHN.jpg","images":[],"name":"Yukiko Amagi","seriesId":47},{"id":372,"image":"https://i.imgur.com/HOMAxnK.jpg","images":[],"name":"Yukine","seriesId":6},{"id":87,"image":"https://i.imgur.com/bqTmZO2.jpg","images":[],"name":"Yukio Okumura","seriesId":38},{"id":72,"image":"https://i.imgur.com/IBWsvOe.jpg","images":[],"name":"Yumeko Jabami","seriesId":32},{"id":332,"image":"https://i.imgur.com/jT35Y0F.jpg","images":[],"name":"Yuno \\"Yuno Kurosurii\\"","seriesId":107},{"id":102,"image":"https://i.imgur.com/OOV7Alc.jpg","images":[],"name":"Yuu Narukami","seriesId":47},{"id":447,"image":"https://i.imgur.com/ZoLycAy.jpg","images":[],"name":"Yuugi \\"King Of Games\\" Mutou","seriesId":142},{"id":327,"image":"https://i.imgur.com/hE4AyEB.jpg","images":[],"name":"Yuuko \\"The Dimensional Witch\\" Ichihara","seriesId":106},{"id":183,"image":"https://i.imgur.com/rEdk2va.jpg","images":[],"name":"Yuuna Yunohana","seriesId":69},{"id":344,"image":"https://i.imgur.com/O04cLrL.jpg","images":[],"name":"Yuzuru \\"Berserk\\" Yamai","seriesId":110},{"id":29,"image":"https://i.imgur.com/MjzJZjG.jpg","images":[],"name":"Zoro \\"Pirate Hunter, Marimo\\" Roronoa","seriesId":21}]'),Be=JSON.parse('[{"id":1,"name":"Dagashi Kashi"},{"id":2,"name":"Witchcraft Works"},{"id":3,"name":"Prison School"},{"id":4,"name":"Kill La Kill"},{"id":5,"name":"Berserk"},{"id":6,"name":"Noragami"},{"id":8,"name":"Nyan Koi!"},{"id":9,"name":"Kingdom"},{"id":10,"name":"Cobra"},{"id":11,"name":"Hataraku Saibou"},{"id":12,"name":"Overlord"},{"id":13,"name":"Monogatari"},{"id":14,"name":"Satsuriku no Tenshi"},{"id":15,"name":"Freezing"},{"id":16,"name":"Gal Gohan"},{"id":17,"name":"Bayonetta"},{"id":18,"name":"Golden Kamuy"},{"id":19,"name":"Blade of the Immortal"},{"id":20,"name":"Sidonia no Kishi"},{"id":21,"name":"One Piece"},{"id":22,"name":"Bleach"},{"id":23,"name":"Naruto"},{"id":24,"name":"Fairy Tail"},{"id":25,"name":"Mushishi"},{"id":27,"name":"Bijin Onna Joushi Takizawa-san"},{"id":28,"name":"Oshiete! Galko-chan"},{"id":29,"name":"Suisei no Gargantia"},{"id":30,"name":"Senjou no Valkyria"},{"id":31,"name":"Yahari Ore no Seishun Love Comedy wa Machigatteiru."},{"id":32,"name":"Kakegurui"},{"id":33,"name":"Code Geass: Hangyaku no Lelouch"},{"id":34,"name":"Steins;Gate"},{"id":35,"name":"Claymore"},{"id":36,"name":"High School DxD"},{"id":37,"name":"Ikkitousen"},{"id":38,"name":"Ao no Exorcist"},{"id":39,"name":"InuYasha"},{"id":40,"name":"Toaru Majutsu no Index"},{"id":41,"name":"Mahou Tsukai Kurohime"},{"id":42,"name":"Hitoribocchi no ○○ Seikatsu"},{"id":44,"name":"City Hunter"},{"id":45,"name":"Cat\'s Eye"},{"id":46,"name":"Fate/stay night"},{"id":47,"name":"Persona 4"},{"id":48,"name":"JoJo no Kimyou na Bouken Part 1: Phantom Blood"},{"id":49,"name":"JoJo no Kimyou na Bouken Part 2: Sentou Chuuryuu"},{"id":50,"name":"JoJo no Kimyou na Bouken Part 3: Stardust Crusaders"},{"id":51,"name":"JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai"},{"id":52,"name":"Persona 5"},{"id":53,"name":"Monster Musume no Iru Nichijou"},{"id":54,"name":"Durarara!!"},{"id":55,"name":"Shokugeki no Souma"},{"id":56,"name":"Boku no Hero Academia"},{"id":57,"name":"Vagabond"},{"id":63,"name":"Lupin III"},{"id":65,"name":"One Punch Man"},{"id":66,"name":"Sekirei"},{"id":67,"name":"Dragon Ball"},{"id":68,"name":"Rokudou no Onna-tachi"},{"id":69,"name":"Yuragi-sou no Yuuna-san"},{"id":70,"name":"Koe no Katachi"},{"id":71,"name":"Blame!"},{"id":72,"name":"Stranger: Mukou Hadan"},{"id":73,"name":"Great Teacher Onizuka"},{"id":74,"name":"Ginga Eiyuu Densetsu"},{"id":75,"name":"Shigurui"},{"id":76,"name":"Violet Evergarden"},{"id":77,"name":"Air Master"},{"id":78,"name":"One Outs"},{"id":79,"name":"Keyman: The Hand of Judgement"},{"id":81,"name":"JoJo no Kimyou na Bouken Part 5: Ougon no Kaze"},{"id":82,"name":"Grappler Baki"},{"id":83,"name":"Tokyo Ghoul"},{"id":84,"name":"Highschool of the Dead"},{"id":85,"name":"Beastars"},{"id":86,"name":"Hinomaruzumou"},{"id":87,"name":"Boruto"},{"id":88,"name":"Hokuto no Ken"},{"id":89,"name":"Detective Conan"},{"id":90,"name":"Yowamushi Pedal"},{"id":91,"name":"Golgo 13"},{"id":92,"name":"Bungo Stray Dogs"},{"id":93,"name":"Gintama"},{"id":97,"name":"Hunter x Hunter"},{"id":98,"name":"Baccano"},{"id":99,"name":"Komi-san wa, Comyushou desu."},{"id":100,"name":"Crying Freeman"},{"id":101,"name":"Castlevania"},{"id":102,"name":"Wakaokami wa Shougakusei!"},{"id":103,"name":"Yancha Gal no Anjou-san"},{"id":104,"name":"Beelzebub-jou no Okinimesu mama."},{"id":105,"name":"Tejina-senpai"},{"id":106,"name":"xxxHolic"},{"id":107,"name":"Black Clover"},{"id":109,"name":"Vinland Saga"},{"id":110,"name":"Date A Live"},{"id":111,"name":"Dororo"},{"id":112,"name":"Mahou Shoujo Tokushusen Asuka"},{"id":113,"name":"Magic Kaito"},{"id":114,"name":"Keroro Gunsou"},{"id":115,"name":"Mob Psycho 100"},{"id":116,"name":"Watashi ni Tenshi ga Maiorita!"},{"id":117,"name":"Yakusoku no Neverland"},{"id":118,"name":"Danshi Koukousei wo Yashinaitai Onee-san no Hanashi"},{"id":119,"name":"Dear Boys"},{"id":120,"name":"Karakuri Circus"},{"id":121,"name":"Kuroko no Basket"},{"id":122,"name":"Koutetsu Tenshi Kurumi"},{"id":125,"name":"Nurarihyon no Mago"},{"id":127,"name":"Mouse"},{"id":129,"name":"Emma"},{"id":130,"name":"Death Note"},{"id":131,"name":"Zettai Karen Children"},{"id":132,"name":"Amano Megumi wa Sukidarake!"},{"id":133,"name":"Grenadier"},{"id":134,"name":"Tatakau Shisho: The Book of Bantorra"},{"id":135,"name":"Aoki Hagane no Arpeggio: Ars Nova"},{"id":136,"name":"Shingeki no Kyojin"},{"id":137,"name":"Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka"},{"id":139,"name":"Dosanko Gyaru wa Namaramenkoi"},{"id":140,"name":"Youjo Senki"},{"id":141,"name":"Gegege no Kitarou (2018)"},{"id":142,"name":"Yu-Gi-Oh! Duel Monsters"},{"id":144,"name":"Koukaku Kidoutai"}]'),He=te`
  .glk-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .glk-control--checkbox {
    display: flex;
    min-height: 35px;
    max-height: 45px;
    flex: 1;
    margin-top: 10px;
  }
  .glk-control__label {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 0 1;
    padding: 2px;
    padding-left: 25px;
    cursor: pointer;
  }
  .glk-checkbox {
    /* For screenreader */
    border: 0;
    /*clip: rect(0 0 0 0);*/
    height: 1px;
    margin: -1px;
    overflow: visible;
    padding: 0;
    position: absolute;
    top: 1px;
    left: 8px;
    width: 1px;
    -webkit-appearance: none;
    /* For screenreader */
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .glk-checkbox::before,
  .glk-checkbox:checked::before {
    color: #000;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 10;
  }
  .glk-checkbox::before {
    content: '\u2610';
    font-size: 2em;
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  ,
  .glk-checkbox:disabled::before {
    content: '\u274c';
    color: #666;
    cursor: default;
  }
  .glk-checkbox:checked::before {
    content: '\u2611';
    color: #0f0;
  }
`,De=te`
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
    cursor: pointer;
  }
  .has-float-label--select::after {
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
`;var Ee=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};function ze(e){const t=Be.find((t=>t.id===e));return t?t.name:"(Unknown)"}let Ge=class extends se{constructor(){super(...arguments),this.noDeck=!1,this.characters=[],this.deckId="",this.deckName="",this.deckCharacterIds=[],this.search="",this.showOnlySelected=!1,this.feedback=""}static get styles(){return[De,He,...he,te`
        .decks__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .deck-operations {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
        }

        ${ue(le.XXS,te`
            .deck-operations {
              flex-direction: column;
            }
            .deck-operations > * {
              width: 100%;
            }
          `)}

        .button-block {
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
        }

        .glk-control--stretch {
          flex: 1;
          margin-right: 10px;
        }

        .feedback {
          display: flex;
          min-height: 2rem;
          color: var(--danger-colour);
          margin: 5px 0;
          white-space: pre-line;
        }

        .view {
          padding: 5px 0;
          margin: 5px 0;
        }
        .flex-spaced {
          display: flex;
          justify-content: space-between;
        }
        .search-info {
          font-size: 0.8rem;
          line-height: 1.25;
        }
        .glk-control--narrow {
          flex: unset;
          margin: 0;
        }
      `]}firstUpdated(){this.unsub=me.subscribe((()=>this.initDeckBuilder())),this.initDeckBuilder(),this.characters=Ke.map((e=>({...e,seriesName:ze(e.seriesId)})))}disconnectedCallback(){this.unsub&&this.unsub()}render(){const e=this.search.toLowerCase(),t=this.characters.filter((t=>(t.name.toLowerCase().includes(e)||t.seriesName.toLowerCase().includes(e))&&(!this.showOnlySelected||this.showOnlySelected&&this.deckCharacterIds.includes(t.id))));return this.noDeck?H`
        <div>
          <h2>We couldn't find what you were looking for.</h2>
          <div>
            <glk-router-link .href=${me.base}
              >Return to Home</glk-router-link
            >
          </div>
        </div>
      `:H`
      <div class="decks">
        <div class="deck-operations">
          <div class="glk-control glk-control--stretch has-float-label">
            <label for="deckName">Deck Name</label>
            <input
              id="deckName"
              name="deckName"
              class="glk-control__input"
              placeholder="Enter a name for the deck"
              type="text"
              .value=${this.deckName}
              @input=${this.onUserInput}
            />
          </div>

          <div>
            <div class="button-block">
              <glk-button
                primary
                ?disabled=${!1}
                @press=${this.handleSave}
              >
                Save
              </glk-button>
              <glk-button primary ?disabled=${!1} @press=${this.onDone}>
                Done
              </glk-button>
            </div>

            <div class="button-block">
              <glk-button
                danger
                ?disabled=${!this.deckId}
                @press=${this.dropDeck}
              >
                Delete Deck
              </glk-button>
            </div>
          </div>
        </div>

        <div class="feedback">${this.feedback}</div>

        <div class="view">
          <div class="glk-control has-float-label">
            <label for="search">Search</label>
            <input
              id="search"
              name="search"
              class="glk-control__input"
              placeholder="Enter a character or series name to filter the character list"
              type="text"
              .value=${this.search}
              @input=${this.onUserInput}
            />
          </div>
          <div class="flex-spaced">
            <div class="search-info">
              <div>
                Showing ${t.length} of ${Ke.length}
              </div>
              <div>${this.deckCharacterIds.length} selected</div>
            </div>
            <div class="glk-control glk-control--checkbox glk-control--narrow">
              <label for="showOnlySelected" class="glk-control__label">
                <input
                  type="checkbox"
                  id="showOnlySelected"
                  class="glk-checkbox"
                  ?checked=${this.showOnlySelected}
                  @change=${this.onToggle}
                />
                Limited to selected only
              </label>
            </div>
          </div>
          <ul class="grid grid--standard">
            ${Ne(t,(e=>e.id),(e=>{const t=(0,Se.Z)(`${e.name}_${e.id}`),i=[e.image,...e.images.map((e=>e.url))],s=this.deckCharacterIds.includes(e.id);return H`
                  <li
                    key=${e.id}
                    class=${ae("character-item",s&&"character-item--selected")}
                  >
                    <glk-image-cycler
                      .images=${i}
                      .alt=${e.name}
                    ></glk-image-cycler>
                    <div class="glk-control glk-control--checkbox">
                      <label for="${t}" class="glk-control__label">
                        <input
                          type="checkbox"
                          id="${t}"
                          class="glk-checkbox"
                          ?checked=${s}
                          @change=${()=>this.onToggleCharacter(e.id)}
                        />
                        ${e.name}
                      </label>
                    </div>
                  </li>
                `}))}
          </ul>
        </div>
      </div>
    `}initDeckBuilder(){const e=be.getKey("decks"),t=window.location.search,i=(0,Ie.Z)(t).deck;if(!i)return;const s=e.find((e=>e.id===i));s?(this.deckId=i,this.deckName=s.name,this.deckCharacterIds=s.characterIds):this.noDeck=!0}onToggle(e){const t=e.target;this.showOnlySelected=t.checked}onUserInput(e){const t=e.target;this[t.name]=t.value}onToggleCharacter(e){const t=new Set(this.deckCharacterIds);t.delete(e)||t.add(e),this.deckCharacterIds=Array.from(t)}dropDeck(){let e=be.getKey("decks");e=e.filter((e=>e.id!==this.deckId)),be.set({decks:e}),me.push("/decks")}validateForm(){const e=[];return this.deckName&&this.deckName.trim()||e.push("Deck name is required."),this.deckCharacterIds.length||e.push("Deck requires at least one character."),{success:0===e.length,errorMessages:e}}handleSave(){const e=this.validateForm();if(!e.success)return void(this.feedback=e.errorMessages.join("\n"));this.feedback="";const t=!this.deckId,i=this.deckId||(0,we.default)(),s={characterIds:this.deckCharacterIds,id:i,name:this.deckName};let a=be.getKey("decks");a=t?[...a,s]:a.map((e=>e.id===i?s:e)),be.set({decks:a}),t&&me.push(`/decks-builder?deck=${i}`)}onDone(){me.push("/decks")}};Ee([Z({type:Boolean})],Ge.prototype,"noDeck",void 0),Ee([Z({type:Array})],Ge.prototype,"characters",void 0),Ee([Z({type:String})],Ge.prototype,"deckId",void 0),Ee([Z({type:String})],Ge.prototype,"deckName",void 0),Ee([Z({type:Array})],Ge.prototype,"deckCharacterIds",void 0),Ee([Z({type:String})],Ge.prototype,"search",void 0),Ee([Z({type:Boolean})],Ge.prototype,"showOnlySelected",void 0),Ee([Z({type:String})],Ge.prototype,"feedback",void 0),Ee([Z({type:Function})],Ge.prototype,"unsub",void 0),Ge=Ee([J("glk-decks-builder")],Ge);const Ue=te`
  /* Shared sizing */
  :host,
  .card,
  .card__axis,
  .card__front,
  .card__back,
  .card__image {
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
`;var Le=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Fe=class extends se{constructor(){super(...arguments),this.image=""}static get styles(){return te`
      :host {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        box-sizing: border-box;
      }

      .card-back__pattern {
        width: 100%;
        height: 100%;
        border-radius: 0.3rem;
      }
    `}render(){return H`
      <style>
        .card-back__pattern {
          background: url(${this.image});
        }
      </style>
      <div class="card-back__pattern"></div>
    `}};Le([Z({type:String})],Fe.prototype,"image",void 0),Fe=Le([J("glk-card-back")],Fe);var Ve=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Ye=class extends se{constructor(){super(...arguments),this.isFaceUp=!1,this.isHidden=!1,this.shouldHide=!0,this.cardId="",this.name="",this.image="",this.cardBack=""}static get styles(){return Ue}firstUpdated(){const e=ke.get();this.shouldHide=e.hideOnMatch}render(){const e=this.isHidden&&this.shouldHide,t=this.isHidden&&!this.shouldHide;if(e)return H``;const i=this.isFaceUp||t,s=this.image?this.image.slice(0).replace(/\.jpg/,"t.jpg"):null;return H`
      <button
        type="button"
        class="card card--clickable ${i?"card--touched":""}"
        @click=${i?null:this.handleClick}
      >
        <div class="card__axis">
          <div class="card__front">
            <img
              src=${s}
              alt=${this.name}
              class="card__image"
            />
          </div>
          <div class="card__back">
            <glk-card-back .image=${this.cardBack}></glk-card-back>
          </div>
        </div>
      </button>
    `}handleClick(){const e=new CustomEvent("flipped",{bubbles:!0,composed:!0,detail:{cardId:this.cardId}});this.dispatchEvent(e)}};Ve([Z({type:Boolean})],Ye.prototype,"isFaceUp",void 0),Ve([Z({type:Boolean})],Ye.prototype,"isHidden",void 0),Ve([Z({type:Boolean})],Ye.prototype,"shouldHide",void 0),Ve([Z({type:String})],Ye.prototype,"cardId",void 0),Ve([Z({type:String})],Ye.prototype,"name",void 0),Ve([Z({type:String})],Ye.prototype,"image",void 0),Ve([Z({type:String})],Ye.prototype,"cardBack",void 0),Ye=Ve([J("glk-card")],Ye);const Je=te`
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
`,We="#fdd87f",Ze="#51c2ea",Xe="#2a87ca";var qe=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Qe=class extends se{constructor(){super(...arguments),this.cards=[],this.selected=[],this.removed=[],this.hasMatch=!1,this.cardBack="",this.columns=0}static get styles(){return[te`
        :host {
          display: grid;
          grid-template-columns: repeat(auto-fit, var(--card-width));
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

        ${ue(le.XXS,te`
            :host {
              grid-gap: 6px;
              padding: 4px;

              min-width: 250px;
              max-width: 98%;
              margin-top: 0px;
            }
          `)}
      `,Je]}firstUpdated(){const e=ke.get();this.cardBack=function(e){const t=function(e){switch(e){case fe.argyle:return H`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="76">
          <g transform="scale(1 1.5)">
            <rect width="99" height="99" fill=${We} />
            <rect
              width="34"
              height="34"
              transform="translate(25 0) rotate(45)"
              fill=${"#999900"}
            />
            <rect
              width="99"
              height="1"
              transform="rotate(45)"
              fill=${Ze}
            />
            <rect
              width="99"
              height="1"
              transform="translate(0 50) rotate(-45)"
              fill=${Ze}
            />
          </g>
        </svg>
      `;case fe.shippo:return H`
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
          <rect width="60" height="60" fill=${We} />
          <circle cx="30" cy="30" r="30" fill=${Ze} />
          <path
            d="M0 30 A30 30 35 0 0 30 0 A30 30 300 0 0 60 30 A30 30 35 0 0 30 60 A30 30 250 0 0 0 30Z"
            fill=${We}
          />
        </svg>
      `;case fe.honeyCombs:return H`
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="100">
          <rect width="56" height="100" fill=${We} />
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke=${Ze}
            stroke-width="2"
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke=${Xe}
            stroke-width="2"
          />
        </svg>
      `;case fe.chevrons:return H`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="48"
          height="30"
        >
          <defs>
            <rect
              id="r"
              width="24"
              height="15"
              fill=${We}
              stroke-width="2.5"
              stroke=${Ze}
            />
            <g id="p">
              <use xlink:href="#r" />
              <use y="15" xlink:href="#r" />
              <use y="30" xlink:href="#r" />
              <use y="45" xlink:href="#r" />
            </g>
          </defs>
          <use xlink:href="#p" transform="translate(0 -25) skewY(40)" />
          <use xlink:href="#p" transform="translate(24 0) skewY(-40)" />
        </svg>
      `;case fe.blueprint:return H`
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
          <rect width="30" height="30" fill=${We} />
          <g fill=${Xe}>
            <rect width="100" height="1" y="15" />
            <rect width="100" height="1" y="30" />
            <rect width="100" height="1" y="45" />
            <rect width="100" height="1" y="60" />
            <rect width="1" height="100" x="15" />
            <rect width="1" height="100" x="30" />
            <rect width="1" height="100" x="45" />
            <rect width="1" height="100" x="60" />
          </g>
          <rect
            width="30"
            height="30"
            fill="none"
            stroke-width="2"
            stroke=${Ze}
          />
        </svg>
      `;case fe.subtleDots:default:return H`
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5">
          <rect width="5" height="5" fill=${We} />
          <rect width="1" height="1" fill=${Ze} />
        </svg>
      `}}(e);return function(e){const t=document.createElement("div");return t.innerHTML=function(e){const{strings:t,values:i}=e,s=t.length;let a="";for(let e=0;e<s;e++)a+=t[e]+(i[e]||"");return a}(e),"data:image/svg+xml;base64,"+window.btoa(t.innerHTML)}(t)}(e.cardBack)}updated(e){e.has("cards")&&this.updateGridColumns(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",(()=>this.updateGridColumns(this)))}disconnectedCallback(){window.removeEventListener("resize",(()=>this.updateGridColumns(this))),super.disconnectedCallback()}updateGridColumns(e){const t=.95*(function(e){return e.getBoundingClientRect().width}(e)-32),i=this.cards.length,s=Math.floor(t/function(){const e=window.innerWidth;return e>767?103:e>=479&&e<=767?83:64}());this.columns=function(e,t){let i=t;for(;e%i!=0;)i-=1;return i}(i,s)}render(){const e=2===this.selected.length;return H`
      <style>
        :host {
          grid-template-columns: repeat(
            ${this.columns},
            var(--card-width)
          ) !important;
        }
      </style>
      ${e?H`
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
      ${this.cards.map((e=>{const t=this.removed.includes(e.id),i=this.selected.includes(e.id),s=[i?"glk-card--flipped":"",i&&this.hasMatch?"glk-card--matched":""].join(" ");return H`
          <glk-card
            class="${s}"
            cardId=${e.id}
            name=${e.name}
            .image=${e.image}
            .cardBack=${this.cardBack}
            ?isFaceUp=${i}
            ?isHidden=${t}
          ></glk-card>
        `}))}
    `}};qe([Z({type:Array})],Qe.prototype,"cards",void 0),qe([Z({type:Array})],Qe.prototype,"selected",void 0),qe([Z({type:Array})],Qe.prototype,"removed",void 0),qe([Z({type:Boolean})],Qe.prototype,"hasMatch",void 0),qe([Z({type:String})],Qe.prototype,"cardBack",void 0),qe([Z({type:Number})],Qe.prototype,"columns",void 0),Qe=qe([J("glk-card-grid")],Qe);var et=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let tt=class extends se{constructor(){super(...arguments),this.streak=0,this.uppedStreak=!1,this.timer=0}static get styles(){return te`
      :host {
        padding: 5px;
      }

      .text-effect {
        overflow: hidden;
        position: relative;
        -webkit-filter: contrast(110%) brightness(190%);
        filter: contrast(110%) brightness(190%);
      }

      .neon {
        position: relative;
        background: white;
        color: transparent;
      }
      .neon::before,
      .neon::after {
        content: attr(data-text);
        color: var(--primary-colour);
        -webkit-filter: blur(0.02em);
        filter: blur(0.02em);
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
      }
      .neon::after {
        mix-blend-mode: difference;
      }
      .text-effect--off .neon::before,
      .text-effect--off .neon::after {
        color: var(--disabled-colour);
      }

      .gradient,
      .spotlight {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
        z-index: 10;
      }

      .gradient {
        background: linear-gradient(
          45deg,
          var(--secondary-colour),
          var(--primary-colour)
        );
        mix-blend-mode: color;
      }
      .text-effect--off .gradient {
        background: var(--disabled-colour);
      }

      .spotlight {
        -webkit-animation: light 5s infinite linear;
        animation: light 5s infinite linear;
        background: radial-gradient(circle, white, transparent 25%) 0 0/25% 25%,
          radial-gradient(circle, white, black 25%) 50% 50%/12.5% 12.5%;
        top: -100%;
        left: -100%;
        mix-blend-mode: color-dodge;
      }
      .text-effect--off .spotlight {
        animation-play-state: paused;
      }

      @keyframes light {
        100% {
          -webkit-transform: translate3d(50%, 50%, 0);
          transform: translate3d(50%, 50%, 0);
        }
      }

      /* Sizing */
      .neon {
        font-weight: bolder;
        font-size: 2.25rem;
        font-family: var(--font-family);
        text-transform: uppercase;
        text-align: center;
        margin: 0;
      }
      .text-effect--off .neon {
        font-size: 1.5rem;
      }

      .pulse {
        animation: pulse 1s 1 linear;
      }

      @keyframes pulse {
        from {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }

        50% {
          -webkit-transform: scale3d(1.05, 1.05, 1.05);
          transform: scale3d(1.05, 1.05, 1.05);
        }

        to {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
      }
    `}updated(e){const t=e.has("streak"),i=e.get("streak")||0;t&&this.streak>i&&(this.uppedStreak=!0,this.setPulse())}render(){const e=this.streak>0,t=`${this.streak}x streak`;return H`
      <div class="text-effect ${e?"":"text-effect--off"}">
        <div
          class="neon ${this.uppedStreak?"pulse":""}"
          data-text="${t}"
        >
          ${t}
        </div>
        <div class="gradient"></div>
        <div class="spotlight"></div>
      </div>
    `}setPulse(){clearTimeout(this.timer),this.timer=window.setTimeout((()=>{this.uppedStreak=!1}),1250)}};et([Z({type:Number})],tt.prototype,"streak",void 0),et([Z({type:Boolean})],tt.prototype,"uppedStreak",void 0),et([Z({type:Number})],tt.prototype,"timer",void 0),tt=et([J("glk-streak")],tt);var it=i(149);function st(e){const t=[e.image,...e.images.map((e=>e.url))];return(0,it.Z)(t).pop()}const at=e=>({characterId:e.id,id:(0,we.default)(),image:e.image,name:e.name});var rt=i(889);const ot=new class{constructor(){this.interval=0,this.paused=!0,this.gameTime=0,this.callback=()=>null}get time(){return this.formatTime(this.gameTime)}get isPaused(){return this.paused}formatTime(e){const t=Math.floor(e/60),i=e%60;return`${(0,rt.default)(t,2)}m ${(0,rt.default)(i,2)}s`}subscribe(e){return this.callback=e,this.reset(),this.start(),()=>{const e=this.gameTime;return this.callback=()=>null,this.reset(),e}}start(){this.paused=!1,clearInterval(this.interval),this.interval=window.setInterval((()=>{this.gameTime+=1,this.callback(this.time)}),1e3)}stop(){this.paused=!0,clearInterval(this.interval)}reset(){this.stop(),this.gameTime=0}};var nt=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const mt=te`
  .game-bar {
    --even-game-bar-width: 0px;
    flex-direction: column;
  }
  .game-bar > * {
    margin: 5px 0;
  }
  .game-bar__data {
    justify-content: center;
  }
  .content__streak {
    justify-content: space-between;
    width: 100%;
  }
  .flex-spacer {
    display: none;
  }

  .for-small {
    display: block;
  }
  .for-large {
    display: none;
  }
`;let dt=class extends se{constructor(){super(...arguments),this.turns=[],this.timer=0,this.inGame=!1,this.timeElapsed="00m 00s",this.gameSummary=[],this.hasMatch=!1,this.pairs=[],this.choices=[],this.cards=[],this.unsubTimer=()=>0}static get styles(){return te`
      :host {
        --even-game-bar-width: 211px;
        --game-bar-height: 56px;

        display: flex;
        flex-direction: column;
        min-height: calc(100vh - var(--action-bar-height));
      }

      .game-bar {
        display: flex;
        align-items: center;
        min-height: var(--game-bar-height);
        padding: 5px;
        box-sizing: border-box;
      }
      .game-bar__data {
        display: flex;
        min-width: var(--even-game-bar-width);
        margin: 2px 0;
      }

      .content {
        display: flex;
        flex-direction: column;
        min-height: calc(
          100vh - var(--action-bar-height) - var(--game-bar-height)
        );
      }
      .content__streak {
        display: flex;
        justify-content: flex-end;
        min-height: 46px;
        min-width: var(--even-game-bar-width);
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

      .for-large {
        display: block;
      }
      .for-small {
        display: none;
      }

      /* Responsive */
      ${ue(le.XS,mt)}
      ${ue(le.XXS,mt)}
    `}render(){const e=this.pairs.length,t=e?e/2:0,i=this.gameSummary.length>0,s=this.getCurrentStreak(),a=e=>H`
      <div class="${e}">
        <div class="game-bar__data">${this.timeElapsed}</div>
        <div class="game-bar__data">${t} Pairs found</div>
      </div>
    `;return H`
      <div class="game-bar">
        ${this.inGame?a("for-large"):""}
        <div class="flex-spacer"></div>
        <div>
          <glk-button primary ?disabled=${this.inGame} @press="${this.newGame}"
            >New game</glk-button
          >
          <glk-button
            primary
            ?disabled=${!this.inGame}
            @press="${()=>this.endGame(!1)}"
            >Quit game</glk-button
          >
        </div>
        <div class="flex-spacer"></div>
        ${this.inGame?H`
              <div class="content__streak">
                ${a("for-small")}
                <glk-streak streak=${s}></glk-streak>
              </div>
            `:""}
      </div>

      <div class="content">
        ${i?H`
              <div class="summary">
                ${this.gameSummary.map((e=>H` <div>${e}</div> `))}
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
    `}newGame(){this.gameSummary=[],this.turns=[],this.choices=[],this.cards=function(){const e=be.getKey("decks"),t=ke.get();let i=Ke;const s=e.find((e=>e.id===t.deckId));s&&(i=Ke.filter((e=>s.characterIds.includes(e.id))));const a=(0,it.Z)(i).slice(0,t.startingPairs).map((e=>({...e,image:st(e)}))),r=[...a,...a];return(0,it.Z)(r).map(at)}(),this.inGame=!0,this.unsubTimer=ot.subscribe((e=>this.timeElapsed=e))}endGame(e=!1){const t=this.unsubTimer(),i=this.pairs.length/2,s=this.turns.length,a=this.getLongestStreak();if(this.inGame=!1,this.pairs=[],this.turns=[],this.choices=this.cards.map((e=>e.id)),this.gameSummary=[e?"You found all the pairs!":"Quitters always quit.",`${i} pairs found in ${ot.formatTime(t)}`,`${a} was your longest match streak`],e){const e=be.getKey("history");be.set({history:[...e,{datetime:(new Date).getTime(),longestStreak:a,pairs:i,timeElapsed:t,turns:s}]})}}onCardFlip(e){if(2===this.choices.length)return;const t=e.detail;!this.choices.includes(t.cardId)&&(this.choices=[...this.choices,t.cardId],this.checkCards())}checkCards(){if(2!==this.choices.length)return;const e=this.choices.map((e=>{const t=this.cards.find((t=>t.id===e));if(t)return t.characterId})),t=this.turns.slice(0),i=1===new Set(e).size;this.hasMatch=i,clearTimeout(this.timer),this.timer=window.setTimeout((()=>{i&&(this.pairs=[...this.pairs,...this.choices]),this.turns=[...t,{number:t.length+1,isMatch:i}],this.choices=[],this.hasMatch=!1,this.checkGameState()}),1500)}checkGameState(){this.cards.length===this.pairs.length&&0!==this.pairs.length&&this.endGame(!0)}getCurrentStreak(){return this.turns.slice(0).reverse().reduce(((e,t)=>{const i=e.isBroken||!t.isMatch;return{streak:i?e.streak:e.streak+1,isBroken:i}}),{streak:0,isBroken:!1}).streak}getLongestStreak(){return this.turns.slice(0).reduce(((e,t)=>{const i=t.isMatch?e.streak+1:0;return{streak:i,longest:i>e.longest?i:e.longest}}),{longest:0,streak:0}).longest}};nt([Z({type:Array})],dt.prototype,"turns",void 0),nt([Z({type:Number})],dt.prototype,"timer",void 0),nt([Z({type:Boolean})],dt.prototype,"inGame",void 0),nt([Z({type:String})],dt.prototype,"timeElapsed",void 0),nt([Z({type:Array})],dt.prototype,"gameSummary",void 0),nt([Z({type:Boolean})],dt.prototype,"hasMatch",void 0),nt([Z({type:Array})],dt.prototype,"pairs",void 0),nt([Z({type:Array})],dt.prototype,"choices",void 0),nt([Z({type:Array})],dt.prototype,"cards",void 0),nt([Z({type:Function})],dt.prototype,"unsubTimer",void 0),dt=nt([J("glk-home")],dt);var ct=i(293),gt=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const lt=Object.keys(fe);let ut=class extends se{constructor(){super(...arguments),this.decks=[],this.startingPairs=0,this.cardBack=fe.subtleDots,this.deckId="",this.hideOnMatch=!0}static get styles(){return[De,He,te`
        :host {
          margin: 10px;
        }

        .options__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        form {
          width: 50%;
        }
        ${ue(le.XS,te`
            form {
              width: 75%;
            }
          `)}
        ${ue(le.XXS,te`
            form {
              width: 100%;
            }
          `)}

        .message {
          color: var(--danger-colour);
          margin: 10px 0;
        }

        .button-block {
          margin: 3rem 0;
        }
      `]}firstUpdated(){const e=ke.get();this.decks=be.getKey("decks"),this.startingPairs=e.startingPairs,this.cardBack=e.cardBack,this.hideOnMatch=e.hideOnMatch,this.deckId=e.deckId}render(){const e=this.isValidForm(),t=e.success,i=e.messages;return H`
      <div class="options">
        <h2 class="options__title">Options</h2>
        <form @submit=${this.handleSave}>
          <div class="glk-control has-float-label">
            <label for="startingPairs">Starting Pairs</label>
            <input
              id="startingPairs"
              class="glk-control__input"
              type="number"
              min="1"
              max="26"
              .value=${this.startingPairs}
              @input=${this.onUserInput}
            />
          </div>
          <div class="glk-control has-float-label has-float-label--select">
            <label for="cardBack">Card Back Pattern</label>
            <select
              id="cardBack"
              name="cardBack"
              class="glk-control__input"
              @change=${this.onSelect}
            >
              ${lt.map((e=>H`
                  <option value=${e} ?selected=${e===this.cardBack}
                    >${(0,ct.fg)(e)}</option
                  >
                `))}
            </select>
          </div>
          <div class="glk-control glk-control--checkbox">
            <label for="hideOnMatch" class="glk-control__label">
              <input
                type="checkbox"
                id="hideOnMatch"
                class="glk-checkbox"
                ?checked=${this.hideOnMatch}
                @change=${this.onToggle}
              />
              Hide matched pairs
            </label>
          </div>
          <div class="glk-control has-float-label has-float-label--select">
            <label for="deckId">Deck</label>
            <select
              id="deckId"
              name="deckId"
              class="glk-control__input"
              @change=${this.onSelect}
            >
              <option value="" ?selected=${""===this.deckId}
                >Unrestricted</option
              >
              ${this.decks.map((e=>H`
                  <option value=${e.id} ?selected=${e.id===this.deckId}
                    >${e.name}</option
                  >
                `))}
            </select>
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
          ${i?H`
                <div class="message">
                  ${i}
                </div>
              `:""}
        </form>
      </div>
    `}onUserInput(e){const t=e.target,i=Number(t.value);this.startingPairs=i}onSelect(e){const t=e.target,i=t.name;"cardBack"===i?this.cardBack=t.value:"deckId"===i&&(this.deckId=t.value)}onToggle(e){const t=e.target;this.hideOnMatch=t.checked}isValidForm(){const e=[],t=this.startingPairs>=1&&this.startingPairs<=26;t||e.push("Starting pairs must be 1 <= n <= 26");const i=this.decks.find((e=>e.id===this.deckId)),s=!i||i.characterIds.length>=this.startingPairs;return s||e.push("The deck chosen has fewer characters than the number of pairs requested."),{messages:e.join("\r\n"),success:t&&s}}handleSave(e){e.preventDefault(),this.isValidForm().success&&(ke.set({cardBack:this.cardBack,deckId:this.deckId,hideOnMatch:this.hideOnMatch,startingPairs:this.startingPairs}),me.push("/"))}};gt([Z({type:Array})],ut.prototype,"decks",void 0),gt([Z({type:Number})],ut.prototype,"startingPairs",void 0),gt([Z({type:String})],ut.prototype,"cardBack",void 0),gt([Z({type:String})],ut.prototype,"deckId",void 0),gt([Z({type:Boolean})],ut.prototype,"hideOnMatch",void 0),ut=gt([J("glk-options")],ut);var pt=i(787),ht=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let ft=class extends se{constructor(){super(...arguments),this.show=!1,this.direction=0}static get styles(){return te`
      .icon {
        display: inline-block;
        margin: 0 5px;
      }
    `}render(){if(!this.direction||!this.show)return H``;const e=1===this.direction?"▲︎":"▼︎";return H` <span class="icon">${e}</span> `}};ht([Z({type:Boolean})],ft.prototype,"show",void 0),ht([Z({type:Number})],ft.prototype,"direction",void 0),ft=ht([J("glk-sort-icon")],ft);var yt=i(859);const kt=["timeElapsed","datetime","pairs","longestStreak","matchAttemptsRatio"],bt=new Map([["timeElapsed",{props:["timeElapsed","pairs"],orders:e=>e>0?["asc","desc"]:["desc","asc"]}],["datetime",{props:["datetime"],orders:e=>e>0?["asc"]:["desc"]}],["pairs",{props:["pairs","timeElapsed"],orders:e=>e>0?["asc","asc"]:["desc","desc"]}],["longestStreak",{props:["longestStreak","pairs","timeElapsed"],orders:e=>e>0?["asc","desc","desc"]:["desc","asc","asc"]}],["matchAttemptsRatio",{props:["matchAttemptsRatio","timeElapsed","longestStreak"],orders:e=>e>0?["asc","desc","asc"]:["desc","asc","desc"]}]]);var vt=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let jt=class extends se{constructor(){super(...arguments),this.sortField="matchAttemptsRatio",this.sortOrder=-1,this.history=[]}static get styles(){return[De,He,te`
        :host {
          margin: 10px;
        }

        .list {
          width: 100%;
          max-width: 750px;
        }

        .history {
          padding: 5px;
        }
        .history__header {
          display: flex;
          justify-content: space-between;
        }

        .history__title {
          font-size: 1.25rem;
          margin: 15px 0;
        }

        .history__controls {
          display: none;
        }

        .history__item--no-items {
          display: flex;
        }

        .column-header__button {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          background: none;
          padding: 8px 5px;
          border: none;
          text-align: left;
          cursor: pointer;
        }
        .column-header__button:hover {
          background-color: hsl(0, 0%, 95%);
        }

        .align-right {
          text-align: right;
        }

        /* Repsonsive */
        td,
        th {
          vertical-align: top;
        }

        td {
          padding: 5px;
        }

        @media only screen and (max-width: 600px) {
          /* Force table to not be like tables anymore */
          table,
          thead,
          tbody,
          th,
          td,
          tr {
            display: block;
          }

          /* Hide table headers (but not display: none;, for accessibility) */
          thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }

          tr {
            border: 1px solid var(--table-border-colour);
          }

          td {
            /* Behave  like a "row" */
            border: none;
            border-bottom: 1px solid var(--table-cell-border-colour);
            position: relative;
            padding-left: 40%;
          }

          td:before {
            /* Now like a table header */
            position: absolute;
            /* Top/left values mimic padding */
            // top: 6px;
            left: 6px;
            width: 35%;
            padding-right: 10px;
            white-space: nowrap;
            text-align: right;
          }

          /* Label the data */
          td:before {
            content: attr(column-title);
          }

          td[column-title='Rank'] {
            background-color: var(--secondary-colour);
            color: var(--secondary-contrast);
          }

          .history__controls {
            display: block;
          }
        }
      `]}firstUpdated(){const e=be.getKey("history");this.history=e.map((e=>({...e,date:(0,pt.Z)(e.datetime),matchAttemptsRatio:0!==e.turns?e.pairs/e.turns:0,timeElapsedDisplay:ot.formatTime(e.timeElapsed)})))}render(){const e=Array.from(kt),t=function(e,t,i){const s=bt.get(t);return(0,yt.Z)(e,s.props,s.orders(i))}(this.history,this.sortField,this.sortOrder);return H`
      <section class="history">
        <header class="history__header">
          <h2 class="history__title">Game history</h2>
          <p>${t.length} games</p>
        </header>
        <div class="history__controls">
          <div class="glk-control has-float-label has-float-label--select">
            <label for="cardBack">Sort on field</label>
            <select
              id="sortField"
              name="sortField"
              class="glk-control__input"
              @change=${e=>{var t;const i=e.currentTarget;this.handleSort(null!==(t=kt.find((e=>e===i.value)))&&void 0!==t?t:this.sortField)}}
            >
              ${e.map((e=>H`
                  <option value=${e} ?selected=${e===this.sortField}>
                    ${(0,ct.fg)(e)}
                  </option>
                `))}
            </select>
          </div>
        </div>
        <table class="list">
          <thead>
            <tr class="history__item history__item--header">
              <th class="column-header">#</th>
              <th class="column-header">
                <button
                  type="button"
                  class="column-header__button"
                  @click=${()=>this.handleSort("datetime")}
                >
                  Date
                  <glk-sort-icon
                    ?show=${"datetime"===this.sortField}
                    .direction=${this.sortOrder}
                  ></glk-sort-icon>
                </button>
              </th>
              <th class="column-header">
                <button
                  type="button"
                  class="column-header__button"
                  @click=${()=>this.handleSort("pairs")}
                >
                  Pairs
                  <glk-sort-icon
                    ?show=${"pairs"===this.sortField}
                    .direction=${this.sortOrder}
                  ></glk-sort-icon>
                </button>
              </th>
              <th class="column-header">
                <button
                  type="button"
                  class="column-header__button"
                  @click=${()=>this.handleSort("timeElapsed")}
                >
                  Time
                  <glk-sort-icon
                    ?show=${"timeElapsed"===this.sortField}
                    .direction=${this.sortOrder}
                  ></glk-sort-icon>
                </button>
              </th>
              <th class="column-header">
                <button
                  type="button"
                  class="column-header__button"
                  @click=${()=>this.handleSort("longestStreak")}
                >
                  Streak
                  <glk-sort-icon
                    ?show=${"longestStreak"===this.sortField}
                    .direction=${this.sortOrder}
                  ></glk-sort-icon>
                </button>
              </th>
              <th class="column-header">
                <button
                  type="button"
                  class="column-header__button"
                  @click=${()=>this.handleSort("matchAttemptsRatio")}
                >
                  Match/Attempts Ratio
                  <glk-sort-icon
                    ?show=${"matchAttemptsRatio"===this.sortField}
                    .direction=${this.sortOrder}
                  ></glk-sort-icon>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            ${t.map(((e,t)=>H`
                <tr class="history__item">
                  <td column-title="Rank">${this.itemNumber(t)}</td>
                  <td column-title="Date">${e.date}</td>
                  <td column-title="Pairs" class="align-right">
                    ${e.pairs}
                  </td>
                  <td column-title="Time" class="align-right">
                    ${e.timeElapsedDisplay}
                  </td>
                  <td column-title="Streak" class="align-right">
                    ${e.longestStreak}
                  </td>
                  <td
                    column-title="M/A"
                    title="Match / Attempts Ratio"
                    class="align-right"
                  >
                    ${e.matchAttemptsRatio.toFixed(2)}
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      </section>
    `}itemNumber(e){return`#${(0,rt.default)(e+1,3)}`}handleSort(e){this.sortField===e&&(this.sortOrder=1===this.sortOrder?-1:1),this.sortField=e}};vt([Z({type:Array})],jt.prototype,"sortField",void 0),vt([Z({type:Array})],jt.prototype,"sortOrder",void 0),vt([Z({type:Array})],jt.prototype,"history",void 0),jt=vt([J("glk-scores")],jt);var It=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let wt=class extends se{constructor(){super(...arguments),this.routeKey=""}firstUpdated(){me.subscribe((({key:e})=>this.routeKey=e))}render(){let e=me.currentRoute;return e||(e={name:"404",render:()=>H`
          <h2>We couldn't find what you were looking for.</h2>
          <div>
            <glk-router-link .href=${me.base}
              >Return to Home</glk-router-link
            >
          </div>
        `,url:""}),e.render(this.routeKey)}};It([Z({type:String})],wt.prototype,"routeKey",void 0),wt=It([J("glk-router-view")],wt);var St=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let xt=class extends se{constructor(){super(...arguments),this.text="",this.delay=750,this.allowWrapping=!1,this.usePosition=!1,this.timer=0,this.isHovered=!1,this.at=[]}static get styles(){return te`
      .tooltip {
        position: relative;
      }
      .tooltip__content {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 50%;
        width: auto;
        height: auto;
        background-color: var(--tooltip-background);
        color: var(--tooltip-colour);
        padding: 5px;
        border: 2px solid var(--tooltip-background);
        border-radius: 4px;
        pointer-events: none;
        white-space: nowrap;
        z-index: 10;
        font-size: 1rem;
        font-weight: normal;
        transition: all ease-in-out 0.5s;
        transform: translateX(-50%);
      }

      .tooltip__content--wrap {
        white-space: pre;
      }
      .tooltip__content--fixed {
        position: fixed;
      }

      ${ue(le.XXS,te`
          .tooltip__content--fixed {
            left: 5px !important;
          }
        `)}

      .tooltip--hovered .tooltip__content {
        visibility: visible;
        opacity: 1;
      }
    `}render(){const[e,t,i]=this.at,s=i?{transform:`translateX(${i}px)`}:{},a=this.usePosition?{top:t,left:e,bottom:"unset",...s}:{...s},r=(o=a,Object.keys(o).reduce(((e,t)=>`${e}${t}: ${o[t]};`),""));var o;return H`
      <div
        class=${ae("tooltip",this.isHovered&&"tooltip--hovered")}
        @mouseenter=${this.handleEnter}
        @mouseleave=${this.handleLeave}
      >
        <div
          style="${r}"
          class=${ae("tooltip__content",this.allowWrapping&&"tooltip__content--wrap",this.usePosition&&"tooltip__content--fixed")}
        >
          ${this.text}
        </div>
        <slot></slot>
      </div>
    `}handleEnter(e){const{clientX:t,clientY:i}=e,s=this.shadowRoot.querySelector(".tooltip");let a=0;if(s&&s.firstChild){const e=s.getBoundingClientRect(),t=s.firstChild.offsetWidth,i=window.innerWidth-(e.width+e.left);t>e.left+e.width/2?a=-e.left:i<t&&(a=-(t-i))}clearTimeout(this.timer),this.timer=window.setTimeout((()=>{this.isHovered=!0,this.at=[t,i,a]}),this.delay)}handleLeave(){clearTimeout(this.timer),this.isHovered=!1,this.at=[]}};St([Z({type:String})],xt.prototype,"text",void 0),St([Z({type:Number})],xt.prototype,"delay",void 0),St([Z({type:Boolean})],xt.prototype,"allowWrapping",void 0),St([Z({type:Boolean})],xt.prototype,"usePosition",void 0),St([Z({type:Number})],xt.prototype,"timer",void 0),St([Z({type:Boolean})],xt.prototype,"isHovered",void 0),St([Z({type:Array})],xt.prototype,"at",void 0),xt=St([J("glk-tooltip")],xt);"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/galko/sw.js").then((e=>console.log("SW registered: ",e))).catch((e=>console.log("SW registration failed: ",e)))}));let _t=class extends se{static get styles(){return te`
      :host,
      main {
        --action-bar-height: 51px;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .action-bar {
        display: flex;
        align-items: center;
        background-color: var(--primary-colour);
        min-height: var(--action-bar-height);
        padding: 10px 15px;
        box-shadow: 1px 1px 2px 2px var(--shadow-colour);
        box-sizing: border-box;
      }
      .action-bar__title {
        font-size: 1.25rem;
        margin: 5px 0;
      }

      glk-router-view {
        padding: 0 5px;
      }
      glk-router-link {
        font-size: 1.25rem;
      }

      /* Helpers */
      .flex-spacer {
        display: flex;
        flex: 1;
      }
    `}render(){const e=me.base;return H`
      <main>
        <nav class="action-bar">
          <h1 class="action-bar__title">
            <glk-tooltip .text=${"Home"}>
              <glk-router-link ?buttonise=${!0} .href="${e}"
                >Galko︎</glk-router-link
              >
            </glk-tooltip>
          </h1>

          <div class="flex-spacer"></div>

          <glk-tooltip .text=${"Scores"}>
            <glk-router-link ?buttonise=${!0} .href=${"/scores"}
              >★︎</glk-router-link
            >
          </glk-tooltip>
          <glk-tooltip .text=${"Decks"}>
            <glk-router-link ?buttonise=${!0} .href=${"/decks"}
              >🂠︎</glk-router-link
            >
          </glk-tooltip>
          <glk-tooltip .text=${"Options"}>
            <glk-router-link ?buttonise=${!0} .href=${"/options"}
              >⚙︎</glk-router-link
            >
          </glk-tooltip>
        </nav>
        <glk-router-view></glk-router-view>
      </main>
    `}};_t=function(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}([J("glk-app")],_t)})()})();