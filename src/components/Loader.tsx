// components/Loader.tsx
import React from 'react';
import styles from '@/styles/Loader.module.scss'; // Assuming you will create this SCSS file

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
