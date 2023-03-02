import { useState } from "react";
import "./App.css";

import DataTab from "./components/tab/data-tab";
import Tab from "./components/tab/tab";
function App() {
  const [count, setCount] = useState(0);

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
    alert(`Tab clicked ${index}`);
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <DataTab data={TAB_DATA} />

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

    </div>
  );
}

export default App;
