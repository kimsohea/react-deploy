import { Link } from "react-router-dom";

import { BookNavi } from "./BookNavigation.style";

export const BookNav = () => {
  return (
    <BookNavi>
      <ul>
        <li>
          <Link to="/category/local-books">국내도서</Link>
        </li>
        <li>
          <Link to="/category/foreign-books">외국도서</Link>
        </li>
        <li>
          <Link to="/category/ebooks">eBook</Link>
        </li>
      </ul>
    </BookNavi>
  );
};

export const MusicNav = () => {
  return (
    <BookNavi>
      <ul>
        <li>
          <Link to="/category/cd">음반</Link>
        </li>
        <li>
          <Link to="/category/bluelay">블루레이</Link>
        </li>
      </ul>
    </BookNavi>
  );
};
