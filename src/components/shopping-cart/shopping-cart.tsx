"use client";
import styles from "./styles.module.css";
import { useClearShoppingBasketMutation } from "@/lib/services/shopping-basked";
export function ShoppingCart() {
  const [clearShoppingBasket] = useClearShoppingBasketMutation();
  function handleClickClearButton() {
    clearShoppingBasket();
  }
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.total}>Общая стоимость: {1000}₽</div>
      <div className={styles.actions}>
        <button className={styles.orderButton}>Оформить заказ</button>
        <button className={styles.clearButton} onClick={handleClickClearButton}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
}
