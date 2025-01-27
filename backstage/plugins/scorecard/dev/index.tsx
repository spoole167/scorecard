import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { scorecardPlugin, ScorecardPage } from '../src/plugin';

createDevApp()
  .registerPlugin(scorecardPlugin)
  .addPage({
    element: <ScorecardPage />,
    title: 'Root Page',
    path: '/scorecard',
  })
  .render();
