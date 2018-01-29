# Riot-FontAwesome

Use Font Awesome 5 icons as Riot.js tags.

## Installation

From npm, `npm i riot-fontawesome`.

This module is a UMD module, so you can directly include from browser.

```html
  <script src="https://cdn.jsdelivr.net/npm/riot@3.x.y/riot.min.js"></script>
  <script src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sorted-json-stringify@0.0.2/index.js"></script>
  <script src="path/to/riot-fontawesome.js"></script>
```

### Requirements

* Riot.js 3.x
* Font Awesome 5
* [jkr2255/sorted-json-stringify](https://github.com/jkr2255/sorted-json-stringify)

## Usage

Once required, `<font-awesome-icon>` tag can be used. Parameters are:

* `icon=name` ... specify icon name. (required) can be specified as icon instance/Array/name/space-separated `group name` syntax.
* `spin=(truthy value)` ... spin icon.
* `pulse=(truthy value)` ... pulsate icon.
* `pull=(left/right)` ... move icon to left / right.
* `border=(truthy value)` ... add border line on icon.
* `fixed-width=(truthy value)` ... fix width of icons.
* `list-item=(truthy value)` ... use icon as list marker.
* `flip-horizontal=(truthy value)` ... flip icon horizontally.
* `flip-vertical=(truthy value)` ... flip icon vertically.
* `size=(md, lg, 2x...10x)` ... specify size of icon.
* `rorarion=(degree)` ... rorate icon.
* `transform=(transform object or string)` ... apply transformation for icon.
* `icon-class=(classes separated by space)` ... specify additonal classes to icon.
* `icon-style=(inline css)` ... specify additional styles to icon.

### Masking

You can use [masking](https://fontawesome.com/how-to-use/svg-with-js#masking) in this module.

`<font-awesome-icon icon='inside icon' mask='outside icon'></font-awesome-icon>` will do this.
Note that `transform` is applied only for inside `icon`.

### Change icon from program

Inside another Riot tags, `<font-awesome-icon>` tag sees `opts` for parameter.
`<font-awesome-icon icon={outside.variable} />` will work as intended.

Using `<font-awesome-icon>` directly inside HTML, tag uses tag's instance values.
If you want to change icon, try updating like `iconTag.update({icon: 'icon-name'})`.

### Layers & Texts

`<font-awesome-layers>` tag can be used for layer stacking.

```html
<font-awesome-layers fixed-width='1'>
  <font-awesome-icon icon='bookmark'></font-awesome-icon>
  <font-awesome-icon icon='heart' transform='shrink-10 up-2' style='color:Tomato'></font-awesome-icon>
</font-awesome-layers>
```

In layers, you can use `<font-awesome-text>` tag just like `<font-awesome-icon>`. parameters are:

* `text` ... displaying text.
* `text-class` ... additional classes for text.
* `text-style` ... additional styles for text.
* `transform` ... apply transformation for icon.

### Caching

In many of the use cases, icon patterns used in pages are limited. So caching SVG nodes will increase performance.

But, when using many icons like FontAwesome demonstration, or performing transformations with unlimited parameters,
cache might be floddoed up.

So, there are some settings related to caches.

* `RiotFontAwesome.config.iconCache` ... whether to cache icons. (default true)
* `RiotFontAwesome.config.textCache` ... whether to cache texts. (default false)
* `cache="always/none"` in tag ... tag with `cache="always"` is cached regardless of `config`. `cache="none"` is never cached.
* `RiotFontAwesome.cache.clear()` ... purge cache.

## TODO

* Add automated test

### Known problems

* Icons without `fontawesome.library.add()` cannot be rendered (I'm wondering if this functionality is necessary...)
