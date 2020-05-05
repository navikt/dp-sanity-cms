export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2 - Bolk', value: 'h2' },
        { title: 'H3 - Avsnitt', value: 'h3' },
        { title: 'H4', value: 'h4' },
      ],
    },
    {
      type: 'customComponent',
    },
    {
      type: 'reference',
      to: [{ type: 'deltTekst' }],
    },
  ],
};
