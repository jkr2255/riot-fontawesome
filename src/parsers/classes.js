'use strict';

const convertors = {
  spin: 'fa-spin',
  pulse: 'fa-pulse',
  border: 'fa-border',
  fixedWidth: 'fa-fw',
  listItem: 'fa-li',
  flipHorizontal: 'fa-flip-horizontal',
  flipVertical: 'fa-flip-vertical',
  pull: (val, arr) => arr.push(`fa-pull-${val}`),
  size: (val, arr) => arr.push(`fa-${val}`),
  rotation: (val, arr) => arr.push(`fa-rotate-${val}`),
};

export default function parseClasses(args) {
  const ret = [];
  Object.keys(convertors).forEach(key => {
    const val = args[key];
    if(!val) return;
    const conversion = convertors[key];
    if(typeof conversion === 'string') {
      ret.push(conversion);
      return;
    }
    // Assume typeof conversion === 'function'
    conversion(val, ret);
  })
  return ret;
}
