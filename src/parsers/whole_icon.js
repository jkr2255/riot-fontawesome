'use strict';

import fontawesome from '@fortawesome/fontawesome';
import normalizeIconArgs from '../utils/normalize_icon_args';
import parseClasses from './classes';
import parseTransform from './transform';
import parseStyle from './style'

const classToArray = param => {
  if(Array.isArray(param)) return param;
  return String(param).trim().split(' ');
}

export default function(target) {
  const icon = normalizeIconArgs(target.icon);
  const classes = parseClasses(target);
  classes.push(...classToArray(target.iconClass));
  const transform = parseTransform(target.transform);
  const mask = normalizeIconArgs(target.mask);
  const styles = parseStyle(target.iconStyle);
  return fontawesome.icon(icon, {classes, transform, mask, styles});
}
