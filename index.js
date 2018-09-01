(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core'), require('sorted-json-stringify'), require('riot')) :
	typeof define === 'function' && define.amd ? define(['exports', '@fortawesome/fontawesome-svg-core', 'sorted-json-stringify', 'riot'], factory) :
	(factory((global.RiotFontAwesome = {}),global.FontAwesome,global.sortedJSONStringify,global.riot));
}(this, (function (exports,fontawesomeSvgCore,sortedJSONStringify,riot) { 'use strict';

sortedJSONStringify = sortedJSONStringify && sortedJSONStringify.hasOwnProperty('default') ? sortedJSONStringify['default'] : sortedJSONStringify;
riot = riot && riot.hasOwnProperty('default') ? riot['default'] : riot;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function normalizeIconArgs(icon) {
  if (!icon) {
    return null;
  }

  if ((typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] };
  }

  if (typeof icon === 'string') {
    // Add: allow space-separated prefix
    if (icon.indexOf(' ') !== -1) {
      var arr = icon.split(' ');
      return { prefix: arr[0], iconName: arr[1] };
    }
    return { prefix: 'fas', iconName: icon };
  }
}

function classToArray(param) {
  if (Array.isArray(param)) return param;
  return String(param).trim().split(/[ \r\n\t\f]+/);
}

var convertors = {
  spin: 'fa-spin',
  pulse: 'fa-pulse',
  border: 'fa-border',
  fixedWidth: 'fa-fw',
  listItem: 'fa-li',
  flipHorizontal: 'fa-flip-horizontal',
  flipVertical: 'fa-flip-vertical',
  pull: function pull(val, arr) {
    return arr.push('fa-pull-' + val);
  },
  size: function size(val, arr) {
    return arr.push('fa-' + val);
  },
  rotation: function rotation(val, arr) {
    return arr.push('fa-rotate-' + val);
  }
};

function parseClasses(args) {
  var ret = [];
  Object.keys(convertors).forEach(function (key) {
    var val = args[key];
    if (!val) return;
    var conversion = convertors[key];
    if (typeof conversion === 'string') {
      ret.push(conversion);
      return;
    }
    // Assume typeof conversion === 'function'
    conversion(val, ret);
  });
  return ret;
}

function parseTransform (param) {
  // directly return
  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') return param;
  return fontawesomeSvgCore.parse.transform(param || '');
}

var ITEM_REGEX = /^([^:]+):(.*)$/;

var parseItem = function parseItem(item, ret) {
  var result = ITEM_REGEX.exec(item);
  if (!result) return;
  var key = result[1].trim();
  var value = result[2].trim();
  ret[key] = value;
};

function parseStyle(val) {
  if (!val) return {};
  if (typeof val !== 'string') return val;
  var arr = val.split(';');
  var ret = {};
  arr.forEach(function (item) {
    return parseItem(item, ret);
  });
  return ret;
}

function parseCommonArgs(target, mode) {
  var classes = parseClasses(target);
  classes.push.apply(classes, classToArray(target[mode + 'Class'] || ''));
  classes.sort();
  var transform = target.transform ? parseTransform(target.transform) : null;
  var styles = parseStyle(target[mode + 'Style']);
  return { classes: classes, transform: transform, styles: styles };
}

function parseIconArgs(target) {
  var args = parseCommonArgs(target, 'icon');
  args.icon = normalizeIconArgs(target.icon);
  args.mask = normalizeIconArgs(target.mask);
  return args;
}

function argsToJSON(args) {
  var replacer = function replacer(key, val) {
    if (this === args && val && (key === 'icon' || key === 'mask')) {
      return { prefix: val.prefix, iconName: val.iconName };
    }
    return val;
  };
  return sortedJSONStringify(args, replacer);
}

var config = {
  iconCache: true,
  textCache: false
};

// for object clear, using let
var cache = {};

function set$1(key, node) {
  if (!node) return;
  cache[key] = node.cloneNode(true);
}

function get$1(key) {
  var value = cache[key];
  if (value) return value.cloneNode(true);
  return null;
}

function clear() {
  cache = {};
}

var fontawesome = { icon: fontawesomeSvgCore.icon, text: fontawesomeSvgCore.text };

var useCache = function useCache(key, callback) {
  var cachedVal = get$1(key);
  if (cachedVal) return cachedVal;
  var value = callback();
  set$1(key, value);
  return value;
};

var cacheCanUsed = function cacheCanUsed(cacheParam, defaultValue) {
  if (cacheParam === 'always') return true;
  if (cacheParam === 'none') return false;
  return !!defaultValue;
};

function generateDOM(args, cache) {
  var copiedArgs = void 0,
      argsJSON = void 0;
  if (typeof args === 'string') {
    copiedArgs = JSON.parse(args);
    argsJSON = args;
  } else {
    copiedArgs = _extends({}, args);
    argsJSON = argsToJSON(args);
  }
  var generateDOM = function generateDOM(type) {
    return function () {
      var key = copiedArgs[type];
      delete copiedArgs[type];
      var obj = fontawesome[type](key, copiedArgs);
      return obj ? obj.node[0] : null;
    };
  };
  if (copiedArgs.icon) {
    var getIcon = generateDOM('icon');
    if (cacheCanUsed(cache, config.iconCache)) {
      return useCache(argsJSON, getIcon);
    } else {
      return getIcon();
    }
  } else {
    var getText = generateDOM('text');
    if (cacheCanUsed(cache, config.textCache)) {
      return useCache(argsJSON, getText);
    } else {
      return getText();
    }
  }
}

function renderer(tag, parser) {
  var oldArgsJSON = null;
  return function () {
    var target = tag.parent ? tag.opts : tag;
    var args = parser(target);
    var argsJSON = argsToJSON(args);
    if (argsJSON === oldArgsJSON) return;
    oldArgsJSON = argsJSON;
    var dom = generateDOM(argsJSON, target.cache);
    if (!dom) return;
    var first = tag.root.firstChild;
    if (first) {
      tag.root.replaceChild(dom, tag.root.firstChild);
    } else {
      tag.root.appendChild(dom);
    }
  };
}

var css = fontawesomeSvgCore.dom.css();

riot.tag('font-awesome-icon', '', css, '', function (opts) {
  var tag = this;
  var render = renderer(tag, parseIconArgs);
  tag.on('mount', render);
  tag.on('update', render);
  if (!tag.parent) {
    _extends(tag, opts);
  }
});

function parseTextArgs(target) {
  var args = parseCommonArgs(target, 'text');
  args.text = (target.text || '').trim();
  return args;
}

riot.tag('font-awesome-text', '', '', '', function (opts) {
  var tag = this;
  var render = renderer(tag, parseTextArgs);
  tag.on('mount', render);
  tag.on('update', render);
  if (!tag.parent) {
    _extends(tag, opts);
  }
});

riot.tag2('font-awesome-layers', '<span class="{layerClass}" riot-style="{layerStyle}"> <yield></yield> </span>', '', '', function (opts) {
  var tag = this;
  tag.layerStyle = opts.layerStyle;
  var applyClass = function applyClass(param) {
    tag.layerClass = param.fixedWidth ? 'fa-layers fa-fw' : 'fa-layers';
  };
  applyClass(opts);
  tag.on('update', function () {
    if (!tag.parent) return;
    applyClass(opts);
    tag.layerStyle = opts.layerStyle;
  });
});

var cache$1 = { clear: clear };

exports.config = config;
exports.cache = cache$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
