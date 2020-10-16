import * as React from 'react';
import { GoGift } from 'react-icons/go';
import MediaPreview from '../../components/MediaPreview';

export const CustomComponentIkon = GoGift;

interface Props {
  name: string;
}

const CustomComponentPreview = (props: Props) => (
  <MediaPreview title={props.name} icon={<CustomComponentIkon />} description="Custom react component" />
);

export default CustomComponentPreview;
