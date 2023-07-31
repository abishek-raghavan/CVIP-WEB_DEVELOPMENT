import React from 'react'
import {useState} from "react";
import "./App.css"

const App = () => {
    const [htmlCode, setHtmlcode] = useState("");
    const [cssCode, setCssCode] = useState("");
    const [jsCode, setJscode] = useState("");

    const handleOutput = (e) =>{
      const iframe = document.getElementById("output");

      iframe.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
      iframe.contentWindow.eval(jsCode);
    }    
  
  return (
    <div className="playground">
        {/*ide*/}
        <div className="left">
          <label>HTML</label>
          <textarea name="html"onChange={(e) => setHtmlcode(e.target.value)} ></textarea>
          <label>CSS</label>
          <textarea name="css"onChange={(e) => setCssCode(e.target.value)}></textarea>
          <label>JS</label>
          <textarea name="javascript"onChange={(e) => setJscode(e.target.value)}></textarea>

        </div>
      {/*output*/}
       <div className="right">
          <button onClick={handleOutput}>RUN</button>
          <iframe id="output"></iframe>
       </div>

    </div>
  )
}

export default App