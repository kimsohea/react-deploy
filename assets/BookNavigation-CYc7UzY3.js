import{s as i,j as o,L as e}from"./index-37bYJYG3.js";const s=i.nav`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #93999b;
  box-sizing: border-box;

  ul {
    display: flex;
    justify-content: center;
    column-gap: 5px;

    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        padding: 0 20px;
        font-size: 1.4rem;
        font-family: "Noto Sans" sans-serif;
      }
    }
  }
`,n=()=>o.jsx(s,{children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(e,{to:"/category/local-books",children:"국내도서"})}),o.jsx("li",{children:o.jsx(e,{to:"/category/foreign-books",children:"외국도서"})}),o.jsx("li",{children:o.jsx(e,{to:"/category/ebooks",children:"eBook"})})]})}),r=()=>o.jsx(s,{children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(e,{to:"/category/cd",children:"음반"})}),o.jsx("li",{children:o.jsx(e,{to:"/category/bluelay",children:"블루레이"})})]})});export{n as B,r as M};
