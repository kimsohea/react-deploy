import { useState, useEffect } from "react";
import { fetchGitHubImages, fetchAladinProductList } from "@/utils/fetchUtils";

import { ImgType, ImgNameListType } from "@/types/images";

import { CommonProdList } from "@/components/products/ProductLists";
import { MainBanners, SubBanners } from "@/components/banners/BannerList";

const MainBanner = () => <MainBanners folder={"main"} />;

const SubBanner = () => <SubBanners folder={"main"} />;

type imgProps = { images: ImgNameListType };

const CommonTopList = ({ images }: imgProps) => {
  return <CommonProdList folder={"main"} position={"Top"} images={images} />;
};

const CommonBtmList = ({ images }: imgProps) => {
  return <CommonProdList folder={"main"} position={"Btm"} images={images} />;
};

const Home = () => {
  const [images, setImages] = useState<ImgNameListType>([]);

  useEffect(() => {
    fetchGitHubImages("main").then((res) => {
      const tmpArr: ImgNameListType = res.map((item: ImgType) => ({
        name: item.name,
        imgUrl: item.download_url || "",
      }));
      setImages(tmpArr);
    });
    fetchAladinProductList();
  }, []);

  return (
    <>
      <MainBanner />
      <CommonTopList images={images} />
      <SubBanner />
      <CommonBtmList images={images} />
    </>
  );
};

export default Home;
