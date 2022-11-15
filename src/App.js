import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Main from "./components/main";
import Rules from "./components/rules";

function App() {
  // const [descriptionDisplay, setDescriptionDisplay] = useState(true);

  return (
    <React.Fragment>
      {/* <Rules/> */}
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
