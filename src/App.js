/** @format */

import { useState } from "react";
import RoutesPath from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  return (
    <div className={mode === "dark" ? "dark-mode App" : "light-mode App"}>
      <Navbar />
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
