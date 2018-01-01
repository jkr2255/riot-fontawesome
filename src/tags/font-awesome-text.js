'use strict';

import riot from 'riot';
import parseText from '../parsers/text';

riot.tag('font-awesome-text', '', '', '', function(opts) {
  const tag = this;
  const render = () => {
    const target = tag.parent ? opts : tag;
    const renderedIcon = parseText(target);
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
