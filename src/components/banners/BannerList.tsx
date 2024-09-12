import { useState, useEffect } from "react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperBtn, SwiperImg } from "./BannerList.styled";

import { fetchBanner } from "@/utils/fetchUtils";

type BannerProps = {
  folder: string;
};

export const MainBanners = ({ folder }: BannerProps) => {
  const [banner, setBanner] = useState<string[]>([]);

  const swiperOption = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 2500,
    },
    navigation: {
      prevEl: ".swiper_nav .prev",
      nextEl: ".swiper_nav .next",
    },
    loop: true,
  };

  useEffect(() => {
    fetchBanner(folder, "main_banner.json").then((res) => {
      if (res !== undefined) setBanner(res.item);
    });
  }, []);

  return (
    <>
      {banner.length > 0 && (
        <>
          <Swiper {...swiperOption}>
            {banner.map((item: string, idx: number) => (
              <SwiperSlide key={`banner_${item}_${idx}`}>
                <SwiperImg>
                  <img src={item} alt="" />
                </SwiperImg>
              </SwiperSlide>
            ))}
            <SwiperBtn className="swiper_nav">
              <button className="prev"></button>
              <button className="next"></button>
            </SwiperBtn>
          </Swiper>
        </>
      )}
    </>
  );
};

export const SubBanners = ({ folder }: BannerProps) => {
  const [banner, setBanner] = useState<string[]>([]);

  const swiperOption = {
    modules: [Autoplay, EffectFade],
    autoplay: {
      delay: 2500,
    },
    effect: "fade",
    loop: true,
    className: "sub_bnr",
  };

  useEffect(() => {
    fetchBanner(folder, "sub_banner.json").then((res) => {
      if (res !== undefined) setBanner(res.item);
    });
  }, []);

  return (
    <>
      {banner.length > 0 && (
        <>
          <Swiper {...swiperOption}>
            {banner.map((item: string, idx: number) => (
              <SwiperSlide key={`sub_banner_${item}_${idx}`}>
                <SwiperImg>
                  <img src={item} alt="" />
                </SwiperImg>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
};
