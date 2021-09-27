import { VscSymbolVariable } from "react-icons/vsc";

const variabler = ["Ukesats", "Antall Uker"];
export default {
  title: "Tekst - Kalkulator",
  name: "kalkulatortext",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      of: [
        {
          type: "object",
          name: "variabel",
          title: "Variabler",
          icon: VscSymbolVariable,
          fields: [
            {
              name: "data",
              type: "string",
              title: "Variabel",
              options: {
                list: variabler.map((it) => ({ title: it, value: it })),
                layout: "radio",
              },
            },
          ],
        },
      ],
    },
  ],
};
