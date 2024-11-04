// src/app/user/page.tsx
"use client";
import React, { useState } from "react";
import Cards from "@/components/Cards";
import UsersTable from "@/components/UsersTable";
import FilterPopup from "@/components/FilterPopup";
import Pagination from "@/components/Pagination";
import styles from "@/styles/Users.module.scss";
interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}
const UserPage = () => {
  const [data, setData] = useState<User[]>([]); // fetch your data here
  const [filteredData, setFilteredData] = useState<User[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(filteredData.length / 10); // Assume 10 per page

  const handleFilter = (filterData: {
    username: string;
    email: string;
    date: string;
  }) => {
    const { username, email, date } = filterData;
    const filtered = data.filter(
      (user) =>
        (!username || user.username.includes(username)) &&
        (!email || user.email.includes(email)) &&
        (!date || user.dateJoined === date)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page
  };

  const handleReset = () => {
    setFilteredData(data);
    setCurrentPage(1);
  };

  return (
    <div className={styles.page}>
      <p className={styles.users}>Users</p>
      <Cards />
      <FilterPopup onFilter={handleFilter} onReset={handleReset} />
      <UsersTable
        data={filteredData.slice((currentPage - 1) * 10, currentPage * 10)}
      />
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UserPage;
