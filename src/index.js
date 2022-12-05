import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from './components/pages/Resume'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="pb-5 bg-black pt-1">
        <Resume />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
