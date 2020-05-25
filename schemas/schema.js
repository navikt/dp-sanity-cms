import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import richText from './richText';
import faktaSide from './faktaSide';
import localize from './utils/localize';
import customComponent from './komponent';
import GtoNOK from './GtoNOK';
import video from './video';
import fremhevetTekst from './fremhevetTekst';
import publiser from './publiser';
import fremhevetRichText from './fremhevetRichText';

export default createSchema({
  name: 'dagpenger-info',
  types: schemaTypes.concat([
    richText,
    faktaSide,
    customComponent,
    GtoNOK,
    video,
    fremhevetRichText,
    fremhevetTekst,
    publiser,
    localize('richText'),
    localize('string'),
    localize('text'),
  ]),
});
