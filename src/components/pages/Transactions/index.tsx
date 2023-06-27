import React from "react";
import { TransactionsProps } from "../interfaces";
import { Order } from "@/components/entity";
import { Card, CardTransaction } from "@/components/molecules";
import useFetch from "@/hooks/useFetch";
import styles from "./styles.module.scss";
const Transactions: React.FC<TransactionsProps> = () => {
  const { data, loading, error, errorMessage } = useFetch<Order[]>(
    `${process.env.REACT_APP_URL}/api/order`
  );
  return (
    <div className={styles.container}>
      <h3 className={styles.page__title}>Transaction History</h3>
      {data ? data.map((item) => <CardTransaction item={item} />) : null}
    </div>
  );
};

export default Transactions;
