import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { fetchAladinItem, fetchAladinList } from "@/utils/fetchUtils";

import { MusicNav } from "@/components/nav/BookNavigation";
import { Section, CategoryList } from "@/components/layouts";
import { AladinProdList } from "@/components/products/AladinProdList";
import { MainBanners, SubBanners } from "@/components/banners/BannerList";

import { Category } from "@/types/category";
import { CategoryContext } from "@/context/CategoryContext";
import { aladinItemType, alainListType } from "@/types/aladinItems";

const MainBanner = () => <MainBanners folder={"music"} />;

const SubBanner = () => <SubBanners folder={"music"} />;

const CdCategory = () => {
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [popList, setPopList] = useState<alainListType>();
  const [songList, setSongList] = useState<alainListType>();
  const [classicList, setClassicList] = useState<alainListType>();
  const [jazzList, setJazzList] = useState<alainListType>();
  const [ostList, setOstList] = useState<alainListType>();
  const [lpList, setLpList] = useState<alainListType>();

  const [reserveItems, setReserveItems] = useState<aladinItemType>();

  const [musicCate, setMusicCate] = useState<Category[]>();

  useEffect(() => {
    fetchAladinList("music", "song_list.json").then((res) => {
      if (res) setSongList(res);
    });
    fetchAladinList("music", "pop_list.json").then((res) => {
      if (res) setPopList(res);
    });
    fetchAladinList("music", "classic_list.json").then((res) => {
      if (res) setClassicList(res);
    });
    fetchAladinList("music", "jazz_list.json").then((res) => {
      if (res) setJazzList(res);
    });
    fetchAladinList("music", "ost_list.json").then((res) => {
      if (res) setOstList(res);
    });
    fetchAladinList("music", "lp_list.json").then((res) => {
      if (res) setLpList(res);
    });

    fetchAladinItem("music", "reserve_items.json").then((res) => {
      if (res) setReserveItems(res);
    });
  }, []);

  useEffect(() => {
    const originCate = category.filter(({ label }) => label === "음반+블루레이");
    originCate.forEach(({ children }) => {
      const shopObj = children.find(({ label }) => label === "음반");
      if (shopObj !== undefined) setMusicCate(shopObj.children);
    });
  }, [category]);

  return (
    <>
      <MusicNav />
      <MainBanner />
      {musicCate !== undefined && musicCate.length > 0 && (
        <CategoryList className="mt-60">
          {musicCate.map((item, idx) => (
            <li key={`used_shop_${idx}`}>
              <Link to="/category/used-shop">{item.label}</Link>
            </li>
          ))}
        </CategoryList>
      )}
      {reserveItems !== undefined && (
        <Section>
          <strong className="title pt-30">예약 음반</strong>
          <AladinProdList items={reserveItems} />
        </Section>
      )}
      {songList !== undefined && (
        <Section>
          <strong className="title">
            가요
            <a href={songList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={songList.item} />
        </Section>
      )}
      {popList !== undefined && (
        <Section>
          <strong className="title">
            팝<a href={popList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={popList.item} />
        </Section>
      )}
      <SubBanner />
      {classicList !== undefined && (
        <Section>
          <strong className="title pt-30">
            클래식
            <a href={classicList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={classicList.item} />
        </Section>
      )}
      {jazzList !== undefined && (
        <Section>
          <strong className="title">
            재즈
            <a href={jazzList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={jazzList.item} />
        </Section>
      )}
      {ostList !== undefined && (
        <Section>
          <strong className="title">
            OST
            <a href={ostList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={ostList.item} />
        </Section>
      )}
      {lpList !== undefined && (
        <Section>
          <strong className="title">
            LP
            <a href={lpList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={lpList.item} />
        </Section>
      )}
    </>
  );
};

export default CdCategory;
