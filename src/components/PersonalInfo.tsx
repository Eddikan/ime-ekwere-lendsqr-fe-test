import React from "react";
import styles from "@/styles/PersonalInfo.module.scss";
import useCurrentUser from "@/utils/helpers/useCurrentUser";

const PersonalInfo: React.FC = () => {
  const { currentUser } = useCurrentUser();
  if (!currentUser) return <div>User not found</div>;

  return (
    <div className={styles.personalInfo}>
      <div className={styles.container}>
        <h2>Personal Information</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>Full Name</strong>
            <span>{currentUser.fullName}</span>
          </div>
          <div>
            <strong>Phone Number</strong>
            <span>{currentUser.phoneNumber}</span>
          </div>
          <div>
            <strong>Email Address</strong>
            <span>{currentUser.email}</span>
          </div>
          <div>
            <strong>BVN</strong>
            <span>{currentUser.bvn}</span>
          </div>
          <div>
            <strong>Gender</strong>
            <span>{currentUser.gender}</span>
          </div>
          <div>
            <strong>Marital Status</strong>
            <span>{currentUser.maritalStatus}</span>
          </div>
          <div>
            <strong>Children</strong>
            <span>{currentUser.children}</span>
          </div>
          <div>
            <strong>Type of Residence</strong>
            <span>{currentUser.typeOfResidence}</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Education and Employment</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>Level of Education</strong>
            <span>{currentUser.levelOfEducation}</span>
          </div>
          <div>
            <strong>Employment Status</strong>
            <span>{currentUser.employmentStatus}</span>
          </div>
          <div>
            <strong>Sector of Employment</strong>
            <span>{currentUser.sectorOfEmployment}</span>
          </div>
          <div>
            <strong>Duration of Employment</strong>
            <span>{currentUser.durationOfEmployment}</span>
          </div>
          <div>
            <strong>Office Email</strong>
            <span>{currentUser.email}</span>
          </div>
          <div>
            <strong>Monthly Income</strong>
            <span>{currentUser.monthlyIncome}</span>
          </div>
          <div>
            <strong>Loan Repayment</strong>
            <span>{currentUser.loanRepayment}</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Socials</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>Twitter</strong>
            <span>{currentUser.socials.twitter}</span>
          </div>
          <div>
            <strong>Facebook</strong>
            <span>{currentUser.socials.facebook}</span>
          </div>
          <div>
            <strong>Instagram</strong>
            <span>{currentUser.socials.instagram}</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Guarantor</h2>
        <div className={styles.infoGrid}>
          <div>
            <strong>Full Name</strong>
            <span>{currentUser.guarantor.fullName}</span>
          </div>
          <div>
            <strong>Phone Number</strong>
            <span>{currentUser.guarantor.phoneNumber}</span>
          </div>
          <div>
            <strong>Email Address</strong>
            <span>{currentUser.guarantor.email}</span>
          </div>
          <div>
            <strong>Relationship</strong>
            <span>{currentUser.guarantor.relationship}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
