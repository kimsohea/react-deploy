import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { fetchAladinList, fetchLibrary } from "@/utils/fetchUtils";

import { alainListType } from "@/types/aladinItems";
import { libraryListType } from "@/types/library";

import { Section } from "@/components/layouts";
import { MainBanners } from "@/components/banners/BannerList";
import { AladinProdList } from "@/components/products/AladinProdList";

import { LibSection, AladinTvSection } from "./LibraryCategory.style";

const MainBanner = () => <MainBanners folder={"library"} />;

type libProps = {
  items: libraryListType;
  title: string;
};

const LibrarySection = ({ items, title }: libProps) => {
  return (
    <LibSection>
      <h2 className="lib_title">{title}</h2>
      <ul className="lib_post">
        {items.map((item, idx) => (
          <li key={`lib_item_${idx}_${item.author}`}>
            <a href={item.link} target="_blank">
              <p className="tit">
                <strong>{item.title}</strong>
                <span>{item.author}</span>
              </p>
              <p className="desc">
                {item.desc.replace(/<\/?[^>]+(>|$)/g, "").length > 150
                  ? item.desc.replace(/<\/?[^>]+(>|$)/g, "") + "..."
                  : item.desc.replace(/<\/?[^>]+(>|$)/g, "")}
              </p>
              <figure>
                <img
                  src={
                    title === "알라디너의 선택"
                      ? item.imgUrl.slice(0, -1)
                      : item.imgUrl
                  }
                  alt={item.title}
                />
              </figure>
            </a>
          </li>
        ))}
      </ul>
    </LibSection>
  );
};

const AladinerTv = () => {
  const btnArr = [
    "#라이브북토크",
    "#나도북튜버우수작",
    "#책의시작",
    "#나의하반기PICK",
  ];

  const swiperOption = {
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: ".aladin_tv_page",
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<li class="${className}"><button>${btnArr[index]}</button></li>`;
      },
    },
    loop: true,
  };

  return (
    <AladinTvSection>
      <ul className="aladin_tv_page"></ul>
      <Swiper {...swiperOption}>
        <SwiperSlide>
          <ul>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/15753909"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/JbxHPDF-uvw/mqdefault.jpg"
                  alt=""
                />
                <p>
                  #지금여기SF ‘좋아하길 잘했어‘ 작가 김원우 X SF 평론가 심완선
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/15718700"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/gf-h0nXX6oU/mqdefault.jpg"
                  alt=""
                />
                <p>‘감수성 수업‘ 정여울 X 이다혜</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/15667148"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/-M8OPg04czg/mqdefault.jpg"
                  alt=""
                />
                <p>
                  ‘이달의 출판만화‘ 신일숙 한국만화가협회장 X 성인수 진행자 X
                  최윤주 평론가
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/15527741"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/qiigCF_jH-g/mqdefault.jpg"
                  alt=""
                />
                <p>#지금여기SF 6화 ‘영원한 저녁의 연인들‘ 서윤빈 X 우다영</p>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul>
            <li>
              <a
                href="https://blog.aladin.co.kr/757212170/15751825"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/NP1wkAA-OYE/mqdefault.jpg"
                  alt=""
                />
                <p>구매한책 소개해드립니다</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/749123126/15522695"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/s13u2iExdBQ/mqdefault.jpg"
                  alt=""
                />
                <p>모든 제국은 몰락한다.미국의 붕괴</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/757212170/15521789"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/5PsV0gnN7Bs/mqdefault.jpg"
                  alt=""
                />
                <p>구매한책 소개해드립니다</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/744656220/15510411"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/30ezE053C40/mqdefault.jpg"
                  alt=""
                />
                <p>
                  🤷🏻‍♀️살거면 당당하게 사 뒤에서 야금야금 사지말고📚(5월 책 언박싱)
                </p>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/15718700"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/WCe29ZQwIu8/mqdefault.jpg"
                  alt=""
                />
                <p>책의 시작 : 활판인쇄로 영원히 남기다, 노벨라33</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/15011380"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/VLmtDMMbCqk/mqdefault.jpg"
                  alt=""
                />
                <p>책의 시작, 모험의 시작 ‘반지의 제왕 일러스트 특별판‘</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/14198831"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/I_wR-v1I81o/mqdefault.jpg"
                  alt=""
                />
                <p>책의 시작 : ‘우리가 명함이 없지 일을 안 했냐‘ 풀버전</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/writertv/14198817"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/HPOQYBYp5D4/mqdefault.jpg"
                  alt=""
                />
                <p>책의 시작 : ‘우리가 명함이 없지 일을 안 했냐‘</p>
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul>
            <li>
              <a
                href="https://blog.aladin.co.kr/jay2023/15155922"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/ciUdx7cakoU/mqdefault.jpg"
                  alt=""
                />
                <p>올해의 소설은? 150권 중에서 선정했습니다 🏆🤵🏻‍♂️</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/785039149/14226512"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/uX6FnPEqsgA/mqdefault.jpg"
                  alt=""
                />
                <p>올해 하반기 책 연말정산</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/794890173/15167155"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/GegVZjnHTJU/mqdefault.jpg"
                  alt=""
                />
                <p>올빼미의 크리스마스 여행</p>
              </a>
            </li>
            <li>
              <a
                href="https://blog.aladin.co.kr/773202248/15184754"
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi/Cn-0-Bfq9Ic/mqdefault.jpg"
                  alt=""
                />
                <p>모비딕</p>
              </a>
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </AladinTvSection>
  );
};

const LibraryCategory = () => {
  const [bestBlogList, setBestBlogList] = useState<alainListType>();

  const [starList, setStarList] = useState<libraryListType>();
  const [myReviewList, setMyReviewList] = useState<libraryListType>();

  useEffect(() => {
    fetchAladinList("main", "best_blog_list.json").then((res) => {
      if (res) setBestBlogList(res);
    });

    fetchLibrary("star_list.json").then((res) => {
      if (res) setStarList(res);
    });
    fetchLibrary("my_review_list.json").then((res) => {
      if (res) setMyReviewList(res);
    });
  }, []);

  return (
    <>
      <MainBanner />
      {bestBlogList !== undefined && (
        <Section>
          <strong className="title pt-30">
            화제의 책 소식
            <a href={bestBlogList.link} target="_blank" className="link"></a>
          </strong>
          <AladinProdList items={bestBlogList.item} />
        </Section>
      )}
      {starList !== undefined && (
        <LibrarySection items={starList} title={"알라디너의 선택"} />
      )}
      <AladinerTv />
      {myReviewList !== undefined && (
        <LibrarySection items={myReviewList} title={"마이리뷰"} />
      )}
    </>
  );
};

export default LibraryCategory;
