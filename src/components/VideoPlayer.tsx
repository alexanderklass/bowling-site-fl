import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <div className={'overflow-hidden rounded-xl'}>
            <ReactPlayer
                url={'https://mediandr-a.akamaihd.net/progressive/2023/0212/TV-20230212-2015-0900.hd.mp4'}
                volume={0}
                width={520}
                height={295}
                playing
                controls={true}
            />
        </div>
    );
};

export default VideoPlayer;
