import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Category } from "@/types/category";
import { CategoryContext } from "@/context/CategoryContext";

import { bannerType } from "@/types/banners";
import { aladinItemType, alainListType, aladinBtnType } from "@/types/aladinItems";

import { BookNav } from "@/components/nav/BookNavigation";
import { Section, CategoryList } from "@/components/layouts";
import { MainBanners } from "@/components/banners/BannerList";
import { AladinProdList, AladinProdBtnList } from "@/components/products/AladinProdList";

import { fetchBanner, fetchAladinItem, fetchAladinList, fetchAladinBtnList } from "@/utils/fetchUtils";

import { EventSection } from "./BookCategory.style";

const MainBanner = () => <MainBanners folder={"book"} />;

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
    fetchBanner("book", "event_bnr.json").then((res) => {
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

const BookCategory = () => {
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [btnList, setBtnList] = useState<aladinBtnType>();

  const [cultureList, setCultureList] = useState<alainListType>();
  const [essayList, setEssayList] = useState<alainListType>();
  const [bestBlogList, setBestBlogList] = useState<alainListType>();
  const [sfList, setSfList] = useState<alainListType>();
  const [bestList, setBestList] = useState<alainListType>();

  const [timeItems, setTimeItems] = useState<aladinItemType>();
  const [saleItems, setSaleItems] = useState<aladinItemType>();

  const [bookCate, setBookCate] = useState<Category[]>();

  useEffect(() => {
    fetchAladinBtnList("book", "new_list.json").then((res) => {
      if (res) setBtnList(res);
    });

    fetchAladinList("book", "culture_list.json").then((res) => {
      if (res) setCultureList(res);
    });
    fetchAladinList("book", "essay_list.json").then((res) => {
      if (res) setEssayList(res);
    });
    fetchAladinList("book", "blog_list.json").then((res) => {
      if (res) setBestBlogList(res);
    });
    fetchAladinList("book", "sf_list.json").then((res) => {
      if (res) setSfList(res);
    });
    fetchAladinList("book", "best_list.json").then((res) => {
      if (res) setBestList(res);
    });

    fetchAladinItem("book", "time_items.json").then((res) => {
      if (res) setTimeItems(res);
    });
    fetchAladinItem("book", "sale_items.json").then((res) => {
      if (res) setSaleItems(res);
    });
  }, []);

  useEffect(() => {
    const originCate = category.filter(({ label }) => label === "국내도서/외국도서");
    originCate.forEach(({ children }) => {
      const tmpObj = children.find(({ label }) => label === "국내도서");
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
      {cultureList !== undefined && (
        <Section>
          <strong className="title pt-30">
            새학기의 지식교양
            <a href={cultureList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={cultureList.item} />
        </Section>
      )}
      {essayList !== undefined && (
        <Section>
          <strong className="title">
            연휴에 읽으면 좋을 에세이
            <a href={essayList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={essayList.item} />
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
      {btnList !== undefined && (
        <Section>
          <strong className="title center pt-30">새로 나온 책</strong>
          <AladinProdBtnList items={btnList} type={"book"} />
        </Section>
      )}
      {timeItems !== undefined && (
        <Section>
          <strong className="title">실시간 클릭 Top 10</strong>
          <AladinProdList items={timeItems} />
        </Section>
      )}
      {bestList !== undefined && (
        <Section>
          <strong className="title">
            신간 베스트
            <a href={bestList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestList.item} />
        </Section>
      )}
      {bestBlogList !== undefined && (
        <Section>
          <strong className="title">
            북플 베스트
            <a href={bestBlogList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestBlogList.item} />
        </Section>
      )}
      <EventBanner />
      {saleItems !== undefined && (
        <Section>
          <strong className="title">정가 인하 / 할인 / 쿠폰</strong>
          <AladinProdList items={saleItems} isSale={true} />
        </Section>
      )}
      {sfList !== undefined && (
        <Section>
          <strong className="title">
            제11회 SF어워드 수상후보작
            <a href={sfList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={sfList.item} />
        </Section>
      )}
    </>
  );
};
export default BookCategory;
