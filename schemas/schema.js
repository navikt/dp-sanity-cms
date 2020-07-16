import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import richText from './objects/richText';
import faktaSide from './documents/faktaSide';
import localize from './utils/localize';
import customComponent from './objects/komponent';
import GtoNOK from './objects/GtoNOK';
import video from './objects/video';
import fremhevetTekst from './objects/fremhevetTekst';
import visSprakversjon from './objects/visSprakversjon';
import fremhevetRichText from './objects/fremhevetRichText';
import visFor from './objects/visFor';
import relatertInformasjonRichText from './objects/relatertInformasjonRichText';
import oppsett from './documents/oppsett';
import deltTekst from './documents/deltTekst/deltTekst';
import deltRichText from './documents/deltTekst/deltRichText';
import tileggsInformasjon from './objects/tileggsInformasjon';
import tilleggsInfoRichText from './objects/tilleggsInfoRichText';

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
    visSprakversjon,
    visFor,
    relatertInformasjonRichText,
    oppsett,
    deltTekst,
    deltRichText,
    tileggsInformasjon,
    tilleggsInfoRichText,
    localize('richText'),
    localize('deltRichText'),
    localize('string'),
    localize('text'),
    localize('relatertInformasjonRichText'),
  ]),
});
