import styles from "./styles.module.css";
import {
  useGetShoppingCardProductsQuery,
  useGetHeaderSiteQuery,
} from "@/lib/services/shopping-basked";
import { ProductCard } from "../product-card/product-card";

export function ProductList() {
  const { data, isLoading } = useGetShoppingCardProductsQuery();

  const { data: dataHeader, isLoading: headerIsLoading } =
    useGetHeaderSiteQuery();

  return (
    <section className={styles.productListCard}>
      {!isLoading &&
        !headerIsLoading &&
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
              HeaderSite={dataHeader}
            />
          );
        })}
    </section>
  );
}
