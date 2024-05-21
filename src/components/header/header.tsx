"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { NavLink } from "../nav-link/nav-link";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink styleActive={styles.navItemActive} href="/">
              Главная
            </NavLink>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <NavLink href="#" styleActive={styles.navItemActive}>
              Каталог
            </NavLink>
            <div className={styles.dropdownContent}>
              <Link href="/catalog/food">Корма для животных</Link>
              <Link href="/catalog/care">Средства ухода</Link>
              <Link href="/catalog/toys">Игрушки для животных</Link>
              <Link href="/catalog/accessories">Аксессуары</Link>
            </div>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/orders" styleActive={styles.navItemActive}>
              Заказы
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/favorites" styleActive={styles.navItemActive}>
              Избраное
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/stocks" styleActive={styles.navItemActive}>
              Акции
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/contacts" styleActive={styles.navItemActive}>
              Контакты
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink href="/basket" styleActive={styles.navItemActive}>
              Корзина
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
