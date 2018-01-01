'use strict';

import riot from 'riot';
import fontawesome from '@fortawesome/fontawesome';
import parseWholeIcon from '../parsers/whole_icon'

const css = fontawesome.dom.css();

const iconTag = riot.tag('font-awesome-icon', '', css, '', function(opts){
  const tag = this;
  const render = () => {
    const target = tag.parent ? opts : tag;
    const renderedIcon = parseWholeIcon(target);
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
