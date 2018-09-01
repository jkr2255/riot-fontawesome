# Changelog

## 0.2.0 (2018/09/01)

* Updating dependencies for FontAwesome >= 5.1. See the [UPGRADING of FontAwesome](https://github.com/FortAwesome/Font-Awesome/blob/master/UPGRADING.md#50x-to-510).
* Optimization: avoid unnecessary `toConsumableArray`.

## 0.1.3 (2018/02/11)

* Optimization: simplify information about no transformation

## 0.1.2 (2018/01/31)

* Optimization: sort classes only once, on generation.
* Update `sorted-json-stringify` dependency
* Make both `index.js` and `index.min.js`.

## 0.1.1 (2018/01/29)

* fix: `icon-class` and `icon-style` not applied

## 0.1.0 (2018/01/29)

* removed unintentional `undefined` class.
* Caching SVG nodes (see README).

## 0.0.6 (2018/01/28)

* Externalize `sorted-json-stringify` (needs code addition if using directly from browser)

## 0.0.5 (2018/01/28)

* Packager changed from Webpack to Rollup
* Update DOM only when parameters are changed

## 0.0.4 (2018/01/02)

* Add layers (`<font-awesome-layers>` & `<font-awesome-text>` tags)
* Add `icon-style` and `icon-class` attributes
* Refactoring

## 0.0.3 (2017/12/31)

* Add functionality for updating outside Riot tags.

## 0.0.2 (2017/12/30)

* Initial version.
