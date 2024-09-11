import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { aladinItemType } from "@/types/aladinItems";

import { SwiperBtn } from "./ProductList.styled";

type itemProps = {
  items: aladinItemType;
  type?: string;
};

export const AladinProdList = ({ items, type }: itemProps) => {
  const navClass = `nav_${items[0].itemId}`;
  const imgType = type || "";

  const swiperOption = {
    modules: [Navigation],
    navigation: {
      prevEl: `.${navClass} .prev`,
      nextEl: `.${navClass} .next`,
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  };

  return (
    <>
      {items.length > 0 && (
        <>
          <Swiper {...swiperOption} className="swiper_prodlist">
            {items.map((prod) => (
              <SwiperSlide key={prod.isbn}>
                <a href={prod.link} target="_blank">
                  <figure className={imgType}>
                    <img src={prod.cover} alt="prod.title" />
                  </figure>
                  {prod.description && (
                    <p className="desc">{prod.description}</p>
                  )}
                  <p className="name">{prod.title}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperBtn className={navClass}>
            <button className="prev"></button>
            <button className="next"></button>
          </SwiperBtn>
        </>
      )}
    </>
  );
};
