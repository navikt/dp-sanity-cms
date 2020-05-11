import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import deltTekst from './deltTekst';
import richText from './richText';
import faktaSide from './faktaSide';
import localize from './utils/localize';
import customComponent from './customComponent';
import GtoNOK from './GtoNOK';
import video from './video';

export default createSchema({
  name: 'dagpenger-info',
  types: schemaTypes.concat([
    deltTekst,
    richText,
    faktaSide,
    customComponent,
    GtoNOK,
    video,
    localize('richText'),
    localize('string'),
    localize('text'),
  ]),
});
