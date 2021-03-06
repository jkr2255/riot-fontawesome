import sortedJSONStringify from 'sorted-json-stringify';

export default function argsToJSON(args) {
  const replacer = function(key, val) {
    if(this === args && val && (key === 'icon' || key === 'mask')) {
      return { prefix: val.prefix, iconName: val.iconName };
    }
    return val;
  }
  return sortedJSONStringify(args, replacer);
}
