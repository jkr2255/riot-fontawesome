'use strict';

import riot from 'riot';
import fontawesome from '@fortawesome/fontawesome';
import normalizeIconArgs from './utils/normalize_icon_args';
import parseClasses from './parsers/classes';
import parseTransform from './parsers/transform';

fontawesome.noAuto();

const css = fontawesome.dom.css();

const iconTag = riot.tag('font-awesome-icon', '', css, '', function(opts){
  const tag = this;
  const render = () => {
    const target = tag.parent ? opts : tag;
    const icon = normalizeIconArgs(target.icon);
    const classes = parseClasses(target);
    const transform = parseTransform(target.transform);
    const mask = normalizeIconArgs(target.mask);
    const renderedIcon = fontawesome.icon(icon, {classes, transform, mask});
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
