










var _ReactNativePropRegistry=require('../../modules/ReactNativePropRegistry');var _ReactNativePropRegistry2=_interopRequireDefault(_ReactNativePropRegistry);
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




function getStyle(style){
if(typeof style==='number'){
return _ReactNativePropRegistry2.default.getByID(style);
}
return style;
}

function flattenStyle(style){
if(!style){
return undefined;
}

if(process.env.NODE_ENV!=='production'){
(0,_invariant2.default)(style!==true,'style may be false but not true');
}

if(!Array.isArray(style)){
return getStyle(style);
}

var result={};
for(var i=0,styleLength=style.length;i<styleLength;++i){
var computedStyle=flattenStyle(style[i]);
if(computedStyle){
for(var key in computedStyle){
var value=computedStyle[key];
result[key]=value;
}
}
}
return result;
}

module.exports=flattenStyle;