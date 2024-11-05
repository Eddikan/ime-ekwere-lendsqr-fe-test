import React from "react";
import styles from "@/styles/Pagination.module.scss";
import { UserType } from "@/interfaces/users";
import Image from "next/image";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  itemsPerPage: number;
  users: UserType[];
  handleItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  itemsPerPage,
  onPageChange,
  users,
  handleItemsPerPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 3; // Number of pages to show in the middle section

    for (let i = 1; i <= pageCount; i++) {
      // Display first, last, current, and nearby pages
      if (
        i === 1 ||
        i === pageCount ||
        (i >= currentPage - visiblePages && i <= currentPage + visiblePages)
      ) {
        pages.push(
          <div
            key={i}
            className={currentPage === i ? styles.active : styles.inActive}
            onClick={() => onPageChange(i)}
          >
            {i}
          </div>
        );
      } else if (
        i === currentPage - visiblePages - 1 ||
        i === currentPage + visiblePages + 1
      ) {
        // Add ellipsis for gaps
        pages.push(
          <span key={`ellipsis-${i}`} className={styles.ellipsis}>
            ...
          </span>
        );
      }
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationControls}>
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className={styles.itemsPerPageDropdown}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>out of {users.length}</span>
      </div>

      <div className={styles.pages}>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          className={styles.leftArrow}
          src="/dropdown3.svg"
          alt="arrow"
          width={14}
          height={14}
        />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
       <Image
          className={styles.rightArrow}
          src="/dropdown3.svg"
          alt="arrow"
          width={14}
          height={14}
        />
      </button>

      </div>
     
    </div>
  );
};

export default Pagination;
