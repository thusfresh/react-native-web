var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();






var _deepAssign=require('deep-assign');var _deepAssign2=_interopRequireDefault(_deepAssign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var mergeLocalStorageItem=function mergeLocalStorageItem(key,value){
var oldValue=window.localStorage.getItem(key);
var oldObject=JSON.parse(oldValue);
var newObject=JSON.parse(value);
var nextValue=JSON.stringify((0,_deepAssign2.default)({},oldObject,newObject));
window.localStorage.setItem(key,nextValue);
};

var createPromise=function createPromise(getValue,callback){
return new Promise(function(resolve,reject){
try{
var value=getValue();
if(callback){
callback(null,value);
}
resolve(value);
}catch(err){
if(callback){
callback(err);
}
reject(err);
}
});
};

var createPromiseAll=function createPromiseAll(promises,callback,processResult){
return Promise.all(promises).then(
function(result){
var value=processResult?processResult(result):null;
callback&&callback(null,value);
return Promise.resolve(value);
},
function(errors){
callback&&callback(errors);
return Promise.reject(errors);
});

};var

AsyncStorage=function(){function AsyncStorage(){_classCallCheck(this,AsyncStorage);}_createClass(AsyncStorage,null,[{key:'clear',value:function clear(



callback){
return createPromise(function(){
window.localStorage.clear();
},callback);
}},{key:'getAllKeys',value:function getAllKeys(




callback){
return createPromise(function(){
var numberOfKeys=window.localStorage.length;
var keys=[];
for(var i=0;i<numberOfKeys;i+=1){
var key=window.localStorage.key(i);
keys.push(key);
}
return keys;
},callback);
}},{key:'getItem',value:function getItem(




key,callback){
return createPromise(function(){
return window.localStorage.getItem(key);
},callback);
}},{key:'multiGet',value:function multiGet(







keys,callback){
var promises=keys.map(function(key){return AsyncStorage.getItem(key);});
var processResult=function processResult(result){return result.map(function(value,i){return[keys[i],value];});};
return createPromiseAll(promises,callback,processResult);
}},{key:'setItem',value:function setItem(




key,value,callback){
return createPromise(function(){
window.localStorage.setItem(key,value);
},callback);
}},{key:'multiSet',value:function multiSet(





keyValuePairs,callback){
var promises=keyValuePairs.map(function(item){return AsyncStorage.setItem(item[0],item[1]);});
return createPromiseAll(promises,callback);
}},{key:'mergeItem',value:function mergeItem(




key,value,callback){
return createPromise(function(){
mergeLocalStorageItem(key,value);
},callback);
}},{key:'multiMerge',value:function multiMerge(







keyValuePairs,callback){
var promises=keyValuePairs.map(function(item){return AsyncStorage.mergeItem(item[0],item[1]);});
return createPromiseAll(promises,callback);
}},{key:'removeItem',value:function removeItem(




key,callback){
return createPromise(function(){
return window.localStorage.removeItem(key);
},callback);
}},{key:'multiRemove',value:function multiRemove(




keys,callback){
var promises=keys.map(function(key){return AsyncStorage.removeItem(key);});
return createPromiseAll(promises,callback);
}}]);return AsyncStorage;}();


module.exports=AsyncStorage;