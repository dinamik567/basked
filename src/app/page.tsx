"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [quantity, setQuantity] = useState(1);

  function handleChangeInputQuantity(e: React.FormEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    if (value >= 1) {
      setQuantity(value);
    }
    return;
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Главная</h1>
      <form className={styles.form}>
        <label className={styles.label}>
          Сколько товаров добавить в корзину
        </label>
        <input
          className={styles.input}
          onChange={(e) => handleChangeInputQuantity(e)}
          value={quantity}
          type="number"
        />
        <input
          className={styles.submitButton}
          value="Создать корзину"
          type="submit"
        />
      </form>
    </main>
  );
}
