import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./components/LandingPage/Landing";
// import AboutPage from "./components/AboutPage";
import Blog from "./components/Blog";
import Projects from "./components/Projects";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
