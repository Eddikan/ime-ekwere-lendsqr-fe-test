import React from "react";
import styles from "@/styles/PersonalInfo.module.scss";

const PersonalInfo: React.FC = () => {
  return (
    <div className={styles.personalInfo}>
      <div className={styles.container}>
        <h2>Personal Information</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>Full Name</strong>
            <span>Grace Effiom</span>
          </div>
          <div>
            <strong>Phone Number</strong>
            <span>07060780922</span>
          </div>
          <div>
            <strong>Email Address</strong>
            <span>grace@gmail.com</span>
          </div>
          <div>
            <strong>BVN</strong>
            <span>07060780922</span>
          </div>
          <div>
            <strong>Gender</strong>
            <span>Female</span>
          </div>
          <div>
            <strong>Marital Status</strong>
            <span>Single</span>
          </div>
          <div>
            <strong>Children</strong>
            <span>None</span>
          </div>
          <div>
            <strong>Type of residence</strong>
            <span>Parent’s Apartment</span>
          </div>
          {/* Add other personal info fields here */}
        </div>
      </div>
      <div className={styles.container}>
        <h2>Education and Employment</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>level of education</strong>
            <span>B.Sc</span>
          </div>
          <div>
            <strong>employment status</strong>
            <span>Employed</span>
          </div>
          <div>
            <strong>sector of employment</strong>
            <span>FinTech</span>
          </div>
          <div>
            <strong>Duration of employment</strong>
            <span>2 years</span>
          </div>
          <div>
            <strong>office email</strong>
            <span>grace@lendsqr.com</span>
          </div>
          <div>
            <strong>Monthly income</strong>
            <span>₦200,000.00- ₦400,000.00</span>
          </div>
          <div>
            <strong>loan repayment</strong>
            <span>40,000</span>
          </div>
          {/* Add other personal info fields here */}
        </div>
      </div>
      <div className={styles.container}>
        <h2>Socials</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>Twitter</strong>
            <span>@grace_effiom</span>
          </div>
          <div>
            <strong>Facebook</strong>
            <span>Grace Effiom</span>
          </div>
          <div>
            <strong>Instagram</strong>
            <span>@grace_effiom</span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Guarantor</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>full Name</strong>
            <span>Debby Ogana</span>
          </div>
          <div>
            <strong>Phone Number</strong>
            <span>07060780922</span>
          </div>
          <div>
            <strong>Email Address</strong>
            <span>debby@gmail.com</span>
          </div>
          <div>
            <strong>Relationship</strong>
            <span>Sister</span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2></h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>full Name</strong>
            <span>Debby Ogana</span>
          </div>
          <div>
            <strong>Phone Number</strong>
            <span>07060780922</span>
          </div>
          <div>
            <strong>Email Address</strong>
            <span>debby@gmail.com</span>
          </div>
          <div>
            <strong>Relationship</strong>
            <span>Sister</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
