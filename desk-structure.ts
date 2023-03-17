import S from "@sanity/desk-tool/structure-builder";
import * as InternationalizationStructure from "@sanity/document-internationalization/lib/structure";
import { UnserializedListItem } from "@sanity/structure/src/ListItem";
import { MdSettings, MdWeb, MdInsights, MdWysiwyg, MdOutlineCalculate } from "react-icons/md";
import FaktasidePreview from "./previews/FaktasidePreview";
import FaktasideSEOPreview from "./previews/FaktasideSEOPreview";
import ForsidePreview from "./previews/ForsidePreview";
import ForsideSEOPreview from "./previews/ForsideSEOPreview";
import KalkulatorPreview from "./previews/KalkulatorPreview";
import deltTekst from "./schemas/infosider/deltTekst/deltTekst";
import faktaSide from "./schemas/infosider/faktaside/faktaSide";
import historikkHjelpetekster, { HistorikkIkon } from "./schemas/infosider/historikk/historikkHjelpetekster";
import oppsett from "./schemas/infosider/oppsett/oppsett";
import situasjon from "./schemas/infosider/richText/annotations/situasjon";
import notifikasjon from "./schemas/notifikasjon/notifikasjon";
import { soknadApptekst } from "./schemas/soknad/soknadApptekst";
import { dokumentkrav } from "./schemas/soknad/dokumentkrav";
import { dokumentkravSvar } from "./schemas/soknad/dokumentkrav-svar";
import { faktum } from "./schemas/soknad/faktum";
import { infopage } from "./schemas/soknad/infopage";
import { landgruppe } from "./schemas/soknad/landgruppe";
import { seksjon } from "./schemas/soknad/seksjon";
import { svaralternativ } from "./schemas/soknad/svaralternativ";
import { mineDagpengerAppText } from "./schemas/mine-dagpenger/mineDagpengerAppText";
import { mineDagpengerRichText } from "./schemas/mine-dagpenger/mineDagpengerRichText";
import { mineDagpengerLink } from "./schemas/mine-dagpenger/mineDagpengerLink";

const oldSchemaNames = [
  deltTekst.name,
  faktaSide.name,
  notifikasjon.name,
  situasjon.name,
  oppsett.name,
  historikkHjelpetekster.name,
];

const soknadSchemaNames = [
  seksjon.name,
  faktum.name,
  svaralternativ.name,
  landgruppe.name,
  soknadApptekst.name,
  infopage.name,
  dokumentkrav.name,
  dokumentkravSvar.name,
];

const mineDagpengerSchemaNames = [mineDagpengerAppText.name, mineDagpengerRichText.name, mineDagpengerLink.name];

const isSoknadSchema = (listItem: UnserializedListItem) => soknadSchemaNames.includes(listItem.id);
const isMineDagpengerSchema = (listItem: UnserializedListItem) => mineDagpengerSchemaNames.includes(listItem.id);

const internationalizedSoknadTypeItems =
  InternationalizationStructure.getFilteredDocumentTypeListItems().filter(isSoknadSchema);

const internationalizedMineDagpengerTypeItems =
  InternationalizationStructure.getFilteredDocumentTypeListItems().filter(isMineDagpengerSchema);

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Dagpenger kalkulator")
        .icon(MdOutlineCalculate)
        .child(
          S.editor()
            .schemaType("dagpengekalkulator")
            .documentId("dagpengekalkulator")
            .views([S.view.form(), S.view.component(KalkulatorPreview).title("Kalkulator-preview")])
        ),

      S.listItem()
        .title("Dagpengesøknad")
        .icon(MdWysiwyg)
        .child(S.list().title("Dagpengesøknad").items(internationalizedSoknadTypeItems)),

      S.listItem()
        .title("Mine dagpenger")
        .icon(MdInsights)
        .child(S.list().title("Mine dagpenger").items(internationalizedMineDagpengerTypeItems)),

      S.listItem()
        .title("Gamle infosider")
        .icon(MdSettings)
        .child(
          S.list()
            .title("Gamle infosider")
            .items([
              S.listItem()
                .title("Oppsett")
                .icon(MdSettings)
                .child(
                  S.editor()
                    .schemaType(oppsett.name)
                    .documentId("oppsett")
                    .views([
                      S.view.form(),
                      S.view.component(ForsideSEOPreview).title("SEO"),
                      S.view.component(ForsidePreview).title("Forside-preview"),
                    ])
                ),
              S.listItem()
                .title("Faktasider")
                .icon(MdWeb)
                .child(
                  S.documentTypeList(faktaSide.name).child(
                    S.editor()
                      .schemaType(faktaSide.name)
                      .views([
                        S.view.form(),
                        S.view.component(FaktasideSEOPreview).title("SEO"),
                        S.view.component(FaktasidePreview).title("Preview"),
                      ])
                  )
                ),

              S.listItem()
                .title("Historikk")
                .icon(HistorikkIkon)
                .child(S.editor().schemaType(historikkHjelpetekster.name).documentId(historikkHjelpetekster.name)),

              ...S.documentTypeListItems().filter(
                (listItem) =>
                  ![
                    "dagpengekalkulator",
                    ...soknadSchemaNames,
                    ...mineDagpengerSchemaNames,
                    oppsett.name,
                    historikkHjelpetekster.name,
                    faktaSide.name,
                  ].includes(<string>listItem.getId())
              ),
            ])
        ),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["dagpengekalkulator", ...soknadSchemaNames, ...oldSchemaNames, ...mineDagpengerSchemaNames].includes(
            <string>listItem.getId()
          )
      ),
    ]);
