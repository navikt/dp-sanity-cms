import S from "@sanity/desk-tool/structure-builder";
import * as InternationalizationStructure from "@sanity/document-internationalization/lib/structure";
import { MdSettings } from "react-icons/md";
import ForsideSEOPreview from "./previews/ForsideSEOPreview";
import ForsidePreview from "./previews/ForsidePreview";
import { DagpengeKalkulatorIkon } from "./schemas/kalkulator/kalkulator";
import { HistorikkIkon } from "./schemas/infosider/historikk/historikkHjelpetekster";
import KalkulatorPreview from "./previews/KalkulatorPreview";
import { seksjon } from "./schemas/soknad/seksjon";
import { faktum } from "./schemas/soknad/faktum";
import { svaralternativ } from "./schemas/soknad/svaralternativ";

const soknadSchemaNames = [seksjon.name, faktum.name, svaralternativ.name];
const isSoknadSchema = (listItem) => soknadSchemaNames.includes(listItem.id);
const internationalizedSoknadTypeItems =
  InternationalizationStructure.getFilteredDocumentTypeListItems().filter(isSoknadSchema);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () =>
  S.list()
    .title("Innhold")
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

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["oppsett", "dagpengekalkulator", "historikkHjelpetekster", ...soknadSchemaNames].includes(
            <string>listItem.getId()
          )
      ),
    ]);
