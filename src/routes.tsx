import { MarkdownPage } from "./components/MarkdownPage";
import { Route, Routes } from "react-router-dom";

import About from "./pages/about.md";
import Contact from "./pages/contact.md";
import Training from "./pages/training.md";
import SummerCamp from "./pages/summerCamp.md";
import { HomePage } from "./pages/HomePage";

const MarkdownPaths = [
  { path: "/about", md: About, title: "About" },
  { path: "/contact", md: Contact, title: "Contact Us" },
  { path: "/training", md: Training, title: "Training" },
  { path: "/summerCamp", md: SummerCamp, title: "Summer Camp" },
];

export const T86Routes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    {MarkdownPaths.map(({ path, md, title }) => (
      <Route
        path={path}
        element={<MarkdownPage title={title} location={md} />}
      />
    ))}
  </Routes>
);
