import React from 'react';
import styles from '@/styles/GeneralDetails.module.scss'

const GeneralDetails: React.FC = () => {
  return (
    <div className={styles.generalDetails}>
      <div className={styles.profile}>
        {/* Profile image and user info */}
        <div className={styles.profileImage}>
          {/* Placeholder for profile image */}
          <span className={styles.imagePlaceholder}>👤</span>
        </div>
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>Grace Effiom</h3>
          <p className={styles.userId}>LSQFf587g90</p>
          <p className={styles.userTier}>Users Tier: ⭐⭐⭐</p>
        </div>
      </div>

      <div className={styles.accountInfo}>
        {/* Balance and bank details */}
        <p className={styles.balance}>₦200,000.00</p>
        <p className={styles.accountDetails}>
          9912345678 / Providus Bank
        </p>
      </div>
    </div>
  );
};

export default GeneralDetails;
