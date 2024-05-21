import styles from "./styles.module.css";
import { ProductCardI } from "@/types/types";
import Image from "next/image";

interface ProductCardProps extends ProductCardI {}

export function ProductCard({
  Name,
  Description,
  Quantity,
  Unit,
  Сurrency,
  Price,
  DiscountedPrice,
  Images,
}: ProductCardI) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          width={200}
          height={200}
          src={`https://via.placeholder.com/300x300?text=${Name}`}
          alt={Name}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{Name}</h3>
        <p className={styles.description}>{Description}</p>
        <p className={styles.quantity}>
          {Quantity} {Unit}
        </p>
        <p className={styles.price}>
          {DiscountedPrice > 0 ? (
            <>
              <span className={styles.discountedPrice}>
                {DiscountedPrice} {Сurrency}
              </span>
              <span className={styles.originalPrice}>
                {Price} {Сurrency}
              </span>
            </>
          ) : (
            <span>
              {Price} {Сurrency}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
