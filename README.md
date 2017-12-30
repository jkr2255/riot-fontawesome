# Riot-FontAwesome

Use Font Awesome 5 icons as Riot.js tags.

## Installation

From npm, `npm i riot-fontawesome`.

This module is a UMD module, so you can directly include from browser.

```html
  <script src="https://cdn.jsdelivr.net/npm/riot@3.x.y/riot.min.js"></script>
  <script src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
  <script src="path/to/riot-fontawesome.js"></script>
```

### Requirements

* Riot.js 3.x
* Font Awesome 5

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

### Masking

You can use [masking](https://fontawesome.com/how-to-use/svg-with-js#masking) in this module.

`<font-awesome-icon icon='inside icon' mask='outside icon'></font-awesome-icon>` will do this.
Note that `transform` is applied only for inside `icon`.
