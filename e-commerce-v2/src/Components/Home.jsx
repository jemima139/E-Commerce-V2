import React, { useState } from "react";
import heroVideo from "../Assets/Images/hero.mp4";
import jewelery1 from '../Assets/Images/Jewelery-1.jpg';
import jewelery2 from '../Assets/Images/Jewelery-2.jpg';
import jewelery3 from '../Assets/Images/Jewelery-3.jpg';
import jewelery4 from '../Assets/Images/Jewelery-4.jpg';
import jewelery5 from '../Assets/Images/Jewelery-5.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const [swiper, setSwiper] = useState(null);

  const handleNextButtonClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div>
      <main>
        <section className="main-container">
          <div className="hero-content">
            <video id="hero-video" src={heroVideo} autoPlay muted loop></video>
          </div>
          <div className="welcome-paragraph">
            <h3 id="Welcome">Welcome</h3>
            <p>Discover our exclusive collection of diamond jewelry, designed to make your special day even more extraordinary. .</p>
            <br />
            <p> Each piece is meticulously crafted to capture the brilliance and elegance that your moments deserve. </p>
            <p>From stunning rings to exquisite necklaces, our selection features timeless designs that will add a touch of luxury to your celebration.</p>
            <p>Whether you’re marking a milestone or simply indulging in the beauty of fine jewelry, our collection promises to make your day unforgettable.</p>
            <button className="btn">
              <a href="#shop">Shop Now</a>
            </button>
          </div>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={setSwiper}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 9000 }}
            >
              <SwiperSlide>
                <img src={jewelery1} alt="background" className="swiper-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jewelery2} alt="background" className="swiper-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jewelery3} alt="background" className="swiper-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jewelery4} alt="background" className="swiper-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jewelery5} alt="background" className="swiper-image" />
              </SwiperSlide>
            </Swiper>

            {/* Navigation Buttons */}
            <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
            <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .main-container {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
        }

        .hero-content {
          position: relative;
          width: 100%;
          height: 80vh;
          overflow: hidden;
        }

        #hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .welcome-paragraph {
          flex: 1;
          text-align: center;
          font-size: 15px;
          margin-top: 100px;
          color: black;
        }

        .welcome-paragraph h3 {
          font-size: 35px;
          font-family: Georgia, "Times New Roman", Times, serif;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .swiper-container {
          position: relative;
          width: 80%;
          margin-top: 20px;
        }

        .swiper-image {
          width: 100%;
          height: auto;
          margin: 0 auto;
        }

        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 50%;
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev {
          left: 10px;
        }

        .btn {
          position: relative;
          border: 2px solid #333;
          border-radius: 10px;
          margin-top: 50px;
          padding: 6px 12px;
          background-color: #494d5f;
          color: black;
          text-transform: uppercase;
          cursor: pointer;
        }

        .btn a {
          text-decoration: none;
          color: white;
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .welcome-paragraph {
            font-size: 14px;
            margin-top: 50px;
          }

          .welcome-paragraph h3 {
            font-size: 28px;
          }

          .swiper-container {
            width: 100%;
          }

          .swiper-image {
            width: 80%;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .welcome-paragraph {
            font-size: 16px;
            margin-top: 75px;
          }

          .welcome-paragraph h3 {
            font-size: 32px;
          }

          .swiper-container {
            width: 90%;
          }

          .swiper-image {
            width: 60%;
          }
        }

        @media (min-width: 1025px) {
          .welcome-paragraph {
            font-size: 18px;
            margin-top: 100px;
          }

          .welcome-paragraph h3 {
            font-size: 35px;
          }

          .swiper-container {
            width: 80%;
          }

          .swiper-image {
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
