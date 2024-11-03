"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = (): void => {
    window.location.href = "/login"; // or use a router if you'd like
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
   
        <Link className={styles.logo} href="/">
          lendsqr
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search for anything"
        className={styles.search}
      />

      <div className={styles.rightSection}>
        <Link href="/docs">Docs</Link>
        <button className={styles.notificationIcon}>🔔</button>
        <div
          className={styles.profile}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>name</span>
          {dropdownOpen && (
            <div className={styles.dropdown}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
      <button onClick={toggleSidebar} className={styles.hamburger}>
          ☰
        </button>
    </header>
  );
};

export default Navbar;
