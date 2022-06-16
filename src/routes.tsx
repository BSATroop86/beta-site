import { MarkdownPage } from "./components/MarkdownPage";
import { Route, Routes, Navigate } from "react-router-dom";

import About from "./pages/about.md";
import Contact from "./pages/contact.md";
import Training from "./pages/training.md";
import SummerCamp from "./pages/summerCamp.md";
import EagleResources from "./pages/eagleResources.md";
import NewScouts from "./pages/newScoutResources.md";
import { HomePage } from "./pages/HomePage";
import { EaglesPage } from "./pages/EaglesPage";
import { RedirectPage } from "./pages/RedirectPage";

const MarkdownPaths = [
  { path: "/about", md: About, title: "About" },
  { path: "/contact", md: Contact, title: "Contact Us" },
  { path: "/training", md: Training, title: "Training" },
  { path: "/summerCamp", md: SummerCamp, title: "Summer Camp" },
  { path: "/eagleResources", md: EagleResources, title: "Eagle Resources" },
  { path: "/newScoutResources", md: NewScouts, title: "New Scouts" },
];

const Redirects = [
  {
    path: "firefighters",
    to: "https://www.google.com/maps/d/viewer?mid=1fkmvLVslcM5LqTT_uSoEeZ91Egs",
  },
];

export const T86Routes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/eagles" element={<EaglesPage />} />
    {MarkdownPaths.map(({ path, md, title }) => (
      <Route
        path={path}
        element={<MarkdownPage title={title} location={md} />}
      />
    ))}
    {Redirects.map(({ path, to }) => (
      <Route path={path} element={<RedirectPage href={to} />} />
    ))}
  </Routes>
);
