import React, { useState } from "react";
import styles from "@/styles/TableOptions.module.scss";
import Image from "next/image";

interface TableOptionsProps {
  userId: string;
}

const TableOptions: React.FC<TableOptionsProps> = ({ userId }) => {
  // State to manage visibility of the options
  const [showOptions, setShowOptions] = useState(false);

  const handleBlacklist = () => alert("User Blacklisted");
  const handleActivate = () => alert("User Activated");
  const handleViewDetails = () => {
    // Your logic for viewing details, e.g., navigating to a details page
    console.log(`Viewing details for user ID: ${userId}`);
  };

  // Function to toggle the visibility of the options
  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className={styles.optionsContainer}>
      <span onClick={toggleOptions} className={styles.showText}>
        <Image
            src="/users/tripleIcon.svg"
            alt="tripleIcon"
            priority
            width={3}
            height={14}
          />
      </span>
      {showOptions && (
        <div
          onClick={() => setShowOptions(false)}
          className={styles.dropdownBackdrop}
        ></div>
      )}

      {showOptions && (
        <div className={styles.options}>
          <button onClick={handleViewDetails}>View Details</button>
          <button onClick={handleBlacklist}>Blacklist User</button>
          <button onClick={handleActivate}>Activate User</button>
        </div>
      )}
    </div>
  );
};

export default TableOptions;
