import useContent from "../Hooks/useContent";
import useLoadingImage from "../Hooks/useLoadingImage";
import Loader from "../Loader";
// Import Swiper core and required modules
import { Navigation, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";

const Wonder = ({ refresh }) => {
  const content = useContent(
    "https://www.world-wonders-api.org/v0/wonders/random",
    refresh,
  );
  const loadingImage = useLoadingImage(content?.links?.images[0]);

  const {
    links = {},
    name,
    location,
    build_year,
    time_period,
    summary,
  } = content;
  const { images } = links;

  // Check if content has been fetched (content.id exists).
  // If true render content, else render Loader.
  return content?.name ? (
    <div className="flex flex-wrap min-h-[60vh] max-xl:gap-4 " >
      {/* Slider for wonder image gallery */}
      <div className="w-100/100 xl:w-50/100 ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Keyboard]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          keyboard={{ enabled: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* If image is loading show Loader, else show the slider. */}
          {loadingImage ? (
                <div className="h-[60vh] flex items-center justify-center box-border " >
                  <Loader />
                </div>
          ) : (
            images.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="max-xs:h-[30vh] h-[45vh] sm:h-[59.4vh] max-w-100/100 my-0 mx-auto object-cover box-border border-4 border-black rounded-xl"
                />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>

        {/* Information about wonder */}
      <div className="w-100/100 xl:w-50/100 flex flex-col justify-evenly box-border">
        <div className="max-xl:bg-white/90 rounded-t-2xl">  
          <h1 className="my-8 max-xs:text-4xl max-xs:px-3 px-8 text-5xl font-[sans-serif] font-bold box-border text-shadow-lg/40 text-shadow-sky-700">{name}</h1>
          
          <h2 className="my-5 max-xs:text-xl max-xs:px-3 px-8 text-2xl font-[sans-serif] font-semibold box-border text-shadow-lg/30 text-shadow-sky-200">{location}</h2>
          
          <h3 className="my-5 max-xs:text-lg max-xs:px-3 px-8 text-xl font-[sans-serif] font-semibold box-border text-shadow-lg/30 text-shadow-sky-200">
            year: {build_year}, {time_period} period
          </h3>
        </div>

        <div className="max-xl:bg-white/90 box-border max-xl:border-t-2 max-xl:border-t-black/10  max-xl:border-t-double rounded-b-2xl">
          <p className="my-4 max-xs:px-3 px-8 max-xs:text-base text-lg font-serif text-justify font-medium" >{summary}</p>
        </div> 
      </div>
    </div>
  ) : (
    <div className="h-[60vh] flex items-center justify-center box-border ">
      <Loader />
    </div>  
  );
};

export default Wonder;
