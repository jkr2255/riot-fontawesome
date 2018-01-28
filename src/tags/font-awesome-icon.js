'use strict';

import fontawesome from '@fortawesome/fontawesome';
import riot from 'riot';

import argsToJSON from '../utils/args_to_json';
import domGenerator from '../dom/generator';
import parseIconArgs from '../parsers/icon_args';

const css = fontawesome.dom.css();

riot.tag('font-awesome-icon', '', css, '', function(opts){
  const tag = this;
  let oldArgsJSON = null;
  const render = () => {
    const target = tag.parent ? opts : tag;
    const iconArgs = parseIconArgs(target);
    const argsJSON = argsToJSON(iconArgs);
    if(argsJSON === oldArgsJSON) return;
    oldArgsJSON = argsJSON;
    const dom = domGenerator(iconArgs);
    if(!dom) return;
    const first = tag.root.firstChild;
    if(first) {
      tag.root.replaceChild(dom, tag.root.firstChild);
    } else {
      tag.root.appendChild(dom);
    }
  }
  tag.on('mount', render);
  tag.on('update', render);
  if(!tag.parent) {
    Object.assign(tag, opts);
  }
});
