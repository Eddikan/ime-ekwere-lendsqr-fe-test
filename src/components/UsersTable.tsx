import React, { useState, useEffect } from "react";
import styles from "@/styles/UsersTable.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getUsers } from "@/store/userSlice";
import { UserType } from "@/interfaces/users";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import FilterPopup from "@/components/FilterPopup";
import TableOptions from "@/components/TableOptions";
const UsersTable: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const [filteredData, setFilteredData] = useState<UserType[]>(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default to 10 items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!users.length) setLoading(true);
        await dispatch(getUsers());
      } catch (error) {
        console.error(error);
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Paginate filtered data based on current page and itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredData(users.slice(startIndex, endIndex));
  }, [users, currentPage, itemsPerPage]);

  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };
  const handleFilter = (filterData: {
    username: string;
    email: string;
    date: string;
    phoneNumber: string;
    organization: string;
    status: string;
  }) => {
    // Filter users based on filterData
    const filtered = users.filter((user) => {
      return (
        (filterData.organization === "" ||
          user.organization.includes(filterData.organization)) &&
        (filterData.username === "" ||
          user.username
            .toLowerCase()
            .includes(filterData.username.toLowerCase())) &&
        (filterData.email === "" ||
          user.email.toLowerCase().includes(filterData.email.toLowerCase())) &&
        (filterData.phoneNumber === "" ||
          user.phoneNumber.includes(filterData.phoneNumber)) &&
        (filterData.date === "" ||
          user.dateJoined.startsWith(filterData.date)) &&
        (filterData.status === "" || user.status === filterData.status)
      );
    });

    setFilteredData(filtered); // Update `filteredData` with the filtered users
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  if (loading) return <Loader />;
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
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                No records found
              </td>
            </tr>
          ) : (
            filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span
                    className={
                      user.status === "active"
                        ? styles.activeStatus
                        : user.status === "blacklisted"
                        ? styles.blacklistedStatus
                        : user.status === "pending"
                        ? styles.pendingStatus
                        : styles.inactiveStatus
                    }
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <TableOptions userId={user.id} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Pagination
        users={users}
        handleItemsPerPageChange={handleItemsPerPageChange}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UsersTable;
