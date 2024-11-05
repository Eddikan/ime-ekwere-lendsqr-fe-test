import React, { useState } from "react";
import styles from "@/styles/FilterPopup.module.scss";
import Image from "next/image";

interface YourParentComponentProps {
  onFilterUsers: (filterData: {
    username: string;
    email: string;
    date: string;
  }) => void; // Define the filter function prop
}

const YourParentComponent: React.FC<YourParentComponentProps> = ({
  onFilterUsers,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [filterData, setFilterData] = useState({
    username: "",
    email: "",
    date: "",
  });

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleFilter = () => {
    console.log("Filtered data:", filterData);
    onFilterUsers(filterData); // Call the prop function to filter users
    togglePopup(); // Close the popup after filtering
  };

  const handleReset = () => {
    console.log("Reset filters");
    setFilterData({ username: "", email: "", date: "" }); // Reset local filter data
    onFilterUsers({ username: "", email: "", date: "" }); // Reset the filter by calling the prop function
    togglePopup(); // Close the popup after resetting
  };

  return (
    <div className={styles.container}>
      <Image
      onClick={togglePopup}
        src="/users/filter.svg"
        alt="tripleIcon"
        priority
        width={16}
        height={16}
      />

{isPopupVisible && (
          <div
            onClick={() => setIsPopupVisible(false)}
            className={styles.dropdownBackdrop}
          ></div>
        )}
      {isPopupVisible && (
        <div className={styles.overlay}>
          <div className={styles.popupContainer}>
            <h3>Filter Users</h3>
            <input
              name="username"
              placeholder="Username"
              value={filterData.username}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={filterData.email}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={filterData.date}
              onChange={handleChange}
            />
            <div>
              <button onClick={handleReset}>Reset</button>
              <button onClick={handleFilter}>Filter</button>
            </div>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourParentComponent;
