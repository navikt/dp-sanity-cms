import * as React from 'react';
import Gift from 'react-icons/lib/go/gift';
import MediaPreview from '../../components/MediaPreview';

export const CustomComponentIkon = Gift;

interface Props {
  name: string;
}

const CustomComponentPreview = (props: Props) => (
  <MediaPreview title={props.name} icon={<CustomComponentIkon />} description="Custom react component" />
);

export default CustomComponentPreview;
