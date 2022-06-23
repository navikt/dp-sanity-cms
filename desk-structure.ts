import S from "@sanity/desk-tool/structure-builder";
import * as InternationalizationStructure from "@sanity/document-internationalization/lib/structure";
import { MdSettings } from "react-icons/md";
import ForsideSEOPreview from "./previews/ForsideSEOPreview";
import ForsidePreview from "./previews/ForsidePreview";
import { DagpengeKalkulatorIkon } from "./schemas/kalkulator/kalkulator";
import { HistorikkIkon } from "./schemas/infosider/historikk/historikkHjelpetekster";
import KalkulatorPreview from "./previews/KalkulatorPreview";
import deltTekst from "./schemas/infosider/deltTekst/deltTekst";
import faktaSide from "./schemas/infosider/faktaside/faktaSide";
import notifikasjon from "./schemas/notifikasjon/notifikasjon";
import situasjon from "./schemas/infosider/richText/annotations/situasjon";
import { seksjon } from "./schemas/soknad/seksjon";
import { faktum } from "./schemas/soknad/faktum";
import { svaralternativ } from "./schemas/soknad/svaralternativ";
import { landgruppe } from "./schemas/soknad/landgruppe";

const oldSchemaNames = [deltTekst.name, faktaSide.name, notifikasjon.name, situasjon.name];
const soknadSchemaNames = [seksjon.name, faktum.name, svaralternativ.name, landgruppe.name];
const isSoknadSchema = (listItem) => soknadSchemaNames.includes(listItem.id);
const internationalizedSoknadTypeItems =
  InternationalizationStructure.getFilteredDocumentTypeListItems().filter(isSoknadSchema);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("DagpengerKalkulator")
        .icon(DagpengeKalkulatorIkon)
        .child(
          S.editor()
            .schemaType("dagpengekalkulator")
            .documentId("dagpengekalkulator")
            .views([S.view.form(), S.view.component(KalkulatorPreview).title("Kalkulator-preview")])
        ),

      S.listItem()
        .title("Dagpengesøknad")
        .child(S.list().title("Dagpengesøknad").items(internationalizedSoknadTypeItems)),

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
                    .schemaType("oppsett")
                    .documentId("oppsett")
                    .views([
                      S.view.form(),
                      S.view.component(ForsideSEOPreview).title("SEO"),
                      S.view.component(ForsidePreview).title("Forside-preview"),
                    ])
                ),

              S.listItem()
                .title("Historikk")
                .icon(HistorikkIkon)
                .child(S.editor().schemaType("historikkHjelpetekster").documentId("historikkHjelpetekster")),

              ...S.documentTypeListItems().filter((listItem) => oldSchemaNames.includes(<string>listItem.getId())),
            ])
        ),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "oppsett",
            "dagpengekalkulator",
            "historikkHjelpetekster",
            ...soknadSchemaNames,
            ...oldSchemaNames,
          ].includes(<string>listItem.getId())
      ),
    ]);
