[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/form-action-bar.svg)](https://www.npmjs.com/package/@advanced-rest-client/form-action-bar)

[![Build Status](https://travis-ci.org/advanced-rest-client/form-action-bar.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/form-action-bar)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/form-action-bar)


# &lt;form-action-bar&gt;

An action bar container for forms.

## Example:

```html
<form-action-bar elevation="1">
  <paper-button>cancel</paper-button>
  <paper-button>save</paper-button>
</form-action-bar>
```

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

### In a Polymer 3 element

```js
import {PolymerElement, html} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@advanced-rest-client/form-action-bar/form-action-bar.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <form-action-bar></form-action-bar>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/form-action-bar
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
