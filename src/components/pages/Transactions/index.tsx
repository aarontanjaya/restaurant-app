import React from "react";
import { TransactionsProps } from "../interfaces";
import { Order } from "@/components/entity";
import { Card, CardTransaction } from "@/components/molecules";
import useFetch from "@/hooks/useFetch";
const Transactions: React.FC<TransactionsProps> = () => {
  const { data, loading, error, errorMessage } = useFetch<Order[]>(
    `${process.env.REACT_APP_URL}/api/order`
  );
  return (
    <div>
      {data ? data.map((item) => <CardTransaction item={item} />) : null}
    </div>
  );
};

export default Transactions;
