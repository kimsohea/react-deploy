import axios from "axios";
import { ImgListType } from "@/types/images";
import { CommonProdListType } from "@/types/products";

export const fetchGitHubImages = async (folder: string) => {
  const response = await axios.get(
    `https://api.github.com/repos/kimsohea/aladin-images/contents/${folder}`
  );

  // TypeScript에 데이터 타입을 명시
  const files: ImgListType = response.data;

  if (response.status === 200) {
    // 이미지 파일만 필터링
    return files.filter(({ name }) => /\.(webp)$/.test(name));
  } else throw new Error("Failed to fetch content");
};

export const fetchGitHubCommonJson = async (folder: string, file: string) => {
  const response = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin-images/main/${folder}/${folder}${file}CommonProducts.json`
  );

  const products: CommonProdListType = response.data;
  return response.status === 200 ? products : null;
};
