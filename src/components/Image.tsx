export interface ImageProps {
    src: string;
    alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={
                'w-full cursor-pointer rounded-xl transition-all duration-300 hover:scale-105 md:max-w-[350px] lg:max-w-[500px]'
            }
        />
    );
};

export default Image;
