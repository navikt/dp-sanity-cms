import richText from "./richText/richText";
import faktaSide from "./faktaside/faktaSide";
import customComponent from "./richText/customComponent";
import video from "../video/video";
import fremhevetRichText from "./fremhevetTekst/fremhevetRichText";
import fremhevetTekst from "./fremhevetTekst/fremhevetTekst";
import visSprakversjon from "./faktaside/visSprakversjon";
import visFor from "./richText/annotations/visFor";
import oppsett from "./oppsett/oppsett";
import deltTekst from "./deltTekst/deltTekst";
import deltTekstReference from "./deltTekst/deltTekstReference";
import deltRichText from "./deltTekst/deltRichText";
import tileggsInformasjon from "./tillegsinfo/tileggsInformasjon";
import tilleggsInfoRichText from "./tillegsinfo/tilleggsInfoRichText";
import kortFortaltRichText from "./faktaside/kortFortaltRichText";
import snarvei from "./oppsett/snarvei";
import menyLenkeEkstern from "./oppsett/menylenkeEkstern";
import tidslinjeRichText from "./tidslinje/tidslinjeRichText";
import tidslinje from "./tidslinje/tidslinje";
import localize from "../utils/localize";
import historikkHjelpetekster from "./historikk/historikkHjelpetekster";
import historikkRichText from "./historikk/historikkRichText";
import oppsettRichText from "./oppsett/oppsettRichText";
import situasjon from "./richText/annotations/situasjon";

export const infosideSchemas = [
  richText,
  faktaSide,
  customComponent,
  video,
  fremhevetRichText,
  fremhevetTekst,
  visSprakversjon,
  visFor,
  oppsett,
  deltTekst,
  deltTekstReference,
  deltRichText,
  tileggsInformasjon,
  tilleggsInfoRichText,
  kortFortaltRichText,
  snarvei,
  menyLenkeEkstern,
  tidslinjeRichText,
  tidslinje,
  historikkHjelpetekster,
  historikkRichText,
  oppsettRichText,
  situasjon,
  localize("historikkRichText"),
  localize("notifikasjonRichText"),
  localize("kortFortaltRichText"),
  localize("richText"),
  localize("deltRichText"),
  localize("oppsettRichText"),
];
