import axios from "axios";
import { ImgListType } from "@/types/images";
import { CommonProdListType } from "@/types/products";

const githubKey = "tocken " + import.meta.env.VITE_GITGUB_TOCKEN;
const aladinKey = import.meta.env.VITE_ALADIN_TTBKEY;

export const fetchGitHubFile = async (file: string) => {
  const response = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin-images/main/${file}`
  );
  return response.status === 200 ? response.data : null;
};

export const fetchGitHubImages = async (folder: string) => {
  const response = await axios.get(
    `https://api.github.com/repos/kimsohea/aladin-images/contents/${folder}`,
    {
      headers: {
        Authorization: githubKey,
      },
    }
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

export const fetchAladinProductList = async () => {
  const response = await axios.get(
    `aladin/ItemList.aspx?ttbkey=${aladinKey}&QueryType=ItemNewAll&SearchTarget=Book&output=js&Version=20131101`
  );
  console.log(response);
  return response.status === 200 ? response.data : null;
};
