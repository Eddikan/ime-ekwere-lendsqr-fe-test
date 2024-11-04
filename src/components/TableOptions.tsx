import React from 'react';
import styles from '@/styles/TableOptions.module.scss';
import { useRouter } from 'next/router';

interface TableOptionsProps {
  userId: string;
}

const TableOptions: React.FC<TableOptionsProps> = ({ userId }) => {
  const router = useRouter();

  const handleBlacklist = () => alert('User Blacklisted');
  const handleActivate = () => alert('User Activated');
  const handleViewDetails = () => router.push(`/user/${userId}`);

  return (
    <div className={styles.options}>
      <button onClick={handleViewDetails}>View Details</button>
      <button onClick={handleBlacklist}>Blacklist User</button>
      <button onClick={handleActivate}>Activate User</button>
    </div>
  );
};

export default TableOptions;
