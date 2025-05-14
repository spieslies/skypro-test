import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/_global.scss";
import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "../pages/Home";
import AnalysisPage from "../pages/Analysis";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/skypro-test">
    <StrictMode>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
