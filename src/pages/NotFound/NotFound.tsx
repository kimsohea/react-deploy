import { useNavigate } from 'react-router-dom';

import { NotFoundWrap, Article, Button, BUTTON_COLORS } from './NotFound.styled';

type ButtonNavProps = {
  params: {
    text: string;
  };
  styles: {
    color: 'white' | 'black';
  };
  onClick?: () => void;
};

const ButtonComp = ({ params, styles, onClick }: ButtonNavProps) => {
  return (
    <Button color={BUTTON_COLORS[styles.color]} onClick={() => (onClick ? onClick() : void 0)}>
      {params.text}
    </Button>
  );
};

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoToPrevPage = () => {
    navigate(-1);
  };

  const handleGoToHomePage = () => {
    window.location.href = '/';
  };

  return (
    <NotFoundWrap>
      <Article>
        <h1>Not found.</h1>
        <ul>
          <li>
            <ButtonComp params={{ text: '이전 페이지' }} styles={{ color: 'white' }} onClick={handleGoToPrevPage} />
          </li>
          <li>
            <ButtonComp params={{ text: '홈' }} styles={{ color: 'black' }} onClick={handleGoToHomePage} />
          </li>
        </ul>
      </Article>
    </NotFoundWrap>
  );
};

export default NotFound;
