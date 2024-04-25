import ReactPlayer from 'react-player';

export interface IVideoPlayer {
    url: string;
    height?: number;
    width?: number;
    controls?: boolean;
    loop?: boolean;
}

const VideoPlayer = ({ url, height, width, controls = true, loop = false }: IVideoPlayer) => {
    return (
        <div className={'overflow-hidden rounded-xl'}>
            <ReactPlayer url={url} volume={0} width={width} loop={loop} height={height} playing controls={controls} />
        </div>
    );
};

export default VideoPlayer;
