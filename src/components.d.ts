/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface VamModal {}
  interface VamModalAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'VamModal': Components.VamModal;
  }

  interface StencilIntrinsicElements {
    'vam-modal': Components.VamModalAttributes;
  }


  interface HTMLVamModalElement extends Components.VamModal, HTMLStencilElement {}
  var HTMLVamModalElement: {
    prototype: HTMLVamModalElement;
    new (): HTMLVamModalElement;
  };

  interface HTMLElementTagNameMap {
    'vam-modal': HTMLVamModalElement
  }

  interface ElementTagNameMap {
    'vam-modal': HTMLVamModalElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
