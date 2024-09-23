import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "@/context/CategoryContext";

import { HeaderWrap, HeaderBuffer, MobileCategories } from "./Header.styled";
import HeaderLogo from "@/assets/logo.jpg";

export const Header = () => {
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [activeIdx2, setActiveIdx2] = useState<number | null>(null);
  const [activeIdx3, setActiveIdx3] = useState<number | null>(null);

  // idx를 인자로 받아 해당 인덱스를 activeIdx로 설정하는 이벤트 핸들러 반환
  const handleActiveIdx = (idx: number, idx2: number, idx3: number) => () => {
    if (idx !== activeIdx) {
      setActiveIdx(idx);
      setActiveIdx2(0);
      setActiveIdx3(0);
    } else if (idx === activeIdx && idx2 !== activeIdx2) {
      setActiveIdx2(idx2);
      setActiveIdx3(0);
    } else if (idx === activeIdx && idx2 == activeIdx2 && idx3 !== activeIdx3) {
      setActiveIdx3(idx3);
    }
  };

  return (
    <>
      <HeaderWrap className={activeIdx !== 99 && activeIdx !== null ? "active" : ""}>
        <nav className="header_wrap">
          <h1 className="header_logo">
            <Link to="/">
              <img src={HeaderLogo} alt="Aladin Logo" />
            </Link>
          </h1>
          {category && category.length > 0 && (
            <ul className="header_category" onMouseLeave={handleActiveIdx(99, 99, 99)}>
              {category.map((cate01, idx) => (
                <li
                  key={cate01.categoryName}
                  onMouseEnter={handleActiveIdx(idx, 0, 0)}
                  className={activeIdx === idx ? "active" : ""}
                >
                  <Link to={`/category/${cate01.categoryName}`}>{cate01.label}</Link>
                  {cate01.children.length > 0 && (
                    <ul>
                      {cate01.children.map((cate02, idx1) => (
                        <li
                          key={`${cate02.label}-${idx1}`}
                          onMouseEnter={handleActiveIdx(idx, idx1, 0)}
                          className={activeIdx2 === idx1 ? "active" : ""}
                        >
                          {cate02.categoryName && <Link to={`/category/${cate02.categoryName}`}>{cate02.label}</Link>}
                          {cate02.children?.length > 0 && (
                            <ul>
                              {cate02.children.map((cate03, idx2) => (
                                <li
                                  key={`${cate03.label}-${idx2}`}
                                  onMouseEnter={handleActiveIdx(idx, idx1, idx2)}
                                  className={activeIdx3 === idx2 ? "active" : ""}
                                >
                                  <Link to={`/category/${cate02.categoryName}`}>{cate03.label}</Link>
                                  {cate03.children?.length > 0 && (
                                    <ul>
                                      {cate03.children.map((cate04) => (
                                        <li key={cate04.label}>
                                          <Link to={`/category/${cate02.categoryName}`}>{cate04.label}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
          <ul className="header_myinfo">
            <li>
              <a onClick={(e) => e.preventDefault()}>검색</a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()}>장바구니</a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()}>마이페이지</a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()}>로그인</a>
            </li>
          </ul>
        </nav>
      </HeaderWrap>
      <HeaderBuffer></HeaderBuffer>
    </>
  );
};

type MobileCateProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileCategory = ({ isActive, setIsActive }: MobileCateProps) => {
  // context
  const { state } = useContext(CategoryContext);
  const { category } = state;

  // use state
  const [activeIdx1, setActiveIdx1] = useState<number | null>(null);
  const [activeIdx2, setActiveIdx2] = useState<number | null>(null);

  // idx를 인자로 받아 해당 인덱스를 activeIdx로 설정하는 이벤트 핸들러 반환
  const handleActiveIdx = (idx1: number, idx2: number) => () => {
    if (idx1 !== activeIdx1) {
      setActiveIdx1(idx1);
      setActiveIdx2(idx2);
    } else if (idx1 === activeIdx1 && idx2 !== activeIdx2) {
      setActiveIdx2(idx2);
    } else if (idx1 === activeIdx1 && idx2 === activeIdx2) {
      setActiveIdx1(99);
      setActiveIdx2(99);
    }
  };

  useEffect(() => {
    if (isActive) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isActive]);

  return (
    <>
      <MobileCategories className={isActive ? "active" : ""}>
        <button className="cate_btn" onClick={() => setIsActive(!isActive)}></button>
        <nav className="cate_mobile">
          <h1 className="cate_logo" onClick={() => setIsActive(!isActive)}>
            <Link to="/">
              <img src={HeaderLogo} alt="Aladin Logo" />
            </Link>
          </h1>
          <ul className="cate_myinfo">
            <li>
              <a onClick={(e) => e.preventDefault()}>마이페이지</a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()}>로그인</a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()}>회원가입</a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()}>장바구니</a>
            </li>
          </ul>
          {category && category.length > 0 && (
            <ul className="cate_list">
              {category.map((cate01, idx1) => (
                <li key={cate01.categoryName}>
                  <Link to={`/category/${cate01.categoryName}`} onClick={() => setIsActive(!isActive)}>
                    {cate01.label}
                  </Link>
                  {cate01.children.length > 0 && (
                    <ul>
                      {cate01.children.map((cate02, idx2) => (
                        <li
                          key={`category_${cate02.label}`}
                          onClick={handleActiveIdx(idx1, idx2)}
                          className={
                            cate02.children?.length === 0
                              ? ""
                              : activeIdx1 === idx1 && activeIdx2 === idx2
                                ? "has_child active"
                                : "has_child"
                          }
                        >
                          {cate02.categoryName && (
                            <Link to={`/category/${cate02.categoryName}`} onClick={() => setIsActive(!isActive)}>
                              {cate02.label}
                            </Link>
                          )}
                          {cate02.children?.length > 0 && (
                            <ul>
                              {cate02.children.map((cate03, idx2) => (
                                <li key={`${cate03.label}-${idx2}`}>
                                  <Link to={`/category/${cate02.categoryName}`} onClick={() => setIsActive(!isActive)}>
                                    {cate03.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </MobileCategories>
    </>
  );
};
