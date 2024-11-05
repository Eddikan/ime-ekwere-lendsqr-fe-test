// src/app/user/page.tsx
"use client";
import React from "react";
import Cards from "@/components/Cards";
import UsersTable from "@/components/UsersTable";
import styles from "@/styles/Users.module.scss";

const UserPage = () => {
  return (
    <div className={styles.page}>
      <p className={styles.users}>Users</p>
      <Cards />
      <UsersTable />
    </div>
  );
};

export default UserPage;
