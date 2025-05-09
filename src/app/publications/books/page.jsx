"use client";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max_container">
      <main>
        <nav className="kroshki">
          <Link href="/">Главная</Link>
          <Link href="#" className="no_link">
            Публикации
          </Link>
          <Link href="#" className="no_link">
            Книги
          </Link>
        </nav>
        <section>
          <div className="items">
            <div className="item">
              <img
                src="/images/publications/books/развернуть старика.jpg"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="/images/publications/books/ранний романтизм в поисках музыки.jpg"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="/images/publications/books/реальность романтизма.jpg"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="/images/publications/books/сатиры кантемира.jpg"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="/images/publications/books/сикретические религии.jpg"
                alt=""
              />
            </div>
            <div className="item">
              <img src="/images/publications/books/событие.jpg" alt="" />
            </div>
            <div className="item">
              <img
                src="/images/publications/books/современное зарубежное литературоведение.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
