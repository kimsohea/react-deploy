interface GitHubImages {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: "file" | "dir";
  _liks: object;
}

export type ImgType = GitHubImages;

export type ImgListType = Array<GitHubImages>;

interface ImgNameList {
  name: string;
  imgUrl: string;
}

export type ImgNameType = ImgNameList;

export type ImgNameListType = Array<ImgNameList>;
