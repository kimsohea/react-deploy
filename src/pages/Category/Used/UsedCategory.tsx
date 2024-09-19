import { useState, useEffect } from "react";

import { fetchAladinItem, fetchAladinList, fetchAladinBtnList } from "@/utils/fetchUtils";

import { Section } from "@/components/layouts";
import { AladinProdList, AladinProdBtnList } from "@/components/products/AladinProdList";
import { MainBanners } from "@/components/banners/BannerList";

import { aladinItemType, alainListType, aladinBtnType } from "@/types/aladinItems";

import { SearchBox } from "./UsedCategory.style";

const MainBanner = () => <MainBanners folder={"used"} />;

const SearchSection = () => {
  const baseUrl = "https://www.aladin.co.kr/shop/usedshop/wc2b_search.aspx";
  const [type, setType] = useState<string>("book");
  const [keyword, setKeyword] = useState<string>("중고");

  const handleGoTo = () => {
    const tmpStr = `${baseUrl}?KeyWord=${keyword}&SearchTarget=${type}`;
    window.open(tmpStr, "_blank ");
  };

  return (
    <SearchBox>
      <strong className="title">중고매입가 조회</strong>
      <ul className="info_btn">
        <li>
          <button type="button">ISBN이란?</button>
        </li>
        <li>
          <button type="button">바코드 촬영으로 매입가 조회</button>
        </li>
      </ul>
      <form>
        <fieldset>
          <label htmlFor="searchType"></label>
          <select id="searchType" onChange={(e) => setType(e.target.value)}>
            <option selected value={"Book"}>
              상품타입
            </option>
            <option value={"Book"}>국내도서</option>
            <option value={"Foreign"}>외국도서</option>
            <option value={"Music"}>음반</option>
            <option value={"DVD"}>DVD</option>
          </select>
          <label htmlFor="searchKeyword"></label>
          <input type="text" id="searchKeyword" onChange={(e) => setKeyword(e.target.value)} />
          <button type="button" className="search_btn" onClick={handleGoTo}></button>
        </fieldset>
      </form>
    </SearchBox>
  );
};

const UsedCategory = () => {
  const [btnList, setBtnList] = useState<aladinBtnType>();

  const [bestList, setBestList] = useState<alainListType>();

  const [shopItems, setShopItems] = useState<aladinItemType>();

  useEffect(() => {
    fetchAladinBtnList("goods", "with_keywords.json").then((res) => {
      if (res) setBtnList(res);
    });

    fetchAladinList("goods", "best_list.json").then((res) => {
      if (res) setBestList(res);
    });

    fetchAladinItem("goods", "shop_items.json").then((res) => {
      if (res) setShopItems(res);
    });
  }, []);

  return (
    <>
      <MainBanner />
      <SearchSection />
      {btnList !== undefined && (
        <Section>
          <AladinProdBtnList items={btnList} />
        </Section>
      )}

      {shopItems !== undefined && (
        <Section>
          <strong className="title">알라딘 문방구</strong>
          <AladinProdList items={shopItems} type={"img_sq"} />
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
    </>
  );
};

export default UsedCategory;
