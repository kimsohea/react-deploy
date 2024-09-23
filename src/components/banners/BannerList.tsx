import { useState, useEffect } from "react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperBtn, SwiperImg, SubBnrSection } from "./BannerList.styled";

import { fetchBanner } from "@/utils/fetchUtils";

type BannerProps = {
  folder: string;
};

export const MainBanners = ({ folder }: BannerProps) => {
  const [banner, setBanner] = useState<string[]>([]);
  const [mobileBnr, setMobileBnr] = useState<string[]>([]);

  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const swiperOption = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 3500,
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
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (innerWidth < 681) {
      setIsMobile(true);
      fetchBanner(folder, "main_mobile_bnr.json").then((res) => {
        if (res !== undefined) setMobileBnr(res.item);
      });
    } else setIsMobile(false);
  }, [innerWidth]);

  return (
    <>
      {banner.length > 0 && !isMobile && (
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
      {mobileBnr.length > 0 && isMobile && (
        <>
          <Swiper {...swiperOption}>
            {mobileBnr.map((item: string, idx: number) => (
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
      delay: 3500,
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
        <SubBnrSection>
          <Swiper {...swiperOption}>
            {banner.map((item: string, idx: number) => (
              <SwiperSlide key={`sub_banner_${item}_${idx}`}>
                <figure>
                  <img src={item} alt="" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </SubBnrSection>
      )}
    </>
  );
};
