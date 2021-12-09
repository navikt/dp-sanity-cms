import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import localize from "./utils/localize";
import notifikasjon from "./notifikasjon/notifikasjon";
import notifikasjonRichText from "./notifikasjon/notifikasjonRichText";
import { infosideSchemas } from "./infosider";
import { kalkulatorSchemas } from "./kalkulator";
import { contentPage } from "./soknad/soknad";
import { seksjon } from "./soknad/seksjon";
import { keyValuePair } from "./soknad/key-value-pair";
import { faktum } from "./soknad/faktum";
import { answer } from "./soknad/answer";
import { subFaktum } from "./soknad/sub-faktum";

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
    contentPage,
    seksjon,
    keyValuePair,
    faktum,
    subFaktum,
    answer,
  ]),
});
