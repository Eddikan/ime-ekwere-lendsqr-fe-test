import React, { useState } from 'react';
import styles from '@/styles/FilterPopup.module.scss';

interface FilterData {
  username: string;
  email: string;
  date: string;
}

interface FilterPopupProps {
  onFilter: (filterData: FilterData) => void;
  onReset: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onFilter, onReset }) => {
  const [filterData, setFilterData] = useState<FilterData>({
    username: '',
    email: '',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleFilter = () => {
    onFilter(filterData);
  };

  const handleReset = () => {
    setFilterData({ username: '', email: '', date: '' });
    onReset();
  };

  return (
    <div className={styles.popup}>
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
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default FilterPopup;
