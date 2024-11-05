import React, { useState, useEffect } from "react";
import styles from "@/styles/UsersTable.module.scss";
import { useAppDispatch } from "@/store/hooks";
import { getUsers } from "@/store/userSlice";
import FilterPopup from "@/components/FilterPopup";
import { useAppSelector } from "@/store/hooks";
import { UserType } from "@/interfaces/users";
import Pagination from "@/components/Pagination";
import TableOptions from "./TableOptions";

const UsersTable: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        await dispatch(getUsers());
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [dispatch]);

  const users = useAppSelector((state) => state.user.users);
  // const [filter, setFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState<UserType[]>(users);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(filteredData.length / 10); // Assume 10 per page

  // const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setFilter(value);
  //   setFilteredData(
  //     users.filter(
  //       (user) =>
  //         user.username.toLowerCase().includes(value.toLowerCase()) ||
  //         user.email.toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  // };

  const handleFilter = (filterData: {
    username: string;
    email: string;
    date: string;
  }) => {
    const { username, email, date } = filterData;
    const filtered = users.filter(
      (user) =>
        (!username || user.username.includes(username)) &&
        (!email || user.email.includes(email)) &&
        (!date || user.dateJoined === date)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page
  };

  // const handleReset = () => {
  //   setFilteredData(users);
  //   setCurrentPage(1);
  //   setIsPopupVisible(false); // Close the popup after resetting
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <div>
                Organization
                <FilterPopup onFilterUsers={handleFilter} />
              </div>
            </th>
            <th>
              <div>
                Username
                <FilterPopup onFilterUsers={handleFilter} />
              </div>
            </th>
            <th>
              <div>
                Email
                <FilterPopup onFilterUsers={handleFilter} />
              </div>
            </th>
            <th>
              <div>
                Phone Number
                <FilterPopup onFilterUsers={handleFilter} />
              </div>
            </th>
            <th>
              <div>
                Date Joined
                <FilterPopup onFilterUsers={handleFilter} />
              </div>
            </th>
            <th>
              <div>
                Status
                <FilterPopup onFilterUsers={handleFilter} />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span
                  className={
                    user.status === "Active"
                      ? styles.activeStatus
                      : user.status === "Blacklisted"
                      ? styles.blacklistedStatus
                      : user.status === "Pending"
                      ? styles.pendingStatus
                      : user.status === "Inactive"
                      ? styles.inactiveStatus
                      : styles.defaultStatus // Add a default case for other statuses
                  }
                >
                  {user.status}
                </span>
              </td>
              <td>
                <TableOptions userId={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UsersTable;
