import Link from "next/link";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">Каталог</Link>
            <div className={styles.dropdownContent}>
              <Link href="/catalog/food">Корма для животных</Link>
              <Link href="/catalog/care">Средства ухода</Link>
              <Link href="/catalog/toys">Игрушки для животных</Link>
              <Link href="/catalog/accessories">Аксессуары</Link>
            </div>
          </li>
          <li className={styles.navItem}>
            <Link href="/orders">Заказы</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/favorites">Избраное</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/stocks">Акции</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contacts">Контакты</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/basket">Корзина</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
