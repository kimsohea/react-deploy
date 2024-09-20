import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { fetchAladinItem, fetchAladinList, fetchAladinBtnList } from "@/utils/fetchUtils";

import { Section, CategoryList } from "@/components/layouts";
import { MainBanners, SubBanners } from "@/components/banners/BannerList";
import { AladinProdList, AladinProdBtnList } from "@/components/products/AladinProdList";

import { Category } from "@/types/category";
import { CategoryContext } from "@/context/CategoryContext";
import { aladinItemType, alainListType, aladinBtnType } from "@/types/aladinItems";

import { UsedTitle, SearchBox } from "./UsedCategory.style";

const MainBanner = () => <MainBanners folder={"used"} />;

const SubBanner = () => <SubBanners folder={"used"} />;

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
            <option value={"Book"}>상품타입</option>
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
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [btnBestList, setBtnBestList] = useState<aladinBtnType>();
  const [btnSaleList, setBtnSaleList] = useState<aladinBtnType>();
  const [bestList, setBestList] = useState<alainListType>();
  const [musicList, setMusicList] = useState<alainListType>();
  const [suggestItems, setSuggestItems] = useState<aladinItemType>();
  const [authorItems, setAuthorItems] = useState<aladinItemType>();
  const [universeItems, setUniverseItems] = useState<aladinItemType>();

  const [usedShopCate, setUsedShopCate] = useState<Category[]>();
  const [usedCate, setUsedCate] = useState<Category[]>();

  useEffect(() => {
    fetchAladinBtnList("used", "btn_best.json").then((res) => {
      if (res) setBtnBestList(res);
    });
    fetchAladinBtnList("used", "btn_sale.json").then((res) => {
      if (res) setBtnSaleList(res);
    });

    fetchAladinList("used", "best_list.json").then((res) => {
      if (res) setBestList(res);
    });
    fetchAladinList("used", "music_list.json").then((res) => {
      if (res) setMusicList(res);
    });

    fetchAladinItem("used", "suggest_book_items.json").then((res) => {
      if (res) setSuggestItems(res);
    });
    fetchAladinItem("used", "suggest_author_items.json").then((res) => {
      if (res) setAuthorItems(res);
    });
    fetchAladinItem("used", "universe_items.json").then((res) => {
      if (res) setUniverseItems(res);
    });
  }, []);

  useEffect(() => {
    const originCate = category.filter(({ label }) => label === "중고샵+중고매장");
    originCate.forEach(({ children }) => {
      const shopObj = children.find(({ label }) => label === "중고매장");
      if (shopObj !== undefined) setUsedShopCate(shopObj.children);
      const cateObj = children.find(({ label }) => label === "온라인 중고샵")?.children.slice(0, 4);
      if (cateObj !== undefined) {
        setUsedCate(cateObj);
      }
    });
  }, [category]);

  return (
    <>
      <MainBanner />
      {usedShopCate !== undefined && usedShopCate.length > 0 && (
        <>
          <UsedTitle>중고매장</UsedTitle>
          <CategoryList>
            {usedShopCate.map((item, idx) => (
              <li key={`used_shop_${idx}`}>
                <Link to="/category/used-shop">{item.label}</Link>
              </li>
            ))}
          </CategoryList>
        </>
      )}
      <SearchSection />
      {bestList !== undefined && (
        <Section>
          <strong className="title pt-30">
            이 주의 중고 베스트
            <a href={bestList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestList.item} />
        </Section>
      )}
      {suggestItems !== undefined && (
        <Section>
          <strong className="title">이 주의 추천도서</strong>
          <AladinProdList items={suggestItems} />
        </Section>
      )}
      {authorItems !== undefined && (
        <Section>
          <strong className="title">이 주의 추천저자</strong>
          <AladinProdList items={authorItems} />
        </Section>
      )}
      <SubBanner />
      {universeItems !== undefined && (
        <Section>
          <strong className="title pt-30">이 광활한 우주점</strong>
          <AladinProdList items={universeItems} />
        </Section>
      )}
      {musicList !== undefined && (
        <Section>
          <strong className="title pt-30">
            이 주의 추천 음반
            <a href={musicList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={musicList.item} />
        </Section>
      )}
      {usedCate !== undefined &&
        usedCate.length > 0 &&
        usedCate.map((item, idx) => (
          <Section key={`used_cate_${idx}`}>
            <UsedTitle>{item.label}</UsedTitle>
            <CategoryList>
              {item.children.map((cate, idx) => (
                <li key={`used_cate_${idx}`}>
                  <Link to="/category/used-shop">{cate.label}</Link>
                </li>
              ))}
            </CategoryList>
          </Section>
        ))}
      {btnBestList !== undefined && (
        <Section>
          <AladinProdBtnList items={btnBestList} />
        </Section>
      )}
      {btnSaleList !== undefined && (
        <Section>
          <AladinProdBtnList items={btnSaleList} />
        </Section>
      )}
    </>
  );
};

export default UsedCategory;
