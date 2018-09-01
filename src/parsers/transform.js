'use strict';

import { parse } from '@fortawesome/fontawesome-svg-core';

export default function(param){
  // directly return
  if(typeof param === 'object') return param;
  return parse.transform(param || '');
}
