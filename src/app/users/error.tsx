// src/app/user/error.tsx

"use client";
import React from "react";

const ErrorComponent = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h2>Something went wrong with the User {error.message} page.</h2>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default ErrorComponent;
