import React, {useContext, useEffect, useState, useRef} from "react";
import { AxiosInstance } from "../common/AxiosInstance";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import url from "../common/Config";
import { Autoplay, Navigation } from 'swiper';
import Product from "../components/Product";
import MarketsFolder from "../components/MarketsFolder";
import 'swiper/css';

function Index() {
  const {t,lang} = useContext(AppContext)
  const [slide, setSlide] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const swiperRef = useRef(false);

  const sliderSettings = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  
  return (
    <div className="main">
      <div className="container">
        {/* Main four categories */}
        <div className="main_categories">
          <Link to={'/'} className="main_categories_category">
            <Swiper
              modules={[Autoplay]}
              navigation
              lazy="true"
              slidesPerView={slidesPerView}
              loop={true}
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 3210,
                disableOnInteraction: false
              }}
              className="slider"
              autoslide={1000}
            >
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="category_name">Naharhanalar</div>
          </Link>
          <Link to={'/'} className="main_categories_category">
            <Swiper
              modules={[Autoplay]}
              navigation
              lazy="true"
              slidesPerView={slidesPerView}
              loop={true}
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 4210,
                disableOnInteraction: false
              }}
              className="slider"
              autoslide={1000}
            >
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="category_name">Naharhanalar</div>
          </Link>
          <Link to={'/'} className="main_categories_category">
            <Swiper
              modules={[Autoplay]}
              navigation
              lazy="true"
              slidesPerView={slidesPerView}
              loop={true}
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 5430,
                disableOnInteraction: false
              }}
              className="slider"
              autoslide={1000}
            >
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="category_name">Naharhanalar</div>
          </Link>
          <Link to={'/'} className="main_categories_category">
            <Swiper
              modules={[Autoplay]}
              navigation
              lazy="true"
              slidesPerView={slidesPerView}
              loop={true}
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 6543,
                disableOnInteraction: false
              }}
              className="slider"
              autoslide={1000}
            >
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
              <SwiperSlide className='slider_slide'>
                <img src={require('../assets/images/delete/category.jpg')} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="category_name">Naharhanalar</div>
          </Link>
        </div>

        {/* Main reklams */}
        <div className="main_rek">
          <Swiper
            modules={[Autoplay]}
            lazy="true"
            slidesPerView={slidesPerView}
            loop={true}
            speed={1000}
            autoplay={{
              delay:5000,
              disableOnInteraction:false
            }}
            className="slider"
            autoslide={1000}
            style={{height:'100%'}}
          >
            <SwiperSlide>
              <Link to={'/'}>
                <img src={require('../assets/images/delete/mainRek.jpg')} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img src={require('../assets/images/delete/mainRek.jpg')} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="main_rek_content">{t('reklams')}</div>
        </div>

        {/* Top products */}
        <div className="main_top_products">
          <div className="top_head">
            <div className="top_head_left">{t('topProducts')}</div>
            <div className="top_head_right">
              <button onClick={() => swiperRef.current?.slidePrev()} className="slide_button slide_prev">
                <svg width="30" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M45 10C45 9.38635 44.2805 8.88889 43.3929 8.88889L5.48713 8.88889L15.6007 1.89679C16.2283 1.46287 16.2283 0.759352 15.6007 0.325438C14.9731 -0.108479 13.9555 -0.108479 13.3279 0.325438L0.470722 9.21432C-0.156906 9.64824 -0.156906 10.3518 0.470722 10.7857L13.3279 19.6746C13.9555 20.1085 14.9731 20.1085 15.6007 19.6746C16.2283 19.2406 16.2283 18.5371 15.6007 18.1032L5.48713 11.1111L43.3929 11.1111C44.2805 11.1111 45 10.6136 45 10Z" fill="black"/>
                </svg>
              </button>
              <button onClick={() => swiperRef.current?.slideNext()} className="slide_button slide_next">
                <svg width="30" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 10.6137 0.719542 11.1111 1.60714 11.1111L39.5129 11.1111L29.3993 18.1032C28.7717 18.5371 28.7717 19.2406 29.3993 19.6746C30.0269 20.1085 31.0445 20.1085 31.6721 19.6746L44.5293 10.7857C45.1569 10.3518 45.1569 9.64824 44.5293 9.21433L31.6721 0.325437C31.0445 -0.108479 30.0269 -0.108479 29.3993 0.325437C28.7717 0.759353 28.7717 1.46287 29.3993 1.89679L39.5129 8.88889L1.60714 8.88889C0.719542 8.88889 0 9.38635 0 10Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="top_products">
            <Swiper
              modules={[Autoplay,Navigation]}
              lazy="true"
              slidesPerView={4}
              loop={true}
              speed={1000}
              // autoplay={{
              //   delay:3000,
              //   disableOnInteraction:false
              // }}
              breakpoints={sliderSettings}
              navigation
              spaceBetween={20}
              className="slider"
              autoslide={1000}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
              <SwiperSlide>
                <Product />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Top markets */}
        <div className="main_top_markets">
          <div className="top_markets_head">
            <div className="head_left">{t('top')}</div>
            <div className="head_right">
              <div className="right_category active">Naharhanalar <span></span></div>
              <div className="right_category">Onumcilikler <span></span></div>
              <div className="right_category">Hyzmatlar <span></span></div>
              <div className="right_category">Dukanlar we marketler <span></span></div>
            </div>
          </div>
          <MarketsFolder />
        </div>
      </div>
    </div>
  );
}

export default Index;
