import { supportedLanguages } from './languages';

// Hjelpefunksjon som slenger på språkstøtte for typer/objeketer
export default (type) => {
  const name = type.charAt(0).toUpperCase() + type.slice(1);
  return {
    name: 'locale' + name,
    title: name + 'with translations',
    type: 'object',
    fieldsets: [
      {
        title: 'Oversettelser',
        name: 'translations',
        options: { collapsible: true },
      },
    ],
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: type,
      rows: 3,
      fieldset: lang.isDefault ? null : 'translations',
    })),
  };
};
