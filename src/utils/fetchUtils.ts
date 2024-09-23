import axios from "axios";

import { bannerType } from "@/types/banners";
import {
  aladinItemType,
  alainListType,
  aladinBtnType,
} from "@/types/aladinItems";
import { libraryListType } from "@/types/library";

export const fetchGitHubFile = async (file: string) => {
  const response = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin-images/main/${file}`
  );
  return response.status === 200 ? response.data : null;
};

export const fetchAladinList = async (folder: string, file: string) => {
  const res = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin_json/main/${folder}/${file}`
  );

  const products: alainListType = res.data;
  return res.status === 200 ? products : undefined;
};

export const fetchAladinBtnList = async (folder: string, file: string) => {
  const res = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin_json/main/${folder}/${file}`
  );

  const lists: aladinBtnType = res.data;
  return res.status === 200 ? lists : undefined;
};

export const fetchAladinItem = async (folder: string, file: string) => {
  const res = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin_json/main/${folder}/${file}`
  );

  const products: aladinItemType = res.data;
  return res.status === 200 ? products : undefined;
};

export const fetchBanner = async (folder: string, file: string) => {
  const res = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin_json/main/${folder}/${file}`
  );

  const banners: bannerType = res.data;
  return res.status === 200 ? banners : undefined;
};

export const fetchLibrary = async (file: string) => {
  const res = await axios.get(
    `https://raw.githubusercontent.com/kimsohea/aladin_json/main/library/${file}`
  );

  const content: libraryListType = res.data;
  return res.status === 200 ? content : undefined;
};
