'use strict';

import './tags/font-awesome-icon';
import './tags/font-awesome-text';
import './tags/font-awesome-layers.tag'

import config from './config/config';

export {config};

import {clear as cacheClear} from './dom/cache';

const cache = {clear: cacheClear};

export {cache};
