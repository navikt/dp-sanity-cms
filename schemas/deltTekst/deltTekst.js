import { DeltTekstIkon } from './DeltTekstPreview';
import HvorErDenIBruk from './HvorErDenIBruk';

export default {
  type: 'document',
  name: 'deltTekst',
  title: 'Delt tekst',
  icon: DeltTekstIkon,
  fields: [
    {
      name: 'hvorDenBrukes',
      type: 'string',
      inputComponent: HvorErDenIBruk,
    },
    {
      name: 'title',
      title: 'Beskrivelse',
      type: 'string',
      description:
        'Kun for intern bruk i sanity. Dette er tittelen du bruker for å trekke inn en delt tekst i innholdet på en faktaside. Vises ikke for bruker',
    },
    {
      name: 'innhold',
      title: 'Innhold',
      type: 'localeDeltRichText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: DeltTekstIkon,
      };
    },
  },
};
