import styled from 'styled-components';

const InlinePreview = styled.span<{ color: string; label: string }>`
  box-shadow: 0 0 0 0.2rem ${(props) => props.color};
  background-color: #fff8;
  &::after {
    content: ' (${(props) => props.label})';
    opacity: 0.6;
    font-size: 0.8em;
  }
`;

export default InlinePreview;
