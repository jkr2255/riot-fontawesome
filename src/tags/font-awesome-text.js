'use strict';

import riot from 'riot';
import parseTextArgs from '../parsers/text_args';
import renderer from './renderer';

riot.tag('font-awesome-text', '', '', '', function(opts) {
  const tag = this;
  const render = renderer(tag, parseTextArgs);
  tag.on('mount', render);
  tag.on('update', render);
  if(!tag.parent) {
    Object.assign(tag, opts);
  }
});
