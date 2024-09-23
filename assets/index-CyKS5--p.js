import{s as I,r as s,C as F,f as k,a as w,b,j as e,c as C,L as B,S as o}from"./index-B9oxMpXx.js";import{a as r,A as L,M,S as D}from"./BannerList-qxil8O4I.js";const O=I.section`
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
`,N=I.strong`
  display: block;
  width: 100%;
  padding-bottom: 20px;
  margin-top: 30px;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
`,P=()=>e.jsx(M,{folder:"used"}),R=()=>e.jsx(D,{folder:"used"}),V=()=>{const x="https://www.aladin.co.kr/shop/usedshop/wc2b_search.aspx",[a,d]=s.useState("book"),[u,l]=s.useState("중고"),p=()=>{const n=`${x}?KeyWord=${u}&SearchTarget=${a}`;window.open(n,"_blank ")};return e.jsxs(O,{children:[e.jsx("strong",{className:"title",children:"중고매입가 조회"}),e.jsxs("ul",{className:"info_btn",children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"ISBN이란?"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"바코드 촬영으로 매입가 조회"})})]}),e.jsx("form",{children:e.jsxs("fieldset",{children:[e.jsx("label",{htmlFor:"searchType"}),e.jsxs("select",{id:"searchType",onChange:n=>d(n.target.value),children:[e.jsx("option",{value:"Book",children:"상품타입"}),e.jsx("option",{value:"Book",children:"국내도서"}),e.jsx("option",{value:"Foreign",children:"외국도서"}),e.jsx("option",{value:"Music",children:"음반"}),e.jsx("option",{value:"DVD",children:"DVD"})]}),e.jsx("label",{htmlFor:"searchKeyword"}),e.jsx("input",{type:"text",id:"searchKeyword",onChange:n=>l(n.target.value)}),e.jsx("button",{type:"button",className:"search_btn",onClick:p})]})})]})},G=()=>{const{state:x}=s.useContext(F),{category:a}=x,[d,u]=s.useState(),[l,p]=s.useState(),[n,A]=s.useState(),[j,T]=s.useState(),[y,U]=s.useState(),[S,$]=s.useState(),[_,z]=s.useState(),[f,K]=s.useState(),[m,E]=s.useState();return s.useEffect(()=>{k("used","btn_best.json").then(t=>{t&&u(t)}),k("used","btn_sale.json").then(t=>{t&&p(t)}),w("used","best_list.json").then(t=>{t&&A(t)}),w("used","music_list.json").then(t=>{t&&T(t)}),b("used","suggest_book_items.json").then(t=>{t&&U(t)}),b("used","suggest_author_items.json").then(t=>{t&&$(t)}),b("used","universe_items.json").then(t=>{t&&z(t)})},[]),s.useEffect(()=>{a.filter(({label:i})=>i==="중고샵+중고매장").forEach(({children:i})=>{var v;const c=i.find(({label:g})=>g==="중고매장");c!==void 0&&K(c.children);const h=(v=i.find(({label:g})=>g==="온라인 중고샵"))==null?void 0:v.children.slice(0,4);h!==void 0&&E(h)})},[a]),e.jsxs(e.Fragment,{children:[e.jsx(P,{}),f!==void 0&&f.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(N,{children:"중고매장"}),e.jsx(C,{children:f.map((t,i)=>e.jsx("li",{children:e.jsx(B,{to:"/category/used-shop",children:t.label})},`used_shop_${i}`))})]}),e.jsx(V,{}),n!==void 0&&e.jsxs(o,{children:[e.jsxs("strong",{className:"title pt-30",children:["이 주의 중고 베스트",e.jsx("a",{href:n.link,target:"_blank",className:"link"})]}),e.jsx(r,{items:n.item})]}),y!==void 0&&e.jsxs(o,{children:[e.jsx("strong",{className:"title",children:"이 주의 추천도서"}),e.jsx(r,{items:y})]}),S!==void 0&&e.jsxs(o,{children:[e.jsx("strong",{className:"title",children:"이 주의 추천저자"}),e.jsx(r,{items:S})]}),e.jsx(R,{}),_!==void 0&&e.jsxs(o,{children:[e.jsx("strong",{className:"title pt-30",children:"이 광활한 우주점"}),e.jsx(r,{items:_})]}),j!==void 0&&e.jsxs(o,{children:[e.jsxs("strong",{className:"title pt-30",children:["이 주의 추천 음반",e.jsx("a",{href:j.link,target:"_blank",className:"link"})]}),e.jsx(r,{items:j.item})]}),m!==void 0&&m.length>0&&m.map((t,i)=>e.jsxs(o,{children:[e.jsx(N,{children:t.label}),e.jsx(C,{children:t.children.map((c,h)=>e.jsx("li",{children:e.jsx(B,{to:"/category/used-shop",children:c.label})},`used_cate_${h}`))})]},`used_cate_${i}`)),d!==void 0&&e.jsx(o,{children:e.jsx(L,{items:d})}),l!==void 0&&e.jsx(o,{children:e.jsx(L,{items:l})})]})},H=G;export{H as default};
