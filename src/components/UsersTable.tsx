import React, { useState } from 'react';
import styles from '@/styles/UsersTable.module.scss';
import TableOptions from './TableOptions';

interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

interface UsersTableProps {
  data: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ data }) => {
  const [filter, setFilter] = useState<string>('');
  const [filteredData, setFilteredData] = useState<User[]>(data);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);
    setFilteredData(
      data.filter(user =>
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by username or email"
        value={filter}
        onChange={handleFilterChange}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Joined</th>
            <th>Status</th>
            <th>Actions</th>
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
              <td>{user.status}</td>
              <td><TableOptions userId={user.id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
