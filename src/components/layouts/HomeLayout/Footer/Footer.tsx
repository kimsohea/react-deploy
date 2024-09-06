import { useState, useEffect } from "react";
import { fetchGitHubFile } from "@/utils/fetchUtils";

import { FooterWrap } from "./Footer.styled";

interface footerItem {
  label: string;
  children: string[];
}

type footerType = {
  type: string;
  lists: footerItem[];
};

const Footer = () => {
  const [tmpFooter, setTmpFooter] = useState<footerType[]>([]);

  useEffect(() => {
    fetchGitHubFile("footer.json").then((res) => setTmpFooter(res));
  }, []);

  return (
    <>
      {tmpFooter.length > 0 && (
        <FooterWrap>
          <nav className="footer_wrap">
            {tmpFooter
              .filter(({ type }) => type !== "bottom")
              .map((item) => (
                <ul
                  className={`footer_${item.type}`}
                  key={`foot_list_${item.type}`}
                >
                  {item.lists.map((listItem) => (
                    <li key={`top_foot_${listItem.label}`}>
                      <strong>
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          {listItem.label}
                        </a>
                      </strong>
                      {listItem.children?.length > 0 && (
                        <ul className="foot_sub">
                          {listItem.children.map((children, idx) => (
                            <li key={`sub_list${idx}`}>
                              <a href="/" onClick={(e) => e.preventDefault()}>
                                {children}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            {tmpFooter
              .filter(({ type }) => type === "bottom")
              .map((item) => (
                <ul className={`footer_btm`} key={`foot_list_${item.type}`}>
                  {item.lists.map((footInfo) => (
                    <li key={`footer_btm_${footInfo.label}`}>
                      {footInfo.children.map((child) => (
                        <p key={`foot_btm_${child}`}>{child}</p>
                      ))}
                    </li>
                  ))}
                </ul>
              ))}
          </nav>
        </FooterWrap>
      )}
    </>
  );
};

export default Footer;
