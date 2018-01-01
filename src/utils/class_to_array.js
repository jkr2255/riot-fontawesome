'use strict';

export default function classToArray(param) {
  if(Array.isArray(param)) return param;
  return String(param).trim().split(/[ \r\n\t\f]+/);
}
