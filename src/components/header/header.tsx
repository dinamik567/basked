import Link from "next/link";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <li>
            <Link href="#">Каталог</Link>
            {/* <select>
              <option>Корма для животных</option>
              <option>Средства ухода</option>
              <option>Игрушки для животных</option>
              <option>Аксессуары</option>
            </select> */}
          </li>
          <li>
            <Link href="/orders">Заказы</Link>
          </li>
          <li>
            <Link href="/favorites">Избраное</Link>
          </li>
          <li>
            <Link href="/stocks">Акции</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
          <li>
            <Link href="/basket">Корзина</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
