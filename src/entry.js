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
    const icon = normalizeIconArgs(opts.icon);
    const classes = parseClasses(opts);
    const transform = parseTransform(opts.transform);
    const renderedIcon = fontawesome.icon(icon, {classes, transform});
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
});

export default iconTag;
