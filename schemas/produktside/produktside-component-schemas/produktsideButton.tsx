export const produktsideButton = {
  name: "produktsideButton",
  title: "Button",
  type: "object",
  initialValue: {
    variant: "primary",
    size: "medium",
    iconPosition: "left",
    targetBlank: false,
  },
  fields: [
    {
      title: "Tittel",
      description:
        "Gjeldende anbefaling for å gjøre en knapp godt lesbar er å bruke stor forbokstav og små bokstaver på resten av ordene (sentence case). F.eks: Send søknad",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: (Rule) => Rule.required("URL er påkrevd."),
    },
    {
      title: "Åpne i ny fane",
      name: "targetBlank",
      type: "boolean",
    },
    {
      title: "Variant",
      name: "variant",
      validation: (Rule) => Rule.required().error("Variant er påkrevd."),
      type: "string",
      options: {
        list: [
          { title: "primary", value: "primary" },
          { title: "secondary", value: "secondary" },
          { title: "tertiary", value: "tertiary" },
          { title: "danger", value: "danger" },
        ],
      },
    },
    {
      title: "Størrelse",
      name: "size",
      validation: (Rule) => Rule.required().error("Størrelse er påkrevd."),
      type: "string",
      options: {
        list: [
          { title: "xsmall", value: "xsmall" },
          { title: "small", value: "small" },
          { title: "medium", value: "medium" },
        ],
      },
    },
    {
      type: "navIconPicker",
      name: "iconName",
      title: "Ikon",
    },
    {
      title: "Posisjon for ikonet",
      name: "iconPosition",
      type: "string",
      options: {
        list: [
          { title: "left", value: "left" },
          { title: "right", value: "right" },
        ],
      },
      hidden: ({ parent }) => !parent?.iconName,
    },
  ],
  preview: {
    select: {
      title: "title",
      variant: "variant",
      url: "url",
    },
    prepare({ title, variant, url }) {
      return {
        title: `(${variant} Button) ${title}`,
        subtitle: url,
      };
    },
  },
};
