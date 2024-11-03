"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import styles from '@/styles/UserLayout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

// Use `export default function` instead of `const UserLayout: React.FC<LayoutProps>`
export default function UserLayout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <main className={`${styles.main} ${sidebarOpen ? styles.shifted : ""}`}>
        {children}
      </main>
    </div>
  );
}
