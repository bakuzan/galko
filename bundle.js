/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={753:(e,i,t)=>{i.Z=void 0;var s,a=(s=t(153))&&s.__esModule?s:{default:s};function r(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function o(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=function(){function e(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.appRoutes=[],this.baseUrl="/",this.baseTitle="",this.listeners=[],this.appRoutes=i,this.baseUrl=t.baseUrl||"/",this.baseTitle=t.baseTitle||"",this.listenToPopState()}var i,t;return i=e,(t=[{key:"subscribe",value:function(e){var i=this;return this.listeners.push(e),function(){var t=i.listeners.indexOf(e);i.listeners.splice(t,1)}}},{key:"push",value:function(e){var i=this.currentRoute,t=this.guardPath(e.replace(this.baseUrl,"")),s=this.appRoutes.find((function(e){return e.url===t}));if(s){var a=e.startsWith(this.baseUrl)?e:"".concat(this.baseUrl).concat(e),r="".concat(window.location.origin).concat(a);window.history.pushState(null,"",r),this.setPageTitle(s.title),this.publishChange(s,i)}else console.error("Unknown route",t)}},{key:"guardPath",value:function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this.baseUrl;var t=i?e.split("?")[0]:e;return(t=(t=(t=t.replace(/\/\//g,"/")).startsWith("/")?t:"/".concat(t)).endsWith("/")?t.slice(0,-1):t)||this.baseUrl}},{key:"setPageTitle",value:function(e){var i;(e||this.baseTitle)&&(i=e&&this.baseTitle?"".concat(e," | ").concat(this.baseTitle):e||this.baseTitle,document.title=i)}},{key:"listenToPopState",value:function(){var e=this;window.onpopstate=function(){var i=e.guardPath("/".concat(window.location.pathname.replace(e.baseUrl,""))),t=e.appRoutes.find((function(e){return e.url===i}));t?(e.setPageTitle(t.title),e.publishChange(t)):console.error("Unknown route",i)}}},{key:"publishChange",value:function(e,i){var t={key:(0,a.default)(),fromRoute:i,toRoute:e};this.listeners.forEach((function(e){return e(t)}))}},{key:"base",get:function(){return this.baseUrl}},{key:"currentRoute",get:function(){var e=this.guardPath("/".concat(window.location.pathname.replace(this.baseUrl,"")));return this.appRoutes.find((function(i){return i.url===e}))}}])&&o(i.prototype,t),e}();i.Z=n},293:(e,i,t)=>{i.fg=void 0;var s=r(t(762)),a=r(t(405));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},n=(0,s.default)(o,a.default);i.fg=n,(0,s.default)((function(e){return e.split(" ").map(o).join(" ")}),a.default)},490:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default=function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"true"===e||"false"!==e&&(i?!!e:e)}},762:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default=function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return i.reduce((function(e,i){return function(){return e(i.apply(void 0,arguments))}}))}},387:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=Object.freeze(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);i.default=t},125:(e,i,t)=>{i.Z=void 0;var s=o(t(762)),a=o(t(234)),r=o(t(490));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){d(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function d(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function c(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],s=!0,a=!1,r=void 0;try{for(var o,n=e[Symbol.iterator]();!(s=(o=n.next()).done)&&(t.push(o.value),!i||t.length!==i);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return t}}(e,i)||function(e,i){if(e){if("string"==typeof e)return g(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,i):void 0}}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,s=new Array(i);t<i;t++)s[t]=e[t];return s}var l=(0,s.default)((function(e){return(0,r.default)(e,!1)}),a.default,decodeURIComponent);i.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("?").pop().split("&").reduce((function(e,i){var t=c(i.split("="),2),s=t[0],a=t[1];if(void 0===a)return e;var r=l(a);return m(m({},e),{},d({},s,r))}),{})}},665:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){if(!e)return"";var i=new Date(e);return"".concat((0,a.default)(i.getDate(),2)," ").concat(s.default[i.getMonth()]," ").concat(i.getFullYear())};var s=r(t(387)),a=r(t(889));function r(e){return e&&e.__esModule?e:{default:e}}},787:(e,i,t)=>{i.Z=function(e){return"".concat((0,s.default)(e)," @ ").concat((0,a.default)(e))};var s=r(t(665)),a=r(t(236));function r(e){return e&&e.__esModule?e:{default:e}}},236:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e?"".concat((0,a.default)(new Date(e).getHours(),2),":").concat((0,a.default)(new Date(e).getMinutes(),2)):""};var s,a=(s=t(889))&&s.__esModule?s:{default:s}},405:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return e.replace(/([a-z\d])([A-Z])/g,"$1"+i+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+i+"$2").toLowerCase()}},153:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default=function(){return("".concat(1e7)+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){var i=Number(e);return(i^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>i/4).toString(16)}))}},527:(e,i)=>{i.Z=function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){var i=e.currentTarget;if(i&&i.getAttribute){var t=i.getAttribute("target")||"";if(/\b_blank\b/i.test(t))return}return e.preventDefault(),!0}}},989:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.prop=function(e,i){return e[i]}},362:(e,i,t)=>{i.Z=void 0;var s=t(989);function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){o(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var m=function(){function e(i,t){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.storeName=i,this.defaultValue=t}var i,t;return i=e,(t=[{key:"get",value:function(){var e=this.storage.getItem(this.storeName)||"",i=e?JSON.parse(e):this.defaultValue;return r(r({},this.defaultValue),i)}},{key:"getKey",value:function(e){var i,t=this.storage.getItem(this.storeName)||"",a=t?JSON.parse(t):this.defaultValue;return null!==(i=(0,s.prop)(a,e))&&void 0!==i?i:(0,s.prop)(this.defaultValue,e)}},{key:"set",value:function(e){var i=r(r({},this.get()),e);return this.storage.setItem(this.storeName,JSON.stringify(i)),i}},{key:"replace",value:function(e){var i=JSON.stringify(e);return this.storage.setItem(this.storeName,i),this.get()}},{key:"upgrade",value:function(){for(var e=this.get(),i=arguments.length,t=new Array(i),s=0;s<i;s++)t[s]=arguments[s];var a=t.reduce((function(e,i){return i(e)}),e);this.replace(a)}},{key:"storage",get:function(){return"undefined"!=typeof localStorage?localStorage:{getItem:function(e){return""},setItem:function(e,i){}}}}])&&n(i.prototype,t),e}();i.Z=m},859:(e,i)=>{function t(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],s=!0,a=!1,r=void 0;try{for(var o,n=e[Symbol.iterator]();!(s=(o=n.next()).done)&&(t.push(o.value),!i||t.length!==i);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return t}}(e,i)||a(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,i){if(e){if("string"==typeof e)return r(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,i):void 0}}function r(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,s=new Array(i);t<i;t++)s[t]=e[t];return s}i.Z=void 0;var o=function(e){for(var i=arguments.length,t=new Array(i>1?i-1:0),s=1;s<i;s++)t[s-1]=arguments[s];return[].concat(t).map((function(i){return i.replace(/\[([^\[\]]*)\]/g,".$1.").split(".").filter((function(e){return""!==e})).reduce((function(e,i){return e&&e[i]}),e)}))};i.Z=function(e,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s(e).sort((function(e,s){return i.reduce((function(i,r,n){var m=o(e,r)[0],d=o(s,r)[0];if(0===i){var c=t(a&&"desc"===a[n]?[d,m]:[m,d],2),g=c[0],l=c[1];i=g>l?1:g<l?-1:0}return i}),0)}))}},889:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return(e=e.toString()).length>=i?e:new Array(i-e.length+1).join(t)+e}},234:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){if(/\D/.test(e))return e;var i=parseInt(e,10);return isNaN(i)?e:i}},149:(e,i)=>{function t(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,s=new Array(i);t<i;t++)s[t]=e[t];return s}i.Z=function(e){for(var i=function(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,i){if(e){if("string"==typeof e)return t(e,i);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(e,i):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),s=i.length-1;s>0;s--){var a=Math.floor(Math.random()*(s+1)),r=[i[a],i[s]];i[s]=r[0],i[a]=r[1]}return i}},434:(e,i)=>{i.Z=function(e){return e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},165:(e,i,t)=>{const s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(e,i,t=null)=>{for(;i!==t;){const t=i.nextSibling;e.removeChild(i),i=t}},r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,n=new RegExp(`${r}|${o}`),m="$lit$";class d{constructor(e,i){this.parts=[],this.element=i;const t=[],s=[],a=document.createTreeWalker(i.content,133,null,!1);let o=0,d=-1,g=0;const{strings:p,values:{length:h}}=e;for(;g<h;){const e=a.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const i=e.attributes,{length:t}=i;let s=0;for(let e=0;e<t;e++)c(i[e].name,m)&&s++;for(;s-- >0;){const i=p[g],t=u.exec(i)[2],s=t.toLowerCase()+m,a=e.getAttribute(s);e.removeAttribute(s);const r=a.split(n);this.parts.push({type:"attribute",index:d,name:t,strings:r}),g+=r.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const i=e.data;if(i.indexOf(r)>=0){const s=e.parentNode,a=i.split(n),r=a.length-1;for(let i=0;i<r;i++){let t,r=a[i];if(""===r)t=l();else{const e=u.exec(r);null!==e&&c(e[2],m)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-m.length)+e[3]),t=document.createTextNode(r)}s.insertBefore(t,e),this.parts.push({type:"node",index:++d})}""===a[r]?(s.insertBefore(l(),e),t.push(e)):e.data=a[r],g+=r}}else if(8===e.nodeType)if(e.data===r){const i=e.parentNode;null!==e.previousSibling&&d!==o||(d++,i.insertBefore(l(),e)),o=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(t.push(e),d--),g++}else{let i=-1;for(;-1!==(i=e.data.indexOf(r,i+1));)this.parts.push({type:"node",index:-1}),g++}}else a.currentNode=s.pop()}for(const e of t)e.parentNode.removeChild(e)}}const c=(e,i)=>{const t=e.length-i.length;return t>=0&&e.slice(t)===i},g=e=>-1!==e.index,l=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,i){const{element:{content:t},parts:s}=e,a=document.createTreeWalker(t,133,null,!1);let r=f(s),o=s[r],n=-1,m=0;const d=[];let c=null;for(;a.nextNode();){n++;const e=a.currentNode;for(e.previousSibling===c&&(c=null),i.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&m++;void 0!==o&&o.index===n;)o.index=null!==c?-1:o.index-m,r=f(s,r),o=s[r]}d.forEach((e=>e.parentNode.removeChild(e)))}const h=e=>{let i=11===e.nodeType?0:1;const t=document.createTreeWalker(e,133,null,!1);for(;t.nextNode();)i++;return i},f=(e,i=-1)=>{for(let t=i+1;t<e.length;t++){const i=e[t];if(g(i))return t}return-1},y=new WeakMap,k=e=>"function"==typeof e&&y.has(e),v={},b={};class j{constructor(e,i,t){this.__parts=[],this.template=e,this.processor=i,this.options=t}update(e){let i=0;for(const t of this.__parts)void 0!==t&&t.setValue(e[i]),i++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],t=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let r,o=0,n=0,m=a.nextNode();for(;o<t.length;)if(r=t[o],g(r)){for(;n<r.index;)n++,"TEMPLATE"===m.nodeName&&(i.push(m),a.currentNode=m.content),null===(m=a.nextNode())&&(a.currentNode=i.pop(),m=a.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(m.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(m,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}const I=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${r} `;class S{constructor(e,i,t,s){this.strings=e,this.values=i,this.type=t,this.processor=s}getHTML(){const e=this.strings.length-1;let i="",t=!1;for(let s=0;s<e;s++){const e=this.strings[s],a=e.lastIndexOf("\x3c!--");t=(a>-1||t)&&-1===e.indexOf("--\x3e",a+1);const n=u.exec(e);i+=null===n?e+(t?w:o):e.substr(0,n.index)+n[1]+n[2]+m+n[3]+r}return i+=this.strings[e],i}getTemplateElement(){const e=document.createElement("template");let i=this.getHTML();return void 0!==I&&(i=I.createHTML(i)),e.innerHTML=i,e}}const x=e=>null===e||!("object"==typeof e||"function"==typeof e),_=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class M{constructor(e,i,t){this.dirty=!0,this.element=e,this.name=i,this.strings=t,this.parts=[];for(let e=0;e<t.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new O(this)}_getValue(){const e=this.strings,i=e.length-1,t=this.parts;if(1===i&&""===e[0]&&""===e[1]){const e=t[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!_(e))return e}let s="";for(let a=0;a<i;a++){s+=e[a];const i=t[a];if(void 0!==i){const e=i.value;if(x(e)||!_(e))s+="string"==typeof e?e:String(e);else for(const i of e)s+="string"==typeof i?i:String(i)}}return s+=e[i],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class O{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||x(e)&&e===this.value||(this.value=e,k(e)||(this.committer.dirty=!0))}commit(){for(;k(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):_(e)?this.__commitIterable(e):e===b?(this.value=b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const i=this.startNode.nextSibling,t="string"==typeof(e=null==e?"":e)?e:String(e);i===this.endNode.previousSibling&&3===i.nodeType?i.data=t:this.__commitNode(document.createTextNode(t)),this.value=e}__commitTemplateResult(e){const i=this.options.templateFactory(e);if(this.value instanceof j&&this.value.template===i)this.value.update(e.values);else{const t=new j(i,e.processor,this.options),s=t._clone();t.update(e.values),this.__commitNode(s),this.value=t}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const i=this.value;let t,s=0;for(const a of e)t=i[s],void 0===t&&(t=new P(this.options),i.push(t),0===s?t.appendIntoPart(this):t.insertAfterPart(i[s-1])),t.setValue(a),t.commit(),s++;s<i.length&&(i.length=s,this.clear(t&&t.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,i,t){if(this.value=void 0,this.__pendingValue=void 0,2!==t.length||""!==t[0]||""!==t[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=i,this.strings=t}setValue(e){this.__pendingValue=e}commit(){for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class T extends M{constructor(e,i,t){super(e,i,t),this.single=2===t.length&&""===t[0]&&""===t[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends O{}let $=!1;(()=>{try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class C{constructor(e,i,t){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=i,this.eventContext=t,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,i=this.value,t=null==e||null!=i&&(e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive),s=null!=e&&(null==i||t);t&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=K(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const K=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function R(e){let i=B.get(e.type);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},B.set(e.type,i));let t=i.stringsArray.get(e.strings);if(void 0!==t)return t;const s=e.strings.join(r);return t=i.keyString.get(s),void 0===t&&(t=new d(e,e.getTemplateElement()),i.keyString.set(s,t)),i.stringsArray.set(e.strings,t),t}const B=new Map,H=new WeakMap,D=new class{handleAttributeExpressions(e,i,t,s){const a=i[0];return"."===a?new T(e,i.slice(1),t).parts:"@"===a?[new C(e,i.slice(1),s.eventContext)]:"?"===a?[new A(e,i.slice(1),t)]:new M(e,i,t).parts}handleTextExpression(e){return new P(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const E=(e,...i)=>new S(e,i,"html",D),z=(e,i)=>`${e}--${i}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const G=e=>i=>{const t=z(i.type,e);let s=B.get(t);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},B.set(t,s));let a=s.stringsArray.get(i.strings);if(void 0!==a)return a;const o=i.strings.join(r);if(a=s.keyString.get(o),void 0===a){const t=i.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(t,e),a=new d(i,t),s.keyString.set(o,a)}return s.stringsArray.set(i.strings,a),a},L=["html","svg"],F=new Set;window.JSCompiler_renameProperty=(e,i)=>e;const V={toAttribute(e,i){switch(i){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,i){switch(i){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,i)=>i!==e&&(i==i||e==e),J={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:Y};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((i,t)=>{const s=this._attributeNameForProperty(t,i);void 0!==s&&(this._attributeToPropertyMap.set(s,t),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,i)=>this._classProperties.set(i,e)))}}static createProperty(e,i=J){if(this._ensureClassProperties(),this._classProperties.set(e,i),i.noAccessor||this.prototype.hasOwnProperty(e))return;const t="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,t,i);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,i,t){return{get(){return this[i]},set(s){const a=this[e];this[i]=s,this.requestUpdateInternal(e,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,i=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of i)this.createProperty(t,e[t])}}static _attributeNameForProperty(e,i){const t=i.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,i,t=Y){return t(e,i)}static _propertyValueFromAttribute(e,i){const t=i.type,s=i.converter||V,a="function"==typeof s?s:s.fromAttribute;return a?a(e,t):e}static _propertyValueToAttribute(e,i){if(void 0===i.reflect)return;const t=i.type,s=i.converter;return(s&&s.toAttribute||V.toAttribute)(e,t)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,i)=>{if(this.hasOwnProperty(i)){const e=this[i];delete this[i],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(i,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,i)=>this[i]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,i,t){i!==t&&this._attributeToProperty(e,t)}_propertyToAttribute(e,i,t=J){const s=this.constructor,a=s._attributeNameForProperty(e,t);if(void 0!==a){const e=s._propertyValueToAttribute(i,t);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(a):this.setAttribute(a,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,i){if(8&this._updateState)return;const t=this.constructor,s=t._attributeToPropertyMap.get(e);if(void 0!==s){const e=t.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=t._propertyValueFromAttribute(i,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,i,t){let s=!0;if(void 0!==e){const a=this.constructor;t=t||a.getPropertyOptions(e),a._valueHasChanged(this[e],i,t.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,i),!0!==t.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,t))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,i){return this.requestUpdateInternal(e,i),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const i=this._changedProperties;try{e=this.shouldUpdate(i),e?this.update(i):this._markUpdated()}catch(i){throw e=!1,this._markUpdated(),i}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(i)),this.updated(i))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,i)=>this._propertyToAttribute(i,this[i],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;const Z=e=>i=>"function"==typeof i?((e,i)=>(window.customElements.define(e,i),i))(e,i):((e,i)=>{const{kind:t,elements:s}=i;return{kind:t,elements:s,finisher(i){window.customElements.define(e,i)}}})(e,i),X=(e,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?Object.assign(Object.assign({},i),{finisher(t){t.createProperty(i.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(t){t.createProperty(i.key,e)}};function q(e){return(i,t)=>void 0!==t?((e,i,t)=>{i.constructor.createProperty(t,e)})(e,i,t):X(e,i)}const Q=Element.prototype;Q.msMatchesSelector||Q.webkitMatchesSelector;const ee=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class te{constructor(e,i){if(i!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ee?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...i)=>{const t=i.reduce(((i,t,s)=>i+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(t)+e[s+1]),e[0]);return new te(t,ie)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ae={};class re extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const i=(e,t)=>e.reduceRight(((e,t)=>Array.isArray(t)?i(t,e):(e.add(t),e)),t),t=i(e,new Set),s=[];t.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!ee){const i=Array.prototype.slice.call(e.cssRules).reduce(((e,i)=>e+i.cssText),"");return new te(String(i),ie)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const i=this.render();super.update(e),i!==ae&&this.constructor.render(i,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,this.renderRoot.appendChild(i)})))}render(){return ae}}function oe(...e){return e.filter((e=>!!e)).join(" ")}re.finalized=!0,re.render=(e,i,t)=>{if(!t||"object"!=typeof t||!t.scopeName)throw new Error("The `scopeName` option is required.");const s=t.scopeName,r=H.has(i),o=U&&11===i.nodeType&&!!i.host,n=o&&!F.has(s),m=n?document.createDocumentFragment():i;if(((e,i,t)=>{let s=H.get(i);void 0===s&&(a(i,i.firstChild),H.set(i,s=new P(Object.assign({templateFactory:R},t))),s.appendInto(i)),s.setValue(e),s.commit()})(e,m,Object.assign({templateFactory:G(s)},t)),n){const e=H.get(m);H.delete(m);((e,i,t)=>{F.add(e);const s=t?t.element:document.createElement("template"),a=i.querySelectorAll("style"),{length:r}=a;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<r;e++){const i=a[e];i.parentNode.removeChild(i),o.textContent+=i.textContent}(e=>{L.forEach((i=>{const t=B.get(z(i,e));void 0!==t&&t.keyString.forEach((e=>{const{element:{content:i}}=e,t=new Set;Array.from(i.querySelectorAll("style")).forEach((e=>{t.add(e)})),p(e,t)}))}))})(e);const n=s.content;t?function(e,i,t=null){const{element:{content:s},parts:a}=e;if(null==t)return void s.appendChild(i);const r=document.createTreeWalker(s,133,null,!1);let o=f(a),n=0,m=-1;for(;r.nextNode();)for(m++,r.currentNode===t&&(n=h(i),t.parentNode.insertBefore(i,t));-1!==o&&a[o].index===m;){if(n>0){for(;-1!==o;)a[o].index+=n,o=f(a,o);return}o=f(a,o)}}(t,o,n.firstChild):n.insertBefore(o,n.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const m=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==m)i.insertBefore(m.cloneNode(!0),i.firstChild);else if(t){n.insertBefore(o,n.firstChild);const e=new Set;e.add(o),p(t,e)}})(s,m,e.value instanceof j?e.value.template:void 0),a(i,i.firstChild),i.appendChild(m),H.set(i,e)}!r&&o&&window.ShadyCSS.styleElement(i.host)},re.shadowRootOptions={mode:"open"};var ne=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let me=class extends re{constructor(){super(...arguments),this.type="button",this.primary=!1,this.danger=!1,this.icon=!1,this.disabled=!1}static get styles(){return se`
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
    `}render(){const e=oe("button",this.primary&&"button--primary",this.icon&&"button--icon",this.danger&&"button--danger");return E`
      <button
        type="${this.type}"
        class="${e}"
        ?disabled=${this.disabled}
        @click="${this.handleClick}"
      >
        <slot></slot>
      </button>
    `}handleClick(){const e=new CustomEvent("press",{bubbles:!0,composed:!0,detail:null});this.dispatchEvent(e)}};ne([q({type:String})],me.prototype,"type",void 0),ne([q({type:Boolean})],me.prototype,"primary",void 0),ne([q({type:Boolean})],me.prototype,"danger",void 0),ne([q({type:Boolean})],me.prototype,"icon",void 0),ne([q({type:Boolean})],me.prototype,"disabled",void 0),me=ne([Z("glk-button")],me);const de="/galko",ce=new(t(753).Z)([{name:"home",render:()=>E` <glk-home></glk-home> `,url:de},{name:"options",render:()=>E` <glk-options></glk-options> `,title:"Options",url:"/options"},{name:"scores",render:()=>E` <glk-scores></glk-scores> `,title:"Scores",url:"/scores"},{name:"decks",render:()=>E` <glk-decks></glk-decks> `,title:"Decks",url:"/decks"},{name:"decks-builder",render:()=>E` <glk-decks-builder></glk-decks-builder> `,title:"Deck Builder",url:"/decks-builder"}],{baseUrl:de,baseTitle:"Galko"});var ge=t(527),le=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let ue=class extends re{constructor(){super(...arguments),this.href="",this.buttonise=!1}static get styles(){return se`
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
    `}render(){const e="router-link"+(this.buttonise?" router-link--as-button":""),i=this.resolveLocation();return E`
      <a class="${e}" href="${i}" @click=${this.handleClick}>
        <slot></slot>
      </a>
    `}handleClick(e){if((0,ge.Z)(e)){const e=this.resolveLocation();ce.push(e)}}resolveLocation(){const e=this.href.startsWith(ce.base)?this.href:`${ce.base}${this.href}`;return ce.guardPath(e,!1)}};var pe;le([q({type:String})],ue.prototype,"href",void 0),le([q({type:Boolean})],ue.prototype,"buttonise",void 0),ue=le([Z("glk-router-link")],ue),function(e){e.XXS="xxs",e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg"}(pe||(pe={}));function he(e,i){switch(e){case pe.LG:return se`
    @media (min-width: ${1200}px) {
      ${i}
    }
  `;case pe.MD:return(e=>se`
    @media (min-width: ${992}px) and (max-width: ${1199}px) {
      ${e}
    }
  `)(i);case pe.SM:return(e=>se`
    @media (min-width: ${768}px) and (max-width: ${991}px) {
      ${e}
    }
  `)(i);case pe.XS:return(e=>se`
    @media (min-width: ${480}px) and (max-width: ${767}px) {
      ${e}
    }
  `)(i);case pe.XXS:return(e=>se`
    @media (max-width: ${479}px) {
      ${e}
    }
  `)(i)}}const fe=[{size:pe.LG},{size:pe.MD},{size:pe.SM},{size:pe.XS}].map((({size:e})=>he(e,se`
      .grid--standard {
        grid-template-columns: repeat(auto-fill, calc(var(--card-width) + 30px));
        grid-auto-rows: 1fr;
        gap: 10px;
      }
    `))),ye=[se`
    .grid {
      display: grid;
      padding: 0 5px;
      margin: 20px 0;
      list-style-type: none;
    }
  `,...fe];var ke;!function(e){e.argyle="argyle",e.blueprint="blueprint",e.chevrons="chevrons",e.honeyCombs="honeyCombs",e.shippo="shippo",e.subtleDots="subtleDots"}(ke||(ke={}));var ve=t(362);const be=new ve.Z("glkOptions",{cardBack:ke.subtleDots,deckId:"",hideOnMatch:!0,startingPairs:15}),je=new ve.Z("glkData",{decks:[],history:[]});je.upgrade((e=>{if(!e)return e;const i=(e.history||[]).map((e=>({...e,turns:e.turns?e.turns:0})));return{...e,history:i}}));var Ie=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let we=class extends re{constructor(){super(...arguments),this.decks=[]}static get styles(){return[...ye,se`
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
      `]}firstUpdated(){this.decks=je.getKey("decks")}render(){return E`
      <section class="decks">
        <header class="header">
          <h2 class="decks__title">Decks</h2>
          <glk-router-link .href=${"/decks-builder"}
            >Create a new deck</glk-router-link
          >
        </header>

        <div class="deck-view">
          <ul class="grid deck-list">
            ${this.decks.map((e=>E`
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
    `}dropDeck(e){let i=je.getKey("decks");i=i.filter((i=>i.id!==e)),je.set({decks:i}),this.decks=i}};Ie([q({type:Array})],we.prototype,"decks",void 0),we=Ie([Z("glk-decks")],we);var Se=t(125),xe=t(153),_e=t(434);const Me=(e,i)=>{const t=e.startNode.parentNode,s=void 0===i?e.endNode:i.startNode,a=t.insertBefore(l(),s);t.insertBefore(l(),s);const r=new P(e.options);return r.insertAfterNode(a),r},Oe=(e,i)=>(e.setValue(i),e.commit(),e),Pe=(e,i,t)=>{const s=e.startNode.parentNode,a=t?t.startNode:e.endNode,r=i.endNode.nextSibling;r!==a&&((e,i,t=null,s=null)=>{for(;i!==t;){const t=i.nextSibling;e.insertBefore(i,s),i=t}})(s,i.startNode,r,a)},Ae=e=>{a(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},Te=(e,i,t)=>{const s=new Map;for(let a=i;a<=t;a++)s.set(e[a],a);return s},Ne=new WeakMap,$e=new WeakMap,Ce=(Ke=(e,i,t)=>{let s;return void 0===t?t=i:void 0!==i&&(s=i),i=>{if(!(i instanceof P))throw new Error("repeat can only be used in text bindings");const a=Ne.get(i)||[],r=$e.get(i)||[],o=[],n=[],m=[];let d,c,g=0;for(const i of e)m[g]=s?s(i,g):g,n[g]=t(i,g),g++;let l=0,u=a.length-1,p=0,h=n.length-1;for(;l<=u&&p<=h;)if(null===a[l])l++;else if(null===a[u])u--;else if(r[l]===m[p])o[p]=Oe(a[l],n[p]),l++,p++;else if(r[u]===m[h])o[h]=Oe(a[u],n[h]),u--,h--;else if(r[l]===m[h])o[h]=Oe(a[l],n[h]),Pe(i,a[l],o[h+1]),l++,h--;else if(r[u]===m[p])o[p]=Oe(a[u],n[p]),Pe(i,a[u],a[l]),u--,p++;else if(void 0===d&&(d=Te(m,p,h),c=Te(r,l,u)),d.has(r[l]))if(d.has(r[u])){const e=c.get(m[p]),t=void 0!==e?a[e]:null;if(null===t){const e=Me(i,a[l]);Oe(e,n[p]),o[p]=e}else o[p]=Oe(t,n[p]),Pe(i,t,a[l]),a[e]=null;p++}else Ae(a[u]),u--;else Ae(a[l]),l++;for(;p<=h;){const e=Me(i,o[h+1]);Oe(e,n[p]),o[p++]=e}for(;l<=u;){const e=a[l++];null!==e&&Ae(e)}Ne.set(i,o),$e.set(i,m)}},(...e)=>{const i=Ke(...e);return y.set(i,!0),i});var Ke,Re=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let Be=class extends re{constructor(){super(...arguments),this.timer=0}static get styles(){return se`
      @media (min-width: 768px) {
        :host,
        .image,
        .image__image {
          --card-width: 103px;
          --card-height: 160px;
        }
      }
    
      @media (min-width: 479px) and (max-width:767px) {
        :host,
        .image,
        .image__image {
          --card-width: 103px;
          --card-height: 160px;
        }
      }
    
      @media (max-width: 479px) {
        :host,
        .image,
        .image__image {
          --card-width: 103px;
          --card-height: 160px;
        }
      }
    
      /* Shared sizing */
      :host,
      .image,
      .image__image {
        width: var(--card-width);
        height: var(--card-height);
      }    
    `}firstUpdated(){this.image=this.images[0]}render(){return E`
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
    `}startCycler(){this.images.length<2||(clearInterval(this.timer),this.timer=window.setInterval((()=>{const e=this.images.findIndex((e=>e===this.image)),i=e+1>=this.images.length?0:e+1,t=this.images[i];this.image=t}),1e3))}stopCycler(){clearInterval(this.timer)}};Re([q({type:Array})],Be.prototype,"images",void 0),Re([q({type:String})],Be.prototype,"alt",void 0),Re([q({type:String})],Be.prototype,"image",void 0),Re([q({type:Number})],Be.prototype,"timer",void 0),Be=Re([Z("glk-image-cycler")],Be);const He=JSON.parse('[{"id":92,"image":"https://i.imgur.com/Q0uAHi8.jpg","images":[],"name":"Accelerator","seriesId":40},{"id":265,"image":"https://i.imgur.com/HtOG1j5.jpg","images":[],"name":"Ace Portgas D.","seriesId":21},{"id":313,"image":"https://i.imgur.com/2YF2H0F.jpg","images":[],"name":"Adrian \\"Alucard\\" Tepes","seriesId":101},{"id":444,"image":"https://i.imgur.com/0pOYMTN.jpg","images":[],"name":"Agnes","seriesId":141},{"id":434,"image":"https://i.imgur.com/p4QSWLs.jpg","images":[],"name":"Ai \\"Miyano Shiho, Sherry\\" Haibara","seriesId":89},{"id":228,"image":"https://i.imgur.com/jsUwwgq.jpg","images":[],"name":"Ai Kisugi","seriesId":45},{"id":363,"image":"https://i.imgur.com/BuhQ4Ys.jpg","images":[],"name":"Akane Awakusu","seriesId":54},{"id":81,"image":"https://i.imgur.com/ELsbWMP.jpg","images":[],"name":"Akeno Himejima","seriesId":36},{"id":239,"image":"https://i.imgur.com/Jk6HeCy.jpg","images":[],"name":"Akira Midousuji","seriesId":90},{"id":17,"image":"https://i.imgur.com/o4NBdt0.jpg","images":[],"name":"Albedo","seriesId":12},{"id":130,"image":"https://i.imgur.com/2y2pK2I.jpg","images":[],"name":"Alice Nakiri","seriesId":55},{"id":377,"image":"https://i.imgur.com/Qn7UWMW.jpg","images":[],"name":"All Might \\"Toshinori Yagi\\"","seriesId":56},{"id":317,"image":"https://i.imgur.com/8XhZ8Ai.jpg","images":[],"name":"Anjou","seriesId":103},{"id":119,"image":"https://i.imgur.com/cnlLuv9.jpg","images":[],"name":"Ann \\"Panther\\" Takamaki","seriesId":52},{"id":451,"image":"https://i.imgur.com/XZz58d1.jpg","images":[],"name":"Anzu \\"Téa Gardner\\" Mazaki","seriesId":142},{"id":47,"image":"https://i.imgur.com/cCy2CB2.jpg","images":[],"name":"Aquarius","seriesId":24},{"id":350,"image":"https://i.imgur.com/zjcf7BF.jpg","images":[],"name":"Arataka Reigen","seriesId":115},{"id":106,"image":"https://i.imgur.com/9QoceWQ.jpg","images":[],"name":"Archer","seriesId":46},{"id":427,"image":"https://i.imgur.com/MR3emu2.jpg","images":[],"name":"Armin Arlert","seriesId":136},{"id":163,"image":"https://i.imgur.com/tvzTNI5.jpg","images":[],"name":"Arsene Lupin III","seriesId":63},{"id":321,"image":"https://i.imgur.com/p2oEyL1.jpg","images":[],"name":"Asirpa","seriesId":18},{"id":331,"image":"https://i.imgur.com/Mxh5eLg.jpg","images":[],"name":"Asta \\"Asta Sutaria\\"","seriesId":107},{"id":347,"image":"https://i.imgur.com/dqZl7GH.jpg","images":[],"name":"Asuka \\"Rupture\\" Ootorii","seriesId":112},{"id":392,"image":"https://i.imgur.com/cx7eybc.jpg","images":[],"name":"Atsushi Murasakibara","seriesId":121},{"id":244,"image":"https://i.imgur.com/XAVtdP9.jpg","images":[],"name":"Atsushi Nakajima","seriesId":92},{"id":252,"image":"https://i.imgur.com/rSqzjha.jpg","images":[],"name":"Ayame Sarutobi","seriesId":93},{"id":353,"image":"https://i.imgur.com/Jvj2nVA.jpg","images":[],"name":"Bang \\"Silver Fang\\"","seriesId":65},{"id":288,"image":"https://i.imgur.com/VnUCeYS.jpg","images":[],"name":"Baraggan Louisenbairn","seriesId":22},{"id":22,"image":"https://i.imgur.com/qRWfMKQ.jpg","images":[],"name":"Bayonetta","seriesId":17},{"id":322,"image":"https://i.imgur.com/2sylQm8.jpg","images":[],"name":"Beelzebub","seriesId":104},{"id":178,"image":"https://i.imgur.com/tXXCZUq.jpg","images":[],"name":"Beerus \\"God of Destruction\\"","seriesId":67},{"id":11,"image":"https://i.imgur.com/NTkNb9T.jpg","images":[{"url":"https://i.imgur.com/zQa4bKq.jpg"},{"url":"https://i.imgur.com/vsTz636.jpg"},{"url":"https://i.imgur.com/NBbfc5k.png"}],"name":"Bishamonten","seriesId":6},{"id":94,"image":"https://i.imgur.com/Dgxwcbd.jpg","images":[],"name":"Bocchi Hitori","seriesId":42},{"id":66,"image":"https://i.imgur.com/StaXFpY.jpg","images":[],"name":"Brook \\"Soul King\\"","seriesId":21},{"id":224,"image":"https://i.imgur.com/Tjavfku.jpg","images":[],"name":"Bruno \\"Bucciarati\\" Buccellati","seriesId":81},{"id":204,"image":"https://i.imgur.com/YTBsQwU.jpg","images":[],"name":"Byakuya Kuchiki","seriesId":22},{"id":74,"image":"https://i.imgur.com/5qmtJmp.jpg","images":[],"name":"C.C. \\"C2\\"","seriesId":33},{"id":314,"image":"https://i.imgur.com/g6gCB1f.png","images":[],"name":"Carmilla","seriesId":101},{"id":328,"image":"https://i.imgur.com/6o1u25J.jpg","images":[],"name":"Casca","seriesId":5},{"id":103,"image":"https://i.imgur.com/Ah7d30O.jpg","images":[],"name":"Caster \\"Medea\\"","seriesId":46},{"id":126,"image":"https://i.imgur.com/PxWnLsF.jpg","images":[],"name":"Celty Sturluson","seriesId":54},{"id":124,"image":"https://i.imgur.com/FyYSfwS.jpg","images":[],"name":"Centorea Shianus","seriesId":53},{"id":54,"image":"https://i.imgur.com/69qIura.jpg","images":[],"name":"Chamber \\"Tin Can\\"","seriesId":29},{"id":301,"image":"https://i.imgur.com/Out8ifx.jpg","images":[],"name":"Chane Laforet","seriesId":98},{"id":99,"image":"https://i.imgur.com/UZXsSD5.jpg","images":[],"name":"Chie Satonaka","seriesId":47},{"id":65,"image":"https://i.imgur.com/XPsSKbJ.jpg","images":[],"name":"Chopper Tony Tony","seriesId":21},{"id":302,"image":"https://i.imgur.com/WiDDhSG.jpg","images":[],"name":"Claire \\"Vino, Felix Walken\\" Stanfield","seriesId":98},{"id":78,"image":"https://i.imgur.com/lJtELjS.jpg","images":[],"name":"Clare","seriesId":35},{"id":212,"image":"https://i.imgur.com/WIx5iEe.jpg","images":[],"name":"Cobra \\"Joe Gillian\\"","seriesId":10},{"id":234,"image":"https://i.imgur.com/h35KBQM.jpg","images":[],"name":"Conan \\"Kudou Shinichi\\" Edogawa","seriesId":89},{"id":287,"image":"https://i.imgur.com/cOMRiIT.jpg","images":[],"name":"Coyote Starrk","seriesId":22},{"id":283,"image":"https://i.imgur.com/6zWZBNS.jpg","images":[],"name":"Crocodile","seriesId":21},{"id":388,"image":"https://i.imgur.com/sEMQ7hc.jpg","images":[],"name":"Daiki Aomine","seriesId":121},{"id":164,"image":"https://i.imgur.com/SYJ5UrL.jpg","images":[],"name":"Daisuke Jigen","seriesId":63},{"id":396,"image":"https://i.imgur.com/Nf0BJMt.jpg","images":[],"name":"Diavolo \\"Boss, Soliddo Nazo\\"","seriesId":81},{"id":109,"image":"https://i.imgur.com/akFHhlw.jpg","images":[{"url":"https://i.imgur.com/YUZBYMq.jpg"},{"url":"https://i.imgur.com/XtBTbfS.jpg"}],"name":"Dio Brando","seriesId":48},{"id":266,"image":"https://i.imgur.com/FI54zbY.jpg","images":[],"name":"Doflamingo Donquixote","seriesId":21},{"id":246,"image":"https://i.imgur.com/u4vYoab.jpg","images":[],"name":"Doppo Kunikida","seriesId":92},{"id":194,"image":"https://i.imgur.com/cE7XBpB.jpg","images":[],"name":"Dr. Necro","seriesId":79},{"id":242,"image":"https://i.imgur.com/i5DZxyb.jpg","images":[],"name":"Duke \\"Golgo 13\\" Togo","seriesId":91},{"id":376,"image":"https://i.imgur.com/GHby8c9.jpg","images":[],"name":"Ebisu","seriesId":6},{"id":188,"image":"https://i.imgur.com/S96jdf0.jpg","images":[],"name":"Eikichi Onizuka","seriesId":73},{"id":369,"image":"https://i.imgur.com/PG7mPdT.jpg","images":[],"name":"Emma","seriesId":117},{"id":413,"image":"https://i.imgur.com/JAFosQd.jpg","images":[],"name":"Emma","seriesId":129},{"id":315,"image":"https://i.imgur.com/nrTmTKJ.jpg","images":[],"name":"Emu \\"Hǔ Qinglán\\" Hino","seriesId":100},{"id":423,"image":"https://i.imgur.com/kgP5aSL.jpg","images":[],"name":"Eren Yeager","seriesId":136},{"id":128,"image":"https://i.imgur.com/PEx5z7Y.jpg","images":[],"name":"Erina \\"God\'s Tongue\\" Nakiri","seriesId":55},{"id":422,"image":"https://i.imgur.com/moz14tc.jpg","images":[],"name":"Erwin Smith","seriesId":136},{"id":43,"image":"https://i.imgur.com/rwiy0S0.jpg","images":[],"name":"Erza \\"Titania\\" Scarlet","seriesId":24},{"id":340,"image":"https://i.imgur.com/0gMYjJA.jpg","images":[],"name":"Evermilion \\"White Princess\\"","seriesId":2},{"id":67,"image":"https://i.imgur.com/s69RGA5.jpg","images":[],"name":"Franky","seriesId":21},{"id":180,"image":"https://i.imgur.com/LsrQ2PL.jpg","images":[],"name":"Frieza","seriesId":67},{"id":171,"image":"https://i.imgur.com/OScW3oA.jpg","images":[],"name":"Fubuki \\"Hellish Blizzard\\"","seriesId":65},{"id":165,"image":"https://i.imgur.com/cXjRefc.jpg","images":[],"name":"Fujiko Mine","seriesId":63},{"id":137,"image":"https://i.imgur.com/mYf0d4s.jpg","images":[],"name":"Fumikage \\"Tsukuyomi\\" Tokoyami","seriesId":56},{"id":430,"image":"https://i.imgur.com/g5JNWXm.png","images":[],"name":"Fuyuki Minami","seriesId":139},{"id":62,"image":"https://i.imgur.com/cqmrT5i.jpg","images":[],"name":"Gaara","seriesId":23},{"id":53,"image":"https://i.imgur.com/YlMZthp.jpg","images":[{"url":"https://i.imgur.com/RmR8CMv.jpg"},{"url":"https://i.imgur.com/Q1bLhEc.jpg"},{"url":"https://i.imgur.com/Jqr0v0f.jpg"}],"name":"Galko","seriesId":28},{"id":172,"image":"https://i.imgur.com/5NZHbxz.jpg","images":[],"name":"Garou \\"Human Monster, Hero Hunter\\"","seriesId":65},{"id":320,"image":"https://i.imgur.com/DqBZn5N.jpg","images":[],"name":"Genjirou Tanigaki","seriesId":18},{"id":170,"image":"https://i.imgur.com/W1ZNDId.jpg","images":[],"name":"Genos \\"Demon Cyborg\\"","seriesId":65},{"id":104,"image":"https://i.imgur.com/NvQbfSp.jpg","images":[],"name":"Gilgamesh \\"Archer\\"","seriesId":46},{"id":49,"image":"https://i.imgur.com/ve04nur.jpg","images":[],"name":"Ginko","seriesId":25},{"id":247,"image":"https://i.imgur.com/hWSsGLc.jpg","images":[],"name":"Gintoki \\"Yorozuya, Shiroyasha\\" Sakata","seriesId":93},{"id":196,"image":"https://i.imgur.com/onYbGUZ.jpg","images":[],"name":"Giorno \\"Haruno Shiobana\\" Giovanna","seriesId":81},{"id":166,"image":"https://i.imgur.com/pwZW0hb.jpg","images":[],"name":"Goemon Ishikawa XIII","seriesId":63},{"id":175,"image":"https://i.imgur.com/0jliWHP.jpg","images":[],"name":"Gokuu \\"Kakarot\\" Son","seriesId":67},{"id":295,"image":"https://i.imgur.com/G6uYdfm.jpg","images":[],"name":"Gon Freecss","seriesId":97},{"id":44,"image":"https://i.imgur.com/iu1DDFW.jpg","images":[],"name":"Gray Fullbuster","seriesId":24},{"id":50,"image":"https://i.imgur.com/sGnruvT.jpg","images":[],"name":"Griffith \\"The White Hawk, The Hawk of Light, Femto\\"","seriesId":5},{"id":56,"image":"https://i.imgur.com/cm3PAyu.jpg","images":[],"name":"Grimmjow Jaegerjaquez","seriesId":22},{"id":307,"image":"https://i.imgur.com/7kdKKdI.jpg","images":[],"name":"Guido Mista","seriesId":81},{"id":8,"image":"https://i.imgur.com/0c3p5VT.jpg","images":[],"name":"Guts","seriesId":5},{"id":276,"image":"https://i.imgur.com/FwIAk8v.jpg","images":[],"name":"Guy Might","seriesId":23},{"id":71,"image":"https://i.imgur.com/v9yrumq.jpg","images":[],"name":"Hachiman Hikigaya","seriesId":31},{"id":400,"image":"https://i.imgur.com/4kYIneM.jpg","images":[],"name":"Hagoromo \\"Yamabuki Otome\\" Gitsune","seriesId":125},{"id":419,"image":"https://i.imgur.com/wluoGWl.jpg","images":[{"url":"https://i.imgur.com/FZLoxPX.jpg"},{"url":"https://i.imgur.com/4DptjMB.jpg"},{"url":"https://i.imgur.com/IFrmX3V.jpg"},{"url":"https://i.imgur.com/HP7jR3E.jpg"},{"url":"https://i.imgur.com/qskRlSf.jpg"}],"name":"Hamyuts Meseta","seriesId":134},{"id":31,"image":"https://i.imgur.com/RAIKFsj.jpg","images":[],"name":"Hancock \\"Snake Princess, Pirate Empress\\" Boa","seriesId":21},{"id":425,"image":"https://i.imgur.com/nmEJtME.jpg","images":[],"name":"Hange Zoë","seriesId":136},{"id":208,"image":"https://i.imgur.com/0IyCaRf.jpg","images":[],"name":"Hanma Baki","seriesId":82},{"id":219,"image":"https://i.imgur.com/R1bbIau.jpg","images":[],"name":"Haruya Iinuma","seriesId":68},{"id":361,"image":"https://i.imgur.com/n7N32pI.jpg","images":[],"name":"Haruya Shiki","seriesId":54},{"id":225,"image":"https://i.imgur.com/MnY3Grz.jpg","images":[],"name":"Hayato \\"Umibouzu, Falcon\\" Ijuuin","seriesId":44},{"id":409,"image":"https://i.imgur.com/Q0Yg0NV.jpg","images":[],"name":"Hazuki \\"Zuki\\" Kakio","seriesId":127},{"id":235,"image":"https://i.imgur.com/dy6u27S.jpg","images":[],"name":"Heiji Hattori","seriesId":89},{"id":428,"image":"https://i.imgur.com/aNsgBX9.jpg","images":[{"url":"https://i.imgur.com/Tc7aRFJ.jpg"},{"url":"https://i.imgur.com/H3WIu4G.jpg"}],"name":"Hestia","seriesId":137},{"id":61,"image":"https://i.imgur.com/dP46RFX.jpg","images":[],"name":"Hinata Hyuuga","seriesId":23},{"id":222,"image":"https://i.imgur.com/ateQ05x.jpg","images":[],"name":"Hinomaru \\"Onimaru\\" Ushio","seriesId":86},{"id":435,"image":"https://i.imgur.com/Ktx4VoU.jpg","images":[],"name":"Hiroshi Agasa","seriesId":89},{"id":187,"image":"https://i.imgur.com/L1DUkTR.jpg","images":[],"name":"Hiroshi Uchiyamada","seriesId":73},{"id":450,"image":"https://i.imgur.com/NF3ouDz.jpg","images":[],"name":"Hiroto \\"Tristan Taylor\\" Honda","seriesId":142},{"id":297,"image":"https://i.imgur.com/R5CduHe.jpg","images":[],"name":"Hisoka Morow","seriesId":97},{"id":255,"image":"https://i.imgur.com/PTkjcB8.jpg","images":[],"name":"Hitagi Senjougahara","seriesId":13},{"id":227,"image":"https://i.imgur.com/UomYvLI.jpg","images":[],"name":"Hitomi Kisugi","seriesId":45},{"id":373,"image":"https://i.imgur.com/zQLavH8.jpg","images":[],"name":"Hiyori Iki","seriesId":6},{"id":346,"image":"https://i.imgur.com/iCicM4f.jpg","images":[],"name":"Hyakkimaru","seriesId":111},{"id":319,"image":"https://i.imgur.com/XlfJDob.jpg","images":[],"name":"Hyakunosuke Ogata","seriesId":18},{"id":32,"image":"https://i.imgur.com/8ymura9.jpg","images":[{"url":"https://i.imgur.com/Q6ta2PR.jpg"},{"url":"https://i.imgur.com/MReySFd.jpg"}],"name":"Ichigo Kurosaki","seriesId":22},{"id":279,"image":"https://i.imgur.com/GcajvU4.jpg","images":[],"name":"Ikkaku Madarame","seriesId":22},{"id":132,"image":"https://i.imgur.com/1Y7KMWx.jpg","images":[],"name":"Ikumi \\"Nikumi\\" Mito","seriesId":55},{"id":273,"image":"https://i.imgur.com/j4EnT68.jpg","images":[],"name":"Ino Yamanaka","seriesId":23},{"id":366,"image":"https://i.imgur.com/OjbBuKE.jpg","images":[],"name":"Ira \\"Impenetrable Shield\\" Gamagoori","seriesId":4},{"id":19,"image":"https://i.imgur.com/WWplfTf.jpg","images":[],"name":"Isaac \\"Zack\\" Foster","seriesId":14},{"id":299,"image":"https://i.imgur.com/8tn6nIB.jpg","images":[],"name":"Isaac Netero","seriesId":97},{"id":368,"image":"https://i.imgur.com/Nf7yrHP.jpg","images":[],"name":"Isabella \\"Mama\\"","seriesId":117},{"id":39,"image":"https://i.imgur.com/Jn2gjSG.jpg","images":[],"name":"Itachi Uchiha","seriesId":23},{"id":360,"image":"https://i.imgur.com/clWjo6M.jpg","images":[],"name":"Izaya Orihara","seriesId":54},{"id":133,"image":"https://i.imgur.com/63g47OM.jpg","images":[],"name":"Izuku \\"Deku\\" Midoriya","seriesId":56},{"id":223,"image":"https://i.imgur.com/I4D5gAG.jpg","images":[],"name":"Jean-Pierre Polnareff","seriesId":50},{"id":264,"image":"https://i.imgur.com/MiQGTzZ.jpg","images":[],"name":"Jinbe \\"Knight of the Sea\\"","seriesId":21},{"id":177,"image":"https://i.imgur.com/6Ki0P5l.jpg","images":[],"name":"Jinzouningen 18-gou \\"Android 18\\"","seriesId":67},{"id":271,"image":"https://i.imgur.com/L44kNfE.jpg","images":[],"name":"Jiraiya \\"Ero-Sennin\\"","seriesId":23},{"id":110,"image":"https://i.imgur.com/WCBl6QP.jpg","images":[],"name":"Jonathan Joestar","seriesId":48},{"id":9,"image":"https://i.imgur.com/0jtjOQD.jpg","images":[],"name":"Joseph Joestar","seriesId":49},{"id":116,"image":"https://i.imgur.com/MXzmXGm.jpg","images":[],"name":"Jousuke Higashikata","seriesId":51},{"id":114,"image":"https://i.imgur.com/jabv6uq.jpg","images":[],"name":"Joutarou Kuujou","seriesId":50},{"id":46,"image":"https://i.imgur.com/q8plpgT.jpg","images":[],"name":"Juvia Lockser","seriesId":24},{"id":2,"image":"https://i.imgur.com/3xdrczj.jpg","images":[{"url":"https://i.imgur.com/QPjrW3P.jpg"},{"url":"https://i.imgur.com/XGaESzm.jpg"},{"url":"https://i.imgur.com/AWT4Pt1.jpg"},{"url":"https://i.imgur.com/KZ708BF.jpg"}],"name":"Kagari Ayaka","seriesId":2},{"id":249,"image":"https://i.imgur.com/D5vkxWL.jpg","images":[],"name":"Kagura","seriesId":93},{"id":356,"image":"https://i.imgur.com/3MdEsOG.jpg","images":[],"name":"Kaguya \\"Berserk\\" Yamai","seriesId":110},{"id":64,"image":"https://i.imgur.com/pKacs1x.jpg","images":[],"name":"Kaguya Ootsutsuki","seriesId":23},{"id":348,"image":"https://i.imgur.com/PDmwb9r.jpg","images":[],"name":"Kaito \\"Phantom Thief, Kaitou Kid\\" Kuroba","seriesId":113},{"id":269,"image":"https://i.imgur.com/OcxAvmD.jpg","images":[],"name":"Kakashi Hatake","seriesId":23},{"id":12,"image":"https://i.imgur.com/GWa7Hj4.jpg","images":[],"name":"Kanako Sumiyoshi","seriesId":8},{"id":226,"image":"https://i.imgur.com/cPigUeu.jpg","images":[],"name":"Kaori Makimura","seriesId":44},{"id":210,"image":"https://i.imgur.com/ZCbveY8.jpg","images":[],"name":"Kaoru Hanayama","seriesId":82},{"id":135,"image":"https://i.imgur.com/XnMfgVg.jpg","images":[],"name":"Katsuki \\"Kacchan\\" Bakugou","seriesId":56},{"id":449,"image":"https://i.imgur.com/NZR9ROt.jpg","images":[],"name":"Katsuya \\"Joey Wheeler\\" Jounouchi","seriesId":142},{"id":174,"image":"https://i.imgur.com/cFI3zad.jpg","images":[],"name":"Kazehana \\"Sekirei No.03\\"","seriesId":66},{"id":374,"image":"https://i.imgur.com/1gAaEjJ.jpg","images":[],"name":"Kazuma","seriesId":6},{"id":211,"image":"https://i.imgur.com/Z0rpSyc.jpg","images":[],"name":"Ken \\"Eyepatch\\" Kaneki","seriesId":83},{"id":35,"image":"https://i.imgur.com/iYknvHR.jpg","images":[],"name":"Kenpachi Zaraki","seriesId":22},{"id":232,"image":"https://i.imgur.com/0vNRMMV.jpg","images":[],"name":"Kenshirou","seriesId":88},{"id":349,"image":"https://i.imgur.com/vDZnGqK.jpg","images":[],"name":"Keroro","seriesId":114},{"id":294,"image":"https://i.imgur.com/4JmugEi.jpg","images":[],"name":"Killua Zoldyck","seriesId":97},{"id":185,"image":"https://i.imgur.com/0iPCFn6.jpg","images":[],"name":"Killy","seriesId":71},{"id":341,"image":"https://i.imgur.com/hK1bnq8.jpg","images":[],"name":"Kirari Momobami","seriesId":32},{"id":6,"image":"https://i.imgur.com/xRWCpHW.jpg","images":[],"name":"Kiryuin Ragyo","seriesId":4},{"id":5,"image":"https://i.imgur.com/hwpbszY.jpg","images":[{"url":"https://i.imgur.com/v9YOjiZ.jpg"},{"url":"https://i.imgur.com/pzYcmPJ.jpg"},{"url":"https://i.imgur.com/tZvmrJv.jpg"},{"url":"https://i.imgur.com/y7QmZng.jpg"},{"url":"https://i.imgur.com/lqdssuQ.jpg"}],"name":"Kiryuin Satsuki","seriesId":4},{"id":285,"image":"https://i.imgur.com/mf2uuMY.jpg","images":[],"name":"Kisame Hoshigaki","seriesId":23},{"id":203,"image":"https://i.imgur.com/eAxPyWu.jpg","images":[],"name":"Kisuke Urahara","seriesId":22},{"id":441,"image":"https://i.imgur.com/khgTgRO.jpg","images":[],"name":"Kitarou","seriesId":141},{"id":198,"image":"https://i.imgur.com/UVIo3hD.jpg","images":[],"name":"Kiyoshi Fujino","seriesId":3},{"id":84,"image":"https://i.imgur.com/vvBiqFS.jpg","images":[],"name":"Kobayashi","seriesId":20},{"id":433,"image":"https://i.imgur.com/XVGwshW.jpg","images":[],"name":"Kogorou \\"Nemuri no Kogorou\\" Mouri","seriesId":89},{"id":139,"image":"https://i.imgur.com/pohKwyn.jpg","images":[],"name":"Kojirou \\"Ganryuu\\" Sasaki","seriesId":57},{"id":420,"image":"https://i.imgur.com/8TpUVBm.jpg","images":[],"name":"Kongou","seriesId":135},{"id":358,"image":"https://i.imgur.com/Dbq4GKe.jpg","images":[],"name":"Kotori \\"Efreet, Flame Spirit\\" Itsuka","seriesId":110},{"id":167,"image":"https://i.imgur.com/bM2aET8.jpg","images":[],"name":"Kouichi \\"Pops\\" Zenigata","seriesId":63},{"id":305,"image":"https://i.imgur.com/blXFasm.jpg","images":[],"name":"Kouichi Hirose","seriesId":51},{"id":257,"image":"https://i.imgur.com/mPdZtzA.jpg","images":[],"name":"Koyomi Araragi","seriesId":13},{"id":375,"image":"https://i.imgur.com/l0Gr6Cs.jpg","images":[],"name":"Kuraha","seriesId":6},{"id":296,"image":"https://i.imgur.com/esbowcj.jpg","images":[],"name":"Kurapika","seriesId":97},{"id":197,"image":"https://i.imgur.com/RA6TxGD.jpg","images":[],"name":"Kurihara \\"Chairman\\"","seriesId":3},{"id":4,"image":"https://i.imgur.com/3BeLYsy.jpg","images":[],"name":"Kurihara Mari","seriesId":3},{"id":77,"image":"https://i.imgur.com/VxtuCuB.jpg","images":[],"name":"Kurisu Makise","seriesId":34},{"id":93,"image":"https://i.imgur.com/dF7kUpB.jpg","images":[],"name":"Kurohime","seriesId":41},{"id":394,"image":"https://i.imgur.com/FHX1U9S.jpg","images":[],"name":"Kurumi","seriesId":122},{"id":342,"image":"https://i.imgur.com/MGZjegs.jpg","images":[],"name":"Kurumi \\"Nightmare\\" Tokisaki","seriesId":110},{"id":381,"image":"https://i.imgur.com/lmjK7Y6.jpg","images":[],"name":"Kyoko Himuro","seriesId":119},{"id":416,"image":"https://i.imgur.com/izwl4HG.jpg","images":[],"name":"Kyousuke \\"Major\\" Hyoubu","seriesId":131},{"id":253,"image":"https://i.imgur.com/oq7z5Yl.jpg","images":[],"name":"Kyuubei Yagyuu","seriesId":93},{"id":415,"image":"https://i.imgur.com/VNiKAqs.jpg","images":[],"name":"L \\"Ryuga Hideki, Ryuzaki\\" Lawliet","seriesId":130},{"id":300,"image":"https://i.imgur.com/qkn5heu.jpg","images":[],"name":"Ladd Russo","seriesId":98},{"id":14,"image":"https://i.imgur.com/CyDl29X.jpg","images":[],"name":"Lady Armaroid","seriesId":10},{"id":207,"image":"https://i.imgur.com/siXJVfe.jpg","images":[],"name":"Last Order \\"Misaka clone No. 20001\\"","seriesId":40},{"id":68,"image":"https://i.imgur.com/cmfpuFA.jpg","images":[],"name":"Law Trafalgar","seriesId":21},{"id":220,"image":"https://i.imgur.com/ZsUgLd4.jpg","images":[],"name":"Legoshi","seriesId":85},{"id":73,"image":"https://i.imgur.com/1aJblNF.jpg","images":[],"name":"Lelouch \\"Lelouch vi Britannia, Zero\\" Lamperouge","seriesId":33},{"id":308,"image":"https://i.imgur.com/ZW0fFYj.jpg","images":[],"name":"Leone Abbacchio","seriesId":81},{"id":424,"image":"https://i.imgur.com/tb9wMXW.jpg","images":[],"name":"Levi","seriesId":136},{"id":414,"image":"https://i.imgur.com/bUI4lcv.jpg","images":[],"name":"Light \\"Kira\\" Yagami","seriesId":130},{"id":113,"image":"https://i.imgur.com/LpoT47F.jpg","images":[],"name":"Lisa Lisa","seriesId":49},{"id":221,"image":"https://i.imgur.com/2svaNjA.jpg","images":[],"name":"Louis","seriesId":85},{"id":45,"image":"https://i.imgur.com/WLzBUod.jpg","images":[],"name":"Lucy Heartfilia","seriesId":24},{"id":30,"image":"https://i.imgur.com/FxZH28x.jpg","images":[],"name":"Luffy \\"Mugiwara, Straw Hat, Lucy\\" Monkey D.","seriesId":21},{"id":15,"image":"https://i.imgur.com/NhTB1af.jpg","images":[],"name":"Macrophage","seriesId":11},{"id":63,"image":"https://i.imgur.com/MC2c5Dy.jpg","images":[],"name":"Madara Uchiha","seriesId":23},{"id":452,"image":"https://i.imgur.com/m0vjk8B.jpg","images":[],"name":"Mai \\"Mai Valentine\\" Kujaku","seriesId":142},{"id":192,"image":"https://i.imgur.com/7l1hlJQ.jpg","images":[],"name":"Maki \\"Air Master\\" Aikawa","seriesId":77},{"id":365,"image":"https://i.imgur.com/VtFJBmG.jpg","images":[],"name":"Mako Mankanshoku","seriesId":4},{"id":120,"image":"https://i.imgur.com/GGMxuKj.jpg","images":[],"name":"Makoto \\"Queen\\" Niijima","seriesId":52},{"id":443,"image":"https://i.imgur.com/llxTL5u.png","images":[],"name":"Mana Inuyama","seriesId":141},{"id":24,"image":"https://i.imgur.com/8Qo8x37.jpg","images":[],"name":"Manji \\"Hundred Man Killer\\"","seriesId":19},{"id":384,"image":"https://i.imgur.com/utyA4J3.jpg","images":[],"name":"Masaru Saiga","seriesId":120},{"id":7,"image":"https://i.imgur.com/Gq8ulAp.jpg","images":[],"name":"Matoi Ryuuko","seriesId":4},{"id":57,"image":"https://i.imgur.com/oA9jhln.jpg","images":[],"name":"Mayuri Kurotsuchi","seriesId":22},{"id":417,"image":"https://i.imgur.com/dYKOb6Y.jpg","images":[],"name":"Megumi Amano","seriesId":132},{"id":129,"image":"https://i.imgur.com/xFt99fI.jpg","images":[],"name":"Megumi Tadokoro","seriesId":55},{"id":407,"image":"https://i.imgur.com/Rgp3d44.jpg","images":[],"name":"Mei Momozono","seriesId":127},{"id":88,"image":"https://i.imgur.com/AU1UI2J.jpg","images":[],"name":"Mephisto \\"Johann Faust V, Samael\\" Pheles","seriesId":38},{"id":298,"image":"https://i.imgur.com/1gmerBa.jpg","images":[],"name":"Meruem","seriesId":97},{"id":122,"image":"https://i.imgur.com/IDRmCOH.jpg","images":[],"name":"Miia","seriesId":53},{"id":426,"image":"https://i.imgur.com/BgiyWVq.jpg","images":[],"name":"Mikasa Ackerman","seriesId":136},{"id":355,"image":"https://i.imgur.com/hfnFtzN.jpg","images":[],"name":"Miku \\"Diva\\" Izayoi","seriesId":110},{"id":21,"image":"https://i.imgur.com/9MEHWVh.jpg","images":[],"name":"Miku Okazaki","seriesId":16},{"id":378,"image":"https://i.imgur.com/3rBsK3O.jpg","images":[],"name":"Minoru \\"Grape Juice\\" Mineta","seriesId":56},{"id":231,"image":"https://i.imgur.com/EAF3HTk.jpg","images":[],"name":"Mitsuki","seriesId":87},{"id":352,"image":"https://i.imgur.com/1mfOyEe.jpg","images":[],"name":"Miyako \\"Mya-nee\\" Hoshino","seriesId":116},{"id":364,"image":"https://i.imgur.com/ECpb6o5.jpg","images":[],"name":"Mizuki \\"Awakusu\'s Red Demon\\" Akabayashi","seriesId":54},{"id":216,"image":"https://i.imgur.com/FD5A21Z.jpg","images":[],"name":"Momo \\"Creati\\" Yaoyorozu","seriesId":56},{"id":16,"image":"https://i.imgur.com/u7va11D.jpg","images":[],"name":"Momonga \\"Ainz Ooal Gown, Momon\\"","seriesId":12},{"id":469,"image":"https://i.imgur.com/7toDpex.jpg","images":[{"url":"https://i.imgur.com/H1VnewC.jpg"},{"url":"https://i.imgur.com/BKGic5j.jpg"},{"url":"https://i.imgur.com/weChkn7.jpg"}],"name":"Motoko \\"Major\\" Kusanagi","seriesId":144},{"id":138,"image":"https://i.imgur.com/QPrBt63.jpg","images":[],"name":"Musashi \\"Shinmen Takezo\\" Miyamoto","seriesId":57},{"id":25,"image":"https://i.imgur.com/UnJgkzi.jpg","images":[],"name":"Nagate Tanikaze","seriesId":20},{"id":26,"image":"https://i.imgur.com/36agf7L.jpg","images":[],"name":"Nami","seriesId":21},{"id":186,"image":"https://i.imgur.com/KHvoxge.jpg","images":[],"name":"Nanashi","seriesId":72},{"id":101,"image":"https://i.imgur.com/51YLncW.jpg","images":[],"name":"Naoto Shirogane","seriesId":47},{"id":309,"image":"https://i.imgur.com/HL9owgg.jpg","images":[],"name":"Narancia Ghirga","seriesId":81},{"id":382,"image":"https://i.imgur.com/iq7yjHt.jpg","images":[],"name":"Narumi Katou","seriesId":120},{"id":37,"image":"https://i.imgur.com/yEIuwDP.jpg","images":[],"name":"Naruto Uzumaki","seriesId":23},{"id":42,"image":"https://i.imgur.com/Cw32b1u.jpg","images":[],"name":"Natsu \\"Salamander\\" Dragneel","seriesId":24},{"id":357,"image":"https://i.imgur.com/gdEFASN.jpg","images":[],"name":"Natsumi \\"Witch\\"","seriesId":110},{"id":442,"image":"https://i.imgur.com/MVhdnkz.jpg","images":[],"name":"Neko Musume","seriesId":141},{"id":201,"image":"https://i.imgur.com/CSdrcAw.png","images":[],"name":"Nelliel \\"Nel\\" Tu Oderschvank","seriesId":22},{"id":445,"image":"https://i.imgur.com/APNY1Uw.jpg","images":[],"name":"Nezumi Otoko \\"Rat Man\\"","seriesId":141},{"id":278,"image":"https://i.imgur.com/bfOIzDt.jpg","images":[],"name":"Nnoitra Gilga","seriesId":22},{"id":333,"image":"https://i.imgur.com/3ytqsHt.jpg","images":[],"name":"Noelle Silva","seriesId":107},{"id":371,"image":"https://i.imgur.com/JtnYjUO.jpg","images":[],"name":"Norman","seriesId":117},{"id":182,"image":"https://i.imgur.com/k7PCjRX.jpg","images":[],"name":"Oboro Shintou","seriesId":69},{"id":217,"image":"https://i.imgur.com/ZQeR5J6.jpg","images":[],"name":"Ochako \\"Uravity\\" Uraraka","seriesId":56},{"id":306,"image":"https://i.imgur.com/DLFBY33.jpg","images":[],"name":"Okuyasu Nijimura","seriesId":51},{"id":379,"image":"https://i.imgur.com/IciCRp5.jpg","images":[],"name":"Onee-san","seriesId":118},{"id":58,"image":"https://i.imgur.com/9XX98Ws.jpg","images":[],"name":"Orihime \\"Hime\\" Inoue","seriesId":22},{"id":316,"image":"https://i.imgur.com/18w47UP.jpg","images":[],"name":"Oriko \\"Okko\\" Seki","seriesId":102},{"id":40,"image":"https://i.imgur.com/gMJAWdX.jpg","images":[],"name":"Orochimaru","seriesId":23},{"id":243,"image":"https://i.imgur.com/JUI1f55.jpg","images":[],"name":"Osamu Dazai","seriesId":92},{"id":272,"image":"https://i.imgur.com/eAe33o1.jpg","images":[],"name":"Pain","seriesId":23},{"id":310,"image":"https://i.imgur.com/GbNUmPg.jpg","images":[],"name":"Pannacotta Fugo","seriesId":81},{"id":453,"image":"https://i.imgur.com/DkqIVNf.jpg","images":[],"name":"Pegasus J. \\"Maximillion Pegasus\\" Crawford","seriesId":142},{"id":123,"image":"https://i.imgur.com/JTFVkrW.jpg","images":[],"name":"Rachnera Arachnera","seriesId":53},{"id":237,"image":"https://i.imgur.com/YVczrgu.jpg","images":[],"name":"Ran Mouri","seriesId":89},{"id":290,"image":"https://i.imgur.com/LmQIe7p.jpg","images":[],"name":"Rangiku Matsumoto","seriesId":22},{"id":181,"image":"https://i.imgur.com/BFaZ00J.jpg","images":[],"name":"Ranna Himawari","seriesId":68},{"id":233,"image":"https://i.imgur.com/TR3QKAc.jpg","images":[],"name":"Raou \\"Ken-Oh\\"","seriesId":88},{"id":370,"image":"https://i.imgur.com/qdxTgwm.jpg","images":[],"name":"Ray","seriesId":117},{"id":214,"image":"https://i.imgur.com/b4YmASG.jpg","images":[],"name":"Rei Miyamoto","seriesId":84},{"id":284,"image":"https://i.imgur.com/kxMaAut.jpg","images":[],"name":"Reiju Vinsmoke","seriesId":21},{"id":345,"image":"https://i.imgur.com/PHG4ONE.jpg","images":[],"name":"Reine Murasame","seriesId":110},{"id":189,"image":"https://i.imgur.com/tDlZzmA.jpg","images":[],"name":"Reinhard von Lohengramm","seriesId":74},{"id":118,"image":"https://i.imgur.com/sefKw1G.jpg","images":[],"name":"Ren \\"Joker\\" Amamiya","seriesId":52},{"id":205,"image":"https://i.imgur.com/LXeLtMD.jpg","images":[],"name":"Renji Abarai","seriesId":22},{"id":280,"image":"https://i.imgur.com/SoaWWM7.jpg","images":[],"name":"Retsu Unohana","seriesId":22},{"id":80,"image":"https://i.imgur.com/qeKX5ch.jpg","images":[],"name":"Rias \\"Buchou\\" Gremory","seriesId":36},{"id":412,"image":"https://i.imgur.com/JKQ1p3H.jpg","images":[],"name":"Rider \\"Bewitching Black Serpent\\"","seriesId":46},{"id":399,"image":"https://i.imgur.com/sV8mZ3y.jpg","images":[],"name":"Rikuo \\"Third Supreme Commander\\" Nura","seriesId":125},{"id":86,"image":"https://i.imgur.com/7poPX27.jpg","images":[],"name":"Rin Okumura","seriesId":38},{"id":107,"image":"https://i.imgur.com/svnAM7A.jpg","images":[],"name":"Rin Toosaka","seriesId":46},{"id":76,"image":"https://i.imgur.com/8Gh4i7f.jpg","images":[],"name":"Rintarou \\"Hououin Kyouma\\" Okabe","seriesId":34},{"id":393,"image":"https://i.imgur.com/GGobBIb.jpg","images":[],"name":"Risotto Nero","seriesId":81},{"id":111,"image":"https://i.imgur.com/bpL03Rf.jpg","images":[],"name":"Robert E. O. Speedwagon","seriesId":48},{"id":27,"image":"https://i.imgur.com/ZWm3fNe.jpg","images":[],"name":"Robin \\"Devil Child, Miss All Sunday\\" Nico","seriesId":21},{"id":275,"image":"https://i.imgur.com/ESLXXHc.jpg","images":[],"name":"Rock Lee","seriesId":23},{"id":112,"image":"https://i.imgur.com/Y77wH2s.jpg","images":[],"name":"Rohan Kishibe","seriesId":51},{"id":304,"image":"https://i.imgur.com/AJSbm05.jpg","images":[],"name":"Rudol von Stroheim","seriesId":49},{"id":97,"image":"https://i.imgur.com/ruZx9r0.jpg","images":[],"name":"Rui Kisugi","seriesId":45},{"id":202,"image":"https://i.imgur.com/QyKhidE.jpg","images":[],"name":"Rukia Kuchiki","seriesId":22},{"id":418,"image":"https://i.imgur.com/3NIapbS.jpg","images":[],"name":"Rushuna \\"Grenadier\\" Tendou","seriesId":133},{"id":131,"image":"https://i.imgur.com/evKIEPa.jpg","images":[],"name":"Ryou Kurokiba","seriesId":55},{"id":96,"image":"https://i.imgur.com/puenEw7.jpg","images":[],"name":"Ryou Saeba","seriesId":44},{"id":390,"image":"https://i.imgur.com/4TMHMJR.jpg","images":[],"name":"Ryouta Kise","seriesId":121},{"id":245,"image":"https://i.imgur.com/YO2N4SZ.jpg","images":[],"name":"Ryuunosuke Akutagawa","seriesId":92},{"id":108,"image":"https://i.imgur.com/xeHzTjY.jpg","images":[],"name":"Saber","seriesId":46},{"id":121,"image":"https://i.imgur.com/2tAenZe.jpg","images":[],"name":"Sae Niijima","seriesId":52},{"id":98,"image":"https://i.imgur.com/JRcU8Uv.jpg","images":[],"name":"Saeko \\"Sayaka\\" Nogami","seriesId":44},{"id":213,"image":"https://i.imgur.com/vJ6KRFZ.jpg","images":[],"name":"Saeko Busujima","seriesId":84},{"id":274,"image":"https://i.imgur.com/reBVgAI.jpg","images":[],"name":"Sai","seriesId":23},{"id":23,"image":"https://i.imgur.com/FT9mPXZ.jpg","images":[],"name":"Saichi \\"The Immortal\\" Sugimoto","seriesId":18},{"id":169,"image":"https://i.imgur.com/2NKSoPw.jpg","images":[],"name":"Saitama","seriesId":65},{"id":238,"image":"https://i.imgur.com/UVCmNXA.jpg","images":[],"name":"Sakamichi Onoda","seriesId":90},{"id":60,"image":"https://i.imgur.com/tMYttYN.jpg","images":[],"name":"Sakura Haruno","seriesId":23},{"id":28,"image":"https://i.imgur.com/nZrP7st.jpg","images":[],"name":"Sanji \\"Black Leg, Mr. Prince\\"","seriesId":21},{"id":230,"image":"https://i.imgur.com/hhMMvZP.jpg","images":[],"name":"Sarada Uchiha","seriesId":87},{"id":38,"image":"https://i.imgur.com/7VMhgCo.jpg","images":[],"name":"Sasuke Uchiha","seriesId":23},{"id":20,"image":"https://i.imgur.com/683Ik90.jpg","images":[],"name":"Satellizer \\"The Untouchable Queen\\" el Bridget","seriesId":15},{"id":215,"image":"https://i.imgur.com/N4zvxx9.jpg","images":[],"name":"Saya Takagi","seriesId":84},{"id":190,"image":"https://i.imgur.com/Xcy3Wra.jpg","images":[],"name":"Seigen Irako","seriesId":75},{"id":389,"image":"https://i.imgur.com/SlbZkXG.jpg","images":[],"name":"Seijuurou Akashi","seriesId":121},{"id":55,"image":"https://i.imgur.com/XTXriWl.jpg","images":[{"url":"https://i.imgur.com/ieVxXSc.jpg"},{"url":"https://i.imgur.com/0rMkx6L.jpg"},{"url":"https://i.imgur.com/MHyKgkl.jpg"}],"name":"Selvaria \\"War Witch\\" Bles","seriesId":30},{"id":323,"image":"https://i.imgur.com/3u7SSaa.jpg","images":[],"name":"Senpai","seriesId":105},{"id":91,"image":"https://i.imgur.com/yyv8gx6.jpg","images":[],"name":"Sesshoumaru","seriesId":39},{"id":448,"image":"https://i.imgur.com/jQbwo6G.jpg","images":[],"name":"Seto Kaiba","seriesId":142},{"id":1,"image":"https://i.imgur.com/jLwdACg.jpg","images":[],"name":"Shidare Hotaru","seriesId":1},{"id":90,"image":"https://i.imgur.com/AfWIvkA.jpg","images":[],"name":"Shiemi Moriyama","seriesId":38},{"id":281,"image":"https://i.imgur.com/cmy9kXy.jpg","images":[],"name":"Shigekuni Yamamoto-Genryuusai","seriesId":22},{"id":351,"image":"https://i.imgur.com/qwZSoqC.jpg","images":[],"name":"Shigeo \\"Mob, White T-Poison\\" Kageyama","seriesId":115},{"id":270,"image":"https://i.imgur.com/gxJc3KU.jpg","images":[],"name":"Shikamaru Nara","seriesId":23},{"id":82,"image":"https://i.imgur.com/h7wwEf3.jpg","images":[],"name":"Shimei Ryomou","seriesId":37},{"id":18,"image":"https://i.imgur.com/YymnlMK.jpg","images":[],"name":"Shinobu \\"Kiss-shot Acerola-orion Heart-under-blade\\" Oshino","seriesId":13},{"id":248,"image":"https://i.imgur.com/ZvG5yjG.jpg","images":[],"name":"Shinpachi Shimura","seriesId":93},{"id":359,"image":"https://i.imgur.com/0RAp5aj.jpg","images":[],"name":"Shinra Kishitani","seriesId":54},{"id":251,"image":"https://i.imgur.com/jpmyrWy.jpg","images":[],"name":"Shinsuke Takasugi","seriesId":93},{"id":391,"image":"https://i.imgur.com/HD8JQAR.jpg","images":[],"name":"Shintarou Midorima","seriesId":121},{"id":291,"image":"https://i.imgur.com/leCZLm7.jpg","images":[],"name":"Shirahoshi \\"Mermaid Princess\\"","seriesId":21},{"id":3,"image":"https://i.imgur.com/5hLv07N.jpg","images":[{"url":"https://i.imgur.com/9xMWW31.jpg"},{"url":"https://i.imgur.com/WnJqE9A.jpg"},{"url":"https://i.imgur.com/lMnNnw5.jpg"},{"url":"https://i.imgur.com/wzhVveq.jpg"},{"url":"https://i.imgur.com/i5exzn6.jpg"},{"url":"https://i.imgur.com/3OpScm1.jpg"}],"name":"Shiraki Meiko","seriesId":3},{"id":383,"image":"https://i.imgur.com/UXv009I.jpg","images":[],"name":"Shirogane \\"Eleonore\\" Saiga","seriesId":120},{"id":105,"image":"https://i.imgur.com/9KkKcUh.jpg","images":[],"name":"Shirou Emiya","seriesId":46},{"id":70,"image":"https://i.imgur.com/hliVzd8.jpg","images":[],"name":"Shizuka Hiratsuka","seriesId":31},{"id":125,"image":"https://i.imgur.com/pK38qJo.jpg","images":[],"name":"Shizuo Heiwajima","seriesId":54},{"id":240,"image":"https://i.imgur.com/ZjiuM8S.jpg","images":[],"name":"Shoukichi \\"Speed Star of Naniwa\\" Naruko","seriesId":90},{"id":303,"image":"https://i.imgur.com/n8Fyvsv.jpg","images":[],"name":"Shouko Komi","seriesId":99},{"id":184,"image":"https://i.imgur.com/LNPTAhG.jpg","images":[],"name":"Shouko Nishimiya","seriesId":70},{"id":218,"image":"https://i.imgur.com/FMm1PaW.jpg","images":[],"name":"Shouta \\"Eraserhead\\" Aizawa","seriesId":56},{"id":134,"image":"https://i.imgur.com/w1QiOSd.jpg","images":[],"name":"Shouto Todoroki","seriesId":56},{"id":206,"image":"https://i.imgur.com/VQnJ8rr.jpg","images":[],"name":"Shunsui Kyouraku","seriesId":22},{"id":241,"image":"https://i.imgur.com/hGqJGoH.jpg","images":[],"name":"Shunsuke Imaizumi","seriesId":90},{"id":89,"image":"https://i.imgur.com/Jq8AJzx.jpg","images":[],"name":"Shura Kirigakure","seriesId":38},{"id":267,"image":"https://i.imgur.com/EvVvd3T.jpg","images":[],"name":"Smoker","seriesId":21},{"id":59,"image":"https://i.imgur.com/o5bF7Ln.jpg","images":[],"name":"Soi Fon","seriesId":22},{"id":127,"image":"https://i.imgur.com/Tr26Qg3.jpg","images":[],"name":"Souma Yukihira","seriesId":55},{"id":33,"image":"https://i.imgur.com/mGMQOO7.jpg","images":[],"name":"Sousuke Aizen","seriesId":22},{"id":367,"image":"https://i.imgur.com/7DkteiF.jpg","images":[],"name":"Tabira","seriesId":112},{"id":387,"image":"https://i.imgur.com/uBmJAeK.jpg","images":[],"name":"Taiga Kagami","seriesId":121},{"id":421,"image":"https://i.imgur.com/SpzTUIQ.jpg","images":[],"name":"Takao \\"Tsundere Heavy Cruiser\\"","seriesId":135},{"id":199,"image":"https://i.imgur.com/qarKA1x.jpg","images":[],"name":"Takehito \\"Gakuto\\" Morokuzu","seriesId":3},{"id":52,"image":"https://i.imgur.com/dSu2COt.jpg","images":[],"name":"Takizawa Kyouko","seriesId":27},{"id":380,"image":"https://i.imgur.com/CvlsEwg.jpg","images":[],"name":"Tamama","seriesId":114},{"id":431,"image":"https://i.imgur.com/jlQFPj8.jpg","images":[],"name":"Tanya \\"Devil of the Rhine\\" Degurechaff","seriesId":140},{"id":268,"image":"https://i.imgur.com/REFr9AE.jpg","images":[],"name":"Tashigi","seriesId":21},{"id":286,"image":"https://i.imgur.com/cy2676p.jpg","images":[],"name":"Temari","seriesId":23},{"id":79,"image":"https://i.imgur.com/Bjtv3M1.jpg","images":[],"name":"Teresa \\"Teresa of the Faint Smile\\"","seriesId":35},{"id":386,"image":"https://i.imgur.com/Rd1NSoF.jpg","images":[],"name":"Tetsuya \\"The Phantom Sixth Member\\" Kuroko","seriesId":121},{"id":339,"image":"https://i.imgur.com/BkELoMN.jpg","images":[],"name":"Thorfinn \\"Karlsefni\\"","seriesId":109},{"id":277,"image":"https://i.imgur.com/GzmiBJk.jpg","images":[],"name":"Tier \\"Halibel\\" Harribel","seriesId":22},{"id":354,"image":"https://i.imgur.com/ngbDYOI.jpg","images":[],"name":"Tooka \\"Princess\\" Yatogami","seriesId":110},{"id":193,"image":"https://i.imgur.com/pJua8m2.jpg","images":[],"name":"Toua Tokuchi","seriesId":78},{"id":250,"image":"https://i.imgur.com/m5SUSXK.jpg","images":[],"name":"Toushirou \\"Demonic Vice-Commander\\" Hijikata","seriesId":93},{"id":289,"image":"https://i.imgur.com/XIokRk1.jpg","images":[],"name":"Toushirou Hitsugaya","seriesId":22},{"id":256,"image":"https://i.imgur.com/ZquHO9Q.jpg","images":[],"name":"Tsubasa Hanekawa","seriesId":13},{"id":173,"image":"https://i.imgur.com/iK9aAZR.jpg","images":[],"name":"Tsukiumi \\"Sekirei No.09\\"","seriesId":66},{"id":254,"image":"https://i.imgur.com/vZCdvXZ.jpg","images":[],"name":"Tsukuyo","seriesId":93},{"id":85,"image":"https://i.imgur.com/nwCkpSm.jpg","images":[],"name":"Tsumugi Shiraui","seriesId":20},{"id":41,"image":"https://i.imgur.com/Q2YwBrF.jpg","images":[],"name":"Tsunade","seriesId":23},{"id":136,"image":"https://i.imgur.com/Nmfr19d.jpg","images":[],"name":"Tsuyu \\"Froppy\\" Asui","seriesId":56},{"id":34,"image":"https://i.imgur.com/IMF965c.jpg","images":[],"name":"Ulquiorra Cifer","seriesId":22},{"id":83,"image":"https://i.imgur.com/F9zny9g.jpg","images":[],"name":"Unchou Kan\'u","seriesId":37},{"id":282,"image":"https://i.imgur.com/lhkW9tM.jpg","images":[],"name":"Uryuu Ishida","seriesId":22},{"id":69,"image":"https://i.imgur.com/BanaH0D.jpg","images":[],"name":"Usopp \\"Sogeking, GodUsopp\\"","seriesId":21},{"id":179,"image":"https://i.imgur.com/pcVU6Bv.jpg","images":[],"name":"Vados","seriesId":67},{"id":329,"image":"https://i.imgur.com/9YQMpQ7.jpg","images":[],"name":"Vanessa \\"The Drunken Witch\\" Enoteca","seriesId":107},{"id":176,"image":"https://i.imgur.com/bDytUuu.jpg","images":[],"name":"Vegeta \\"Prince of All Saiyans\\"","seriesId":67},{"id":236,"image":"https://i.imgur.com/UQonx1k.jpg","images":[],"name":"Vermouth \\"Sharon Vineyard\\"","seriesId":89},{"id":432,"image":"https://i.imgur.com/u3ZcVhe.jpg","images":[],"name":"Viktoriya Ivanovna \\"Visha\\" Serebryakova","seriesId":140},{"id":75,"image":"https://i.imgur.com/VvFClEJ.jpg","images":[],"name":"Villetta \\"Chigusa\\" Nu","seriesId":33},{"id":395,"image":"https://i.imgur.com/AduEgP3.jpg","images":[],"name":"Vinegar Doppio","seriesId":81},{"id":191,"image":"https://i.imgur.com/LyZQeYb.jpg","images":[],"name":"Violet Evergarden","seriesId":76},{"id":312,"image":"https://i.imgur.com/wB9bLpl.png","images":[],"name":"Vlad \\"Dracula\\" Tepes","seriesId":101},{"id":362,"image":"https://i.imgur.com/v5MgUGH.jpg","images":[],"name":"Vorona \\"Ворона\\"","seriesId":54},{"id":334,"image":"https://i.imgur.com/xGMqJvu.png","images":[],"name":"Witch Queen","seriesId":107},{"id":200,"image":"https://i.imgur.com/dyqaVVG.jpg","images":[],"name":"Xin \\"Shin Li\\" Li","seriesId":9},{"id":330,"image":"https://i.imgur.com/h43z20q.jpg","images":[],"name":"Yami \\"Destruction God\\" Sukehiro","seriesId":107},{"id":446,"image":"https://i.imgur.com/jVw5GhS.jpg","images":[],"name":"Yami Yuugi \\"Pharaoh\\"","seriesId":142},{"id":13,"image":"https://i.imgur.com/5VuqVkF.jpg","images":[],"name":"Yang \\"Mountain King, Yo Tan Wa\\" Duanhe","seriesId":9},{"id":48,"image":"https://i.imgur.com/NBxXvev.jpg","images":[],"name":"Yato","seriesId":6},{"id":408,"image":"https://i.imgur.com/ic7gpET.jpg","images":[],"name":"Yayoi Kuribayashi","seriesId":127},{"id":311,"image":"https://i.imgur.com/lxEtINv.jpg","images":[],"name":"Yo \\"Crying Freeman, Long Taiyáng\\" Hinomura","seriesId":100},{"id":36,"image":"https://i.imgur.com/81rMmeY.jpg","images":[],"name":"Yoruichi Shihouin","seriesId":22},{"id":115,"image":"https://i.imgur.com/1OUzKib.jpg","images":[{"url":"https://i.imgur.com/jtQyqo3.jpg"},{"url":"https://i.imgur.com/isTCbMN.jpg"},{"url":"https://i.imgur.com/cGQPmEu.jpg"}],"name":"Yoshikage \\"Kosaku Kawajiri\\" Kira","seriesId":51},{"id":343,"image":"https://i.imgur.com/UwsIB6o.jpg","images":[],"name":"Yoshino \\"Hermit\\"","seriesId":110},{"id":318,"image":"https://i.imgur.com/nQShgWs.jpg","images":[],"name":"Yoshitake Shiraishi","seriesId":18},{"id":117,"image":"https://i.imgur.com/XHwWe3p.jpg","images":[],"name":"Yukako Yamagishi","seriesId":51},{"id":100,"image":"https://i.imgur.com/ORPpKHN.jpg","images":[],"name":"Yukiko Amagi","seriesId":47},{"id":372,"image":"https://i.imgur.com/HOMAxnK.jpg","images":[],"name":"Yukine","seriesId":6},{"id":87,"image":"https://i.imgur.com/bqTmZO2.jpg","images":[],"name":"Yukio Okumura","seriesId":38},{"id":72,"image":"https://i.imgur.com/IBWsvOe.jpg","images":[],"name":"Yumeko Jabami","seriesId":32},{"id":332,"image":"https://i.imgur.com/jT35Y0F.jpg","images":[],"name":"Yuno \\"Yuno Kurosurii\\"","seriesId":107},{"id":102,"image":"https://i.imgur.com/OOV7Alc.jpg","images":[],"name":"Yuu Narukami","seriesId":47},{"id":447,"image":"https://i.imgur.com/ZoLycAy.jpg","images":[],"name":"Yuugi \\"King Of Games\\" Mutou","seriesId":142},{"id":327,"image":"https://i.imgur.com/hE4AyEB.jpg","images":[],"name":"Yuuko \\"The Dimensional Witch\\" Ichihara","seriesId":106},{"id":183,"image":"https://i.imgur.com/rEdk2va.jpg","images":[],"name":"Yuuna Yunohana","seriesId":69},{"id":344,"image":"https://i.imgur.com/O04cLrL.jpg","images":[],"name":"Yuzuru \\"Berserk\\" Yamai","seriesId":110},{"id":29,"image":"https://i.imgur.com/MjzJZjG.jpg","images":[],"name":"Zoro \\"Pirate Hunter, Marimo\\" Roronoa","seriesId":21}]'),De=JSON.parse('[{"id":1,"name":"Dagashi Kashi"},{"id":2,"name":"Witchcraft Works"},{"id":3,"name":"Prison School"},{"id":4,"name":"Kill La Kill"},{"id":5,"name":"Berserk"},{"id":6,"name":"Noragami"},{"id":8,"name":"Nyan Koi!"},{"id":9,"name":"Kingdom"},{"id":10,"name":"Cobra"},{"id":11,"name":"Hataraku Saibou"},{"id":12,"name":"Overlord"},{"id":13,"name":"Monogatari"},{"id":14,"name":"Satsuriku no Tenshi"},{"id":15,"name":"Freezing"},{"id":16,"name":"Gal Gohan"},{"id":17,"name":"Bayonetta"},{"id":18,"name":"Golden Kamuy"},{"id":19,"name":"Blade of the Immortal"},{"id":20,"name":"Sidonia no Kishi"},{"id":21,"name":"One Piece"},{"id":22,"name":"Bleach"},{"id":23,"name":"Naruto"},{"id":24,"name":"Fairy Tail"},{"id":25,"name":"Mushishi"},{"id":27,"name":"Bijin Onna Joushi Takizawa-san"},{"id":28,"name":"Oshiete! Galko-chan"},{"id":29,"name":"Suisei no Gargantia"},{"id":30,"name":"Senjou no Valkyria"},{"id":31,"name":"Yahari Ore no Seishun Love Comedy wa Machigatteiru."},{"id":32,"name":"Kakegurui"},{"id":33,"name":"Code Geass: Hangyaku no Lelouch"},{"id":34,"name":"Steins;Gate"},{"id":35,"name":"Claymore"},{"id":36,"name":"High School DxD"},{"id":37,"name":"Ikkitousen"},{"id":38,"name":"Ao no Exorcist"},{"id":39,"name":"InuYasha"},{"id":40,"name":"Toaru Majutsu no Index"},{"id":41,"name":"Mahou Tsukai Kurohime"},{"id":42,"name":"Hitoribocchi no ○○ Seikatsu"},{"id":44,"name":"City Hunter"},{"id":45,"name":"Cat\'s Eye"},{"id":46,"name":"Fate/stay night"},{"id":47,"name":"Persona 4"},{"id":48,"name":"JoJo no Kimyou na Bouken Part 1: Phantom Blood"},{"id":49,"name":"JoJo no Kimyou na Bouken Part 2: Sentou Chuuryuu"},{"id":50,"name":"JoJo no Kimyou na Bouken Part 3: Stardust Crusaders"},{"id":51,"name":"JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai"},{"id":52,"name":"Persona 5"},{"id":53,"name":"Monster Musume no Iru Nichijou"},{"id":54,"name":"Durarara!!"},{"id":55,"name":"Shokugeki no Souma"},{"id":56,"name":"Boku no Hero Academia"},{"id":57,"name":"Vagabond"},{"id":63,"name":"Lupin III"},{"id":65,"name":"One Punch Man"},{"id":66,"name":"Sekirei"},{"id":67,"name":"Dragon Ball"},{"id":68,"name":"Rokudou no Onna-tachi"},{"id":69,"name":"Yuragi-sou no Yuuna-san"},{"id":70,"name":"Koe no Katachi"},{"id":71,"name":"Blame!"},{"id":72,"name":"Stranger: Mukou Hadan"},{"id":73,"name":"Great Teacher Onizuka"},{"id":74,"name":"Ginga Eiyuu Densetsu"},{"id":75,"name":"Shigurui"},{"id":76,"name":"Violet Evergarden"},{"id":77,"name":"Air Master"},{"id":78,"name":"One Outs"},{"id":79,"name":"Keyman: The Hand of Judgement"},{"id":81,"name":"JoJo no Kimyou na Bouken Part 5: Ougon no Kaze"},{"id":82,"name":"Grappler Baki"},{"id":83,"name":"Tokyo Ghoul"},{"id":84,"name":"Highschool of the Dead"},{"id":85,"name":"Beastars"},{"id":86,"name":"Hinomaruzumou"},{"id":87,"name":"Boruto"},{"id":88,"name":"Hokuto no Ken"},{"id":89,"name":"Detective Conan"},{"id":90,"name":"Yowamushi Pedal"},{"id":91,"name":"Golgo 13"},{"id":92,"name":"Bungo Stray Dogs"},{"id":93,"name":"Gintama"},{"id":97,"name":"Hunter x Hunter"},{"id":98,"name":"Baccano"},{"id":99,"name":"Komi-san wa, Comyushou desu."},{"id":100,"name":"Crying Freeman"},{"id":101,"name":"Castlevania"},{"id":102,"name":"Wakaokami wa Shougakusei!"},{"id":103,"name":"Yancha Gal no Anjou-san"},{"id":104,"name":"Beelzebub-jou no Okinimesu mama."},{"id":105,"name":"Tejina-senpai"},{"id":106,"name":"xxxHolic"},{"id":107,"name":"Black Clover"},{"id":109,"name":"Vinland Saga"},{"id":110,"name":"Date A Live"},{"id":111,"name":"Dororo"},{"id":112,"name":"Mahou Shoujo Tokushusen Asuka"},{"id":113,"name":"Magic Kaito"},{"id":114,"name":"Keroro Gunsou"},{"id":115,"name":"Mob Psycho 100"},{"id":116,"name":"Watashi ni Tenshi ga Maiorita!"},{"id":117,"name":"Yakusoku no Neverland"},{"id":118,"name":"Danshi Koukousei wo Yashinaitai Onee-san no Hanashi"},{"id":119,"name":"Dear Boys"},{"id":120,"name":"Karakuri Circus"},{"id":121,"name":"Kuroko no Basket"},{"id":122,"name":"Koutetsu Tenshi Kurumi"},{"id":125,"name":"Nurarihyon no Mago"},{"id":127,"name":"Mouse"},{"id":129,"name":"Emma"},{"id":130,"name":"Death Note"},{"id":131,"name":"Zettai Karen Children"},{"id":132,"name":"Amano Megumi wa Sukidarake!"},{"id":133,"name":"Grenadier"},{"id":134,"name":"Tatakau Shisho: The Book of Bantorra"},{"id":135,"name":"Aoki Hagane no Arpeggio: Ars Nova"},{"id":136,"name":"Shingeki no Kyojin"},{"id":137,"name":"Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka"},{"id":139,"name":"Dosanko Gyaru wa Namaramenkoi"},{"id":140,"name":"Youjo Senki"},{"id":141,"name":"Gegege no Kitarou (2018)"},{"id":142,"name":"Yu-Gi-Oh! Duel Monsters"},{"id":144,"name":"Koukaku Kidoutai"}]'),Ee=se`
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
`,ze=se`
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
`;var Ue=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};function Ge(e){const i=De.find((i=>i.id===e));return i?i.name:"(Unknown)"}let Le=class extends re{constructor(){super(...arguments),this.noDeck=!1,this.characters=[],this.deckId="",this.deckName="",this.deckCharacterIds=[],this.search="",this.showOnlySelected=!1,this.feedback=""}static get styles(){return[ze,Ee,...ye,se`
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
      `]}firstUpdated(){this.unsub=ce.subscribe((()=>this.initDeckBuilder())),this.initDeckBuilder(),this.characters=He.map((e=>({...e,seriesName:Ge(e.seriesId)})))}disconnectedCallback(){this.unsub&&this.unsub()}render(){const e=this.search.toLowerCase(),i=this.characters.filter((i=>(i.name.toLowerCase().includes(e)||i.seriesName.toLowerCase().includes(e))&&(!this.showOnlySelected||this.showOnlySelected&&this.deckCharacterIds.includes(i.id))));return this.noDeck?E`
        <div>
          <h2>We couldn't find what you were looking for.</h2>
          <div>
            <glk-router-link .href=${ce.base}
              >Return to Home</glk-router-link
            >
          </div>
        </div>
      `:E`
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

        <div class="feedback">
          ${this.feedback}
        </div>

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
                Showing ${i.length} of ${He.length}
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
            ${Ce(i,(e=>e.id),(e=>{const i=(0,_e.Z)(`${e.name}_${e.id}`),t=[e.image,...e.images.map((e=>e.url))],s=this.deckCharacterIds.includes(e.id);return E`
                  <li
                    key=${e.id}
                    class=${oe("character-item",s&&"character-item--selected")}
                  >
                    <glk-image-cycler
                      .images=${t}
                      .alt=${e.name}
                    ></glk-image-cycler>
                    <div class="glk-control glk-control--checkbox">
                      <label for="${i}" class="glk-control__label">
                        <input
                          type="checkbox"
                          id="${i}"
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
    `}initDeckBuilder(){const e=je.getKey("decks"),i=window.location.search,t=(0,Se.Z)(i).deck;if(!t)return;const s=e.find((e=>e.id===t));s?(this.deckId=t,this.deckName=s.name,this.deckCharacterIds=s.characterIds):this.noDeck=!0}onToggle(e){const i=e.target;this.showOnlySelected=i.checked}onUserInput(e){const i=e.target;this[i.name]=i.value}onToggleCharacter(e){const i=new Set(this.deckCharacterIds);i.delete(e)||i.add(e),this.deckCharacterIds=Array.from(i)}dropDeck(){let e=je.getKey("decks");e=e.filter((e=>e.id!==this.deckId)),je.set({decks:e}),ce.push("/decks")}validateForm(){const e=[];return this.deckName&&this.deckName.trim()||e.push("Deck name is required."),this.deckCharacterIds.length||e.push("Deck requires at least one character."),{success:0===e.length,errorMessages:e}}handleSave(){const e=this.validateForm();if(!e.success)return void(this.feedback=e.errorMessages.join("\n"));this.feedback="";const i=!this.deckId,t=this.deckId||(0,xe.default)(),s={characterIds:this.deckCharacterIds,id:t,name:this.deckName};let a=je.getKey("decks");a=i?[...a,s]:a.map((e=>e.id===t?s:e)),je.set({decks:a}),i&&ce.push(`/decks-builder?deck=${t}`)}onDone(){ce.push("/decks")}};Ue([q({type:Boolean})],Le.prototype,"noDeck",void 0),Ue([q({type:Array})],Le.prototype,"characters",void 0),Ue([q({type:String})],Le.prototype,"deckId",void 0),Ue([q({type:String})],Le.prototype,"deckName",void 0),Ue([q({type:Array})],Le.prototype,"deckCharacterIds",void 0),Ue([q({type:String})],Le.prototype,"search",void 0),Ue([q({type:Boolean})],Le.prototype,"showOnlySelected",void 0),Ue([q({type:String})],Le.prototype,"feedback",void 0),Ue([q({type:Function})],Le.prototype,"unsub",void 0),Le=Ue([Z("glk-decks-builder")],Le);const Fe=se`

  @media (min-width: 768px) {
    :host,
    .card,
    .card__axis,
    .card__front,
    .card__back,
    .card__image {
      --card-width: 103px;
      --card-height: 160px;
    }
  }

  @media (min-width: 479px) and (max-width:767px) {
    :host,
    .card,
    .card__axis,
    .card__front,
    .card__back,
    .card__image {    
      --card-width: 83px;
      --card-height: 130px;
    }
  }

  @media (max-width: 479px) {
    :host,
    .card,
    .card__axis,
    .card__front,
    .card__back,
    .card__image {    
      --card-width: 64px;
      --card-height: 100px;
    }
  }

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
`;var Ve=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let Ye=class extends re{constructor(){super(...arguments),this.image=""}static get styles(){return se`
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
    `}render(){return E`
      <style>
        .card-back__pattern {
          background: url(${this.image});
        }
      </style>
      <div class="card-back__pattern"></div>
    `}};Ve([q({type:String})],Ye.prototype,"image",void 0),Ye=Ve([Z("glk-card-back")],Ye);var Je=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let We=class extends re{constructor(){super(...arguments),this.isFaceUp=!1,this.isHidden=!1,this.shouldHide=!0,this.cardId="",this.name="",this.image="",this.cardBack=""}static get styles(){return Fe}firstUpdated(){const e=be.get();this.shouldHide=e.hideOnMatch}render(){const e=this.isHidden&&this.shouldHide,i=this.isHidden&&!this.shouldHide;if(e)return E``;const t=this.isFaceUp||i,s=this.image?this.image.slice(0).replace(/\.jpg/,"t.jpg"):null;return E`
      <button
        type="button"
        class="card card--clickable ${t?"card--touched":""}"
        @click=${t?null:this.handleClick}
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
    `}handleClick(){const e=new CustomEvent("flipped",{bubbles:!0,composed:!0,detail:{cardId:this.cardId}});this.dispatchEvent(e)}};Je([q({type:Boolean})],We.prototype,"isFaceUp",void 0),Je([q({type:Boolean})],We.prototype,"isHidden",void 0),Je([q({type:Boolean})],We.prototype,"shouldHide",void 0),Je([q({type:String})],We.prototype,"cardId",void 0),Je([q({type:String})],We.prototype,"name",void 0),Je([q({type:String})],We.prototype,"image",void 0),Je([q({type:String})],We.prototype,"cardBack",void 0),We=Je([Z("glk-card")],We);const Ze=se`
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
`,Xe="#fdd87f",qe="#51c2ea",Qe="#2a87ca";var ei=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let ii=class extends re{constructor(){super(...arguments),this.cards=[],this.selected=[],this.removed=[],this.hasMatch=!1,this.cardBack=""}static get styles(){return[se`
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

        ${he(pe.XXS,se`
            :host {
              justify-content: flex-start;
              grid-gap: 6px;
              padding: 4px;
            }
          `)}
      `,Ze]}firstUpdated(){const e=be.get();this.cardBack=function(e){const i=document.createElement("div");return i.innerHTML=function(e){const{strings:i,values:t}=e,s=i.length;let a="";for(let e=0;e<s;e++)a+=i[e]+(t[e]||"");return a}(e),"data:image/svg+xml;base64,"+window.btoa(i.innerHTML)}(function(e){switch(e){case ke.argyle:return E`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="76">
          <g transform="scale(1 1.5)">
            <rect width="99" height="99" fill=${Xe} />
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
              fill=${qe}
            />
            <rect
              width="99"
              height="1"
              transform="translate(0 50) rotate(-45)"
              fill=${qe}
            />
          </g>
        </svg>
      `;case ke.shippo:return E`
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
          <rect width="60" height="60" fill=${Xe} />
          <circle cx="30" cy="30" r="30" fill=${qe} />
          <path
            d="M0 30 A30 30 35 0 0 30 0 A30 30 300 0 0 60 30 A30 30 35 0 0 30 60 A30 30 250 0 0 0 30Z"
            fill=${Xe}
          />
        </svg>
      `;case ke.honeyCombs:return E`
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="100">
          <rect width="56" height="100" fill=${Xe} />
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke=${qe}
            stroke-width="2"
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke=${Qe}
            stroke-width="2"
          />
        </svg>
      `;case ke.chevrons:return E`
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
              fill=${Xe}
              stroke-width="2.5"
              stroke=${qe}
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
      `;case ke.blueprint:return E`
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
          <rect width="30" height="30" fill=${Xe} />
          <g fill=${Qe}>
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
            stroke=${qe}
          />
        </svg>
      `;case ke.subtleDots:default:return E`
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5">
          <rect width="5" height="5" fill=${Xe} />
          <rect width="1" height="1" fill=${qe} />
        </svg>
      `}}(e.cardBack))}render(){const e=2===this.selected.length;return E`
      ${e?E`
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
      ${this.cards.map((e=>{const i=this.removed.includes(e.id),t=this.selected.includes(e.id),s=[t?"glk-card--flipped":"",t&&this.hasMatch?"glk-card--matched":""].join(" ");return E`
          <glk-card
            class="${s}"
            cardId=${e.id}
            name=${e.name}
            .image=${e.image}
            .cardBack=${this.cardBack}
            ?isFaceUp=${t}
            ?isHidden=${i}
          ></glk-card>
        `}))}
    `}};ei([q({type:Array})],ii.prototype,"cards",void 0),ei([q({type:Array})],ii.prototype,"selected",void 0),ei([q({type:Array})],ii.prototype,"removed",void 0),ei([q({type:Boolean})],ii.prototype,"hasMatch",void 0),ei([q({type:String})],ii.prototype,"cardBack",void 0),ii=ei([Z("glk-card-grid")],ii);var ti=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let si=class extends re{constructor(){super(...arguments),this.streak=0,this.uppedStreak=!1,this.timer=0}static get styles(){return se`
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
    `}updated(e){const i=e.has("streak"),t=e.get("streak")||0;i&&this.streak>t&&(this.uppedStreak=!0,this.setPulse())}render(){const e=this.streak>0,i=`${this.streak}x streak`;return E`
      <div class="text-effect ${e?"":"text-effect--off"}">
        <div
          class="neon ${this.uppedStreak?"pulse":""}"
          data-text="${i}"
        >
          ${i}
        </div>
        <div class="gradient"></div>
        <div class="spotlight"></div>
      </div>
    `}setPulse(){clearTimeout(this.timer),this.timer=window.setTimeout((()=>{this.uppedStreak=!1}),1250)}};ti([q({type:Number})],si.prototype,"streak",void 0),ti([q({type:Boolean})],si.prototype,"uppedStreak",void 0),ti([q({type:Number})],si.prototype,"timer",void 0),si=ti([Z("glk-streak")],si);var ai=t(149);function ri(e){const i=[e.image,...e.images.map((e=>e.url))];return(0,ai.Z)(i).pop()}const oi=e=>({characterId:e.id,id:(0,xe.default)(),image:e.image,name:e.name});var ni=t(889);const mi=new class{constructor(){this.interval=0,this.paused=!0,this.gameTime=0,this.callback=()=>null}get time(){return this.formatTime(this.gameTime)}get isPaused(){return this.paused}formatTime(e){const i=Math.floor(e/60),t=e%60;return`${(0,ni.default)(i,2)}m ${(0,ni.default)(t,2)}s`}subscribe(e){return this.callback=e,this.reset(),this.start(),()=>{const e=this.gameTime;return this.callback=()=>null,this.reset(),e}}start(){this.paused=!1,clearInterval(this.interval),this.interval=window.setInterval((()=>{this.gameTime+=1,this.callback(this.time)}),1e3)}stop(){this.paused=!0,clearInterval(this.interval)}reset(){this.stop(),this.gameTime=0}};var di=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};const ci=se`
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
`;let gi=class extends re{constructor(){super(...arguments),this.turns=[],this.timer=0,this.inGame=!1,this.timeElapsed="00m 00s",this.gameSummary=[],this.hasMatch=!1,this.pairs=[],this.choices=[],this.cards=[],this.unsubTimer=()=>0}static get styles(){return se`
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
      ${he(pe.XS,ci)}
      ${he(pe.XXS,ci)}
    `}render(){const e=this.pairs.length,i=e?e/2:0,t=this.gameSummary.length>0,s=this.getCurrentStreak(),a=e=>E`
      <div class="${e}">
        <div class="game-bar__data">${this.timeElapsed}</div>
        <div class="game-bar__data">${i} Pairs found</div>
      </div>
    `;return E`
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
        ${this.inGame?E`
              <div class="content__streak">
                ${a("for-small")}
                <glk-streak streak=${s}></glk-streak>
              </div>
            `:""}
      </div>

      <div class="content">
        ${t?E`
              <div class="summary">
                ${this.gameSummary.map((e=>E` <div>${e}</div> `))}
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
    `}newGame(){this.gameSummary=[],this.turns=[],this.choices=[],this.cards=function(){const e=je.getKey("decks"),i=be.get();let t=He;const s=e.find((e=>e.id===i.deckId));s&&(t=He.filter((e=>s.characterIds.includes(e.id))));const a=(0,ai.Z)(t).slice(0,i.startingPairs).map((e=>({...e,image:ri(e)}))),r=[...a,...a];return(0,ai.Z)(r).map(oi)}(),this.inGame=!0,this.unsubTimer=mi.subscribe((e=>this.timeElapsed=e))}endGame(e=!1){const i=this.unsubTimer(),t=this.pairs.length/2,s=this.turns.length,a=this.getLongestStreak();if(this.inGame=!1,this.pairs=[],this.turns=[],this.choices=this.cards.map((e=>e.id)),this.gameSummary=[e?"You found all the pairs!":"Quitters always quit.",`${t} pairs found in ${mi.formatTime(i)}`,`${a} was your longest match streak`],e){const e=je.getKey("history");je.set({history:[...e,{datetime:(new Date).getTime(),longestStreak:a,pairs:t,timeElapsed:i,turns:s}]})}}onCardFlip(e){if(2===this.choices.length)return;const i=e.detail;!this.choices.includes(i.cardId)&&(this.choices=[...this.choices,i.cardId],this.checkCards())}checkCards(){if(2!==this.choices.length)return;const e=this.choices.map((e=>{const i=this.cards.find((i=>i.id===e));if(i)return i.characterId})),i=this.turns.slice(0),t=1===new Set(e).size;this.hasMatch=t,clearTimeout(this.timer),this.timer=window.setTimeout((()=>{t&&(this.pairs=[...this.pairs,...this.choices]),this.turns=[...i,{number:i.length+1,isMatch:t}],this.choices=[],this.hasMatch=!1,this.checkGameState()}),1500)}checkGameState(){this.cards.length===this.pairs.length&&0!==this.pairs.length&&this.endGame(!0)}getCurrentStreak(){return this.turns.slice(0).reverse().reduce(((e,i)=>{const t=e.isBroken||!i.isMatch;return{streak:t?e.streak:e.streak+1,isBroken:t}}),{streak:0,isBroken:!1}).streak}getLongestStreak(){return this.turns.slice(0).reduce(((e,i)=>{const t=i.isMatch?e.streak+1:0;return{streak:t,longest:t>e.longest?t:e.longest}}),{longest:0,streak:0}).longest}};di([q({type:Array})],gi.prototype,"turns",void 0),di([q({type:Number})],gi.prototype,"timer",void 0),di([q({type:Boolean})],gi.prototype,"inGame",void 0),di([q({type:String})],gi.prototype,"timeElapsed",void 0),di([q({type:Array})],gi.prototype,"gameSummary",void 0),di([q({type:Boolean})],gi.prototype,"hasMatch",void 0),di([q({type:Array})],gi.prototype,"pairs",void 0),di([q({type:Array})],gi.prototype,"choices",void 0),di([q({type:Array})],gi.prototype,"cards",void 0),di([q({type:Function})],gi.prototype,"unsubTimer",void 0),gi=di([Z("glk-home")],gi);var li=t(293),ui=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};const pi=Object.keys(ke);let hi=class extends re{constructor(){super(...arguments),this.decks=[],this.startingPairs=0,this.cardBack=ke.subtleDots,this.deckId="",this.hideOnMatch=!0}static get styles(){return[ze,Ee,se`
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
        ${he(pe.XS,se`
            form {
              width: 75%;
            }
          `)}
        ${he(pe.XXS,se`
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
      `]}firstUpdated(){const e=be.get();this.decks=je.getKey("decks"),this.startingPairs=e.startingPairs,this.cardBack=e.cardBack,this.hideOnMatch=e.hideOnMatch,this.deckId=e.deckId}render(){const e=this.isValidForm(),i=e.success,t=e.messages;return E`
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
              ${pi.map((e=>E`
                  <option value=${e} ?selected=${e===this.cardBack}
                    >${(0,li.fg)(e)}</option
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
              ${this.decks.map((e=>E`
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
              ?disabled=${!i}
              @press=${this.handleSave}
            >
              Save
            </glk-button>
          </div>
          ${t?E`
                <div class="message">
                  ${t}
                </div>
              `:""}
        </form>
      </div>
    `}onUserInput(e){const i=e.target,t=Number(i.value);this.startingPairs=t}onSelect(e){const i=e.target,t=i.name;"cardBack"===t?this.cardBack=i.value:"deckId"===t&&(this.deckId=i.value)}onToggle(e){const i=e.target;this.hideOnMatch=i.checked}isValidForm(){const e=[],i=this.startingPairs>=1&&this.startingPairs<=26;i||e.push("Starting pairs must be 1 <= n <= 26");const t=this.decks.find((e=>e.id===this.deckId)),s=!t||t.characterIds.length>=this.startingPairs;return s||e.push("The deck chosen has fewer characters than the number of pairs requested."),{messages:e.join("\r\n"),success:i&&s}}handleSave(e){e.preventDefault(),this.isValidForm().success&&(be.set({cardBack:this.cardBack,deckId:this.deckId,hideOnMatch:this.hideOnMatch,startingPairs:this.startingPairs}),ce.push("/"))}};ui([q({type:Array})],hi.prototype,"decks",void 0),ui([q({type:Number})],hi.prototype,"startingPairs",void 0),ui([q({type:String})],hi.prototype,"cardBack",void 0),ui([q({type:String})],hi.prototype,"deckId",void 0),ui([q({type:Boolean})],hi.prototype,"hideOnMatch",void 0),hi=ui([Z("glk-options")],hi);var fi=t(787),yi=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let ki=class extends re{constructor(){super(...arguments),this.show=!1,this.direction=0}static get styles(){return se`
      .icon {
        display: inline-block;
        margin: 0 5px;
      }
    `}render(){if(!this.direction||!this.show)return E``;const e=1===this.direction?"▲︎":"▼︎";return E` <span class="icon">${e}</span> `}};yi([q({type:Boolean})],ki.prototype,"show",void 0),yi([q({type:Number})],ki.prototype,"direction",void 0),ki=yi([Z("glk-sort-icon")],ki);var vi=t(859);const bi=new Map([["timeElapsed",{props:["timeElapsed","pairs"],orders:e=>e>0?["asc","desc"]:["desc","asc"]}],["datetime",{props:["datetime"],orders:e=>e>0?["asc"]:["desc"]}],["pairs",{props:["pairs","timeElapsed"],orders:e=>e>0?["asc","asc"]:["desc","desc"]}],["longestStreak",{props:["longestStreak","pairs","timeElapsed"],orders:e=>e>0?["asc","desc","desc"]:["desc","asc","asc"]}],["matchAttemptsRatio",{props:["matchAttemptsRatio","timeElapsed","longestStreak"],orders:e=>e>0?["asc","desc","asc"]:["desc","asc","desc"]}]]);var ji=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let Ii=class extends re{constructor(){super(...arguments),this.sortField="matchAttemptsRatio",this.sortOrder=-1,this.history=[]}static get styles(){return[se`
        :host {
          margin: 10px;
        }

        .list {
          display: grid;
          grid-auto-columns: 1fr;

          padding: 0;
          list-style-type: none;
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
        .history__item {
          display: grid;
          grid-template-columns: 50px minmax(180px, 0.25fr) 75px 90px 80px 90px;
          padding: 5px 0;
        }
        .history__item--no-items {
          display: flex;
        }
        .history__item:not(.history__item--header):not(.history__item--no-items):hover {
          background-color: var(--secondary-colour);
        }

        .column-header {
          display: flex;

          align-items: center;
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
        ${he(pe.XS,se`
            .history__item {
              grid-template-columns: 50px 160px 75px 80px 80px 90px;
            }
          `)}
        ${he(pe.XXS,se`
            .history__header {
              flex-direction: column;
            }
            .history__item {
              grid-template-columns: 50px 120px 60px 80px 60px 90px;
            }
          `)}
      `]}firstUpdated(){const e=je.getKey("history");this.history=e.map((e=>({...e,date:(0,fi.Z)(e.datetime),matchAttemptsRatio:0!==e.turns?e.pairs/e.turns:0,timeElapsedDisplay:mi.formatTime(e.timeElapsed)})))}render(){const e=function(e,i,t){const s=bi.get(i);return(0,vi.Z)(e,s.props,s.orders(t))}(this.history,this.sortField,this.sortOrder);return E`
      <section class="history">
        <header class="history__header">
          <h2 class="history__title">Game history</h2>
        </header>
        <ul class="list">
          ${0===this.history.length?E`
                <li class="history__item history__item--no-items">
                  No history found.
                </li>
              `:E`
                <li class="history__item history__item--header">
                  <div class="column-header">#</div>
                  <div class="column-header">
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
                  </div>
                  <div class="column-header">
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
                  </div>
                  <div class="column-header">
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
                  </div>
                  <div class="column-header">
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
                  </div>
                  <div class="column-header">
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
                  </div>
                </li>
              `}
          ${e.map(((e,i)=>E`
              <li class="history__item">
                <div>${this.itemNumber(i)}</div>
                <div>
                  ${e.date}
                </div>
                <div class="align-right">${e.pairs}</div>
                <div class="align-right">${e.timeElapsedDisplay}</div>
                <div class="align-right">${e.longestStreak}</div>
                <div class="align-right">
                  ${e.matchAttemptsRatio.toFixed(2)}
                </div>
              </li>
            `))}
        </ul>
      </section>
    `}itemNumber(e){return`#${(0,ni.default)(e+1,3)}`}handleSort(e){this.sortField===e&&(this.sortOrder=1===this.sortOrder?-1:1),this.sortField=e}};ji([q({type:Array})],Ii.prototype,"sortField",void 0),ji([q({type:Array})],Ii.prototype,"sortOrder",void 0),ji([q({type:Array})],Ii.prototype,"history",void 0),Ii=ji([Z("glk-scores")],Ii);var wi=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let Si=class extends re{constructor(){super(...arguments),this.routeKey=""}firstUpdated(){ce.subscribe((({key:e})=>this.routeKey=e))}render(){let e=ce.currentRoute;return e||(e={name:"404",render:()=>E`
          <h2>We couldn't find what you were looking for.</h2>
          <div>
            <glk-router-link .href=${ce.base}
              >Return to Home</glk-router-link
            >
          </div>
        `,url:""}),e.render(this.routeKey)}};wi([q({type:String})],Si.prototype,"routeKey",void 0),Si=wi([Z("glk-router-view")],Si);var xi=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o};let _i=class extends re{constructor(){super(...arguments),this.text="",this.delay=750,this.allowWrapping=!1,this.usePosition=!1,this.timer=0,this.isHovered=!1,this.at=[]}static get styles(){return se`
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

      ${he(pe.XXS,se`
          .tooltip__content--fixed {
            left: 5px !important;
          }
        `)}

      .tooltip--hovered .tooltip__content {
        visibility: visible;
        opacity: 1;
      }
    `}render(){const[e,i,t]=this.at,s=t?{transform:`translateX(${t}px)`}:{},a=this.usePosition?{top:i,left:e,bottom:"unset",...s}:{...s},r=(o=a,Object.keys(o).reduce(((e,i)=>`${e}${i}: ${o[i]};`),""));var o;return E`
      <div
        class=${oe("tooltip",this.isHovered&&"tooltip--hovered")}
        @mouseenter=${this.handleEnter}
        @mouseleave=${this.handleLeave}
      >
        <div
          style="${r}"
          class=${oe("tooltip__content",this.allowWrapping&&"tooltip__content--wrap",this.usePosition&&"tooltip__content--fixed")}
        >
          ${this.text}
        </div>
        <slot></slot>
      </div>
    `}handleEnter(e){const{clientX:i,clientY:t}=e,s=this.shadowRoot.querySelector(".tooltip");let a=0;if(s&&s.firstChild){const e=s.getBoundingClientRect(),i=s.firstChild.offsetWidth,t=window.innerWidth-(e.width+e.left);i>e.left+e.width/2?a=-e.left:t<i&&(a=-(i-t))}clearTimeout(this.timer),this.timer=window.setTimeout((()=>{this.isHovered=!0,this.at=[i,t,a]}),this.delay)}handleLeave(){clearTimeout(this.timer),this.isHovered=!1,this.at=[]}};xi([q({type:String})],_i.prototype,"text",void 0),xi([q({type:Number})],_i.prototype,"delay",void 0),xi([q({type:Boolean})],_i.prototype,"allowWrapping",void 0),xi([q({type:Boolean})],_i.prototype,"usePosition",void 0),xi([q({type:Number})],_i.prototype,"timer",void 0),xi([q({type:Boolean})],_i.prototype,"isHovered",void 0),xi([q({type:Array})],_i.prototype,"at",void 0),_i=xi([Z("glk-tooltip")],_i);"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/galko/sw.js").then((e=>console.log("SW registered: ",e))).catch((e=>console.log("SW registration failed: ",e)))}));let Mi=class extends re{static get styles(){return se`
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
    `}render(){const e=ce.base;return E`
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
    `}};Mi=function(e,i,t,s){var a,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,t,o):a(i,t))||o);return r>3&&o&&Object.defineProperty(i,t,o),o}([Z("glk-app")],Mi)}},i={};!function t(s){var a=i[s];if(void 0!==a)return a.exports;var r=i[s]={exports:{}};return e[s](r,r.exports,t),r.exports}(165)})();