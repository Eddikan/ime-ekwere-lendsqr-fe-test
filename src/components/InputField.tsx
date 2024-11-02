"use client";

import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn;
  showTogglePassword?: boolean;
  endIcon?: React.ReactNode;
  onIconClick?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder = "",
  error,
  register,
  showTogglePassword = false,
  endIcon,
  onIconClick,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = showTogglePassword && isPasswordVisible ? "text" : type;

  return (
    <div style={{  position: "relative" }}>
      {label && <label style={{ fontSize: "14px", color: "#666" }}>{label}</label>}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <input
          type={inputType}
          {...register}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "17.5px 16px",
            paddingRight: endIcon || showTogglePassword ? "60px" : "16px",
            borderRadius: "5px",
            border: "2px solid #545F7D26",
            outline: "none",
            fontSize: "16px",
            color: "#333",
            transition: "border-color 0.2s",
          }}
        />
        {/* SHOW/HIDE for password or icon at the end */}
        {showTogglePassword ? (
          <span
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            style={{
              position: "absolute",
              right: "16px",
              fontSize: "14px",
              color: "#00babc",
              cursor: "pointer",
            }}
          >
            {isPasswordVisible ? "HIDE" : "SHOW"}
          </span>
        ) : endIcon ? (
          <span
            onClick={onIconClick}
            style={{
              position: "absolute",
              right: "16px",
              cursor: onIconClick ? "pointer" : "default",
              color: "#00babc",
            }}
          >
            {endIcon}
          </span>
        ) : null}
      </div>
      {/* Error message */}
      {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
    </div>
  );
};

export default InputField;
