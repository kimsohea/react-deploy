import { useState, useEffect } from "react";

import {
  fetchAladinItem,
  fetchAladinList,
  fetchAladinBtnList,
} from "@/utils/fetchUtils";

import { Section } from "@/components/layouts";
import {
  AladinProdList,
  AladinProdBtnList,
} from "@/components/products/AladinProdList";
import { MainBanners, SubBanners } from "@/components/banners/BannerList";

import {
  aladinItemType,
  alainListType,
  aladinBtnType,
} from "@/types/aladinItems";

const MainBanner = () => <MainBanners folder={"main"} />;

const SubBanner = () => <SubBanners folder={"main"} />;

const Home = () => {
  const [btnList, setBtnList] = useState<aladinBtnType>();

  const [suggestList, setSuggestList] = useState<alainListType>();
  const [bestMonthList, setBestMonthList] = useState<alainListType>();
  const [bestBlogList, setBestBlogList] = useState<alainListType>();
  const [bestSellerList, setBestSellerList] = useState<alainListType>();
  const [audioList, setAudioList] = useState<alainListType>();

  const [goodsItems, setGoodItems] = useState<aladinItemType>();
  const [specialItems, setSpecialItems] = useState<aladinItemType>();
  const [memberBestItems, setMemberBestItems] = useState<aladinItemType>();
  const [saleItems, setSaleItems] = useState<aladinItemType>();

  useEffect(() => {
    fetchAladinBtnList("main", "top_list.json").then((res) => {
      if (res) setBtnList(res);
    });

    fetchAladinList("main", "suggest_list.json").then((res) => {
      if (res) setSuggestList(res);
    });
    fetchAladinList("main", "best_month_list.json").then((res) => {
      if (res) setBestMonthList(res);
    });
    fetchAladinList("main", "best_blog_list.json").then((res) => {
      if (res) setBestBlogList(res);
    });
    fetchAladinList("main", "best_seller_list.json").then((res) => {
      if (res) setBestSellerList(res);
    });
    fetchAladinList("main", "audio_list.json").then((res) => {
      if (res) setAudioList(res);
    });

    fetchAladinItem("main", "goods_items.json").then((res) => {
      if (res) setGoodItems(res);
    });
    fetchAladinItem("main", "member_best_items.json").then((res) => {
      if (res) setMemberBestItems(res);
    });
    fetchAladinItem("main", "sale_items.json").then((res) => {
      if (res) setSaleItems(res);
    });
    fetchAladinItem("main", "special_items.json").then((res) => {
      if (res) setSpecialItems(res);
    });
  }, []);

  return (
    <>
      <MainBanner />
      {btnList !== undefined && (
        <Section>
          <AladinProdBtnList items={btnList} />
        </Section>
      )}
      {suggestList !== undefined && (
        <Section>
          <strong className="title">
            추천마법사의 선택
            <a href={suggestList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={suggestList.item} />
        </Section>
      )}
      {bestSellerList !== undefined && (
        <Section>
          <strong className="title">
            베스트셀러 TOP 10
            <a href={bestSellerList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestSellerList.item} />
        </Section>
      )}
      {specialItems !== undefined && (
        <Section>
          <strong className="title special">알라딘 스페셜</strong>
          <AladinProdList items={specialItems} />
        </Section>
      )}
      <SubBanner />
      {bestBlogList !== undefined && (
        <Section>
          <strong className="title pt-30">
            화제의 책 소식
            <a href={bestBlogList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestBlogList.item} />
        </Section>
      )}
      {memberBestItems !== undefined && (
        <Section>
          <strong className="title">멤버십 선정 이달의 책 Top 10</strong>
          <AladinProdList items={memberBestItems} />
        </Section>
      )}
      {goodsItems !== undefined && (
        <Section>
          <strong className="title">알라딘의 굿즈 모음</strong>
          <AladinProdList items={goodsItems} type={"img_sq"} />
        </Section>
      )}
      {saleItems !== undefined && (
        <Section>
          <strong className="title">이 주의 특가</strong>
          <AladinProdList items={saleItems} isSale={true} />
        </Section>
      )}
      {bestMonthList !== undefined && (
        <Section>
          <strong className="title">
            이달의 주목도서
            <a href={bestMonthList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestMonthList.item} />
        </Section>
      )}
      {audioList !== undefined && (
        <Section>
          <strong className="title">알라딘 오디오북</strong>
          <AladinProdList items={audioList.item} type={"img_audio"} />
        </Section>
      )}
    </>
  );
};

export default Home;
