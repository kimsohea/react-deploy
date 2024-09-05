import { useState, useEffect } from "react";
import { fetchGitHubCommonJson } from "@/utils/fetchUtils";

import { ImgNameListType } from "@/types/images";
import { CommonProdListType } from "@/types/products";

import ProductList from "./ProductList";

type imgProps = {
  folder: string;
  position: string;
  images: ImgNameListType;
};

export const CommonProdList = ({ folder, position, images }: imgProps) => {
  const [section, setSection] = useState<CommonProdListType>([]);

  useEffect(() => {
    fetchGitHubCommonJson(folder, position).then((res) => {
      const tmpArr: CommonProdListType =
        res?.map(({ children, ...rest }) => ({
          ...rest,
          children: children.map((item) => ({
            ...item,
            imageUrl: images.find(({ name }) => item.imageName === name)
              ?.imgUrl,
          })),
        })) || [];
      setSection(tmpArr);
    });
  }, [images]);

  return <>{section.length > 0 && <ProductList section={section} />}</>;
};
