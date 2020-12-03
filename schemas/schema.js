import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import richText from './richText/richText';
import faktaSide from './faktaside/faktaSide';
import localize from './utils/localize';
import customComponent from './richText/customComponent';
import video from './video/video';
import fremhevetTekst from './fremhevetTekst/fremhevetTekst';
import visSprakversjon from './faktaside/visSprakversjon';
import fremhevetRichText from './fremhevetTekst/fremhevetRichText';
import visFor from './richText/annotations/visFor';
import relatertInformasjonRichText from './faktaside/relatertInformasjonRichText';
import oppsett from './oppsett/oppsett';
import deltTekst from './deltTekst/deltTekst';
import deltRichText from './deltTekst/deltRichText';
import tileggsInformasjon from './tillegsinfo/tileggsInformasjon';
import tilleggsInfoRichText from './tillegsinfo/tilleggsInfoRichText';
import deltTekstReference from './deltTekst/deltTekstReference';
import deltFremhevetTekst from './deltTekst/deltFremhevetTekst';
import deltFremhevetRichText from './deltTekst/deltFremhevetRichText';
import kortFortaltRichText from './faktaside/kortFortaltRichText';
import eksternLenke from './oppsett/eksternLenke';
import tidslinjeRichText from './tidslinje/tidslinjeRichText';
import tidslinje from './tidslinje/tidslinje';
import notifikasjon from './notifikasjon/notifikasjon';
import notifikasjonRichText from './notifikasjon/notifikasjonRichText';

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
    kortFortaltRichText,
    eksternLenke,
    tidslinjeRichText,
    tidslinje,
    notifikasjon,
    notifikasjonRichText,
    localize('notifikasjonRichText'),
    localize('kortFortaltRichText'),
    localize('richText'),
    localize('deltRichText'),
    localize('string'),
    localize('text'),
    localize('relatertInformasjonRichText'),
    localize('url'),
  ]),
});
