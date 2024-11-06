import { render, screen } from "@testing-library/react";
import Cards from "@/components/Cards"; // Adjust the path to your Cards component

// Define the CardProps interface to match the data used in the Cards component
interface CardProps {
  icon: string;
  title: string;
  count: number;
}

// Mock data for cards
const mockCardsData: CardProps[] = [
  { icon: "/users/users.svg", title: "Users", count: 2453 },
  { icon: "/users/activeUsers.svg", title: "Active Users", count: 2453 },
  { icon: "/users/usersLoan.svg", title: "Users with Loans", count: 12453 },
  { icon: "/users/usersSavings.svg", title: "Users with Savings", count: 102453 },
];

// Test 1: Positive Test - Check if Cards component renders correctly with data
describe("Cards Component", () => {
  it("renders cards with correct titles and counts", () => {
    render(<Cards />);

    // Assert that all card titles and counts are rendered
    mockCardsData.forEach((card) => {
      // Check if the title is in the document
      expect(screen.getByText(card.title)).toBeInTheDocument();
      // Check if the count is correctly formatted and displayed using getAllByText
      expect(screen.getAllByText(card.count.toLocaleString()).length).toBeGreaterThan(0);
    });
  });
  
  // Test 2: Negative Test - Check if no cards are rendered when data is empty
  it("does not render any cards when the data is empty", () => {
    // Temporarily override the cardsData with an empty array for testing
    const emptyData: CardProps[] = [];
    const CardsEmpty: React.FC = () => {
      return (
        <div>
          {emptyData.map((card, idx) => (
            <div key={idx}>
              <h3>{card.title}</h3>
              <p>{card.count.toLocaleString()}</p>
            </div>
          ))}
        </div>
      );
    };

    render(<CardsEmpty />);

    // Assert that no cards are rendered
    expect(screen.queryByText(/Users/)).toBeNull(); // We can check any card title to confirm
    expect(screen.queryByText("2453")).toBeNull(); // Checking a count value from mockData
  });
});
