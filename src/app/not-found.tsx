// src/app/user/not-found.tsx
"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fbfbfb;
  color: black;
  text-align: center;
`;

const BackButton = styled.button`
  margin-top: 20px; /* Space above the button */
  padding: 0.8rem 1.5rem; /* Button padding */
  background-color: #40e0d0; /* Button background color */
  color: black; /* Button text color */
  border: none; /* No border */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 1rem; /* Button font size */
  transition: background-color 0.3s ease; /* Transition for hover effect */

  &:hover {
    background-color: #30b8b1; /* Darker shade on hover */
  }
`;

const NotFound = () => {
  const router = useRouter(); // Initialize the router

  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <Container>
      <div>This Page has not been added.</div>
      <BackButton onClick={handleBackClick}>Back</BackButton>
    </Container>
  );
};

export default NotFound;
