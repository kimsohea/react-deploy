import{d as I,r as s,C as F,f as w,a as B,b,j as e,c as C,L,S as o}from"./index-CpSIOR2n.js";import{a as r,A as N,M,S as D}from"./BannerList-BB1uyMkB.js";const O=I.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 40px auto 0px;
  background: #f7f8fb;
  padding: 30px 40px 40px 40px;

  .title {
    font-size: 2rem;
    font-weight: 700;
  }

  .info_btn {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    button {
      border-bottom: 1px solid #000;
      margin: 10px;
      font-size: 1.4rem;
    }
  }

  form {
    fieldset {
      display: flex;
      align-items: center;
    }

    option {
      cursor: pointer;
    }

    select,
    input,
    button {
      box-sizing: border-box;
      border: 0;
      background: #fff;
      height: 40px;
    }

    .search_btn {
      position: relative;
      width: 40px;
      background: #dedfe4;
      cursor: pointer;

      &::before,
      &:after {
        position: absolute;
        transform: translate(-50%, -50%);
        content: "";
      }

      &:before {
        top: 45%;
        left: 45%;
        width: 30%;
        height: 30%;
        border: 2px solid #000;
        border-radius: 50%;
      }

      &:after {
        top: 65%;
        left: 65%;
        width: 25%;
        height: 2px;
        background-color: #000;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    #searchType {
      padding-right: 80px;
      border: 0.25px solid #dedfe4;
      border-right: 0;
      font-size: 1.4rem;
      cursor: pointer;
    }

    #searchKeyword {
      width: 400px;
      padding: 0 10px;
      border: 0.25px solid #dedfe4;
      font-size: 1.4rem;
    }
  }
`,v=I.strong`
  display: block;
  width: 100%;
  padding-bottom: 20px;
  margin-top: 30px;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
`,P=()=>e.jsx(M,{folder:"used"}),R=()=>e.jsx(D,{folder:"used"}),V=()=>{const x="https://www.aladin.co.kr/shop/usedshop/wc2b_search.aspx",[a,d]=s.useState("book"),[u,l]=s.useState("중고"),f=()=>{const n=`${x}?KeyWord=${u}&SearchTarget=${a}`;window.open(n,"_blank ")};return e.jsxs(O,{children:[e.jsx("strong",{className:"title",children:"중고매입가 조회"}),e.jsxs("ul",{className:"info_btn",children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"ISBN이란?"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"바코드 촬영으로 매입가 조회"})})]}),e.jsx("form",{children:e.jsxs("fieldset",{children:[e.jsx("label",{htmlFor:"searchType"}),e.jsxs("select",{id:"searchType",onChange:n=>d(n.target.value),children:[e.jsx("option",{value:"Book",children:"상품타입"}),e.jsx("option",{value:"Book",children:"국내도서"}),e.jsx("option",{value:"Foreign",children:"외국도서"}),e.jsx("option",{value:"Music",children:"음반"}),e.jsx("option",{value:"DVD",children:"DVD"})]}),e.jsx("label",{htmlFor:"searchKeyword"}),e.jsx("input",{type:"text",id:"searchKeyword",onChange:n=>l(n.target.value)}),e.jsx("button",{type:"button",className:"search_btn",onClick:f})]})})]})},q=()=>{const{state:x}=s.useContext(F),{category:a}=x,[d,u]=s.useState(),[l,f]=s.useState(),[n,A]=s.useState(),[p,T]=s.useState(),[S,z]=s.useState(),[y,K]=s.useState(),[_,U]=s.useState(),[j,$]=s.useState(),[m,E]=s.useState();return s.useEffect(()=>{w("used","btn_best.json").then(t=>{t&&u(t)}),w("used","btn_sale.json").then(t=>{t&&f(t)}),B("used","best_list.json").then(t=>{t&&A(t)}),B("used","music_list.json").then(t=>{t&&T(t)}),b("used","suggest_book_items.json").then(t=>{t&&z(t)}),b("used","suggest_author_items.json").then(t=>{t&&K(t)}),b("used","universe_items.json").then(t=>{t&&U(t)})},[]),s.useEffect(()=>{a.filter(({label:i})=>i==="중고샵+중고매장").forEach(({children:i})=>{var k;const c=i.find(({label:g})=>g==="중고매장");c!==void 0&&$(c.children);const h=(k=i.find(({label:g})=>g==="온라인 중고샵"))==null?void 0:k.children.slice(0,4);h!==void 0&&E(h)})},[a]),e.jsxs(e.Fragment,{children:[e.jsx(P,{}),j!==void 0&&j.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"중고매장"}),e.jsx(C,{children:j.map((t,i)=>e.jsx("li",{children:e.jsx(L,{to:"/category/used-shop",children:t.label})},`used_shop_${i}`))})]}),e.jsx(V,{}),n!==void 0&&e.jsxs(o,{children:[e.jsxs("strong",{className:"title pt-30",children:["이 주의 중고 베스트",e.jsx("a",{href:n.link,target:"_blank",className:"link"})]}),e.jsx(r,{items:n.item})]}),S!==void 0&&e.jsxs(o,{children:[e.jsx("strong",{className:"title",children:"이 주의 추천도서"}),e.jsx(r,{items:S})]}),y!==void 0&&e.jsxs(o,{children:[e.jsx("strong",{className:"title",children:"이 주의 추천저자"}),e.jsx(r,{items:y})]}),e.jsx(R,{}),_!==void 0&&e.jsxs(o,{children:[e.jsx("strong",{className:"title pt-30",children:"이 광활한 우주점"}),e.jsx(r,{items:_})]}),p!==void 0&&e.jsxs(o,{children:[e.jsxs("strong",{className:"title pt-30",children:["이 주의 추천 음반",e.jsx("a",{href:p.link,target:"_blank",className:"link"})]}),e.jsx(r,{items:p.item})]}),m!==void 0&&m.length>0&&m.map((t,i)=>e.jsxs(o,{children:[e.jsx(v,{children:t.label}),e.jsx(C,{children:t.children.map((c,h)=>e.jsx("li",{children:e.jsx(L,{to:"/category/used-shop",children:c.label})},`used_cate_${h}`))})]},`used_cate_${i}`)),d!==void 0&&e.jsx(o,{children:e.jsx(N,{items:d})}),l!==void 0&&e.jsx(o,{children:e.jsx(N,{items:l})})]})};export{q as default};
