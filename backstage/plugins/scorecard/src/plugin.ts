import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const scorecardPlugin = createPlugin({
  id: 'scorecard',
  routes: {
    root: rootRouteRef,
  },
});

export const ScorecardPage = scorecardPlugin.provide(
  createRoutableExtension({
    name: 'ScorecardPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
