'use strict';

import { dom } from '@fortawesome/fontawesome-svg-core';
import riot from 'riot';

import parseIconArgs from '../parsers/icon_args';
import renderer from './renderer';

const css = dom.css();

riot.tag('font-awesome-icon', '', css, '', function(opts){
  const tag = this;
  const render = renderer(tag, parseIconArgs);
  tag.on('mount', render);
  tag.on('update', render);
  if(!tag.parent) {
    Object.assign(tag, opts);
  }
});
