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
        'node_modules/vam-fractal/src/components/mixins/breakpoints/_breakpoints.scss',
        'node_modules/vam-fractal/src/components/base/typography/_typography.scss'
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
