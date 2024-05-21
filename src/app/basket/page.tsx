"use client";
import styles from "./styles.module.css";
import { ShoppingCart } from "@/components/shopping-cart/shopping-cart";
import { ProductList } from "@/components/product-list/product-list";

export default function Basket() {
  return (
    <div className={styles.wrapper}>
      <ProductList />
      <ShoppingCart />
    </div>
  );
}
