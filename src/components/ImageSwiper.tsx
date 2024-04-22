import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export interface ISwiper {
    list?: any[];
    delay?: number;
    slidesPerView?: number;
}

const ImageSwiper = ({ list, delay = 2500, slidesPerView = 1 }: ISwiper) => {
    return (
        <Swiper
            className={'select-none'}
            modules={[Pagination, Autoplay, Mousewheel]}
            autoplay={{ delay: delay, disableOnInteraction: false }}
            mousewheel={true}
            loop={true}
            pagination={{ clickable: true }}
            slidesPerView={slidesPerView}
        >
            {list?.map((image, index) => {
                return (
                    <SwiperSlide className={'md:p-10'} key={index}>
                        <img
                            className={'cursor-grab rounded-xl shadow-xl transition-all hover:scale-105'}
                            src={image}
                            alt={`slider-image-${index}`}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ImageSwiper;
