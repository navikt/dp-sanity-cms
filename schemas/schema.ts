import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import localize from "./utils/localize";
import notifikasjon from "./notifikasjon/notifikasjon";
import notifikasjonRichText from "./notifikasjon/notifikasjonRichText";
import { infosideSchemas } from "./infosider";
import { kalkulatorSchemas } from "./kalkulator";
import { contentPage } from "./soknad/soknad";
import { seksjon } from "./soknad/seksjon";
import { valgFaktum } from "./soknad/valgfaktum";
import { generatorFaktum } from "./soknad/generatorFaktum";
import { basefaktum } from "./soknad/baseFaktum";
import { answerOption } from "./soknad/answerOption";

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
    basefaktum,
    valgFaktum,
    generatorFaktum,
    answerOption,
  ]),
});
