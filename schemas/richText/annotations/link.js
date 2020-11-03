import LinkIcon from 'react-icons/lib/md/link';
import styled, { css } from 'styled-components';

const color = '#2276fc';

export const LenkePreview = styled.span`
  color: ${color};
  min-width: 1rem;
  text-decoration: underline;
  ${(props) =>
    props.knapp &&
    css`
      display: inline-block;
      padding: 0.3rem 1rem;
      margin: 0.5rem 0;
      border: 0.2rem solid ${color};
      border-radius: 0.4rem;
    `};
`;

export default {
  name: 'link',
  type: 'object',
  title: 'Lenke',
  icon: LinkIcon,
  blockEditor: {
    render: LenkePreview,
  },
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL',
    },
    {
      title: 'Vis som knapp',
      name: 'knapp',
      type: 'boolean',
    },
  ],
};
