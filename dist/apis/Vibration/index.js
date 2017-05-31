





var _vibrate=function _vibrate(pattern){
if('vibrate'in window.navigator){
if(typeof pattern==='number'||Array.isArray(pattern)){
window.navigator.vibrate(pattern);
}else{
throw new Error('Vibration pattern should be a number or array');
}
}
};

var Vibration={
cancel:function cancel(){
_vibrate(0);
},
vibrate:function vibrate(pattern){
_vibrate(pattern);
}};


module.exports=Vibration;