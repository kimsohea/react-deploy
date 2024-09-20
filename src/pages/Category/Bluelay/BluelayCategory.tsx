import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { fetchAladinItem, fetchAladinList } from "@/utils/fetchUtils";

import { MusicNav } from "@/components/nav/BookNavigation";
import { Section, CategoryList } from "@/components/layouts";
import { MainBanners } from "@/components/banners/BannerList";
import { AladinProdList } from "@/components/products/AladinProdList";

import { Category } from "@/types/category";
import { CategoryContext } from "@/context/CategoryContext";
import { aladinItemType, alainListType } from "@/types/aladinItems";

import { BluelayTitle } from "./BluelayCategory.style";

const MainBanner = () => <MainBanners folder={"bluelay"} />;

const BluelayCategory = () => {
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [onlyList, setOnlyList] = useState<alainListType>();
  const [bestList, setBestList] = useState<alainListType>();
  const [uhdList, setUhdList] = useState<alainListType>();
  const [musicList, setMusicList] = useState<alainListType>();
  const [childList, setChildList] = useState<alainListType>();

  const [reserveItems, setReserveItems] = useState<aladinItemType>();
  const [suggestItems, setSuggestItems] = useState<aladinItemType>();

  const [blueCate, setBlueCate] = useState<Category[]>();

  useEffect(() => {
    fetchAladinList("bluelay", "only_list.json").then((res) => {
      if (res) setOnlyList(res);
    });
    fetchAladinList("bluelay", "best_list.json").then((res) => {
      if (res) setBestList(res);
    });
    fetchAladinList("bluelay", "uhd_list.json").then((res) => {
      if (res) setUhdList(res);
    });
    fetchAladinList("bluelay", "music_list.json").then((res) => {
      if (res) setMusicList(res);
    });
    fetchAladinList("bluelay", "child_list.json").then((res) => {
      if (res) setChildList(res);
    });

    fetchAladinItem("bluelay", "reserve_items.json").then((res) => {
      if (res) setReserveItems(res);
    });
    fetchAladinItem("bluelay", "suggest_items.json").then((res) => {
      if (res) setSuggestItems(res);
    });
  }, []);

  useEffect(() => {
    const originCate = category.filter(({ label }) => label === "음반+블루레이");
    originCate.forEach(({ children }) => {
      const tmpBlue = children.find(({ label }) => label === "블루레이")?.children;
      if (tmpBlue !== undefined) setBlueCate(tmpBlue);
    });
  }, [category]);

  return (
    <>
      <MusicNav />
      <MainBanner />
      {blueCate !== undefined && blueCate.length > 0 && (
        <Section>
          {blueCate.map((item, idx) => (
            <div key={`bluelay_cate_${idx}`}>
              <BluelayTitle>{item.label}</BluelayTitle>
              <CategoryList>
                {item.children.map((cate, idx) => (
                  <li key={`bluelay_items_${idx}`}>
                    <Link to="/category/bluelay">{cate.label}</Link>
                  </li>
                ))}
              </CategoryList>
            </div>
          ))}
        </Section>
      )}
      {reserveItems !== undefined && (
        <Section>
          <strong className="title pt-30 center">예약 블루레이</strong>
          <AladinProdList items={reserveItems} />
        </Section>
      )}
      {suggestItems !== undefined && (
        <Section>
          <strong className="title center">추천 블루레이</strong>
          <AladinProdList items={suggestItems} />
        </Section>
      )}
      {onlyList !== undefined && (
        <Section>
          <strong className="title">
            알라딘 단독
            <a href={onlyList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={onlyList.item} />
        </Section>
      )}
      {bestList !== undefined && (
        <Section>
          <strong className="title">
            BEST
            <a href={bestList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestList.item} />
        </Section>
      )}
      {uhdList !== undefined && (
        <Section>
          <strong className="title">
            4K UHD/블루레이
            <a href={uhdList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={uhdList.item} />
        </Section>
      )}
      {musicList !== undefined && (
        <Section>
          <strong className="title">
            뮤직/클래식
            <a href={musicList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={musicList.item} />
        </Section>
      )}
      {childList !== undefined && (
        <Section>
          <strong className="title">
            유아/어린이
            <a href={childList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={childList.item} />
        </Section>
      )}
    </>
  );
};

export default BluelayCategory;
