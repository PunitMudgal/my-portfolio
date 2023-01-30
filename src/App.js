import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
// import photo from './patternpad.png'
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
// import Projects from "./Components/Projects";
// import Data from "./ProjectData.js";
import { ImOpt } from "react-icons/im";
import FullProjectPage from "./Components/FullProjectPage";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  // const [activepage, setActivepage] = useState(Home);

  return (
    <BrowserRouter>
      <nav
        className={`bg-white dark:bg-[#121212]  min-h-screen  ${
          darkmode ? "dark" : ""
        }`}
      >
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <Routes>
          <Route
            path="/"
            element={<Home darkmode={darkmode} setDarkmode={setDarkmode} />}
          >
          </Route>

          <Route
            path="/blog"
            element={<Blogs darkmode={darkmode} setDarkmode={setDarkmode} />}
          >
            {" "}
          </Route>

          <Route
            path="/project"
            element={<FullProjectPage darkmode={darkmode} />}
          >
          </Route>

        </Routes>

        <Footer darkmode={darkmode} setDarkmode={setDarkmode} />
      </nav>
    </BrowserRouter>
  );
}

export default App;
// px-10 md:px-16
