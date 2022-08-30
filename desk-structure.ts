import S from "@sanity/desk-tool/structure-builder";
import * as InternationalizationStructure from "@sanity/document-internationalization/lib/structure";
import { MdSettings, MdWeb } from "react-icons/md";
import ForsideSEOPreview from "./previews/ForsideSEOPreview";
import ForsidePreview from "./previews/ForsidePreview";
import { DagpengeKalkulatorIkon } from "./schemas/kalkulator/kalkulator";
import historikkHjelpetekster, { HistorikkIkon } from "./schemas/infosider/historikk/historikkHjelpetekster";
import KalkulatorPreview from "./previews/KalkulatorPreview";
import deltTekst from "./schemas/infosider/deltTekst/deltTekst";
import faktaSide from "./schemas/infosider/faktaside/faktaSide";
import notifikasjon from "./schemas/notifikasjon/notifikasjon";
import situasjon from "./schemas/infosider/richText/annotations/situasjon";
import { seksjon } from "./schemas/soknad/seksjon";
import { faktum } from "./schemas/soknad/faktum";
import { svaralternativ } from "./schemas/soknad/svaralternativ";
import { landgruppe } from "./schemas/soknad/landgruppe";
import { apptekst } from "./schemas/soknad/apptekst";
import { infopage } from "./schemas/soknad/infopage";
import oppsett from "./schemas/infosider/oppsett/oppsett";
import FaktasideSEOPreview from "./previews/FaktasideSEOPreview";
import FaktasidePreview from "./previews/FaktasidePreview";
import { ProduktsidePreview } from "./previews/ProduktsidePreview/ProduktsidePreview";
import { innholdsseksjon, siteSettings } from "./schemas/produktside/schema";
import { UnserializedListItem } from "@sanity/structure/src/ListItem";
import { dokumentkrav } from "./schemas/soknad/dokumentkrav";
import { dokumentkravSvar } from "./schemas/soknad/dokumentkrav-svar";

const produktsideSchemaNames = [innholdsseksjon.name, siteSettings.name];
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
  apptekst.name,
  infopage.name,
  dokumentkrav.name,
  dokumentkravSvar.name,
];

const isSoknadSchema = (listItem: UnserializedListItem) => soknadSchemaNames.includes(listItem.id);
const internationalizedSoknadTypeItems =
  InternationalizationStructure.getFilteredDocumentTypeListItems().filter(isSoknadSchema);

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
        .title("Produktside beta")
        .child(
          S.list()
            .title("Produktside beta")
            .items([
              S.listItem()
                .title("Oppsett")
                .icon(MdSettings)
                .child(
                  S.editor()
                    .schemaType(siteSettings.name)
                    .documentId(siteSettings.name)
                    .views([S.view.form(), S.view.component(ProduktsidePreview).title("Preview")])

                  // eslint-disable-next-line no-warning-comments
                  // TODO: Finn ut hvordan vi kan sette språk for dette elementet uten å måtte rendre en liste
                ),

              S.listItem()
                .title("Innholdsseksjoner")
                .child(
                  S.documentList()
                    .title("Innholdsseksjon")
                    .schemaType(innholdsseksjon.name)
                    .filter('_type == "innholdsseksjon" && __i18n_lang == $baseLanguage')
                    .params({ baseLanguage: `nb` })
                    .child(
                      S.editor()
                        .schemaType(innholdsseksjon.name)
                        .views([S.view.form(), S.view.component(ProduktsidePreview).title("Preview")])
                    )
                ),
            ])
        ),

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
                    ...produktsideSchemaNames,
                    ...soknadSchemaNames,
                    oppsett.name,
                    historikkHjelpetekster.name,
                    faktaSide.name,
                  ].includes(<string>listItem.getId())
              ),
            ])
        ),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["dagpengekalkulator", ...produktsideSchemaNames, ...soknadSchemaNames, ...oldSchemaNames].includes(
            <string>listItem.getId()
          )
      ),
    ]);
