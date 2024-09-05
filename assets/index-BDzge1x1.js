import{n as i,s as n,u as c,j as e}from"./index-COP1spTv.js";const s={white:i`
    color: #3f444c;
    border-color: #e0e0e0;
    background-color: #fff;
  `,black:i`
    color: #fff;
    border-color: #222;
    background-color: #222;
  `},a=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
`,d=n.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #fff;

  h1 {
    font-size: 8.5rem;
    font-weight: 700;
    line-height: 7rem;
    color: #000;
    letter-spacing: -0.213rem;
  }

  p {
    letter-spacing: -0.045rem;
    margin: 2.7rem 0 5.7rem 0;
    font-size: 1.8rem;
    color: #000;
    line-height: 2.8rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;

    li {
      width: 18.2rem;
      margin: 0 0.5rem;
    }
  }

  @media screen and (max-width: 640px) {
    h1 {
      font-size: 14vw;
      line-height: 14vw;
    }

    p {
      font-size: 3vw;
      line-height: 5vw;
      margin: 1rem 0 3.4rem 0;
    }

    ul {
      li {
        width: 100%;
        margin: 0 0.5rem;
      }
    }
  }
`,m=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-width: 0.1rem;
  border-style: solid;
  cursor: pointer;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 1rem 1rem 1rem 0;
  ${o=>o.color}
`,l=({params:o,styles:r,onClick:t})=>e.jsx(m,{color:s[r.color],onClick:()=>t?t():void 0,children:o.text}),f=()=>{const o=c(),r=()=>{o(-1)},t=()=>{window.location.href="/"};return e.jsx(a,{children:e.jsxs(d,{children:[e.jsx("h1",{children:"Not found."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(l,{params:{text:"이전 페이지"},styles:{color:"white"},onClick:r})}),e.jsx("li",{children:e.jsx(l,{params:{text:"홈"},styles:{color:"black"},onClick:t})})]})]})})},u=f;export{u as default};
