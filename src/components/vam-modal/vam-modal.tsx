import { Component } from '@stencil/core';
import { Prop } from '@stencil/core';

@Component({
  tag: 'vam-modal',
  styleUrl: 'vam-modal.scss',
  shadow: true
})

export class VamModal {
  @Prop() heading : string
  @Prop() description : string
  @Prop() link : string
  @Prop() cta : string
  @Prop() dismiss : string

  render() {
    return (
      <section class="content">
        <h1 class="heading">
          {this.heading}
        </h1>
        <div class="description">
          {this.description}
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
