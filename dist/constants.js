"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TASK_CANCELLED=exports.EXECUTE_RESULT=exports.STATIC_EMPTY_ARRAY=exports.NOOP=void 0,require("core-js/modules/es7.symbol.async-iterator"),require("core-js/modules/es6.symbol"),require("core-js/modules/es6.object.freeze");var NOOP=function(){};exports.NOOP=NOOP;var STATIC_EMPTY_ARRAY=Object.freeze([]);exports.STATIC_EMPTY_ARRAY=STATIC_EMPTY_ARRAY;var EXECUTE_RESULT=Symbol.for("@task-handler/result");exports.EXECUTE_RESULT=EXECUTE_RESULT;var TASK_CANCELLED=Symbol.for("@task-handler/cancelled");exports.TASK_CANCELLED=TASK_CANCELLED;