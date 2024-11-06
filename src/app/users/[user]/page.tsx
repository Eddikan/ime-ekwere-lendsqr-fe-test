"use client";
import React, {  useState } from "react";
import PersonalInfo from "@/components/PersonalInfo";
import styles from "@/styles/UserDetailsPage.module.scss";
import Image from "next/image";
import useCurrentUser from "@/utils/helpers/useCurrentUser"
import { useRouter } from "next/navigation";
const UserDetailsPage: React.FC = () => {
  const router = useRouter();
  const {currentUser} = useCurrentUser()

  const [activeTab, setActiveTab] = useState("general");
  const handleBackClick = () => {
    router.back();
  };
  if (!currentUser) return <div>User not found</div>;
  return (
    <div className={styles.userDetailsPage}>
      <header className={styles.header}>
        <div onClick={handleBackClick} className={styles.backLink}>
          <Image
            src="/user/backIcon.svg"
            alt="welcome Banner"
            priority
            width={30}
            height={36}
          />{" "}
          Back to Users
        </div>
      </header>

      <div className={styles.userDetails}>
        <p>User Details</p>
        <div className={styles.actions}>
          <button className={styles.blacklistButton}>Blacklist User</button>
          <button className={styles.activateButton}>Activate User</button>
        </div>
      </div>

      <section className={styles.generalSection}>
        <div className={styles.generalInfo}>
          <div className={styles.userInfo}>
            <Image
              src="/user/profilePic.svg"
              alt="profilePic"
              priority
              width={100}
              height={106}
            />{" "}
            <div>
              <h2 className={styles.name}>{currentUser && currentUser.username}</h2>
              <p className={styles.userID}>{currentUser.id}</p>
            </div>
            <div className={styles.tier}>
              <p>User’s Tier</p>
              <div className={styles.stars}>
                <Image
                  src="/user/fullStar.svg"
                  alt="fullStar"
                  priority
                  width={16}
                  height={16}
                />{" "}
                <Image
                  src="/user/emptyStar.svg"
                  alt="emptyStar"
                  priority
                  width={16}
                  height={16}
                />{" "}
                <Image
                  src="/user/emptyStar.svg"
                  alt="emptyStar"
                  priority
                  width={16}
                  height={16}
                />{" "}
              </div>
            </div>
            <div className={styles.balance}>
              <h3>{currentUser.bankDetails.balance}</h3>
              <p>{currentUser.bankDetails.accountNumber} / {currentUser.bankDetails.bank}</p>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <div
            className={activeTab === "general" ? styles.Activetab : styles.tab}
            onClick={() => {
              setActiveTab("general");
            }}
          >
            General Details
          </div>
          <div
            className={
              activeTab === "Documents" ? styles.Activetab : styles.tab
            }
            onClick={() => {
              setActiveTab("Documents");
            }}
          >
            Documents
          </div>
          <div
            className={activeTab === "Bank" ? styles.Activetab : styles.tab}
            onClick={() => {
              setActiveTab("Bank");
            }}
          >
            Bank Details
          </div>
          <div
            className={activeTab === "Loans" ? styles.Activetab : styles.tab}
            onClick={() => {
              setActiveTab("Loans");
            }}
          >
            Loans
          </div>
          <div
            className={activeTab === "Savings" ? styles.Activetab : styles.tab}
            onClick={() => {
              setActiveTab("Savings");
            }}
          >
            Savings
          </div>
          <div
            className={activeTab === "App" ? styles.Activetab : styles.tab}
            onClick={() => {
              setActiveTab("App");
            }}
          >
            App and System
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <PersonalInfo />
      </section>
    </div>
  );
};

export default UserDetailsPage;
