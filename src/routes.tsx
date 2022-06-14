import { MarkdownPage } from "./components/MarkdownPage";
import { Route, Routes } from "react-router-dom";

import About from "./pages/about.md";
import Contact from "./pages/contact.md";
import { HomePage } from "./pages/HomePage";

export const T86Routes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/about" element={<MarkdownPage location={About} />} />
    <Route path="/contact" element={<MarkdownPage location={Contact} />} />
  </Routes>
);
