import React, { useState } from "react";
import styles from "@/styles/TableOptions.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface TableOptionsProps {
  userId: string;
}

const TableOptions: React.FC<TableOptionsProps> = ({ userId }) => {
  const router = useRouter();

  // State to manage visibility of the options
  const [showOptions, setShowOptions] = useState(false);

  const handleBlacklist = () => {
    setShowOptions(false);
  };
  const handleActivate = () => {
    setShowOptions(false);
  };
  const handleViewDetails = () => {
    setShowOptions(false);
    router.push(`users/${userId}`);
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
          <button onClick={handleViewDetails}>
            <Image
              src="/users/details.svg"
              alt="details"
              priority
              width={16}
              height={16}
            />
            View Details
          </button>
          <button onClick={handleBlacklist}>
            <Image
              src="/users/blacklist.png"
              alt="blacklist"
              priority
              width={16}
              height={16}
            />
            Blacklist User
          </button>
          <button onClick={handleActivate}>
            <Image
              src="/users/activate.png"
              alt="blacklist"
              priority
              width={16}
              height={16}
            />
            Activate User
          </button>
        </div>
      )}
    </div>
  );
};

export default TableOptions;
