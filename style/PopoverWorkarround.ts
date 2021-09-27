/* Denne kan kanksje fjernes hvis sanity fikser. https://sanity-io.slack.com/archives/CF876M37F/p1607430402057100, https://sanity-io-land.slack.com/archives/C9Z7RC3V1/p1607091375201600, https://github.com/sanity-io/sanity/issues/2170 */
import { createGlobalStyle } from "styled-components";

export const PopoverWorkarround = createGlobalStyle`
  [class^='popover_card'] {
    overflow: auto;
    max-height: 70vh;
  }
  
  [class^='popover_root_'] {
    transform: translate(-50%, -50%) !important;
    inset: 50% auto auto 50% !important;
    max-width: 30rem !important;
  }
`;
