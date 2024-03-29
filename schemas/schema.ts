// @ts-ignore
import createSchema from "part:@sanity/base/schema-creator";
// @ts-ignore
import schemaTypes from "all:part:@sanity/base/schema-type";
import localize from "./utils/localize";
import notifikasjon from "./notifikasjon/notifikasjon";
import notifikasjonRichText from "./notifikasjon/notifikasjonRichText";
import { infosideSchemas } from "./infosider";
import { kalkulatorSchemas } from "./kalkulator";
import { seksjon } from "./soknad/seksjon";
import { faktum } from "./soknad/faktum";
import { svaralternativ } from "./soknad/svaralternativ";
import { landgruppe } from "./soknad/landgruppe";
import { infopage } from "./soknad/infopage";
import { soknadApptekst } from "./soknad/soknadApptekst";
import { navIconPicker, timeline, timelineElement } from "./soknad/timeline";
import { alertTextField, readMoreField } from "./soknad/common-fields";
import { dokumentkrav } from "./soknad/dokumentkrav";
import { dokumentkravSvar } from "./soknad/dokumentkrav-svar";
import { mineDagpengerAppText } from "./mine-dagpenger/mineDagpengerAppText";
import { mineDagpengerRichText } from "./mine-dagpenger/mineDagpengerRichText";
import { mineDagpengerLink } from "./mine-dagpenger/mineDagpengerLink";

export default createSchema({
  name: "dagpenger-info",
  types: schemaTypes.concat([
    ...infosideSchemas,
    ...kalkulatorSchemas,
    notifikasjon,
    notifikasjonRichText,
    localize("string"),
    localize("text"),
    localize("url"),
    seksjon,
    faktum,
    svaralternativ,
    landgruppe,
    soknadApptekst,
    mineDagpengerLink,
    mineDagpengerAppText,
    mineDagpengerRichText,
    infopage,
    timeline,
    timelineElement,
    navIconPicker,
    alertTextField,
    readMoreField,
    dokumentkrav,
    dokumentkravSvar,
  ]),
});
