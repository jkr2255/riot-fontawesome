'use strict';

import classToArray from '../utils/class_to_array';
import parseClasses from './classes';
import parseTransform from './transform';
import parseStyle from './style';

export default function parseCommonArgs(target, mode) {
  const classes = parseClasses(target);
  classes.push.apply(classes, classToArray(target[mode + 'Class'] || ''));
  classes.sort();
  const transform = target.transform ? parseTransform(target.transform) : null;
  const styles = parseStyle(target[mode + 'Style']);
  return {classes, transform, styles};
}
