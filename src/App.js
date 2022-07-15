import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";

      document.title = "TextAnalyst - dark mode";

      //  setInterval(() => {
      //   document.title="hurry !!"
      //  }, 2000);

      //  setInterval(() => {
      //   document.title="download !!"
      //  }, 2500);

      //  setInterval(() => {
      //   document.title="fast!!"
      //  }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextAnalyst - light mode";
    }
  };

  const [mode, setMode] = useState("light");

  return (
    <>
      {/* <Router> */}
        <div>
          <Navbar
            title="TextAnalyst"
            About="About us"
            mode={mode}
            toggleMode={toggleMode}
          />

          {/* <Switch> */}
            {/* <Route path="/About"> */}
              {/* <About /> */}
            {/* </Route> */}

            {/* <Route path="/"> */}
              <TextForm heading="Enter yout text here..." mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
