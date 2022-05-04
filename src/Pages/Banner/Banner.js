import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/redhaired-ginger-business-woman-working-textile-shopredhead-salewoman-storage-update-cotton-lace-fabric_175356-6585.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/blue-denim-jeans-stack-wood-table-top-with-clothing-store-modern-shopping-mall-background_293060-12221.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/denim-jeans-stack-wood-table-top-with-abstract-blur-clothing-store-shopping-mall-background_293060-11784.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/blue-denim-jeans-stack-wood-table-top-with-blur-clothing-store-modern-shopping-mall-background_293060-7533.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/selective-focus-skirts-hanged-clothes-rack_255755-1406.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/rolls-fabric-shelves_94120-327.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/blue-jeans-shop_36923-497.jpg?w=900" alt="" /></SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/colorful-used-blouses-hangers-shopping-mall-toned_255755-1407.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/blue-denim-jeans-stack-wooden-table-top-clothing-store-modern-shopping-mall-folded-cotton-jeans-shop-window_77829-5559.jpg?w=900" alt="" />
                </SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/clothes-plastic-bags-hanging-hanger-laundry-closeup_151013-32483.jpg?w=900" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;