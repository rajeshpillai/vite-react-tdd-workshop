import { useState } from "react";
import "./App.css";

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

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Tab data={TAB_DATA} />
    </div>
  );
}

export default App;
