/**
@license
Copyright 2019 Pawel Psztyc, The ARC team
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
const tpl = document.createElement('template');
tpl.innerHTML = `<style>
:host {
  background-color: var(--form-action-bar-background, #fff);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: var(--form-action-bar-height, 64px);
  position: fixed;
  bottom: 0px;
  left: 0;
  box-shadow: none;
  transition: var(--box-shadow-transition);
}

:host ::slotted(*) {
  margin-left: 12px;
}

:host([elevation="1"]) {
  box-shadow: var(--box-shadow-2dp);
}

:host([elevation="2"]) {
  box-shadow: var(--box-shadow-3dp);
}

:host([elevation="3"]) {
  box-shadow: var(--box-shadow-4dp);
}

:host([elevation="4"]) {
  box-shadow: var(--box-shadow-6dp);
}

:host([elevation="5"]) {
  box-shadow: var(--box-shadow-8dp);
}

:host([elevation="6"]) {
  box-shadow: var(--box-shadow-12dp);
}

:host([elevation="7"]) {
  box-shadow: var(--box-shadow-16dp);
}

:host([elevation="8"]) {
  box-shadow: var(--box-shadow-24dp);
}

.content {
  display: flex;
  flex: 1;
  flex-basis: 0.000000001px;
  justify-content: flex-end;
  flex-direction: row;
}
</style>
<div class="content">
  <slot></slot>
</div>
<slot name="prefix"></slot>`;
/**
 * The `<form-action-bar>` renders an action buttons and status information in the bottom of the form.
 *
 * ```html
 * <form is="iron-form">
 *   <form-action-bar>
 *     <div id="status" slot="prefix">Form status OK</div>
 *     <paper-button>cancel</paper-button>
 *     <paper-button>save</paper-button>
 *   </form-action-bar>
 * </form>
 * ```
 *
 * Children are rendered on the right hand side of the bar.
 *
 * If a child element contains a `slot="prefix"` attribute it will be
 * rendered on the left hand side of the bar.
 *
 * ### Parent container padding
 *
 * Parent container should have  bottom padding at least the same as the `--form-action-bar-height` CSS variable value.
 * By default it is 64 pixels. The bar reders itself in fixed position so everything behind it is not visible.
 *
 * ### Elevation
 *
 * Use the `elevation` attribute (in range 0-8) to set z-deepth of the
 * bar were 0 is no elevation at all and 8 is to highest elevation.
 * Default elevation is 1.
 *
 * ### Styling
 *
 * `<form-action-bar>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--form-action-bar-background` | Background color of the bar | `#fff`
 * `--form-action-bar-height` | Bar height | `64px`
 * `--form-action-bar-content` | Mixin applied to the main container (excluding prefixes) | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @demo demo/styled.html Styled form action bar
 * @demo demo/status.html Action bar with status message
 * @memberof UiElements
 */
class FormActionBar extends HTMLElement {
  get elevation() {
    const current = this.getAttribute('elevation');
    if (!current) {
      return null;
    }
    return Number(current);
  }
  /**
   * @param {Number} value The z-depth of this element, from 0-8.
   * Setting to 0 removes the shadow, and each increasing number greater than
   * 0 is "deeper" than the last.
   */
  set elevation(value) {
    if (isNaN(value)) {
      return;
    }
    this.setAttribute('elevation', String(value));
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const clone = tpl.content.cloneNode(true);
    shadow.appendChild(clone);
  }

  connectedCallback() {
    if (!this.hasAttribute('elevation')) {
      this.elevation = 1;
    }
  }
}
window.customElements.define('form-action-bar', FormActionBar);
