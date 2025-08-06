import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function ModalSwiper({images, folder, resetTrigger}) {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(0);
        }
    }, [resetTrigger])
    return (
        <>
            <Swiper
                ref={swiperRef}
                pagination={{
                type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='select-none'
            >
                {
                    images.map((image, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='flex justify-center items-center w-full h-full py-2'>
                                    <img src={"/media/img/modal/" + folder + "/" + image + ".png"} alt="Immagine progetto" className='select-none xl:w-2/3 w-4/5'/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default ModalSwiper