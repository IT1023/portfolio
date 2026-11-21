import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import type { HeadProps } from "../../shared/lib/types";
import { useRef } from "react";
import Head from "../../shared/ui/Head";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

interface Slide {
  pic: string;
  comment: string;
}

export default function Journal() {
  const { t } = useTranslation("about");
  const swiperRef = useRef<SwiperRef | null>(null);
  const { img, subtitle, title } = t("journey.head", {
    returnObjects: true,
  }) as HeadProps;
  const content = t("journey.content", {
    returnObjects: true,
  }) as Slide[];

  const swipeNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const swipePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <Head img={img} subtitle={subtitle} title={title} />
      <div className="container w-full max-w-7xl flex justify-center">
        <div className="w-screen overflow-hidden max-w-135 relative rounded-2xl border-t-2 border-divider">
          {Array.isArray(content) && (
            <Swiper slidesPerView={1} loop autoplay ref={swiperRef}>
              <button
                className="absolute top-[50%] translate-y-[-50%] left-5 z-99 text-2xl md:text-3xl p-1.5 md:p-2 aspect-square border-2 border-divider rounded-[50px] flex justify-center items-center text-current/50 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={swipePrev}
              >
                <WestIcon fontSize="inherit" color="inherit" />
              </button>
              {content.map((c) => {
                return (
                  <SwiperSlide className="min-h-full" key={c.pic}>
                    <div className="w-full md:p-4 p-2 bg-foreground rounded-2xl flex flex-col items-center gap-2">
                      <img
                        className="w-full max-w-85 aspect-3/4 h-full object-cover rounded-2xl object-center"
                        src={c.pic}
                        alt={c.comment}
                      />
                      <p className="w-full flex-1 min-h-35 font-semibold font-[Blinker] text-md italic text-current/50 border-t-2 p-2 border-divider">
                        {c.comment}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
              <button
                className="absolute top-[50%] translate-y-[-50%] right-5 z-99 text-2xl md:text-3xl p-1.5 md:p-2 aspect-square border-2 border-divider rounded-[50px] flex justify-center items-center text-current/50 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={swipeNext}
              >
                <EastIcon fontSize="inherit" color="inherit" />
              </button>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}
