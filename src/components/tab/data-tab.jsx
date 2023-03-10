import Tab from "./tab";

export default function DataTab(props) {
    const {data} = props;
    const tabList =  (
        <Tab.TabList key="1">
            {data.map(tab => (
                <Tab key={tab.label}>{tab.label}</Tab>
            ))}
        </Tab.TabList>
    );
    const tabPanels = (
        <Tab.TabPanels key="2">
            {data.map((tab,i) => (
                <Tab.TabPanel key={i}>{tab.content}</Tab.TabPanel>
            ))}
        </Tab.TabPanels>
    );

    const comps = props.tab_alignment === "top"  || props.tab_alignment === "left"
    ? [tabList, tabPanels] 
    : [tabPanels, tabList];
    return (
        <Tab.Tabs tab_alignment={props.tab_alignment}>
         {comps}
        </Tab.Tabs>
    );
}
