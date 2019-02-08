import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'vamWC',
  bundles: [
    { components: ['vam-modal'] }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/vam-fractal-imports.scss'
      ]
    })
  ],
  outputTargets: [
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
