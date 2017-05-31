var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();







var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');
var _debounce=require('debounce');var _debounce2=_interopRequireDefault(_debounce);
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var win=_ExecutionEnvironment.canUseDOM?
window:
{
devicePixelRatio:undefined,
innerHeight:undefined,
innerWidth:undefined,
screen:{
height:undefined,
width:undefined}};



var dimensions={};var

Dimensions=function(){function Dimensions(){_classCallCheck(this,Dimensions);}_createClass(Dimensions,null,[{key:'get',value:function get(
dimension){
(0,_invariant2.default)(dimensions[dimension],'No dimension set for key '+dimension);
return dimensions[dimension];
}},{key:'set',value:function set()

{
dimensions.window={
fontScale:1,
height:win.innerHeight,
scale:win.devicePixelRatio||1,
width:win.innerWidth};


dimensions.screen={
fontScale:1,
height:win.screen.height,
scale:win.devicePixelRatio||1,
width:win.screen.width};

}}]);return Dimensions;}();


Dimensions.set();

if(_ExecutionEnvironment.canUseDOM){
window.addEventListener('resize',(0,_debounce2.default)(Dimensions.set,16),false);
}

module.exports=Dimensions;