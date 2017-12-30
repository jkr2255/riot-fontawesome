'use strict';

import fontawesome from '@fortawesome/fontawesome';

export default function(param){
  // directly return
  if(typeof param === 'object') return param;
  return fontawesome.parse.transform(param || '');
}
