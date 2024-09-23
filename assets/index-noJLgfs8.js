import{s as h,r as a,a as g,e as c,j as t,S as m}from"./index-37bYJYG3.js";import{a as x,M as j,b,c as n,P as f,d as w}from"./BannerList-DdFilPNX.js";const u=h.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;

  .lib_title {
    width: 1000px;
    margin: 0 auto 20px;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .lib_post {
    width: 1000px;
    margin: 0 auto;

    li {
      height: 110px;

      &:not(:last-of-type) {
        margin-bottom: 30px;
      }

      a {
        display: flex;
        justify-content: space-between;
        word-break: keep-all;
        font-family: "Noto Sans KR", sans-serif;

        figure {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          margin: 0;
        }

        .tit {
          display: flex;
          flex-direction: column;
          row-gap: 5px;
          width: 150px;
          font-size: 1.4rem;
          font-weight: 500;

          span {
            font-weight: 300;
          }
        }

        .desc {
          width: 600px;
          font-size: 1.4rem;
          line-height: 2.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .lib_title{
      width: 100%;
      font-size: 1.6rem;
    }

    .lib_post {
      width: 100%;
      li {
        height: 12.5rem;
        
        &:not(:last-of-type) {
          margin-bottom: 2rem;
        }

        a {
          justify-content: center;
          flex-wrap: wrap;

          figure {
            width: 30%;

            img {
              height: 11rem;
              transform: translateY(-2rem);
            }
          }

          .tit {
            width: 60%;
            margin-right: 30%;
            row-gap: 0.1rem;

            strong {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            span {
              font-size: 1.2rem;
            }
          }

          .desc {
            display: -webkit-box;
            width: 60%;
            height: 9rem;
            margin-top: .5rem;
            overflow: hidden;
            font-size: 1.2rem;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
          }
        }
      }
    }
  }
`,k=h.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;

  .aladin_tv_page {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    li {
      width:fit-content;
      height: 20px;
      background-color: transparent;
      opacity: 1;
      font-family: "Noto-Sans" sans-serif;
      
      button {
        font-size: 1.6rem;
        cursor: pointer;
      }

      &.swiper-pagination-bullet  {
        margin: 0 10px;

        &.swiper-pagination-bullet-active {
          position: relative;

          button {
            font-weight: 700;
          }

          &:before {
            position: absolute;
            bottom: -10px;
            width: 100%;
            height: 1.5px;
            background-color: #000;
            content: '';
          }
        }
      }
    }
  }

  .swiper {
    width: 1000px;
    margin: 0 auto;

    .swiper-slide {
      ul {
        display: flex;
        column-gap: 10px;

        li{
          width: calc(25% - (30px / 4));
          a {
            display: block;
            width: 100%;

            img {
              width: 100%;
            }

            p {
              margin-top: 10px;
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .aladin_tv_page {
      margin-bottom: 2rem;

      li {
        height: 2rem;
      
        button {
          display: -webkit-box;
          font-size: 1.2rem;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          word-break: break-all;
          overflow: hidden;
        }

        &.swiper-pagination-bullet  {
          margin: 0 0.5rem;

          &.swiper-pagination-bullet-active {
            &:before {
              bottom: -.5rem;
            }
          }
        }
      }
    }

    .swiper {
      width: 100%;
      margin: 0 auto;

      .swiper-slide {
        ul {
          display: flex;
          justify-content: center;
          column-gap: 1rem;
          row-gap: 1rem;
          flex-wrap: wrap;

          li{
            width: calc(50% - 1.5rem);
            a {
              display: block;
              width: 100%;

              img {
                width: 100%;
              }

              p {
                display: -webkit-box;
                margin-top: 1rem;
                overflow: hidden;
                font-size: 1.2rem;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
`,v=()=>t.jsx(j,{folder:"library"}),d=({items:s,title:l})=>t.jsxs(u,{children:[t.jsx("h2",{className:"lib_title",children:l}),t.jsx("ul",{className:"lib_post",children:s.map((i,r)=>t.jsx("li",{children:t.jsxs("a",{href:i.link,target:"_blank",children:[t.jsxs("p",{className:"tit",children:[t.jsx("strong",{children:i.title}),t.jsx("span",{children:i.author})]}),t.jsx("p",{className:"desc",children:i.desc.replace(/<\/?[^>]+(>|$)/g,"").length>150?i.desc.replace(/<\/?[^>]+(>|$)/g,"")+"...":i.desc.replace(/<\/?[^>]+(>|$)/g,"")}),t.jsx("figure",{children:t.jsx("img",{src:l==="알라디너의 선택"?i.imgUrl.slice(0,-1):i.imgUrl,alt:i.title})})]})},`lib_item_${r}_${i.author}`))})]}),y=()=>{const s=["#라이브북토크","#나도북튜버우수작","#책의시작","#나의하반기PICK"],l={modules:[f,w],autoplay:{delay:8e3},pagination:{el:".aladin_tv_page",clickable:!0,renderBullet:(i,r)=>`<li class="${r}"><button>${s[i]}</button></li>`},loop:!0};return t.jsxs(k,{children:[t.jsx("ul",{className:"aladin_tv_page"}),t.jsxs(b,{...l,children:[t.jsx(n,{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/15753909",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/JbxHPDF-uvw/mqdefault.jpg",alt:""}),t.jsx("p",{children:"#지금여기SF ‘좋아하길 잘했어‘ 작가 김원우 X SF 평론가 심완선"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/15718700",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/gf-h0nXX6oU/mqdefault.jpg",alt:""}),t.jsx("p",{children:"‘감수성 수업‘ 정여울 X 이다혜"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/15667148",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/-M8OPg04czg/mqdefault.jpg",alt:""}),t.jsx("p",{children:"‘이달의 출판만화‘ 신일숙 한국만화가협회장 X 성인수 진행자 X 최윤주 평론가"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/15527741",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/qiigCF_jH-g/mqdefault.jpg",alt:""}),t.jsx("p",{children:"#지금여기SF 6화 ‘영원한 저녁의 연인들‘ 서윤빈 X 우다영"})]})})]})}),t.jsx(n,{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/757212170/15751825",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/NP1wkAA-OYE/mqdefault.jpg",alt:""}),t.jsx("p",{children:"구매한책 소개해드립니다"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/749123126/15522695",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/s13u2iExdBQ/mqdefault.jpg",alt:""}),t.jsx("p",{children:"모든 제국은 몰락한다.미국의 붕괴"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/757212170/15521789",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/5PsV0gnN7Bs/mqdefault.jpg",alt:""}),t.jsx("p",{children:"구매한책 소개해드립니다"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/744656220/15510411",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/30ezE053C40/mqdefault.jpg",alt:""}),t.jsx("p",{children:"🤷🏻‍♀️살거면 당당하게 사 뒤에서 야금야금 사지말고📚(5월 책 언박싱)"})]})})]})}),t.jsx(n,{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/15718700",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/WCe29ZQwIu8/mqdefault.jpg",alt:""}),t.jsx("p",{children:"책의 시작 : 활판인쇄로 영원히 남기다, 노벨라33"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/15011380",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/VLmtDMMbCqk/mqdefault.jpg",alt:""}),t.jsx("p",{children:"책의 시작, 모험의 시작 ‘반지의 제왕 일러스트 특별판‘"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/14198831",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/I_wR-v1I81o/mqdefault.jpg",alt:""}),t.jsx("p",{children:"책의 시작 : ‘우리가 명함이 없지 일을 안 했냐‘ 풀버전"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/writertv/14198817",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/HPOQYBYp5D4/mqdefault.jpg",alt:""}),t.jsx("p",{children:"책의 시작 : ‘우리가 명함이 없지 일을 안 했냐‘"})]})})]})}),t.jsx(n,{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/jay2023/15155922",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/ciUdx7cakoU/mqdefault.jpg",alt:""}),t.jsx("p",{children:"올해의 소설은? 150권 중에서 선정했습니다 🏆🤵🏻‍♂️"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/785039149/14226512",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/uX6FnPEqsgA/mqdefault.jpg",alt:""}),t.jsx("p",{children:"올해 하반기 책 연말정산"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/794890173/15167155",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/GegVZjnHTJU/mqdefault.jpg",alt:""}),t.jsx("p",{children:"올빼미의 크리스마스 여행"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"https://blog.aladin.co.kr/773202248/15184754",target:"_blank",children:[t.jsx("img",{src:"https://i.ytimg.com/vi/Cn-0-Bfq9Ic/mqdefault.jpg",alt:""}),t.jsx("p",{children:"모비딕"})]})})]})})]})]})},_=()=>{const[s,l]=a.useState(),[i,r]=a.useState(),[o,p]=a.useState();return a.useEffect(()=>{g("main","best_blog_list.json").then(e=>{e&&l(e)}),c("star_list.json").then(e=>{e&&r(e)}),c("my_review_list.json").then(e=>{e&&p(e)})},[]),t.jsxs(t.Fragment,{children:[t.jsx(v,{}),s!==void 0&&t.jsxs(m,{children:[t.jsxs("strong",{className:"title pt-30",children:["화제의 책 소식",t.jsx("a",{href:s.link,target:"_blank",className:"link"})]}),t.jsx(x,{items:s.item})]}),i!==void 0&&t.jsx(d,{items:i,title:"알라디너의 선택"}),t.jsx(y,{}),o!==void 0&&t.jsx(d,{items:o,title:"마이리뷰"})]})},L=_;export{L as default};
