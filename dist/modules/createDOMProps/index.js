var _AccessibilityUtil=require('../AccessibilityUtil');var _AccessibilityUtil2=_interopRequireDefault(_AccessibilityUtil);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _registry=require('../../apis/StyleSheet/registry');var _registry2=_interopRequireDefault(_registry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var emptyObject={};

var styles=_StyleSheet2.default.create({
buttonReset:{
appearance:'none',
backgroundColor:'transparent',
color:'inherit',
font:'inherit',
textAlign:'inherit'},

linkReset:{
backgroundColor:'transparent',
color:'inherit',
textDecorationLine:'none'},

listReset:{
listStyle:'none'}});



var pointerEventStyles=_StyleSheet2.default.create({
auto:{
pointerEvents:'auto'},

'box-none':{
pointerEvents:'box-none'},

'box-only':{
pointerEvents:'box-only'},

none:{
pointerEvents:'none'}});



var resolver=function resolver(style){return _registry2.default.resolve(style);};

var createDOMProps=function createDOMProps(rnProps,resolveStyle){
if(!resolveStyle){
resolveStyle=resolver;
}

var props=rnProps||emptyObject;var

accessibilityLabel=













props.accessibilityLabel,accessibilityLiveRegion=props.accessibilityLiveRegion,accessible=props.accessible,importantForAccessibility=props.importantForAccessibility,pointerEvents=props.pointerEvents,rnStyle=props.style,testID=props.testID,type=props.type,accessibilityComponentType=props.accessibilityComponentType,accessibilityRole=props.accessibilityRole,accessibilityTraits=props.accessibilityTraits,domProps=_objectWithoutProperties(props,['accessibilityLabel','accessibilityLiveRegion','accessible','importantForAccessibility','pointerEvents','style','testID','type','accessibilityComponentType','accessibilityRole','accessibilityTraits']);

var role=_AccessibilityUtil2.default.propsToAriaRole(props);
var pointerEventStyle=pointerEvents!==undefined&&pointerEventStyles[pointerEvents];
var reactNativeStyle=[
role==='button'&&styles.buttonReset||
role==='link'&&styles.linkReset||
role==='list'&&styles.listReset,
rnStyle,
pointerEventStyle];var _ref=

resolveStyle(reactNativeStyle)||emptyObject,className=_ref.className,style=_ref.style;

if(accessible===true){
domProps.tabIndex=_AccessibilityUtil2.default.propsToTabIndex(props);
}
if(accessibilityLabel&&accessibilityLabel.constructor===String){
domProps['aria-label']=accessibilityLabel;
}
if(accessibilityLiveRegion&&accessibilityLiveRegion.constructor===String){
domProps['aria-live']=accessibilityLiveRegion==='none'?'off':accessibilityLiveRegion;
}
if(className&&className.constructor===String){
domProps.className=domProps.className?domProps.className+' '+className:className;
}
if(importantForAccessibility==='no-hide-descendants'){
domProps['aria-hidden']=true;
}
if(role&&role.constructor===String){
domProps.role=role;
if(role==='button'){
domProps.type='button';
}else if(role==='link'&&domProps.target==='_blank'){
domProps.rel=(domProps.rel||'')+' noopener noreferrer';
}
}
if(style){
domProps.style=style;
}
if(testID&&testID.constructor===String){
domProps['data-testid']=testID;
}
if(type&&type.constructor===String){
domProps.type=type;
}

return domProps;
};

module.exports=createDOMProps;