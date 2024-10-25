import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Welcome from './src/screens/Welcome';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Welcome />
  </ApplicationProvider>
);