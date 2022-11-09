export const produktsideFilterMenu = {
  name: "produktsideFilterMenu",
  title: "FilterMenu",
  type: "object",
  fields: [{ name: "hiddenField", type: "string", hidden: true, initialValue: "FilterMenu" }],
  preview: {
    select: {
      title: "hiddenField",
    },
    prepare({ title }) {
      return {
        title: `(${title})`,
      };
    },
  },
};
