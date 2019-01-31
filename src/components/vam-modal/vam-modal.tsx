import { Component } from '@stencil/core';

@Component({
  tag: 'vam-modal',
  styleUrl: 'vam-modal.scss',
  shadow: true
})

export class VamModal {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
