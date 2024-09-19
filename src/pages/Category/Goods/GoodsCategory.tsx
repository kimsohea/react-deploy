import { useState, useEffect } from "react";

import { fetchAladinItem, fetchAladinList, fetchAladinBtnList } from "@/utils/fetchUtils";

import { Section } from "@/components/layouts";
import { AladinProdList, AladinProdBtnList } from "@/components/products/AladinProdList";
import { MainBanners, SubBanners } from "@/components/banners/BannerList";

import { aladinItemType, alainListType, aladinBtnType } from "@/types/aladinItems";

const MainBanner = () => <MainBanners folder={"goods"} />;

const SubBanner = () => <SubBanners folder={"goods"} />;

const GoodsCategory = () => {
  const [btnList, setBtnList] = useState<aladinBtnType>();
  const [btnBrandList, setBtnBrandist] = useState<aladinBtnType>();

  const [bestList, setBestList] = useState<alainListType>();
  const [beanList, setBeanList] = useState<alainListType>();
  const [dripList, setDripList] = useState<alainListType>();
  const [saleList, setSaleList] = useState<alainListType>();

  const [collectorItems, setCollectorItems] = useState<aladinItemType>();
  const [mdItems, setMdItems] = useState<aladinItemType>();
  const [shopItems, setShopItems] = useState<aladinItemType>();

  useEffect(() => {
    fetchAladinBtnList("goods", "with_keywords.json").then((res) => {
      if (res) setBtnList(res);
    });
    fetchAladinBtnList("goods", "brand_keywords.json").then((res) => {
      if (res) setBtnBrandist(res);
    });

    fetchAladinList("goods", "best_list.json").then((res) => {
      if (res) setBestList(res);
    });
    fetchAladinList("goods", "bean_list.json").then((res) => {
      if (res) setBeanList(res);
    });
    fetchAladinList("goods", "drip_list.json").then((res) => {
      if (res) setDripList(res);
    });
    fetchAladinList("goods", "sale_list.json").then((res) => {
      if (res) setSaleList(res);
    });

    fetchAladinItem("goods", "collector_items.json").then((res) => {
      if (res) setCollectorItems(res);
    });
    fetchAladinItem("goods", "md_items.json").then((res) => {
      if (res) setMdItems(res);
    });
    fetchAladinItem("goods", "shop_items.json").then((res) => {
      if (res) setShopItems(res);
    });
  }, []);

  return (
    <>
      <MainBanner />
      {collectorItems !== undefined && (
        <Section>
          <strong className="title pt-30">책읽는 사람들의 생활용품연구소</strong>
          <AladinProdList items={collectorItems} type={"img_sq"} />
        </Section>
      )}
      {btnList !== undefined && (
        <Section>
          <AladinProdBtnList items={btnList} />
        </Section>
      )}
      {mdItems !== undefined && (
        <Section>
          <strong className="title">MD's Pick</strong>
          <AladinProdList items={mdItems} type={"img_sq"} />
        </Section>
      )}
      {shopItems !== undefined && (
        <Section>
          <strong className="title">알라딘 문방구</strong>
          <AladinProdList items={shopItems} type={"img_sq"} />
        </Section>
      )}
      <SubBanner />

      {btnBrandList !== undefined && (
        <Section>
          <AladinProdBtnList items={btnBrandList} />
        </Section>
      )}
      {beanList !== undefined && (
        <Section>
          <strong className="title">
            원두
            <a href={beanList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={beanList.item} type={"img_sq"} />
        </Section>
      )}
      {dripList !== undefined && (
        <Section>
          <strong className="title">
            드립백
            <a href={dripList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={dripList.item} type={"img_sq"} />
        </Section>
      )}
      {bestList !== undefined && (
        <Section>
          <strong className="title">
            베스트셀러
            <a href={bestList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestList.item} type={"img_sq"} />
        </Section>
      )}
      {saleList !== undefined && (
        <Section>
          <strong className="title">
            굿즈 한정 할인
            <a href={saleList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={saleList.item} type={"img_sq"} />
        </Section>
      )}
    </>
  );
};

export default GoodsCategory;
