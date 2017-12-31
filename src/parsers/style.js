'use strict';

const ITEM_REGEX = /^([^:]+):(.*)$/

const parseItem = (item, ret) => {
  const result = ITEM_REGEX.exec(item);
  if(!result) return;
  const key = result[1].trim();
  const value = result[2].trim();
  ret[key] = value;
};

export default function parseStyle(val){
  if(!val) return {};
  if(typeof val !== 'string') return val;
  const arr = val.split(';');
  const ret = {};
  arr.forEach(item => parseItem(item, ret));
  return ret;
}
