import * as React from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';

function BlockContent(props: { blocks: any }) {
  return <SanityBlockContent blocks={props.blocks} />;
}

export default BlockContent;
