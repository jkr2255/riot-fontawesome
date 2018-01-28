'use strict';

import riot from 'riot';
import argsToJSON from '../utils/args_to_json';
import domGenerator from '../dom/generator';
import parseTextArgs from '../parsers/text_args';

riot.tag('font-awesome-text', '', '', '', function(opts) {
  const tag = this;
  let oldArgsJSON = null;
  const render = () => {
    const target = tag.parent ? opts : tag;
    const args = parseTextArgs(target);
    const argsJSON = argsToJSON(args);
    if(argsJSON === oldArgsJSON) return;
    oldArgsJSON = argsJSON;
    const dom = domGenerator(args);
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
