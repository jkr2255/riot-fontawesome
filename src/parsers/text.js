'use strict';

import fontawesome from '@fortawesome/fontawesome';
import parseClasses from './classes';
import parseTransform from './transform';
import parseStyle from './style'
import classToArray from '../utils/class_to_array'

export default function(target) {
  const text = (target.text || '').trim();
  const classes = parseClasses(target);
  classes.push(...classToArray(target.textClass));
  const transform = parseTransform(target.transform);
  const styles = parseStyle(target.textStyle);
  return fontawesome.text(text, {classes, transform, styles});
}
