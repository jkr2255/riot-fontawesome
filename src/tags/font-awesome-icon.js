'use strict';

import fontawesome from '@fortawesome/fontawesome';
import riot from 'riot';

import parseIconArgs from '../parsers/icon_args';
import renderer from './renderer';

const css = fontawesome.dom.css();

riot.tag('font-awesome-icon', '', css, '', function(opts){
  const tag = this;
  const render = renderer(tag, parseIconArgs);
  tag.on('mount', render);
  tag.on('update', render);
  if(!tag.parent) {
    Object.assign(tag, opts);
  }
});
