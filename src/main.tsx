import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { GlobalStyle } from "@/components/layouts";

const rootRender = async () => {
  const app = document.getElementById("app") as HTMLElement;
  const root = createRoot(app);

  root.render(
    <StrictMode>
      <BrowserRouter basename="/react-deploy/">
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </StrictMode>
  );
};
rootRender();
