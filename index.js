!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@fortawesome/fontawesome"),require("riot")):"function"==typeof define&&define.amd?define(["@fortawesome/fontawesome","riot"],t):"object"==typeof exports?exports.RiotFontAwesome=t(require("@fortawesome/fontawesome"),require("riot")):e.RiotFontAwesome=t(e.FontAwesome,e.riot)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));r(2),r(8),o.default.noAuto()},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f=o(r(3)),i=o(r(0)),u=o(r(9)),a=i.default.dom.css();f.default.tag("font-awesome-icon","",a,"",function(e){var t=this,r=function(){var r=t.parent?e:t,o=(0,u.default)(r);if(o){t.root.firstChild?t.root.replaceChild(o.node[0],t.root.firstChild):t.root.appendChild(o.node[0])}};t.on("mount",r),t.on("update",r),t.parent||n(t,e)})},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){if(!e)return null;if("object"===(void 0===e?"undefined":o(e))&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&2===e.length)return{prefix:e[0],iconName:e[1]};if("string"==typeof e){if(-1!==e.indexOf(" ")){var t=e.split(" ");return{prefix:t[0],iconName:t[1]}}return{prefix:"fas",iconName:e}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return Object.keys(o).forEach(function(r){var n=e[r];if(n){var f=o[r];"string"!=typeof f?f(n,t):t.push(f)}}),t};var o={spin:"fa-spin",pulse:"fa-pulse",border:"fa-border",fixedWidth:"fa-fw",listItem:"fa-li",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",pull:function(e,t){return t.push("fa-pull-"+e)},size:function(e,t){return t.push("fa-"+e)},rotation:function(e,t){return t.push("fa-rotate-"+e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return"object"===(void 0===e?"undefined":o(e))?e:n.default.parse.transform(e||"")};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return{};if("string"!=typeof e)return e;var t={};return e.split(";").forEach(function(e){return n(e,t)}),t};var o=/^([^:]+):(.*)$/,n=function(e,t){var r=o.exec(e);if(r){var n=r[1].trim(),f=r[2].trim();t[n]=f}}},function(e,t,r){"use strict";r(3).tag2("font-awesome-layers",'<span class="{layerClass}" riot-style="{layerStyle}"> <yield></yield> </span>',"","",function(e){var t=this;t.layerStyle=e.layerStyle;var r=function(e){t.layerClass=e.fixedWidth?"fa-layers fa-fw":"fa-layers"};r(e),t.on("update",function(){t.parent&&(r(e),t.layerStyle=e.layerStyle)})})},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,f.default)(e.icon),r=(0,i.default)(e);r.push.apply(r,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(l(e.iconClass)));var o=(0,u.default)(e.transform),s=(0,f.default)(e.mask),c=(0,a.default)(e.iconStyle);return n.default.icon(t,{classes:r,transform:o,mask:s,styles:c})};var n=o(r(0)),f=o(r(4)),i=o(r(5)),u=o(r(6)),a=o(r(7)),l=function(e){return Array.isArray(e)?e:String(e).trim().split(" ")}}])});