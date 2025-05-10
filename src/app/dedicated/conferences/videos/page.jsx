"use client";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      name: "Аналогия как инструмент литературных теорий.",
      link: "https://www.youtube.com/watch?v=kLIXTO5y6VE",
    },
    {
      name: "«Змея скакала». Иконографический фон визуального мотива",
      link: "https://www.youtube.com/watch?v=vrR4eMS_z3g",
    },
  ];
  return (
    <div className="max_container">
      <main>
        <nav className="kroshki">
          <Link href="/">Главная</Link>
          <Link href="#" className="no_link">
            Льву посвящается
          </Link>
          <Link href="#" className="no_link">
            Видео докладов
          </Link>
        </nav>
        <section>
          <h1>Видео докладов</h1>
          <div className="items">
            {items.map((e, index) => (
              <div key={index} className="item">
                {index + 1}. {e.name} |{" "}
                <Link href={e.link} target="_blank">
                  Посмотреть
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
