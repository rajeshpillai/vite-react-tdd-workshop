import "./tab.css";
import { useState } from "react";

export default function Tab({
  data = [{ label: "Tab 1", content: "Content 1" }]
}) {
  const [tab_index, setTabIndex] = useState(0);

  const tab = data[tab_index];

  const handleTabClick = (index) => {
    setTabIndex((ps) => index);
  };
  return (
    <div className="tab-container">
      <ul className="tab-item-group">
        {data.map((t, index) => {
          return (
            <li
              onClick={() => handleTabClick(index)}
              key={t.label}
              className="tab-item"
            >
              {t.label}
            </li>
          );
        })}
      </ul>

      <div className="tab-content">{tab.content}</div>
    </div>
  );
}
