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
const axios = require("axios").default;


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

    var ipfs_url = `${cid}.ipfs.dweb.link`;
    console.log(ipfs_url);
    alert(ipfs_url);
    // console.log(process.env.REACT_APP_NFT_PORT_KEY)

    // axios.post("https://api.nftport.xyz/v0/mints/easy/urls", {
    //     chain: "polygon",
    //     name: "Qu3st Song",
    //     description: `AuthorID: "Chul"`,
    //     file_url: ipfs_url,
    //     mint_to_address: "0x4Fbf38eFCDeb381F753BAAA22233cA40dF3123Ac"
    // }, {
    //     headers: {
    //         "Authorization": process.env.REACT_APP_NFT_PORT_KEY,
    //         "Content-Type": "application/json"
    //     }
    // }).then(function(response) {
    //   console.log(`https://polygonscan.com/tx/${response.data.transaction_hash})`);
    // }).catch(function(error) {
    //     console.log(error);
    // });

  }
  return <div className="mainDiv">Hello, submit music file.
    <input type="file" name="file" onChange={changeHandler} />
    <br/>
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
