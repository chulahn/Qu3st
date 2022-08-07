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

          {/* <Route path="/transfers">



            <div style={{ width: 600, margin: "auto", marginTop: 32, paddingBottom: 32 }}>
              <List
                bordered
                dataSource={transferEvents}
                renderItem={item => {
                  return (
                    <List.Item key={item[0] + "_" + item[1] + "_" + item.blockNumber + "_" + item.args[2].toNumber()}>
                      <span style={{ fontSize: 16, marginRight: 8 }}>#{item.args[2].toNumber()}</span>
                      <Address address={item.args[0]} ensProvider={mainnetProvider} fontSize={16} /> =&gt;
                      <Address address={item.args[1]} ensProvider={mainnetProvider} fontSize={16} />
                    </List.Item>
                  );
                }}
              />
            </div>
          </Route> */}

          {/* <Route path="/collections">
          <div style={{ width: 640, margin: "auto", marginTop: 32, paddingBottom: 32 }}>
              <List
                bordered
                dataSource={yourCollectibles}
                renderItem={item => {
                  const id = item.id.toNumber();
                  return (
                    <List.Item key={id + "_" + item.uri + "_" + item.owner}>
                      <Card
                        title={
                          <div>
                            {item.name}
                          </div>
                        }
                      >
                        <div>
                          <img src={item.image} style={{ maxWidth: 150 }} />
                        </div>
                        <div>{item.description}</div>
                      </Card>

                      <div>
                        <Button
                          href="/collection_details"
                        >
                          Explore Collection
                        </Button>
                      </div>
                    </List.Item>
                  );
                }}
              />
            </div>
          
          </Route> */}
          {/**  const test = useContractReader(readContracts, "Dyve",  "token", []);
  console.log(test);
 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
