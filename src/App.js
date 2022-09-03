import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ResumeText from "./ResumeText.js";
import './index.css'

function App() {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="print-resume">Print my resume!</button>
        )}
        content={() => componentRef.current}
      />
      <ResumeText ref={componentRef} />
      <ReactToPrint
        trigger={() => (
          <button className="print-resume">Print this out!</button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default App;
