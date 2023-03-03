import { useState } from "react";
import "./App.css";

import SimpleTab from "./components/tab/simple-tab";
import Tab from     "./components/tab/tab";
import DataTab from "./components/tab/data-tab";

function App() {
  const TAB_DATA = [
    {
      label: "Personal Details",
      content: "Details goes here"
    },
    {
      label: "Address",
      content: "Address goes here"
    }
  ];

  const onSelectTab = (index) => {
    console.log(`Tab clicked ${index}`);
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>

      <h2>Compound Tab - Top</h2>
      <Tab.Tabs  onSelectTab = {onSelectTab}>
          <Tab.TabList>
              <Tab>Book Flight</Tab>
              <Tab>Book Room</Tab>
              <Tab>Book Movie</Tab>
          </Tab.TabList>
          <Tab.TabPanels>
            <Tab.TabPanel>
                Tab 1 - Book flight
                <div>
                    Some more content.
                </div>
            </Tab.TabPanel>
            <Tab.TabPanel>Tab 2</Tab.TabPanel>
            <Tab.TabPanel>Tab 3</Tab.TabPanel>
        </Tab.TabPanels>
      </Tab.Tabs>

      <h2>Compound Tab - Bottom</h2>
      <Tab.Tabs  onSelectTab = {onSelectTab}>
          <Tab.TabPanels>
            <Tab.TabPanel>
                Tab 1 - Book flight
                <div>
                    Some more content.
                </div>
            </Tab.TabPanel>
            <Tab.TabPanel>Tab 2</Tab.TabPanel>
        </Tab.TabPanels>
        <Tab.TabList>
              <Tab>Admin</Tab>
              <Tab>Permissions</Tab>
          </Tab.TabList>
      </Tab.Tabs>

      <br></br>
      <h2>Data Tab</h2>
      <DataTab data={TAB_DATA} />

      <br></br>
      <h2>Simple Tab</h2>
      <SimpleTab data={TAB_DATA} />
    </div>
  );
}

export default App;
