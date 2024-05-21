import styles from "./styles.module.css";
import { ProductCardI, HeaderSiteI, InfoProductCardI } from "@/types/types";
import { useState } from "react";
import {
  useDeacriseQuantityCardProductMutation,
  useDeleteShoppingCardProductMutation,
  useIncreaseQuantityCardProductMutation,
  useChangeQuantityCardProductMutation,
} from "@/lib/services/shopping-basked";
import Image from "next/image";

interface ProductCardProps extends ProductCardI {
  HeaderSite: HeaderSiteI;
}

export function ProductCard({
  Name,
  Description,
  Quantity,
  Unit,
  Сurrency,
  Price,
  DiscountedPrice,
  Images,
  Id,
  HeaderSite,
}: ProductCardProps) {
  const [increaseQuantityCardProduc] = useIncreaseQuantityCardProductMutation();
  const [deacriseQuantityCardProduct] =
    useDeacriseQuantityCardProductMutation();
  const [deleteShoppingCardProduct] = useDeleteShoppingCardProductMutation();
  const [changeQuantityCardProduct] = useChangeQuantityCardProductMutation();

  const infoProductCard: InfoProductCardI = {
    ProductId: Id,
    UserGuid: HeaderSite.UsedGuid,
  };

  function handleClickIncreaseProduct() {
    increaseQuantityCardProduc(infoProductCard);
  }

  function handleClickDecreaseProduct() {
    if (Quantity > 1) {
      deacriseQuantityCardProduct(infoProductCard);
    }
  }

  function handleClickDeleteProduct() {
    deleteShoppingCardProduct(infoProductCard);
  }

  function handleChangeInputQuantity(e: React.FormEvent<HTMLInputElement>) {
    const quantity = Number(e.currentTarget.value);

    //TODO
    // Какая то ошибка при вводе любого value значение уменьшается
    // console.log({ ...infoProductCard, Value: quantity });

    // changeQuantityCardProduct({

    // });
  }
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* пришлось использовать обычный img */}
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
      <div className={styles.controlPanel}>
        <div className={styles.controlPanelWrap}>
          <button
            className={styles.increaseButton}
            onClick={handleClickIncreaseProduct}
          >
            +
          </button>
          <input
            className={styles.quantity}
            onChange={(e) => handleChangeInputQuantity(e)}
            value={Quantity}
            type="number "
          />
          <button
            className={styles.decreaseButton}
            onClick={handleClickDecreaseProduct}
          >
            -
          </button>
        </div>
        <button
          className={styles.deleteButton}
          onClick={handleClickDeleteProduct}
        >
          Удалить товар
        </button>
      </div>
    </div>
  );
}
