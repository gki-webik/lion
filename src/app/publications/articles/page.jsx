"use client";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      name: "Махов А.Е. Последний труд А. Н. Веселовского // Веселовский А.Н. В.А. Жуковский. Поэзия чувства и «сердечного воображения» / Научная редакция, предисловие, переводы: А. Е. Махов. М.; СПб.: Центр гуманитарных инициатив, 2016. C. 5-12.",
      file: "Posledniy_trud_Veselovskogo.pdf",
    },
    {
      name: "Махов А. Е. Из истории понятия «мотив»: Веселовский versus Шерер // Наследие Александра Веселовского в мировом контексте. Исследования и материалы / Отв. редактор Т. В. Говенько. М. – СПб.: Центр гуманитарных инициатив, 2016. С. 83-99.",
      file: "Iz_istorii_ponyatia_motiv.pdf",
    },
  ];
  return (
    <div className="max_container">
      <main>
        <nav className="kroshki">
          <Link href="/">Главная</Link>
          <Link href="#" className="no_link">
            Публикации
          </Link>
          <Link href="#" className="no_link">
            Статьи
          </Link>
        </nav>
        <section>
          <div className="items">
            {items.map((e, index) => (
              <div key={index} className="item">
                {index + 1}. {e.name} |{" "}
                <Link
                  href={"/pdf/publications/articles/" + e.file}
                  target="_blank"
                >
                  Скачать
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
