import { render, screen } from "@testing-library/react";
import Home from "@/app/page"; // Adjust the import path based on your file structure
import { useRouter } from "next/navigation";

// Mocking the useRouter hook from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  it("should redirect to the login page when the component is loaded", () => {
    const pushMock = jest.fn();

    // Correctly mock the useRouter return value with `push`
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<Home />);

    // Test if router.push was called with '/login'
    expect(pushMock).toHaveBeenCalledWith("/login");
  });

  it("does not render any visible content", () => {
    render(<Home />);

    // Test if the component doesn't render any text content
    expect(screen.queryByText(/login/i)).toBeNull(); // If there's no text with 'login', it won't render anything visible.
    
    // Alternatively, you can check that no elements are present in the body
    expect(screen.queryByRole("link")).toBeNull(); // Example check for links, assuming there's no links.
  });
});
