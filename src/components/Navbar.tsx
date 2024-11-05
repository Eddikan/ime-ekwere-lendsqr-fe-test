"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import styles from "@/styles/Navbar.module.scss";
import NavBarSearch from "@/components/NavBarSearch";
type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const email = useAppSelector((state) => state.user.email);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = (): void => {
    window.location.href = "/login"; // or use a router if you'd like
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link className={styles.logo} href="/">
          <Image
            src="/lendsqr.svg"
            alt="welcome Banner"
            priority
            width={144}
            height={30}
          />
        </Link>
      <NavBarSearch />

      </div>

      <div className={styles.rightSection}>
        <Link href="/docs" className={styles.docs}>
          Docs
        </Link>
        <Image className={styles.bell} src="/bell.png" alt="bell" priority width={26} height={26} />
        <div
          className={styles.profile}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className={styles.profileAvi}>{email?.charAt(0)}</div>
          <span className={styles.name}>{email}</span>
          <Image
            src="/dropdown2.svg"
            alt="bell"
            priority
            width={7}
            height={4}
          />
          {dropdownOpen && (
            <div
              className={styles.dropdownOverlay}
              onClick={() => setDropdownOpen(false)}
            ></div>
          )}
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
