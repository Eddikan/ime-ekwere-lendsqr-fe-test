// src/app/error.tsx

"use client";
import React from "react";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h1>Something went wrong globally.</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default GlobalError;
