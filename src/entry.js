'use strict';

import riot from 'riot';
import fontawesome from '@fortawesome/fontawesome';
import normalizeIconArgs from './utils/normalize_icon_args';
import parseClasses from './parsers/classes';
import parseTransform from './parsers/transform';
import parseStyle from './parsers/style'

const classToArray = param => {
  if(Array.isArray(param)) return param;
  return String(param).trim().split(' ');
}

fontawesome.noAuto();

const css = fontawesome.dom.css();

const iconTag = riot.tag('font-awesome-icon', '', css, '', function(opts){
  const tag = this;
  const render = () => {
    const target = tag.parent ? opts : tag;
    const icon = normalizeIconArgs(target.icon);
    const classes = parseClasses(target);
    classes.push(...classToArray(target.iconClass));
    const transform = parseTransform(target.transform);
    const mask = normalizeIconArgs(target.mask);
    const styles = parseStyle(target.iconStyle);
    const renderedIcon = fontawesome.icon(icon, {classes, transform, mask, styles});
    if(!renderedIcon) return;
    const first = tag.root.firstChild;
    if(first) {
      tag.root.replaceChild(renderedIcon.node[0], tag.root.firstChild);
    } else {
      tag.root.appendChild(renderedIcon.node[0]);
    }
  }
  tag.on('mount', render);
  tag.on('update', render);
  if(!tag.parent) {
    Object.assign(tag, opts);
  }
});

export default iconTag;
