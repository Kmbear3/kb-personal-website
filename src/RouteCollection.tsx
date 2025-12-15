import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from './Contact'

function RouteCollection() {
  return (
            <Routes>
              {/* The App component can contain elements like a navigation bar that appear on all pages */}
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
  );
}

export default RouteCollection;