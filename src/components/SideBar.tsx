import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Sidebar.module.scss";
import menuItems from "@/menuConfig/menu";
import { usePathname } from 'next/navigation';
type SidebarProps = {
  isOpen: boolean;
};

// side bar component here 
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
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
            <h6>{menu.section}</h6>
            {menu.routes.map((item) => (
                <Link
                key={item.name}
                href={item.route}
                passHref
                className={`${styles.link} ${pathname === item.route ? styles.active : ''}`}
              >
                <Image src={item.icon} alt={item.name} width={16} height={16} />
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
