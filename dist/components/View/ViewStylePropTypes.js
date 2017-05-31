var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};



var _AnimationPropTypes=require('../../propTypes/AnimationPropTypes');var _AnimationPropTypes2=_interopRequireDefault(_AnimationPropTypes);
var _BorderPropTypes=require('../../propTypes/BorderPropTypes');var _BorderPropTypes2=_interopRequireDefault(_BorderPropTypes);
var _ColorPropType=require('../../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _LayoutPropTypes=require('../../propTypes/LayoutPropTypes');var _LayoutPropTypes2=_interopRequireDefault(_LayoutPropTypes);
var _ShadowPropTypes=require('../../propTypes/ShadowPropTypes');var _ShadowPropTypes2=_interopRequireDefault(_ShadowPropTypes);
var _TransformPropTypes=require('../../propTypes/TransformPropTypes');var _TransformPropTypes2=_interopRequireDefault(_TransformPropTypes);
var _propTypes=require('prop-types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

module.exports=_extends({},_AnimationPropTypes2.default,_BorderPropTypes2.default,_LayoutPropTypes2.default,_ShadowPropTypes2.default,_TransformPropTypes2.default,{





backgroundColor:_ColorPropType2.default,
opacity:_propTypes.number,



elevation:_propTypes.number,



backgroundAttachment:_propTypes.string,
backgroundClip:_propTypes.string,
backgroundImage:_propTypes.string,
backgroundOrigin:(0,_propTypes.oneOf)(['border-box','content-box','padding-box']),
backgroundPosition:_propTypes.string,
backgroundRepeat:_propTypes.string,
backgroundSize:_propTypes.string,
boxShadow:_propTypes.string,
clip:_propTypes.string,
cursor:_propTypes.string,
filter:_propTypes.string,
outline:_propTypes.string,
outlineColor:_ColorPropType2.default,
perspective:(0,_propTypes.oneOfType)([_propTypes.number,_propTypes.string]),
perspectiveOrigin:_propTypes.string,
transitionDelay:_propTypes.string,
transitionDuration:_propTypes.string,
transitionProperty:_propTypes.string,
transitionTimingFunction:_propTypes.string,
userSelect:_propTypes.string,
willChange:_propTypes.string,
WebkitMaskImage:_propTypes.string,
WebkitOverflowScrolling:(0,_propTypes.oneOf)(['auto','touch'])});