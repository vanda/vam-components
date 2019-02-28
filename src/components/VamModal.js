import { LitElement, html } from 'lit-element';
import cookies from 'browser-cookies';

export default class VamModal {
  static get properties() {
    return {
      modalCampaignId: String,
      modalDomain: String,
      modalOnceOnly: Boolean = false,
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

  render() {
    return html`
      <style lang="postcss">
      @import './../helpers.pcss';

      :host {
        display: block;
      }

      :host(.active) .b-modal {
        animation: fadeIn 1s;
        display: block;
      }

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

  _modalTracking(category, action) {
    window['dataLayer'] = window['dataLayer'] || [];
    window['dataLayer'].push({
      event: 'myClick',
      category,
      action
    });
  }
  
  _onClick(e) {console.log('#####', this.modalCampaignId);
    if (this.modalOnceOnly) {
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
window.customElements.define('vam-modal', VamModal);

const el = document.querySelector('vam-modal');

if(!el.modalOnceOnly || !cookies.get(el.modalCampaignId)) {
  document.body.appendChild(el);
  el.classList.add('active');
  el._modalTracking(el.modalCampaignId, 'pop-up displayed');
}