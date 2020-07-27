import * as React from 'react';
import Video from 'react-icons/lib/md/ondemand-video';
import MediaPreview from './MediaPreview';

export const VideoIkon = Video;

interface Props {
  name: string;
  url: string;
}

const VideoPreview = (props: Props) => <MediaPreview title={props.name} description={props.url} icon={<VideoIkon />} />;

export default VideoPreview;
