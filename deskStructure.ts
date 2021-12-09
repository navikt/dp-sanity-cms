import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import FaktasidePreview from "./previews/FaktasidePreview";
import FaktasideSEOPreview from "./previews/FaktasideSEOPreview";
import ForsideSEOPreview from "./previews/ForsideSEOPreview";
import ForsidePreview from "./previews/ForsidePreview";
import DemoappPreview from "./previews/DemoappPreview";
import { DagpengeKalkulatorIkon } from "./schemas/kalkulator/kalkulator";
import { HistorikkIkon } from "./schemas/infosider/historikk/historikkHjelpetekster";
import KalkulatorPreview from "./previews/KalkulatorPreview";
import { subFaktum } from "./schemas/soknad/sub-faktum";

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
        .child(
          S.editor()
            .schemaType("historikkHjelpetekster")
            .documentId("historikkHjelpetekster")
        ),

      S.listItem()
        .title("DagpengerKalkulator")
        .icon(DagpengeKalkulatorIkon)
        .child(
          S.editor()
            .schemaType("dagpengekalkulator")
            .documentId("dagpengekalkulator")
            .views([
              S.view.form(),
              S.view.component(KalkulatorPreview).title("Kalkulator-preview"),
            ])
        ),

      S.listItem()
        .title("TEST Dagpenger søknad")
        .child(
          S.list()
            .title("Dagpenger søknad")
            .items([
              // S.divider(),

              S.listItem({
                id: "innholdssider",
                title: "Innholdssider",
                schemaType: "contentPage",
              }).child(
                S.documentTypeList({
                  schemaType: "contentPage",
                  title: "Innholdssider",
                })
              ),

              S.listItem({
                id: "seksjoner",
                title: "Seksjoner",
                schemaType: "seksjon",
              }).child(
                S.documentTypeList({
                  schemaType: "seksjon",
                  title: "Seksjoner",
                })
              ),

              S.listItem({
                id: "faktum",
                title: "Spørsmål",
                schemaType: "faktum",
              }).child(
                S.documentTypeList({
                  schemaType: "faktum",
                  title: "Spørsmål",
                })
              ),

              S.listItem({
                id: "subFaktum",
                title: "Oppfølgingspørsmål",
                schemaType: subFaktum.name,
              }).child(
                S.documentTypeList({
                  schemaType: subFaktum.name,
                  title: "Oppfølgingspørsmål",
                })
              ),

              S.listItem({
                id: "answer",
                title: "Svaralternativer",
                schemaType: "answer",
              }).child(
                S.documentTypeList({
                  schemaType: "answer",
                  title: "Alternativ",
                })
              ),
            ])
        ),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "oppsett",
            "dagpengekalkulator",
            "historikkHjelpetekster",
            "contentPage",
            "faktum",
            "subFaktum",
            "seksjon",
          ].includes(listItem.getId())
      ),
    ]);

export const getDefaultDocumentNode = ({ schemaType }) => {
  switch (schemaType) {
    case "faktaSide":
      return S.document().views([
        S.view.form(),
        S.view.component(FaktasidePreview).title("Preview"),
        S.view.component(FaktasideSEOPreview).title("SEO"),
        S.view.component(DemoappPreview).title("Demoapp"),
      ]);
  }
};
