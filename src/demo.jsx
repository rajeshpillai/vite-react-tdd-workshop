import { useState } from "react";
import "./App.css";

import SimpleTab from "./components/tab/simple-tab";
import Tab from     "./components/tab/tab";
import DataTab from "./components/tab/data-tab";

function App() {
  const [alignment, setAlignment] = useState("top");
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

  const handleAlignmentChange = (e) => {
    setAlignment(e.target.value);
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>

      <h2>Compound Tab - Top</h2>
      <Tab.Tabs  onSelectTab = {onSelectTab}>
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
          <Tab.TabList>
              <Tab>Book Flight</Tab>
              <Tab>Book Room</Tab>
              <Tab>Book Movie</Tab>
          </Tab.TabList>
      </Tab.Tabs>


      <h2>Data Tab - Dynamic alignment</h2>
      <select onChange={handleAlignmentChange}> 
         <option value="⬇️ Select an Alignment ⬇️"> -- Select an Alignment -- </option>
         <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
      </select>

      <br></br>
      <br></br>

      <DataTab data={TAB_DATA} tab_alignment={alignment} />
    </div>
  );
}

export default App;
