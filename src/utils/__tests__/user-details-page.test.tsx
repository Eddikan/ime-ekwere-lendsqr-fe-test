import { render, screen } from "@testing-library/react";
import UserDetailsPage from "@/app/users/[user]/page"; // Adjust path as needed

// Mock the necessary modules
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => <div>Mocked Image</div>,
}));

jest.mock("@/utils/helpers/useCurrentUser", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    currentUser: {
        id: "123",
        organization: "Tech Co.",
        username: "johndoe123",
        email: "johndoe@example.com",
        phoneNumber: "123-456-7890",
        dateJoined: "2021-01-01",
        status: "active",
        fullName: "John Doe",
        bvn: "123456789",
        gender: "Male",
        maritalStatus: "Single",
        children: "None",
        typeOfResidence: "Apartment",
        levelOfEducation: "Bachelor's",
        employmentStatus: "Employed",
        sectorOfEmployment: "Tech",
        durationOfEmployment: "2 years",
        monthlyIncome: "5000",
        loanRepayment: "2000",
        socials: { 
          twitter: "@johndoe", 
          facebook: "john.doe", 
          instagram: "@johndoe_insta" 
        },
        guarantor: {
          fullName: "Jane Doe",
          phoneNumber: "987-654-3210",
          email: "janedoe@example.com",
          relationship: "Sister",
        },
        bankDetails: {
          balance: "10000",
          accountNumber: "1234567890",
          bank: "Some Bank",
        },
      },
  }),
}));

// Mocking Next.js `useRouter` hook from `next/navigation`
jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: { user: "john-doe" }, // Mocking dynamic route parameter
  }),
}));

describe("UserDetailsPage", () => {
  it("renders the page without crashing", () => {
    // Render the UserDetailsPage component
    render(<UserDetailsPage />);

    // Check if the mocked content is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    
    // Use getAllByText to check if there are multiple instances of the email
    const emailElements = screen.getAllByText("johndoe@example.com");
    expect(emailElements.length).toBeGreaterThan(0); // Check that email appears at least once

    // Optionally, you can further refine which element you want to check by selecting based on their context or order
    expect(emailElements[0]).toBeInTheDocument(); // Just an example; you can check which one is relevant to your test
  });
});
