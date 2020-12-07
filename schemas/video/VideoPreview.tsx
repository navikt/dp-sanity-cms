import * as React from 'react';
import { MdOndemandVideo } from 'react-icons/md';
import MediaPreview from '../../components/MediaPreview';

export const VideoIkon = MdOndemandVideo;

interface Props {
  name: string;
  url: string;
}

const VideoPreview = (props: Props) => <MediaPreview title={props.name} description={props.url} icon={<VideoIkon />} />;

export default VideoPreview;
