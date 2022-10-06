import { dashboardTool } from "@sanity/dashboard";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { documentI18n, IdStructure, ReferenceBehavior } from "@sanity/document-internationalization";
import { createConfig, createPlugin, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import schemaTypes from "./schemas/schema";
import { structure } from "./structure";


const devOnlyPlugins = [visionTool()];

const sharedConfig = createPlugin({
  name: "dp-sanity-cms",
  plugins: [
    colorInput(),
    deskTool({ structure }),
    dashboardTool({ widgets: [] }),
    documentI18n({
      base: "nb",
      idStructure: IdStructure.DELIMITER,
      referenceBehavior: ReferenceBehavior.STRONG,
      languages: [
        { id: "nb", title: "Norsk - Bokmål" },
        { id: "nn", title: "Norsk - Nynorsk" },
        { id: "en", title: "English󠁢󠁥󠁮󠁧󠁿" },
      ],
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },
});

export default createConfig([
  {
    name: "production",
    title: "Produksjon",
    projectId: "rt6o382n",
    dataset: "production",
    // the base path is required whenever more than one workspace is defined and is used for route matching
    basePath: "/arbeid/cms/prod",
    plugins: [sharedConfig()],
  },
  {
    name: "development",
    title: "Development",
    projectId: "rt6o382n",
    dataset: "production",
    // the base path is required whenever more than one workspace is defined and is used for route matching
    basePath: "/arbeid/cms/dev",
    plugins: [sharedConfig()],
  },
  {
    name: "demo",
    title: "demo",
    projectId: "rt6o382n",
    dataset: "demo",
    basePath: "/arbeid/cms/demo",
    plugins: [sharedConfig()],
  },
  {
    name: "lekegrind",
    title: "Lekegrind🧚🏾",
    projectId: "rt6o382n",
    dataset: "lekegrind",
    basePath: "/arbeid/cms/lekegrind",
    plugins: [sharedConfig()],
  },
]);
