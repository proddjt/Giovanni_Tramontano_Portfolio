import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function ModalSwiper({images}){
    return (
        <>
            <Swiper
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
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={"/media/img/modal/lootly/" + image + ".png"} alt="Immagine progetto" className='select-none w-1/2'/>
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