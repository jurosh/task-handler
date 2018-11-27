"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=createDeferQueue,require("core-js/modules/es7.symbol.async-iterator"),require("core-js/modules/es6.symbol"),require("core-js/modules/es6.object.freeze"),require("core-js/modules/web.dom.iterable"),require("core-js/modules/es6.array.iterator"),require("core-js/modules/es6.string.iterator"),require("core-js/modules/es6.map");function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function buildDeferTimeoutHandler(a){if("object"===("undefined"==typeof process?"undefined":_typeof(process))&&"function"==typeof process.nextTick){var b=0;a.create=function(a){b+=1;var c=b;process.nextTick(function(){c==b&&(a(),b=0)})},a.cancel=function(){b+=1}}else"function"==typeof setImmediate?(a.create=setImmediate,a.cancel=clearImmediate):(a.create=setTimeout,a.cancel=clearTimeout)}function createDeferQueue(a){function b(){return d.forEach(function(b){var c=_slicedToArray(b,2),d=c[0],e=c[1];a.delete(d.id),e()}),d.clear(),g}var c,d=new Map,e=0,f={create:void 0,cancel:void 0},g=Object.freeze({clear:function a(){f.cancel&&f.cancel(c),d.clear()},cancel:function b(a){d.delete(a),0===d.size&&g.clear()},add:function j(a,h){e+=1;var i=e;return 0===d.size&&(!f.create&&buildDeferTimeoutHandler(f),c=f.create(b)),d.set(i,[a,h]),function(){return g.cancel(i)}}});return g}