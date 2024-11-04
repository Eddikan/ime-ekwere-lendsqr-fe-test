// SearchComponent.tsx
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/Navbar.module.scss";

type Item = string;

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<Item[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const items: Item[] = [
    "Personal Loan",
    "Home Loan",
    "Auto Loan",
    "Student Loan",
    "Loan Status: Approved",
    "Loan Status: Pending",
    "Loan Status: Rejected",
    "Interest Rate: 5%",
    "Interest Rate: 10%",
    "Repayment Term: 12 months",
    "Repayment Term: 24 months",
    "Repayment Term: 36 months",
    "Fixed Interest Rate",
    "Variable Interest Rate",
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.search} ref={wrapperRef}>
      <input
        type="text"
        placeholder="Search for anything"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => searchTerm && setShowPopup(true)}
      />
      <div className={styles.searchIcon}>
        <Image
          src="/searchIcon.svg"
          alt="search"
          priority
          width={14}
          height={14}
        />
      </div>

      {/* Popup with filtered results positioned absolutely */}
      {showPopup && (
        <div className={styles.popup}>
          {filteredResults.length > 0 ? (
            filteredResults.map((result, index) => (
              <div key={index} className={styles.resultItem}>
                {result}
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
