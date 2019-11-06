"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var imprecise=function imprecise(number){var factor=Math.pow(10,12);return Math.round(number*factor)/factor};var decimal2sexagesimal=function decimal2sexagesimal(decimal){var _decimal$toString$spl=decimal.toString().split("."),_decimal$toString$spl2=_slicedToArray(_decimal$toString$spl,2),pre=_decimal$toString$spl2[0],post=_decimal$toString$spl2[1];var deg=Math.abs(Number(pre));var minFull=imprecise(Number("0."+(post||0))*60);var min=Math.floor(minFull);var sec=imprecise((minFull%min||0)*60);return deg+"\xB0 "+Number(min.toFixed(6)).toString().split(".").map(function(v,i){return i===0?v.padStart(2,"0"):v}).join(".")+"' "+Number(sec.toFixed(4)).toString().split(".").map(function(v,i){return i===0?v.padStart(2,"0"):v}).join(".")+"\""};var _default=decimal2sexagesimal;exports.default=_default;