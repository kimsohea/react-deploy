import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Category } from "@/types/category";
import { CategoryContext } from "@/context/CategoryContext";

import { aladinItemType, alainListType, aladinBtnType } from "@/types/aladinItems";

import { BookNav } from "@/components/nav/BookNavigation";
import { Section, CategoryList } from "@/components/layouts";
import { MainBanners } from "@/components/banners/BannerList";
import { AladinProdList, AladinProdBtnList } from "@/components/products/AladinProdList";

import { fetchAladinItem, fetchAladinList, fetchAladinBtnList } from "@/utils/fetchUtils";

const MainBanner = () => <MainBanners folder={"ebook"} />;

const EbookCategory = () => {
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [btnBestList, setBtnBestList] = useState<aladinBtnType>();
  const [btnNewList, setBtnNewList] = useState<aladinBtnType>();

  const [commuList, setCommuList] = useState<alainListType>();
  const [audioList, setAudioList] = useState<alainListType>();

  const [mdItems, setMdItems] = useState<aladinItemType>();
  const [timeItems, setTimeItems] = useState<aladinItemType>();
  const [freeItems, setFreeItems] = useState<aladinItemType>();

  const [bookCate, setBookCate] = useState<Category[]>();

  useEffect(() => {
    fetchAladinBtnList("ebook", "best_list.json").then((res) => {
      if (res) setBtnBestList(res);
    });
    fetchAladinBtnList("ebook", "new_list.json").then((res) => {
      if (res) setBtnNewList(res);
    });

    fetchAladinList("ebook", "commu_list.json").then((res) => {
      if (res) setCommuList(res);
    });
    fetchAladinList("ebook", "audio_list.json").then((res) => {
      if (res) setAudioList(res);
    });

    fetchAladinItem("ebook", "md_items.json").then((res) => {
      if (res) setMdItems(res);
    });
    fetchAladinItem("ebook", "time_items.json").then((res) => {
      if (res) setTimeItems(res);
    });
    fetchAladinItem("ebook", "free_items.json").then((res) => {
      if (res) setFreeItems(res);
    });
  }, []);

  useEffect(() => {
    const originCate = category.filter(({ label }) => label === "국내도서/외국도서");
    originCate.forEach(({ children }) => {
      const tmpObj = children.find(({ label }) => label === "eBook");
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
      {commuList !== undefined && (
        <Section>
          <strong className="title">
            우리가 나아갈 어떤 공동체
            <a href={commuList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={commuList.item} />
        </Section>
      )}
      {timeItems !== undefined && (
        <Section>
          <strong className="title">지금 많이 읽고 있는 eBook</strong>
          <AladinProdList items={timeItems} />
        </Section>
      )}
      {btnBestList !== undefined && (
        <Section>
          <strong className="title center">베스트셀러 ebook</strong>
          <AladinProdBtnList items={btnBestList} />
        </Section>
      )}
      {btnNewList !== undefined && (
        <Section>
          <strong className="title center">새로나온 ebook</strong>
          <AladinProdBtnList items={btnNewList} />
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
      {audioList !== undefined && (
        <Section>
          <strong className="title pt-30">
            알라딘 오디오북
            <a href={audioList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={audioList.item} />
        </Section>
      )}
      {freeItems !== undefined && (
        <Section>
          <strong className="title">무료 eBook</strong>
          <AladinProdList items={freeItems} />
        </Section>
      )}
    </>
  );
};
export default EbookCategory;
