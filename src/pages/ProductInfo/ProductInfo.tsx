// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

import { ProductTop, ProductMid, ProductBtm } from "./ProductInfo.styled";

const ProductInfo = () => {
  //   const [searchParams] = useSearchParams();

  //   const productNo = searchParams.get("productNo");

  return (
    <>
      <ProductTop>
        <p className="info_cate"></p>
        <figure>
          <img src="/" alt="" />
        </figure>
        <ul>
          <li>
            <p>
              2023 한국문학 독서기록장 (한국문학의 얼굴들 대상도서 포함, 소설/시
              3만원 이상)
            </p>
          </li>
          <li>
            <p>나는 오래된 거리처럼 너를 사랑하고</p>
          </li>
          <li>
            <p>
              <strong>정가</strong>12,000원
            </p>
          </li>
          <li>
            <p>
              <strong>판매가</strong>10,800원 (10%, 1,200원 할인)
            </p>
          </li>
          <li>
            <p>
              <strong>마일리지</strong>
              600원(5%) + 멤버십(3~1%) + 5만원이상 구매시 2,000원
            </p>
          </li>
          <li>
            <p>
              <strong>배송료</strong>
              신간도서 단 1권도 무료
            </p>
          </li>
          <li>
            <p>
              <strong>수령예상일</strong>밤 10시까지 주문하면 내일 아침 7시
              출근전 배송(중구 서소문로 89-31 기준) 지역변경
            </p>
          </li>
          <li>
            <p>소설/시/희곡 주간 16위, 종합 top10 5주|Sales Point : 88,090</p>
          </li>
          <li>
            <img src="/" alt="" />
            <p>100자평(11) 리뷰(3)</p>
          </li>
          <li>
            <p>카드/간편결제 할인</p>
            <p>무이자 할부</p>
            <p>소득공제 570원</p>
          </li>
          <li>
            <button>바로구매</button>
            <button>장바구니</button>
          </li>
          <li>
            <button>중고 등록알림 신청</button>
            <button>중고로 팔기</button>
          </li>
        </ul>
      </ProductTop>
      <ProductMid></ProductMid>
      <ProductBtm>
        <figure>
          <img src="/" alt="" />
        </figure>
        <div className="pop">
          <button>바로구매</button>
          <button>장바구니</button>
        </div>
      </ProductBtm>
    </>
  );
};
export default ProductInfo;
