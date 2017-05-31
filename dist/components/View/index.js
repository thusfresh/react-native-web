var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _AccessibilityUtil=require('../../modules/AccessibilityUtil');var _AccessibilityUtil2=_interopRequireDefault(_AccessibilityUtil);
var _applyLayout=require('../../modules/applyLayout');var _applyLayout2=_interopRequireDefault(_applyLayout);
var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _propTypes=require('prop-types');
var _createDOMElement=require('../../modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _ViewPropTypes=require('./ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var emptyObject={};

var calculateHitSlopStyle=function calculateHitSlopStyle(hitSlop){
var hitStyle={};
for(var prop in hitSlop){
if(hitSlop.hasOwnProperty(prop)){
var value=hitSlop[prop];
hitStyle[prop]=value>0?-1*value:0;
}
}
return hitStyle;
};var

View=function(_Component){_inherits(View,_Component);function View(){_classCallCheck(this,View);return _possibleConstructorReturn(this,(View.__proto__||Object.getPrototypeOf(View)).apply(this,arguments));}_createClass(View,[{key:'getChildContext',value:function getChildContext()












{
var isInAButtonView=
_AccessibilityUtil2.default.propsToAriaRole(this.props)==='button'||this.context.isInAButtonView;
return isInAButtonView?{isInAButtonView:isInAButtonView}:emptyObject;
}},{key:'render',value:function render()

{var _props=











this.props,hitSlop=_props.hitSlop,style=_props.style,collapsable=_props.collapsable,onAccessibilityTap=_props.onAccessibilityTap,onLayout=_props.onLayout,onMagicTap=_props.onMagicTap,removeClippedSubviews=_props.removeClippedSubviews,otherProps=_objectWithoutProperties(_props,['hitSlop','style','collapsable','onAccessibilityTap','onLayout','onMagicTap','removeClippedSubviews']);var

isInAButtonView=this.context.isInAButtonView;

otherProps.style=[styles.initial,style];

if(hitSlop){
var hitSlopStyle=calculateHitSlopStyle(hitSlop);
var hitSlopChild=(0,_createDOMElement2.default)('span',{style:[styles.hitSlop,hitSlopStyle]});
otherProps.children=_react2.default.Children.toArray(otherProps.children);
otherProps.children.unshift(hitSlopChild);
otherProps.style.unshift(styles.hasHitSlop);
}

var component=isInAButtonView?'span':'div';
return(0,_createDOMElement2.default)(component,otherProps);
}}]);return View;}(_react.Component);View.displayName='View';View.childContextTypes={isInAButtonView:_propTypes.bool};View.contextTypes={isInAButtonView:_propTypes.bool};View.propTypes=process.env.NODE_ENV!=="production"?_ViewPropTypes2.default:{};


var styles=_StyleSheet2.default.create({

initial:{
alignItems:'stretch',
borderWidth:0,
borderStyle:'solid',
boxSizing:'border-box',
display:'flex',
flexBasis:'auto',
flexDirection:'column',
margin:0,
padding:0,
position:'relative',

minHeight:0,
minWidth:0},



hasHitSlop:{
zIndex:0},

hitSlop:_extends({},
_StyleSheet2.default.absoluteFillObject,{
zIndex:-1})});



module.exports=(0,_applyLayout2.default)((0,_applyNativeMethods2.default)(View));