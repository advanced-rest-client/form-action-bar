[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/form-action-bar.svg)](https://www.npmjs.com/package/@advanced-rest-client/form-action-bar)

[![Build Status](https://travis-ci.org/advanced-rest-client/form-action-bar.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/form-action-bar)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@advanced-rest-client/form-action-bar)


# &lt;form-action-bar&gt;

The `<form-action-bar>` renders an action buttons and status information in the bottom of the form.

```html
<form is="iron-form">
  <form-action-bar>
    <div id="status" slot="prefix">Form status OK</div>
    <paper-button>cancel</paper-button>
    <paper-button>save</paper-button>
  </form-action-bar>
</form>
```

Children are rendered on the right hand side of the bar.

If a child element contains a `slot="prefix"` attribute it will be
rendered on the left hand side of the bar.

### Parent container padding

Parent container should have  bottom padding at least the same as the `--form-action-bar-height` CSS variable value.
By default it is 64 pixels. The bar reders itself in fixed position so everything behind it is not visible.

### Elevation

Use the `elevation` attribute (in range 0-8) to set z-deepth of the
bar were 0 is no elevation at all and 8 is to highest elevation.
Default elevation is 1.

### Styling

`<form-action-bar>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--form-action-bar-background` | Background color of the bar | `#fff`
`--form-action-bar-height` | Bar height | `64px`
`--form-action-bar-content` | Mixin applied to the main container (excluding prefixes) | `{}`

Additionally the element accepts ARC's theme values for shaddow:

```html
<style>
html {
  --box-shadow-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --box-shadow-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12),
                  0 3px 1px -2px rgba(0, 0, 0, 0.2);
  --box-shadow-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                0 1px 8px 0 rgba(0, 0, 0, 0.12),
                0 3px 3px -2px rgba(0, 0, 0, 0.4);
  --box-shadow-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12),
                0 2px 4px -1px rgba(0, 0, 0, 0.4);
  --box-shadow-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                0 1px 18px 0 rgba(0, 0, 0, 0.12),
                0 3px 5px -1px rgba(0, 0, 0, 0.4);
  --box-shadow-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12),
                0 5px 5px -3px rgba(0, 0, 0, 0.4);
  --box-shadow-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                0 4px 22px 3px rgba(0, 0, 0, 0.12),
                0 6px 7px -4px rgba(0, 0, 0, 0.4);
  --box-shadow-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                0  6px 30px 5px rgba(0, 0, 0, 0.12),
                0  8px 10px -5px rgba(0, 0, 0, 0.4);
  --box-shadow-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                0 9px 46px 8px rgba(0, 0, 0, 0.12),
                0 11px 15px -7px rgba(0, 0, 0, 0.4);
}
</style>
```

## New in version 3

-   Dropped support for Polymer library. It is now a plain web component.

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/form-action-bar
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import './node_modules/@advanced-rest-client/form-action-bar/form-action-bar.js';
    </script>
  </head>
  <body>
    <form-action-bar></form-action-bar>
  </body>
</html>
```

### In a Polymer template

```js
import {PolymerElement, html} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@advanced-rest-client/form-action-bar/form-action-bar.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <form-action-bar>
      <paper-button>cancel</paper-button>
      <paper-button>save</paper-button>
    </form-action-bar>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### In a LitElement template

```javascript
import { LitElement, html } from 'lit-element';
import './node_modules/@advanced-rest-client/form-action-bar/form-action-bar.js';

class SampleElement extends LitElement {
  render() {
    return html`
    <form-action-bar>
      <paper-button>cancel</paper-button>
      <paper-button>save</paper-button>
    </form-action-bar>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Development

```sh
git clone https://github.com/advanced-rest-client/form-action-bar
cd form-action-bar
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```
