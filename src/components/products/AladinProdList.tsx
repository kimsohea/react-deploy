import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { aladinItemType, aladinBtnType } from "@/types/aladinItems";

import { SwiperBtn, SwiperPage } from "./ProductList.styled";

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

type itemBtnProps = {
  items: aladinBtnType;
};

export const AladinProdBtnList = ({ items }: itemBtnProps) => {
  const pageClass = `page_${items[0].item[0].isbn}`;

  const swiperOption = {
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: "." + pageClass,
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<li class="${className}"><button>${items[index].title}</button></li>`;
      },
    },
    loop: true,
  };

  return (
    <>
      {items && <SwiperPage className={pageClass} />}
      {items.length > 0 && (
        <Swiper {...swiperOption} className="swiper_prodlist btn">
          {items.map(({ item }) => (
            <SwiperSlide key={item[0].isbn}>
              {item.map((prod) => (
                <a href={prod.link} target="_blank" key={prod.isbn}>
                  <figure>
                    <img src={prod.cover} alt="prod.title" />
                  </figure>
                  {prod.description && (
                    <p className="desc">{prod.description}</p>
                  )}
                  <p className="name">{prod.title}</p>
                </a>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
