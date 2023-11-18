import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Menu = React.lazy(() => import("pages/Menu"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Art = React.lazy(() => import("pages/Art"));
const Team = React.lazy(() => import("pages/Team"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/team" element={<Team />} />
          <Route path="/art" element={<Art />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
