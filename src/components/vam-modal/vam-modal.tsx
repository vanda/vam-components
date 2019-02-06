import { Component, Method, Element, Prop } from '@stencil/core';
import cookies from 'browser-cookies';

@Component({
  tag: 'vam-modal',
  styleUrl: 'vam-modal.scss',
  shadow: true
})

export class VamModal {
  @Element() modalEl: HTMLElement;

  @Prop() modalCampaignId: string
  @Prop() modalDomain: string
  @Prop({ mutable: true }) modalOnceOnly: boolean = false
  @Prop() heading: string
  @Prop() content: string
  @Prop() link: string
  @Prop() cta: string
  @Prop() dismiss: string

  @Method()
  close() {
    ;
  }

  modalTracking(category, action) {
    window['dataLayer'] = window['dataLayer'] || [];
    window['dataLayer'].push({
      event: 'myClick',
      category,
      action
    });
  }

  render() {
    if(!this.modalOnceOnly || !cookies.get(this.modalCampaignId)) {
      document.body.appendChild(this.modalEl);
      this.modalEl.classList.add('active');
      this.modalTracking(this.modalCampaignId, 'pop-up displayed');
    }

    return (
      <section class="content">
        <h1 class="heading">
          {this.heading}
        </h1>
        <div class="description">
          <slot />
        </div>
        <a href="{this.link}" class="u-btn u-btn--arrowed">
          {this.cta}
        </a>
        <div>
          <a href="#" class="dismiss js-modal-dismiss u-link u-link--arrowed">
            {this.dismiss}
          </a>
        </div>
      </section>
    );
  }
}
