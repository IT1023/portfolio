import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import type { HeadProps } from "../../shared/lib/types";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { useRef } from "react";
import type { TLanguage } from "../../config/i18n";
import Article from "../../shared/ui/Article";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

export interface ArticleContent {
  tag: string;
  title: Record<TLanguage, string>;
  dates: string;
  content: Record<TLanguage, string>;
}

export default function Articles() {
  const { t } = useTranslation("projects");
  const swiperRef = useRef<SwiperRef | null>(null);
  const { img, subtitle, title } = t("articles.head", {
    returnObjects: true,
  }) as HeadProps;
  const content = t("articles.content", {
    returnObjects: true,
  }) as ArticleContent[];

  const nextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const prevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="w-full max-w-7xl overflow-hidden mx-auto flex flex-col gap-6">
      <Head img={img} subtitle={subtitle} title={title} />
      {Array.isArray(content) && (
        <div className="flex flex-1 max-w-screen overflow-hidden relative">
          <button
            className="absolute top-[50%] translate-y-[-50%] left-0 z-99 text-2xl md:text-lg p-1 md:p-2 aspect-square border-2 border-divider rounded-[50px] flex justify-center items-center text-current/50 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={prevSlide}
          >
            <WestIcon fontSize="inherit" color="inherit" />
          </button>
          <Swiper
            className="max-w-[90%] flex-1 overflow-hidden"
            ref={swiperRef}
            loop
            autoplay
            spaceBetween={15}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 1,
              },
            }}
          >
            {content.map((c) => {
              return (
                <SwiperSlide className="">
                  <Article key={c.title.en} {...c} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="absolute top-[50%] translate-y-[-50%] right-2 z-99 text-2xl md:text-lg p-1 md:p-2 aspect-square border-2 border-divider rounded-[50px] flex justify-center items-center text-current/50 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={nextSlide}
          >
            <EastIcon fontSize="inherit" color="inherit" />
          </button>
        </div>
      )}
    </div>
  );
}
