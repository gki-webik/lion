import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max_container">
      <main>
        <nav className="kroshki">
          <Link href="/">Главная</Link>
          <Link href="#" className="no_link">
            Гостевая страница
          </Link>
        </nav>
        <h1>Гостевая страница</h1>
        <section>
          <form action="">
            <div className="line">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Тема" />
            </div>
            <textarea name="" id="" placeholder="Сообщение"></textarea>
            <button type="submit">Отправить</button>
          </form>
        </section>
      </main>
    </div>
  );
}
