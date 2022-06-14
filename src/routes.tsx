import { MarkdownPage } from "./components/MarkdownPage";
import { Route, Routes } from "react-router-dom";

import About from "./pages/about.md";

export const T86Routes = () => (
  <Routes>
    <Route path="about" element={<MarkdownPage location={About} />} />
  </Routes>
);
