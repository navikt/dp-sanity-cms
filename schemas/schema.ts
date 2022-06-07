import createSchema from "part:@sanity/base/schema-creator";
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
    landgruppe
  ]),
});
