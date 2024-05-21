import styles from "./styles.module.css";
import { useEffect } from "react";
import { useGetShoppingCardProductsQuery } from "@/lib/services/shopping-basked";
import { ProductCard } from "../product-card/product-card";

export function ProductList() {
  const { data, error, isLoading } = useGetShoppingCardProductsQuery();

  useEffect(() => {}, [isLoading, data]);

  console.log(data?.[0].Сurrency);
  return (
    <section className={styles.productListCard}>
      {!isLoading &&
        data?.map((item) => {
          return (
            <ProductCard
              key={item.Id}
              Id={item.Id}
              Name={item.Name}
              Description={item.Description}
              Quantity={item.Quantity}
              Unit={item.Unit}
              Сurrency={item.Сurrency}
              Price={item.Price}
              DiscountedPrice={item.DiscountedPrice}
              Images={item.Images}
            />
          );
        })}
    </section>
  );
}
