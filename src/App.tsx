import React from "react";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import "./App.css";

const tabs: { [key: string]: React.ComponentType } = {
  "default": About,
  "projects": Projects,
}

function App() {
  const [tab, setTab] = useState("default");
  const PageComponent = tabs[tab];
  return (
    <main className="content">
      <div className="header">
        <h1 className="Title">Grant's Project Board</h1>
      </div>
      <div className="navbar-div">
        <Tabs className="tabs" centered>
          <Tab label="About" className="navbar-tab" onClick={() => setTab("default")}/>
          <Tab label="Projects" className="navbar-tab" onClick={() => setTab("projects")}/>
        </Tabs>
      </div>
      <div className="tab-content">
          {PageComponent ? <PageComponent/> : <div>Page not found</div>}
      </div>
    </main>
  );
}

export default App;