import { MdLink } from "react-icons/md";

const linkId = {
  type: "string",
  name: "linkId",
  title: "Lenkenøkkel",
};

const linkText = {
  type: "string",
  name: "linkText",
  title: "Lenketeskt",
  rows: 3,
};

const linkUrl = {
  type: "string",
  name: "linkUrl",
  title: "Url",
  rows: 3,
};

const linkDescription = {
  type: "string",
  name: "linkDescription",
  title: "Lenke beskrivelse",
  rows: 3,
};

export const mineDagpengerLink = {
  type: "document",
  name: "mineDagpengerLink",
  title: "Mine dagpenger lenker",
  icon: MdLink,
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [linkId, linkText, linkUrl, linkDescription],
  preview: {
    select: {
      title: linkId.name,
      subtitle: linkUrl.name,
    },
  },
};
