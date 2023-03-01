import { render, screen, within, fireEvent } from "../../utils/test-utils";
import Tab from ".";

describe("Tab Component", () => {
  it("Should render one tab default", () => {
    render(<Tab />);
    expect(screen.getByText(/Tab 1/i)).toBeInTheDocument();
  });

  it("Dynamically render tabs passed through props", () => {
    render(
      <Tab
        data={[
          { label: "Tab 1", content: "Content 1 goes here" },
          { label: "Tab 2", content: "Content 2 goes here" }
        ]}
      />
    );
    expect(screen.getByText(/Tab 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Tab 2/i)).toBeInTheDocument();
  });

  it("Default show first tab content", () => {
    render(
      <Tab
        data={[
          { label: "Tab 1", content: "Content 1 goes here" },
          { label: "Tab 2", content: "Content 2 goes here" }
        ]}
      />
    );
    expect(screen.getByText(/Tab 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Content 1 goes here/i)).toBeInTheDocument();
    expect(screen.queryByText(/Content 2 goes here/i)).not.toBeInTheDocument();
  });

  it("Show toggle tab content on click of tab label", () => {
    render(
      <Tab
        data={[
          { label: "Tab 1", content: "Content 1 goes here" },
          { label: "Tab 2", content: "Content 2 goes here" }
        ]}
      />
    );
    const tab = screen.getByText("Tab 2");
    fireEvent.click(tab);

    expect(screen.getByText(/Content 2 goes here/i)).toBeInTheDocument();

    const tab1 = screen.getByText("Tab 1");
    fireEvent.click(tab1);

    expect(screen.getByText(/Content 1 goes here/i)).toBeInTheDocument();
  });
});
