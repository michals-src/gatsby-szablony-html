import React from 'react';
import Typograph from './Typograph';


export default {
  title: 'Theme/Typograph',

  parameters: {
    component: Typograph,
  },
};

export const _Default = () => <Typograph />;

_Default.story = {
    name: 'Typograph',
};
