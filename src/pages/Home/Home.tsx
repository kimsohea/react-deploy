import { useState, useEffect } from "react";
import { fetchAladinItem, fetchAladinList } from "@/utils/fetchUtils";

import { Section } from "@/components/layouts";
import { MainBanners, SubBanners } from "@/components/banners/BannerList";
import { AladinProdList } from "@/components/products/AladinProdList";

import { aladinItemType, alainListType } from "@/types/aladinItems";

const MainBanner = () => <MainBanners folder={"main"} />;

const SubBanner = () => <SubBanners folder={"main"} />;

const Home = () => {
  const [bestMonthList, setBestMonthList] = useState<alainListType>();
  const [bestBlogList, setBestBlogList] = useState<alainListType>();
  const [goodsItems, setGoodItems] = useState<aladinItemType>();
  const [specialItems, setSpecialItems] = useState<aladinItemType>();

  useEffect(() => {
    fetchAladinList("main", "best_month_list.json").then((res) => {
      if (res) setBestMonthList(res);
    });
    fetchAladinList("main", "best_blog_list.json").then((res) => {
      if (res) setBestBlogList(res);
    });
    fetchAladinItem("main", "goods_items.json").then((res) => {
      if (res) setGoodItems(res);
    });
    fetchAladinItem("main", "special_items.json").then((res) => {
      if (res) setSpecialItems(res);
    });
  }, []);

  return (
    <>
      <MainBanner />
      {bestMonthList !== undefined && (
        <Section>
          <strong className="title">이달의 주목도서</strong>
          <AladinProdList items={bestMonthList.item} />
        </Section>
      )}
      {bestBlogList !== undefined && (
        <Section>
          <strong className="title">화제의 책 소식</strong>
          <AladinProdList items={bestBlogList.item} />
        </Section>
      )}
      {goodsItems !== undefined && (
        <Section>
          <strong className="title">알라딘의 굿즈 모음</strong>
          <AladinProdList items={goodsItems} type={"img_sq"} />
        </Section>
      )}
      {specialItems !== undefined && (
        <Section>
          <strong className="title">이 주의 특가</strong>
          <AladinProdList items={specialItems} />
        </Section>
      )}
      <SubBanner />
    </>
  );
};

export default Home;
