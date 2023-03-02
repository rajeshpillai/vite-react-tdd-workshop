import { render, screen, within, fireEvent } from "../../utils/test-utils";
import Tab from "./tab";

describe("Tab Component", () => {
  it("Should render one tab default", () => {
    render(
      <Tab.Tabs>
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
    );
    expect(screen.getByText(/Book Flight/)).toBeInTheDocument();
    expect(screen.getByText(/Book Room/)).toBeInTheDocument();
    expect(screen.getByText(/Book Movie/)).toBeInTheDocument();

    expect(screen.getByText(/Tab 1 - Book flight/)).toBeInTheDocument();
    expect(screen.queryByText(/Tab 2/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Tab 3/)).not.toBeInTheDocument();
    
  });
});
