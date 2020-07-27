import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import richText from './objects/richText';
import faktaSide from './documents/faktaSide';
import localize from './utils/localize';
import customComponent from './objects/customComponent';
import video from './objects/video';
import fremhevetTekst from './objects/fremhevetTekst';
import visSprakversjon from './objects/visSprakversjon';
import fremhevetRichText from './objects/fremhevetRichText';
import visFor from './objects/visFor';
import relatertInformasjonRichText from './objects/relatertInformasjonRichText';
import oppsett from './documents/oppsett';
import deltTekst from './documents/deltTekst';
import deltRichText from './objects/deltRichText';
import tileggsInformasjon from './objects/tileggsInformasjon';
import tilleggsInfoRichText from './objects/tilleggsInfoRichText';
import deltTekstReference from './objects/deltTekstReference';
import deltFremhevetTekst from './objects/deltFremhevetTekst';
import deltFremhevetRichText from './objects/deltFremhevetRichText';

export default createSchema({
  name: 'dagpenger-info',
  types: schemaTypes.concat([
    richText,
    faktaSide,
    customComponent,
    video,
    fremhevetRichText,
    fremhevetTekst,
    visSprakversjon,
    visFor,
    relatertInformasjonRichText,
    oppsett,
    deltTekst,
    deltTekstReference,
    deltRichText,
    deltFremhevetTekst,
    deltFremhevetRichText,
    tileggsInformasjon,
    tilleggsInfoRichText,
    localize('richText'),
    localize('deltRichText'),
    localize('string'),
    localize('text'),
    localize('relatertInformasjonRichText'),
  ]),
});
