"use client";
import { useGetShoppingCardProductsQuery } from "@/lib/services/shopping-basked";
import { useEffect } from "react";

export default function Basket() {
  // const { data, error, isLoading } = useGetShoppingCardProductsQuery();
  // console.log(data);
  // const listId = data?.map((item) => <div key={item.Id}>{item.Id}</div>);

  // useEffect(() => {}, [isLoading]);

  return (
    <div>
      <h2>Корзина</h2>
      {/* {!isLoading && <div>{listId}</div>} */}
    </div>
  );
}
