import { LitElement, html } from 'lit-element';
import cookies from 'browser-cookies';
import styles from './VamModal.pcss'

const tagName = 'vam-modal';
class VamModal extends LitElement {
  render() {
    return html`
      <style>
        ${styles.toString()}
      </style>

      <link rel="stylesheet" href="https://vam-design-guide.surge.sh/assets/styles/vam-style.css" type="text/css">

      <div class="b-modal" @click="${this._onClick}">
        <section class="b-modal__content">
          <h1 class="b-modal__title">
            ${this.heading}
          </h1>
          <div class="b-modal__description">
            <slot />
          </div>
          <a href="{this.link}" class="b-modal__cta u-btn u-btn--arrowed">
            ${this.cta}
          </a>
          <div>
            <a href="#" class="b-modal__dismiss u-link u-link--arrowed">
              ${this.dismiss}
            </a>
          </div>
        </section>
      </div>
    `;
  }

  static get properties() {
    return {
      modalCampaignId: String,
      modalDomain: String,
      onceOnly: Boolean = false,
      heading: String,
      content: String,
      link: String,
      cta: String,
      dismiss: String
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.modalCampaignId = this.getAttribute('modal-campaign-id');
    this.modalDomain = this.getAttribute('modal-domain');
    this.onceOnly = this.hasAttribute('once-only');
  }

  _modalTracking(category, action) {
    window['dataLayer'] = window['dataLayer'] || [];
    window['dataLayer'].push({
      event: 'myClick',
      category,
      action
    });
  }
  
  _onClick(e) {
    if (this.onceOnly) {
      cookies.set(this.modalCampaignId, 'seen', { domain: this.modalDomain, expires: 365 });
    }
    if (e.target !== this.querySelector('.b-modal')) {
      const modalAction = this.querySelector('b-modal__cta');
      if (e.target === modalAction) {
        this._modalTracking(this.modalCampaign, `clicked: ${modalAction.textContent}`);
      } else {
        this._modalTracking(this.modalCampaign, 'pop-up dismissed');
        this.remove();
      }
    }
  };
}
window.customElements.define(tagName, VamModal);

const el = document.querySelector(tagName);

if(!el.onceOnly || !cookies.get(el.modalCampaignId)) {
  document.body.appendChild(el);
  el.classList.add('active');
  el._modalTracking(el.modalCampaignId, 'pop-up displayed');
}