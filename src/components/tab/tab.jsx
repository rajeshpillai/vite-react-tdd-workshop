import React, {useState } from "react";
import "./tab.css";

function Tabs(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onSelectTab = props.onSelectTab || (() => {});

  const handleTabSelection = (index) => {
    setActiveIndex(index);
    onSelectTab(index);
  }

  const children = React.Children.map(props.children, (child,index) => {
    return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelectTab: handleTabSelection,
        activeIndex : activeIndex
    });
  })
  return(
    <>
      {children}
    </>
  )
}

function TabList(props) {
  const handleTab = (index) => {
    props.onSelectTab(index);
  }

  const children = React.Children.map(props.children, (child,index) => {
    return React.cloneElement(child, {
        isActive: index === props.activeIndex,
        index: index,
        onSelectTab: handleTab,
        activeIndex: props.activeIndex
    });
  })
  return (
    <div className = "tab-list">
        {children}
    </div>
  )
}

function TabPanels(props) {
  const activeIndex = props.activeIndex || 0;
  console.log({activeIndex});
  return (
    <div className="panels">
        {props.children[activeIndex]}
    </div>
  )
}
function TabPanel(props) {
  return (
      <div className="panel">
          {props.children}
      </div>
  )
}

function Tab(props) {
  const onSelect = () => {
    props.onSelectTab(props.index);
  }

  return (
    <div className = "tab" onClick = {onSelect}>
        {props.children}
    </div>
  )
}

Tab.Tabs = Tabs;
Tab.TabList = TabList;
Tab.TabPanels = TabPanels;
Tab.TabPanel = TabPanel;

export default Tab;

