import { render, screen } from "@testing-library/react";
import PersonalInfo from "@/components/PersonalInfo"; // Adjust the path
import { Provider } from "react-redux";
import store from "@/store/store"; // Correct path to your store
import useCurrentUser from "@/utils/helpers/useCurrentUser"; // Import the hook

// Mock the useCurrentUser hook to return mock data
jest.mock("@/utils/helpers/useCurrentUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("PersonalInfo Component", () => {
  it("renders 'Personal Information' text when user data exists", () => {
    // Mock the return value of useCurrentUser to simulate a user being present
    (useCurrentUser as jest.Mock).mockReturnValue({
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
    });

    // Render the component with the actual store (no need to mock Redux state here)
    render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>
    );

    // Assert that the 'Personal Information' text is in the document
    const personalInfoText = screen.getByText(/Personal Information/i);
    expect(personalInfoText).toBeInTheDocument();
  });

  it("renders 'User not found' text when no user data is available", () => {
    // Mock the return value of useCurrentUser to simulate no user data
    (useCurrentUser as jest.Mock).mockReturnValue({
      currentUser: null, // Simulate no user data
    });

    // Render the component with the actual store (no need to mock Redux state here)
    render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>
    );

    // Assert that the 'User not found' text is in the document
    const userNotFoundText = screen.getByText(/User not found/i);
    expect(userNotFoundText).toBeInTheDocument();
  });
});
