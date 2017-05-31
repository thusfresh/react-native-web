var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _requestAnimationFrame=require('fbjs/lib/requestAnimationFrame');var _requestAnimationFrame2=_interopRequireDefault(_requestAnimationFrame);
var _setImmediate=require('fbjs/lib/setImmediate');var _setImmediate2=_interopRequireDefault(_setImmediate);
var _setValueForStyles=require('../../vendor/setValueForStyles');var _setValueForStyles2=_interopRequireDefault(_setValueForStyles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var getRect=function getRect(node){
var height=node.offsetHeight;
var width=node.offsetWidth;
var left=0;
var top=0;
while(node&&node.nodeType===1){
left+=node.offsetLeft;
top+=node.offsetTop;
node=node.offsetParent;
}
return{height:height,left:left,top:top,width:width};
};

var hasRequestedAnimationFrame=false;
var measureLayoutQueue=[];

var processLayoutQueue=function processLayoutQueue(){
measureLayoutQueue.splice(0,250).forEach(function(item){var _item=_slicedToArray(
item,3),node=_item[0],relativeToNativeNode=_item[1],callback=_item[2];

var relativeNode=relativeToNativeNode||node&&node.parentNode;
if(node&&relativeNode){
var relativeRect=getRect(relativeNode);var _getRect=
getRect(node),height=_getRect.height,left=_getRect.left,top=_getRect.top,width=_getRect.width;
var x=left-relativeRect.left;
var y=top-relativeRect.top;
callback(x,y,width,height,left,top);
}
});

if(measureLayoutQueue.length>0){
(0,_setImmediate2.default)(processLayoutQueue);
}
};

var _measureLayout=function _measureLayout(node,relativeToNativeNode,callback){
if(!hasRequestedAnimationFrame){
(0,_requestAnimationFrame2.default)(function(){
hasRequestedAnimationFrame=false;

processLayoutQueue();
});
}

hasRequestedAnimationFrame=true;
measureLayoutQueue.push([node,relativeToNativeNode,callback]);
};

var UIManager={
blur:function blur(node){
try{
node.blur();
}catch(err){}
},

focus:function focus(node){
try{
node.focus();
}catch(err){}
},

measure:function measure(node,callback){
_measureLayout(node,null,callback);
},

measureInWindow:function measureInWindow(node,callback){
(0,_requestAnimationFrame2.default)(function(){
if(node){var _getRect2=
getRect(node),height=_getRect2.height,left=_getRect2.left,top=_getRect2.top,width=_getRect2.width;
callback(left,top,width,height);
}
});
},

measureLayout:function measureLayout(node,relativeToNativeNode,onFail,onSuccess){
_measureLayout(node,relativeToNativeNode,onSuccess);
},

updateView:function updateView(node,props,component){
for(var prop in props){
if(!Object.prototype.hasOwnProperty.call(props,prop)){
continue;
}

var value=props[prop];
switch(prop){
case'style':{
(0,_setValueForStyles2.default)(node,value,component._reactInternalInstance);
break;
}
case'class':
case'className':{
node.setAttribute('class',value);
break;
}
case'text':
case'value':

node.value=value;
break;
default:
node.setAttribute(prop,value);}

}
}};


module.exports=UIManager;