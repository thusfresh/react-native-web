var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _react=require('react');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

StatusBar=function(_Component){_inherits(StatusBar,_Component);function StatusBar(){_classCallCheck(this,StatusBar);return _possibleConstructorReturn(this,(StatusBar.__proto__||Object.getPrototypeOf(StatusBar)).apply(this,arguments));}_createClass(StatusBar,[{key:'render',value:function render()





{
return null;
}}],[{key:'setBackgroundColor',value:function setBackgroundColor(){}},{key:'setBarStyle',value:function setBarStyle(){}},{key:'setHidden',value:function setHidden(){}},{key:'setNetworkActivityIndicatorVisible',value:function setNetworkActivityIndicatorVisible(){}},{key:'setTranslucent',value:function setTranslucent(){}}]);return StatusBar;}(_react.Component);


module.exports=StatusBar;