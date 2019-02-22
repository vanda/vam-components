/* eslint-disable import/no-unassigned-import */

import {LitElement, html} from 'lit-element';

import './components/VamModal.lit';

export default class LitApp extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <div>
        <vam-modal></vam-modal>
      </div>
    `;
  }
}

window.customElements.define('lit-app', LitApp);
