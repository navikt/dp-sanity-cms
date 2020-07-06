import React from 'react';
import { filtreringsValg } from './utils/filtreringsValg';

export default {
  name: 'visFor',
  type: 'object',
  fields: filtreringsValg.map((it) => ({
    type: 'boolean',
    name: it,
  })),
};
