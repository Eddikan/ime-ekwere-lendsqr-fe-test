import React, { useState } from "react";
import styles from "@/styles/FilterPopup.module.scss";
import Image from "next/image";

interface YourParentComponentProps {
  onFilterUsers: (filterData: {
    username: string;
    email: string;
    date: string;
    phoneNumber: string;
    organization: string;
    status: string;
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
    organization: "",
    phoneNumber: "",
    status: "",
  });

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleFilter = () => {
    onFilterUsers(filterData); // Call the prop function to filter users
    togglePopup(); // Close the popup after filtering
  };

  const handleReset = () => {
    setFilterData({
      username: "",
      email: "",
      date: "",
      organization: "",
      phoneNumber: "",
      status: "",
    }); // Reset local filter data
    onFilterUsers({
      username: "",
      email: "",
      date: "",
      organization: "",
      phoneNumber: "",
      status: "",
    }); // Reset the filter by calling the prop function
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
        <div className={styles.popupContainer}>

          <label>Organization</label>
          <select
            name="organization"
            value={filterData.organization}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Irorun">Irorun</option>
            <option value="lendsqr">lendsqr</option>
            {/* Add more options as needed */}
          </select>

          <label>Username</label>
          <input
            name="username"
            placeholder="Username"
            value={filterData.username}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            value={filterData.email}
            onChange={handleChange}
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            placeholder="date"
            value={filterData.date}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            value={filterData.phoneNumber}
            onChange={handleChange}
          />

          <label>Status</label>
          <select
            name="status"
            value={filterData.status}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className={styles.buttonGroup}>
            <button onClick={handleReset} className={styles.resetButton}>
              Reset
            </button>
            <button onClick={handleFilter} className={styles.filterButton}>
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourParentComponent;
