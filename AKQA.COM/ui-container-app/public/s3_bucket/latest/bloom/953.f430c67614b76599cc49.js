(self.webpackChunk_microfeui_ui_bloom_module=self.webpackChunk_microfeui_ui_bloom_module||[]).push([[953],{953:(e,t,n)=>{"use strict";n.r(t),n.d(t,{mount:()=>p});var r=n(379),a=n.n(r),i=n(240),o=n.n(i);a()(o(),{insert:"head",singleton:!1}),o().locals;var c=n(71),l=n(334),s=n(271),u=n.n(s);const d=()=>u().createElement("div",{className:"flex flex-col items-center bg-white"},u().createElement("div",{className:"w-full p-4 mb-2 border-b-2 border-gray-200"},u().createElement("h1",{className:""},"Bloom")),u().createElement("div",{className:"w-full p-10 mt-4 "},"Bloom UI in React")),f=({history:e})=>u().createElement("div",null,u().createElement(l.Router,{history:e},u().createElement(l.Switch,null,u().createElement(l.Route,{path:"/",component:d}))));var m=n(650),h=n.n(m);const p=(e,{onNavigate:t,defaultHistory:n,initialPath:r})=>{const a=n||(0,c.PP)({initialEntries:[r]});return t&&a.listen(t),h().render(u().createElement(f,{history:a}),e),{onParentNavigate({pathname:e}){const{pathname:t}=a.location;t!==e&&a.push(e)}}}},240:()=>{},379:(e,t,n)=>{"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],l=t.base?c[0]+t.base:c[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=o(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:p(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function p(e,t){var n,r,a;if(t.singleton){var i=h++;n=m||(m=l(t)),r=d.bind(null,n,i,!1),a=d.bind(null,n,i,!0)}else n=l(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);i[a].references--}for(var l=c(e,t),s=0;s<n.length;s++){var u=o(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=l}}}}}]);