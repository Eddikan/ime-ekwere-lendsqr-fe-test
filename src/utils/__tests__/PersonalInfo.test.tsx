
// src/components/Cards.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import PersonalInfo from "@/components/PersonalInfo";

// Describe the test suite
describe("Personal Information Component", () => {
  it("renders 'Personal Information' text", () => {
    // Render the Cards component
    render(<PersonalInfo />);

    // Assert that the 'content' text is present in the document
    const contentText = screen.getByText(/Personal Information/i); // Using a case-insensitive regex
    expect(contentText).toBeInTheDocument();
  });
});
