import React from 'react';
import Dimensions from 'Dimensions';

//Device ratio
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const ratioX = x < 375 ? ( x < 320 ? 0.75 : 0.875 ) : 1;
const ratioY = y < 568 ? ( y < 480 ? 0.75 : 0.875 ) : 1;
//font size base_unit
const base_unit = 16;
const unit = base_unit * ratioX;

var em = function(value){
  return value * unit
}

//export style object
export default Style = {
  //General
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),

  //FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALL: em(0.75),
  FONT_SIZE_TITLE: em(1.25)
}
