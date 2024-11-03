import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Sidebar.module.scss";
import menuItems from "@/menuConfig/menu";
type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <main className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.switchOrg}>
        <Image src="/switchOrgIcon.svg" alt="switch" width={16} height={16} />
        <span onClick={() => setDropdownOpen((prev) => !prev)}>
          Switch Organization
        </span>
        <Image
          onClick={() => setDropdownOpen((prev) => !prev)}
          src="/dropdown.svg"
          alt="dropdown"
          width={14}
          height={14}
        />
        {isDropdownOpen && (
          <div
            onClick={() => setDropdownOpen(false)}
            className={styles.dropdownBackdrop}
          ></div>
        )}
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <div onClick={() => setDropdownOpen(false)}>Organization 1</div>
          </div>
        )}
      </div>

      <Link className={styles.linkDashboard} href="/dashboard" passHref>
        <Image src="/dashboard.svg" alt="switch" width={16} height={16} />
        Dashboard
      </Link>
      <nav className={styles.menu}>
        {menuItems.map((menu, index) => (
          <div key={index}>
            <div>{menu.section}</div>
            {menu.routes.map((item) => (
              <Link
                className={styles.link}
                key={item.name}
                href={item.route}
                passHref
              >
                <Image src={item.icon} alt="switch" width={16} height={16} />

                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </main>
  );
};

export default Sidebar;
