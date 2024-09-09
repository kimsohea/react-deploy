import { FooterWrap } from "./Footer.styled";

type footerProp = {
  className: string;
};

const Footer = ({ className }: footerProp) => {
  return (
    <FooterWrap className={className}>
      <div className="footer_wrap">footer 템플릿</div>
    </FooterWrap>
  );
};

export default Footer;
