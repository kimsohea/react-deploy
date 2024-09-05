import { CommonProdListType } from "@/types/products";

import { ProdSection, ProdList, ProdTitle } from "./ProductList.styled";
import { Link } from "react-router-dom";

type sectionProps = {
  section: CommonProdListType;
};

const productList = ({ section }: sectionProps) => {
  return (
    <>
      {section.length > 0 &&
        section.map((item, idx) => (
          <ProdSection key={`product_section_${idx}`}>
            {item.title && <ProdTitle>{item.title}</ProdTitle>}
            <ProdList className={item.type}>
              {item.children.map((prod) => (
                <li key={prod.name}>
                  {prod.productNo && (
                    <Link
                      to={{
                        pathname: "/products",
                        search: `?productNo=${prod.productNo}`,
                      }}
                    >
                      {prod.imageUrl && (
                        <figure>
                          <img src={prod.imageUrl} alt="" />
                        </figure>
                      )}
                      <p className="name">{prod.name}</p>
                      <p className="desc">{prod.description}</p>
                    </Link>
                  )}
                  {!prod.productNo && (
                    <a onClick={(e) => e.preventDefault()}>
                      {prod.imageUrl && (
                        <figure>
                          <img src={prod.imageUrl} alt="" />
                        </figure>
                      )}
                      <p className="name">{prod.name}</p>
                      <p className="desc">{prod.description}</p>
                    </a>
                  )}
                </li>
              ))}
            </ProdList>
          </ProdSection>
        ))}
    </>
  );
};
export default productList;
