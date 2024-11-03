// // src/utils/__tests__/utils.test.ts

// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { useForm, Controller, FieldValues } from "react-hook-form";
// import InputField from "../../components/InputField"; // Adjust the import path as necessary

// interface MockInputFieldProps {
//   label?: string;
//   placeholder?: string;
//   error?: string;
//   showTogglePassword?: boolean;
//   endIcon?: React.ReactNode;
//   onIconClick?: () => void;
// }

// const MockInputField: React.FC<MockInputFieldProps> = (props) => {
//   const { control } = useForm<FieldValues>();
//   return (
//     <Controller
//       name="testField"
//       control={control}
//       render={({ field }) => <InputField {...field} {...props} />}
//     />
//   );
// };

// describe("InputField Component", () => {
//   it("renders the input field with a label and placeholder", () => {
//     render(<MockInputField label="Username" placeholder="Enter your username" />);
    
//     expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/enter your username/i)).toBeInTheDocument();
//   });

//   it("displays an error message when provided", () => {
//     render(<MockInputField label="Password" error="Password is required" />);
    
//     expect(screen.getByText(/password is required/i)).toBeInTheDocument();
//   });

//   it("toggles password visibility when the toggle is clicked", () => {
//     render(<MockInputField label="Password" type="password" showTogglePassword={true} />);
    
//     const toggleButton = screen.getByText(/show/i);
//     const input = screen.getByLabelText(/password/i);

//     // Initially, input type should be password
//     expect(input).toHaveAttribute("type", "password");

//     // Click the toggle button to show password
//     fireEvent.click(toggleButton);
//     expect(toggleButton).toHaveTextContent(/hide/i);
//     expect(input).toHaveAttribute("type", "text");

//     // Click the toggle button to hide password
//     fireEvent.click(toggleButton);
//     expect(toggleButton).toHaveTextContent(/show/i);
//     expect(input).toHaveAttribute("type", "password");
//   });

//   it("renders end icon when provided", () => {
//     render(<MockInputField label="Search" endIcon={<span>🔍</span>} />);
    
//     expect(screen.getByText("🔍")).toBeInTheDocument();
//   });

//   it("calls onIconClick when end icon is clicked", () => {
//     const handleIconClick = jest.fn();
//     render(<MockInputField label="Search" endIcon={<span>🔍</span>} onIconClick={handleIconClick} />);
    
//     fireEvent.click(screen.getByText("🔍"));
//     expect(handleIconClick).toHaveBeenCalledTimes(1);
//   });
// });
