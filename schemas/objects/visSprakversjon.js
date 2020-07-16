import { supportedLanguages } from '../utils/languages';

export default {
  name: 'visSprakversjon',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'boolean',
  })),
};
