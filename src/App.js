import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import NewsList from "./Components/NewsList";
import keyVisual from "./assets/keyvisual.png";
import { loremIpsum } from "./assets/LoremIpsum";
import { PlayArrow } from "@material-ui/icons";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <img src={keyVisual} id="keyvisual"></img>
        <Section title="SAMPLE1" content={loremIpsum} />
        <Section title="NEWS" />
        <NewsList />
        <div className="extra-box">
          <div className="playarrow">
            <PlayArrow style={{ fontSize: 10 }} />
          </div>
          <a href="#" className="extra">
            More Information
          </a>
        </div>
      </div>
      <footer className="footer">
        Copyright (C) 2013 CRHSAMPLE All Rights Reserved{" "}
      </footer>
    </div>
  );
}
