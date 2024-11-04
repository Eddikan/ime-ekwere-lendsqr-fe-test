import React from "react";
import styles from "@/styles/Cards.module.scss";
import Image from "next/image";

interface CardProps {
  title: string;
  count: number;
  icon: string;
}

const cardsData: CardProps[] = [
  { icon: "/users/users.svg", title: "Users", count: 2453 },
  { icon: "/users/activeUsers.svg", title: "Active Users", count: 2453 },
  { icon: "/users/usersLoan.svg", title: "Users with Loans", count: 12453 },
  { icon: "/users/usersSavings.svg", title: "Users with Savings", count: 102453 },
];

const Cards: React.FC = () => {
  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card, idx) => (
        <div className={styles.card} key={idx}>
          <Image src={card.icon} alt="switch" width={40} height={40} />

          <h3>{card.title}</h3>
          <p>{card.count.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
