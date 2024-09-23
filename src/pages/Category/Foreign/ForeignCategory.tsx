import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Category } from "@/types/category";
import { CategoryContext } from "@/context/CategoryContext";

import { bannerType } from "@/types/banners";
import { aladinItemType, alainListType } from "@/types/aladinItems";

import { BookNav } from "@/components/nav/BookNavigation";
import { Section, CategoryList } from "@/components/layouts";
import { MainBanners } from "@/components/banners/BannerList";
import { AladinProdList } from "@/components/products/AladinProdList";

import { fetchBanner, fetchAladinItem, fetchAladinList } from "@/utils/fetchUtils";

import { EventSection } from "./ForeignCategory.style";

const MainBanner = () => <MainBanners folder={"foreign"} />;

const EventBanner = () => {
  const [eventBanner, setEventBanner] = useState<bannerType>();

  const swiperOption = {
    modules: [Autoplay],
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 6,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 6,
      },
    },
  };

  useEffect(() => {
    fetchBanner("foreign", "event_bnr.json").then((res) => {
      if (res !== undefined) setEventBanner(res);
    });
  }, []);

  return (
    <EventSection>
      <Swiper {...swiperOption}>
        {eventBanner &&
          eventBanner.item.map((item, idx) => (
            <SwiperSlide key={`evt_bnr_${idx}`}>
              <Link to="/category/local-books">
                <img src={item} alt="" />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </EventSection>
  );
};

const ForeignCategory = () => {
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [badGuysList, setBadGuysList] = useState<alainListType>();
  const [aniList, setAniList] = useState<alainListType>();
  const [japanList, setJapanList] = useState<alainListType>();
  const [lexileList, setLexileList] = useState<alainListType>();
  const [saleList, setSaleList] = useState<alainListType>();
  const [insideList, setInsideList] = useState<alainListType>();

  const [mdItems, setMdItems] = useState<aladinItemType>();
  const [childItems, setChildItems] = useState<aladinItemType>();

  const [bookCate, setBookCate] = useState<Category[]>();

  useEffect(() => {
    fetchAladinList("foreign", "bad_guys_list.json").then((res) => {
      if (res) setBadGuysList(res);
    });
    fetchAladinList("foreign", "ani_list.json").then((res) => {
      if (res) setAniList(res);
    });
    fetchAladinList("foreign", "japan_list.json").then((res) => {
      if (res) setJapanList(res);
    });
    fetchAladinList("foreign", "lexile_list.json").then((res) => {
      if (res) setLexileList(res);
    });
    fetchAladinList("foreign", "sale_list.json").then((res) => {
      if (res) setSaleList(res);
    });
    fetchAladinList("foreign", "inside_list.json").then((res) => {
      if (res) setInsideList(res);
    });

    fetchAladinItem("foreign", "md_items.json").then((res) => {
      if (res) setMdItems(res);
    });
    fetchAladinItem("foreign", "child_items.json").then((res) => {
      if (res) setChildItems(res);
    });
  }, []);

  useEffect(() => {
    const originCate = category.filter(({ label }) => label === "국내도서/외국도서");
    originCate.forEach(({ children }) => {
      const tmpObj = children.find(({ label }) => label === "외국도서");
      if (tmpObj !== undefined) {
        const tmpArr = tmpObj.children[0].children;
        setBookCate(tmpArr);
      }
    });
  }, [category]);

  return (
    <>
      <BookNav />
      <MainBanner />
      {mdItems !== undefined && (
        <Section>
          <strong className="title pt-30">MD's Choice</strong>
          <AladinProdList items={mdItems} />
        </Section>
      )}
      {saleList !== undefined && (
        <Section>
          <strong className="title">
            외국도서 할인전
            <a href={saleList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={saleList.item} isSale={true} />
        </Section>
      )}
      {childItems !== undefined && (
        <Section>
          <strong className="title">어린이 외서 지금 주목!</strong>
          <AladinProdList items={childItems} />
        </Section>
      )}
      {lexileList !== undefined && (
        <Section>
          <strong className="title">
            Lexile®지수
            <a href={lexileList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={lexileList.item} />
        </Section>
      )}
      {bookCate !== undefined && bookCate.length > 0 && (
        <CategoryList>
          {bookCate.map((item, idx) => (
            <li key={`book_cate_${idx}`}>
              <Link to="/category/local-books">{item.label}</Link>
            </li>
          ))}
        </CategoryList>
      )}
      {japanList !== undefined && (
        <Section>
          <strong className="title pt-30">
            일본추천도서
            <a href={japanList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={japanList.item} />
        </Section>
      )}
      {aniList !== undefined && (
        <Section>
          <strong className="title">
            애니메이션 굿즈
            <a href={aniList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={aniList.item} />
        </Section>
      )}

      <EventBanner />
      {insideList !== undefined && (
        <Section>
          <strong className="title">
            인사이드아웃2
            <a href={insideList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={insideList.item} />
        </Section>
      )}
      {badGuysList !== undefined && (
        <Section>
          <strong className="title">
            배드가이즈 액티비티
            <a href={badGuysList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={badGuysList.item} />
        </Section>
      )}
    </>
  );
};
export default ForeignCategory;
