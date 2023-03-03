import Tab from "./tab";

export default function DataTab(props) {
  const {data} = props;
  return (
      <Tab.Tabs>
          <Tab.TabList>
              {data.map(tab => (
                  <Tab key={tab.label}>{tab.label}</Tab>
              ))}
          </Tab.TabList>
          <Tab.TabPanels>
              {data.map((tab,i) => (
                  <Tab.TabPanel key={i}>{tab.content}</Tab.TabPanel>
              ))}
          </Tab.TabPanels>
      </Tab.Tabs>
  );
}
