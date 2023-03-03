import Tab from "./tab";

export default function DataTab(props) {
    const {data} = props;
    const tabList =  (
        <Tab.TabList>
            {data.map(tab => (
                <Tab key={tab.label}>{tab.label}</Tab>
            ))}
            </Tab.TabList>
    );
    const tabPanels = (
        <Tab.TabPanels>
            {data.map((tab,i) => (
                <Tab.TabPanel key={i}>{tab.content}</Tab.TabPanel>
            ))}
        </Tab.TabPanels>
    );

    const comps = props.tab_alignment === "top" 
    ? [tabList, tabPanels] 
    : [tabPanels, tabList];
    return (
        <Tab.Tabs>
        {comps}
        </Tab.Tabs>
    );
}
