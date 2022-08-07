import logo from "./logo.svg";
import "./App.css";

import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  Alert,
  Button,
  LinkButton,
  Card,
  Col,
  Input,
  List,
  Menu,
  Row,
  Slider,
} from "antd";
import { Web3Storage, getFilesFromPath } from "web3.storage";

var token = process.env.REACT_APP_KEY;

const storage = new Web3Storage({ token });


function Custom() {

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files);
    // setIsSelected(true);
  }

  function getFiles() {
    const fileInput = document.querySelector('input[type="file"]')
    return fileInput.files
  }


  async function handleSubmission() {
    console.log(selectedFile);
    var files = getFiles();

    const cid = await storage.put(files);
    console.log("Content added with CID:", cid);

  }
  return <div>HellO
    <input type="file" name="file" onChange={changeHandler} />
    <div>
      <button onClick={handleSubmission}>Submit</button>
    </div>

  </div>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Custom/>}>
          </Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
