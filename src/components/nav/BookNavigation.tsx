import { Link } from "react-router-dom";

import { BookNavi } from "./BookNavigation.style";

export const BookNav = () => {
  return (
    <BookNavi>
      <ul>
        <li>
          <Link to="category/local-books">국내도서</Link>
        </li>
        <li>
          <Link to="category/foreign-books">외국도서</Link>
        </li>
        <li>
          <Link to="category/e-book">eBook</Link>
        </li>
      </ul>
    </BookNavi>
  );
};
