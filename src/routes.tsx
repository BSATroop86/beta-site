import { MarkdownPage } from "./components/MarkdownPage";
import { Route, Routes } from "react-router-dom";

import About from "./pages/about.md";
import Contact from "./pages/contact.md";
import Training from "./pages/training.md";
import SummerCamp from "./pages/summerCamp.md";
import EagleResources from "./pages/eagleResources.md";
import NewScouts from "./pages/newScoutResources.md";
import { HomePage } from "./pages/HomePage";
import { EaglesPage } from "./pages/EaglesPage";

const MarkdownPaths = [
  { path: "/about", md: About, title: "About" },
  { path: "/contact", md: Contact, title: "Contact Us" },
  { path: "/training", md: Training, title: "Training" },
  { path: "/summerCamp", md: SummerCamp, title: "Summer Camp" },
  { path: "/eagleResources", md: EagleResources, title: "Eagle Resources" },
  { path: "/newScoutResources", md: NewScouts, title: "New Scouts" },
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
  </Routes>
);
