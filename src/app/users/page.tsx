// src/app/user/page.tsx
"use client";
import React from "react";
import Cards from "@/components/Cards";
import UsersTable from "@/components/UsersTable";
import styles from "@/styles/Users.module.scss";

const UserPage = () => {
  return (
    <div className={styles.page}>
     <h1 className={styles.users}>Users</h1>
      <Cards />
      <UsersTable />
    </div>
  );
};

export default UserPage;
