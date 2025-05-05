import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <div className=" bg-base-200 rounded-2xl mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper mb-16 mt-10"
          >
            <SwiperSlide>
              <img src={slide1} alt="" />
              <h2 className=" -mt-22 text-center text-black">Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" />
              <h2 className=" -mt-22 text-center text-black">Pizza</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" />
              <h2 className=" -mt-22 text-center text-black">Soup</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="" />
              <h2 className=" -mt-22 text-center text-black">Desserts</h2>
            </SwiperSlide>
          </Swiper>
          <div className="md:ml-20 ">
            <h1 className="text-5xl font-bold">Explore Our New Menu!</h1>
            <p className="py-6 mr-5">
              Pizza: Wood-fired with melty cheese and fresh toppings. <br />
              Salads: Crisp greens with tangy dressings. <br /> Desserts: Rich,
              sweet, and indulgent treats. <br /> Soup: Warm, hearty, and full
              of comforting flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
