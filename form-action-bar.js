/**
@license
Copyright 2018 Pawel Psztyc, The ARC team
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
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-styles/shadow.js';
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
class FormActionBar extends PolymerElement {
  static get template() {
    return html`
    <style include="paper-material-shared-styles"></style>
    <style>
    :host {
      background-color: var(--form-action-bar-background, #fff);
      @apply --layout-horizontal-reverse;
      @apply --layout-center;
      width: 100%;
      height: var(--form-action-bar-height, 64px);
      position: fixed;
      bottom: 0px;
      left: 0;
      @apply --shadow-none;
    }

    :host ::slotted(*) {
      margin-left: 12px;
    }

    :host([elevation="1"]) {
      @apply --shadow-elevation-2dp;
    }

    :host([elevation="2"]) {
      @apply --shadow-elevation-3dp;
    }

    :host([elevation="3"]) {
      @apply --shadow-elevation-4dp;
    }

    :host([elevation="4"]) {
      @apply --shadow-elevation-6dp;
    }

    :host([elevation="5"]) {
      @apply --shadow-elevation-8dp;
    }

    :host([elevation="6"]) {
      @apply --shadow-elevation-12dp;
    }

    :host([elevation="7"]) {
      @apply --shadow-elevation-16dp;
    }

    :host([elevation="8"]) {
      @apply --shadow-elevation-24dp;
    }

    .content {
      @apply --layout-flex;
      @apply --layout-end-justified;
      @apply --layout-horizontal;

      @apply --form-action-bar-content;
    }
    </style>
    <div class="content">
      <slot></slot>
    </div>
    <slot name="prefix"></slot>
`;
  }

  static get properties() {
    return {
      /**
       * The z-depth of this element, from 0-8. Setting to 0 will remove the
       * shadow, and each increasing number greater than 0 will be "deeper"
       * than the last.
       */
      elevation: {
        type: Number,
        reflectToAttribute: true,
        value: 1
      }
    };
  }
}
window.customElements.define('form-action-bar', FormActionBar);
