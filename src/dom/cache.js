// for object clear, using let
let cache = {};

export function set(key, node){
  if(!node) return;
  cache[key] = node.cloneNode(true);
}

export function get(key){
  const value = cache[key];
  if(value) return value.cloneNode(true);
  return null;
}

export function clear(){
  cache = {};
}
