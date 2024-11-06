import { render, screen } from "@testing-library/react";
import UserPage from "@/app/users/page"; // Adjust path if needed

// Mocking any dependencies (like external components) if necessary
jest.mock("@/components/Cards", () => ({
  __esModule: true,
  default: () => <div>Mocked Cards Component</div>,
}));

jest.mock("@/components/UsersTable", () => ({
  __esModule: true,
  default: () => <div>Mocked Users Table Component</div>,
}));

describe("UserPage", () => {
  it("renders the page with the 'Users' title", () => {
    render(<UserPage />);

    // Change the <p> to an <h1> or similar for better semantic HTML (optional)
    const usersTitle = screen.getByRole("heading", { name: /Users/i });
    expect(usersTitle).toBeInTheDocument(); // Ensure the heading is in the document
   });

  it("renders the Cards component", () => {
    render(<UserPage />);

    // Check if the Cards component is rendered
    const cardsComponent = screen.getByText("Mocked Cards Component");
    expect(cardsComponent).toBeInTheDocument();
  });

  it("renders the UsersTable component", () => {
    render(<UserPage />);

    // Check if the UsersTable component is rendered
    const usersTableComponent = screen.getByText("Mocked Users Table Component");
    expect(usersTableComponent).toBeInTheDocument();
  });

  it("renders the page with the correct styles", () => {
    const { container } = render(<UserPage />);

    // Find the div with the 'page' class using container.querySelector
    const pageDiv = container.querySelector(".page");
    expect(pageDiv).toBeInTheDocument();
    expect(pageDiv).toHaveClass("page"); // Checking if page class is applied
  });
});
