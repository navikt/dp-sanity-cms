import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import ForsideSEOPreview from "./previews/ForsideSEOPreview";
import ForsidePreview from "./previews/ForsidePreview";
import { DagpengeKalkulatorIkon } from "./schemas/kalkulator/kalkulator";
import { HistorikkIkon } from "./schemas/infosider/historikk/historikkHjelpetekster";
import KalkulatorPreview from "./previews/KalkulatorPreview";
import { seksjon } from "./schemas/soknad/seksjon";
import { faktum } from "./schemas/soknad/faktum";
import { svaralternativ } from "./schemas/soknad/svaralternativ";

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
        .child(
          S.list()
            .title("Dagpengesøknad")
            .items([
              S.listItem({
                id: seksjon.name,
                title: "Seksjoner",
                schemaType: seksjon.name,
              }).child(
                S.documentTypeList({
                  schemaType: seksjon.name,
                  title: "Seksjoner",
                })
              ),

              S.listItem({
                id: faktum.name,
                title: "Spørsmål",
                schemaType: faktum.name,
              }).child(
                S.documentTypeList({
                  schemaType: faktum.name,
                  title: "Faktum",
                })
              ),

              S.listItem({
                id: svaralternativ.name,
                title: "Svaralternativer",
                schemaType: svaralternativ.name,
              }).child(
                S.documentTypeList({
                  schemaType: svaralternativ.name,
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
            svaralternativ.name,
            faktum.name,
            seksjon.name,
          ].includes(<string>listItem.getId())
      ),
    ]);
