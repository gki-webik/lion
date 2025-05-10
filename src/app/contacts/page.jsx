import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max_container">
      <main>
        <nav className="kroshki">
          <Link href="/">Главная</Link>
          <Link href="#" className="no_link">
            Контакты
          </Link>
        </nav>
        <h1>Контакты</h1>
        <section>
          <div>
            <h2>E-mail</h2>
            <Link href="mailto:example@wpostline.ru">example@wpostline.ru</Link>
          </div>
          <div>
            <h2>Номер телефона</h2>
            <Link href="tel:+79835554433">+7 983 555 44 33</Link>
          </div>
          <div>
            <h2>Адрес</h2>
            <address>Москва, Москва, Москва, Москва</address>
          </div>
        </section>
      </main>
    </div>
  );
}
