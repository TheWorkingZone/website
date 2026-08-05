import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders brand elements and navigation", async () => {
    render(<App />);
    const brandElements = await screen.findAllByText(/TheWorkingZone/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });
});
