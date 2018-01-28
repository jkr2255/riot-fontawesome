import fontawesome from '@fortawesome/fontawesome';

import argsToJSON from '../utils/args_to_json';
import config from '../config/config';
import {get, set} from './cache';

const useCache = (key, callback) => {
  const cachedVal = get(key);
  if(cachedVal) return cachedVal;
  const value = callback();
  set(key, value);
  return value;
}

const cacheCanUsed = (cacheParam, defaultValue) => {
  if(cacheParam === 'always') return true;
  if(cacheParam === 'none') return false;
  return !!defaultValue;
}

export default function generateDOM(args, cache){
  let copiedArgs, argsJSON;
  if(typeof args === 'string') {
    copiedArgs = JSON.parse(args);
    argsJSON = args;
  } else {
    copiedArgs = Object.assign({}, args);
    argsJSON = argsToJSON(args);
  }
  const generateDOM = type => () => {
    const key = copiedArgs[type];
    delete copiedArgs[type];
    const obj = fontawesome[type](key,copiedArgs);
    return obj ? obj.node[0] : null;
  }
  if(copiedArgs.icon) {
    const getIcon = generateDOM('icon');
    if(cacheCanUsed(cache, config.iconCache)) {
      return useCache(argsJSON, getIcon);
    } else{
      return getIcon();
    }
  } else {
    const getText = generateDOM('text');
    if(cacheCanUsed(cache, config.textCache)) {
      return useCache(argsJSON, getText);
    } else{
      return getText();
    }
  }
}
