"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";
import {
  useClearShoppingBasketMutation,
  useGetInfoShoppingBaskedQuery,
} from "@/lib/services/shopping-basked";
export function ShoppingCart() {
  const [clearShoppingBasket] = useClearShoppingBasketMutation();
  const { currentData, isLoading } = useGetInfoShoppingBaskedQuery();

  useEffect(() => {}, [currentData]);

  function handleClickClearButton() {
    clearShoppingBasket();
  }
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.total}>
        Общая стоимость: {!isLoading && currentData?.Total}₽ колличество:{" "}
        {!isLoading && currentData?.TotalProducts}шт
      </div>
      <div className={styles.actions}>
        <button className={styles.orderButton}>Оформить заказ</button>
        <button className={styles.clearButton} onClick={handleClickClearButton}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
}
