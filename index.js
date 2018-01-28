!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@fortawesome/fontawesome"),require("riot")):"function"==typeof define&&define.amd?define(["@fortawesome/fontawesome","riot"],t):t(r.FontAwesome,r.riot)}(this,function(r,t){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r,t=t&&t.hasOwnProperty("default")?t.default:t;"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n,e=(function(r,t){r.exports=function(){function r(r){var t=r.replace(/,$/,""),n=t.replace(/^ */,"");return[t.length-n.length,n]}function t(r){var t=r.map(function(r,t){return[t,(n=r[0][1],e=/^"(?:[^"\\]|\\.)*"/.exec(n)[0],JSON.parse(e))];var n,e});return t.sort(function(r,t){return r[1]===t[1]?0:r[1]<t[1]?-1:1}),t.map(function(t){return r[t[0]]})}var n=function(r,t){if(t=Math.floor(t),r=String(r),!(t>0)||""===r)return"";for(var n="",e=0;e<t;++e)n+=r;return n},e=function(r){return"number"==typeof r?n(" ",Math.min(r,10)):"string"==typeof r?r.substring(0,10):""},o=function(r){return r.replace(/^("(?:[^"\\]|\\.)*":) /,"$1")};return function(i,a,f){var u=e(f),l=JSON.stringify(i,a,1).split("\n").map(r);return function(r){for(var n=0;n<r.length;++n)if(/\{$/.test(r[n][1])){for(var e=r[n][0],o=[],i=n+1;r[i][0]!==e;++i){var a=[r[i]];if(/[[{]$/.test(r[i][1])){for(++i;a.push(r[i]),r[i][0]!==e+1;++i);o.push(a)}else o.push(a)}if(!(o.length<=1)){var f=[].concat.apply([],t(o));[].splice.apply(r,[n+1,i-n-1].concat(f))}}}(l),function(r,t){return r.map(function(e,i){var a=e[1]+(0===e[0]||r[i+1][0]!==e[0]?"":",");return t?n(t,e[0])+a:o(a)}).join(t?"\n":"")}(l,u)}}()}(n={exports:{}},n.exports),n.exports);function o(r){return e(r,function(t,n){return this!==r||!n||"icon"!==t&&"mask"!==t?this===r&&"classes"===t&&Array.isArray(n)?n.slice().sort():n:{prefix:n.prefix,iconName:n.iconName}})}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},f=function(r){if(Array.isArray(r)){for(var t=0,n=Array(r.length);t<r.length;t++)n[t]=r[t];return n}return Array.from(r)};function u(t){var n=a({},t);if(t.icon){delete n.icon;var e=r.icon(t.icon,n);return e?e.node[0]:null}delete n.text;var o=r.text(t.text,n);return o?o.node[0]:null}function l(r){if(!r)return null;if("object"===(void 0===r?"undefined":i(r))&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&2===r.length)return{prefix:r[0],iconName:r[1]};if("string"==typeof r){if(-1!==r.indexOf(" ")){var t=r.split(" ");return{prefix:t[0],iconName:t[1]}}return{prefix:"fas",iconName:r}}}var s={spin:"fa-spin",pulse:"fa-pulse",border:"fa-border",fixedWidth:"fa-fw",listItem:"fa-li",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",pull:function(r,t){return t.push("fa-pull-"+r)},size:function(r,t){return t.push("fa-"+r)},rotation:function(r,t){return t.push("fa-rotate-"+r)}};var c=/^([^:]+):(.*)$/,p=function(r,t){var n=c.exec(r);if(n){var e=n[1].trim(),o=n[2].trim();t[e]=o}};function y(t){var n,e,o,a=(n=t,e=[],Object.keys(s).forEach(function(r){var t=n[r];if(t){var o=s[r];"string"!=typeof o?o(t,e):e.push(o)}}),e);return a.push.apply(a,f((o=t.textClass,Array.isArray(o)?o:String(o).trim().split(/[ \r\n\t\f]+/)))),{classes:a,transform:function(t){return"object"===(void 0===t?"undefined":i(t))?t:r.parse.transform(t||"")}(t.transform),styles:function(r){if(!r)return{};if("string"!=typeof r)return r;var t={};return r.split(";").forEach(function(r){return p(r,t)}),t}(t.textStyle)}}var d=r.dom.css();t.tag("font-awesome-icon","",d,"",function(r){var t=this,n=null,e=function(){var e=function(r){var t=y(r);return t.icon=l(r.icon),t.mask=l(r.mask),t}(t.parent?r:t),i=o(e);if(i!==n){n=i;var a=u(e);if(a)t.root.firstChild?t.root.replaceChild(a,t.root.firstChild):t.root.appendChild(a)}};t.on("mount",e),t.on("update",e),t.parent||a(t,r)}),t.tag("font-awesome-text","","","",function(r){var t=this,n=null,e=function(){var e=function(r){var t=y(r);return t.text=(r.text||"").trim(),t}(t.parent?r:t),i=o(e);if(i!==n){n=i;var a=u(e);if(a)t.root.firstChild?t.root.replaceChild(a,t.root.firstChild):t.root.appendChild(a)}};t.on("mount",e),t.on("update",e),t.parent||a(t,r)}),t.tag2("font-awesome-layers",'<span class="{layerClass}" riot-style="{layerStyle}"> <yield></yield> </span>',"","",function(r){var t=this;t.layerStyle=r.layerStyle;var n=function(r){t.layerClass=r.fixedWidth?"fa-layers fa-fw":"fa-layers"};n(r),t.on("update",function(){t.parent&&(n(r),t.layerStyle=r.layerStyle)})}),r.noAuto()});
