var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};



var _BaseComponentPropTypes=require('../../propTypes/BaseComponentPropTypes');var _BaseComponentPropTypes2=_interopRequireDefault(_BaseComponentPropTypes);
var _EdgeInsetsPropType=require('../../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _StyleSheetPropType=require('../../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _ViewStylePropTypes=require('./ViewStylePropTypes');var _ViewStylePropTypes2=_interopRequireDefault(_ViewStylePropTypes);
var _propTypes=require('prop-types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ViewPropTypes=_extends({},_BaseComponentPropTypes2.default,{

children:_propTypes.any,
collapsable:_propTypes.bool,
hitSlop:_EdgeInsetsPropType2.default,
onClick:_propTypes.func,
onClickCapture:_propTypes.func,
onLayout:_propTypes.func,
onMoveShouldSetResponder:_propTypes.func,
onMoveShouldSetResponderCapture:_propTypes.func,
onResponderGrant:_propTypes.func,
onResponderMove:_propTypes.func,
onResponderReject:_propTypes.func,
onResponderRelease:_propTypes.func,
onResponderTerminate:_propTypes.func,
onResponderTerminationRequest:_propTypes.func,
onStartShouldSetResponder:_propTypes.func,
onStartShouldSetResponderCapture:_propTypes.func,
onTouchCancel:_propTypes.func,
onTouchCancelCapture:_propTypes.func,
onTouchEnd:_propTypes.func,
onTouchEndCapture:_propTypes.func,
onTouchMove:_propTypes.func,
onTouchMoveCapture:_propTypes.func,
onTouchStart:_propTypes.func,
onTouchStartCapture:_propTypes.func,
pointerEvents:(0,_propTypes.oneOf)(['auto','box-none','box-only','none']),
style:(0,_StyleSheetPropType2.default)(_ViewStylePropTypes2.default)});


module.exports=ViewPropTypes;