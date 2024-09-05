import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CategoryContext } from "@/context/CategoryContext";

import { HeaderWrap, HeaderBuffer } from "./Header.styled";
import HeaderLogo from "@/assets/logo.jpg";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return null;
};

const Header = () => {
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
      <HeaderWrap>
        <ScrollToTop />
        <nav className="header_wrap">
          <h1 className="header_logo">
            <Link to="/">
              <img src={HeaderLogo} alt="Aladin Logo" />
            </Link>
          </h1>
          {category && category.length > 0 && (
            <ul
              className="header_category"
              onMouseLeave={handleActiveIdx(99, 99, 99)}
            >
              {category.map((cate01, idx) => (
                <li
                  key={cate01.categoryName}
                  onMouseEnter={handleActiveIdx(idx, 0, 0)}
                  className={activeIdx === idx ? "active" : ""}
                >
                  <Link to={`/category/${cate01.categoryName}`}>
                    {cate01.label}
                  </Link>
                  {cate01.children.length > 0 && (
                    <ul>
                      {cate01.children.map((cate02, idx1) => (
                        <li
                          key={`${cate02.label}-${idx1}`}
                          onMouseEnter={handleActiveIdx(idx, idx1, 0)}
                          className={activeIdx2 === idx1 ? "active" : ""}
                        >
                          {cate02.categoryName && (
                            <Link to={`/category/${cate02.categoryName}`}>
                              {cate02.label}
                            </Link>
                          )}
                          {cate02.children?.length > 0 && (
                            <ul>
                              {cate02.children.map((cate03, idx2) => (
                                <li
                                  key={`${cate03.label}-${idx2}`}
                                  onMouseEnter={handleActiveIdx(
                                    idx,
                                    idx1,
                                    idx2
                                  )}
                                  className={
                                    activeIdx3 === idx2 ? "active" : ""
                                  }
                                >
                                  <Link to={`/category/${cate02.categoryName}`}>
                                    {cate03.label}
                                  </Link>
                                  {cate03.children?.length > 0 && (
                                    <ul>
                                      {cate03.children.map((cate04) => (
                                        <li key={cate04.label}>
                                          <Link
                                            to={`/category/${cate02.categoryName}`}
                                          >
                                            {cate04.label}
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
export default Header;
