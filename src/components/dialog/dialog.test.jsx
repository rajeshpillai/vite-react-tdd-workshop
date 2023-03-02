// import { render, fireEvent } from "@testing-library/react";
// import { describe, it, expect } from "vitest";
// import "@testing-library/jest-dom";

import { render, screen, within, fireEvent } from "../../utils/test-utils";

import { Dialog } from ".";

describe("Dialog component", () => {
  it("should render", () => {
    const { getByRole } = render(<Dialog />);
    expect(getByRole("dialog")).toBeInTheDocument();
  });

  it('should have a title saying "Dialog"', () => {
    const { getByText } = render(<Dialog />);
    expect(getByText("Dialog")).toBeInTheDocument();
  });

  it("should have a dynamic confirmation question", () => {
    const question = "Do you confirm?";
    const { getByText } = render(<Dialog>{question}</Dialog>);
    expect(getByText(question)).toBeInTheDocument();
  });

  it('should have an "OK" button', () => {
    const { getByRole } = render(<Dialog />);
    expect(getByRole("button", { name: "OK" })).toBeInTheDocument();
  });

  it('should have an "Cancel" button', () => {
    const { getByRole } = render(<Dialog />);
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it('should be able to receive a handler for the "OK" button and execute it upon click', () => {
    const onConfirmationHandler = vi.fn();
    const { getByRole } = render(
      <Dialog onConfirmation={onConfirmationHandler} />
    );
    const okButton = getByRole("button", { name: "OK" });

    fireEvent.click(okButton);

    expect(onConfirmationHandler).toHaveBeenCalled();
  });

  it('should be able to receive a handler for the "Cancel" button and execute it upon click', () => {
    const onCancellationHandler = vi.fn();
    const { getByRole } = render(
      <Dialog onCancellation={onCancellationHandler} />
    );
    const cancelButton = getByRole("button", { name: "Cancel" });

    fireEvent.click(cancelButton);

    expect(onCancellationHandler).toHaveBeenCalled();
  });
});
