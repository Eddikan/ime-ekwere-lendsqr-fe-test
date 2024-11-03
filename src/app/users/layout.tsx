"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import styles from '@/styles/UserLayout.module.scss';
type LayoutProps = {
  children: ReactNode;
  name: string; // Add name prop for Navbar
};

const UserLayout: React.FC<LayoutProps> = ({ children, name }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} name={name} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`${styles.main} ${sidebarOpen ? styles.shifted : ""}`}>{children}</main>
    </div>
  );
};

export default UserLayout;
