"use client";
import "./page.scss";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              &times;
            </button>
            <h2>Почему А.Е. Махова называют Львом?</h2>
            <div className="modal-text">
              <blockquote>
                <i>«А льва львом просто называю»</i> (А.Д. Кантемир)
              </blockquote>
              <p>
                Эта цитата из IVй сатиры Кантемира как нельзя лучше подходит для
                заглавия моей короткой вступительной заметки.
              </p>
              <p>
                Почему я (да и не только я) повсеместно называю А.Е. Махова
                Львом?
              </p>
              <p>
                Первый ответ – самый очевидный: по рождению 19 августа под
                центральным солнечным знаком.
              </p>
              <p>
                А ещё – по врождённой яркости, царственности, щедрости и
                благородству. Все эти определения можно с лёгкостью заменить
                одним – солнечность. Лев – это Солнце. Лев многогранен и
                многоталантлив. «Любимец Феба» – это про Льва. Аполлон наградил
                его даром говорить и писать так, что доклады и научные труды
                превращались в произведения искусства – по глубине мысли,
                парадоксальности поворота, ясности и красоте слога.
              </p>
              <p>
                Лев – горд. Он не любил ни у кого ничего просить (фразу Воланда
                ощущал как свою), а вот отдавал, делился легко. Редкий случай
                100-процентного донора. Причём донорства не вымученного, не
                жертвенного – а естественного, органичного. Ему просто было в
                радость дарить, отдавать. Он всё делал со страстью, взахлёб –
                его Солнце освещало всё, чем он занимался: учиться – так
                учиться; работать – так работать («Когда Вы всё успеваете?» –
                такой вопрос он слышал постоянно); отдыхать – так отдыхать. Один
                из его талантов – легко обращать новое, непонятное, вроде бы
                чужое, в своё, близкое: новые науки, новые страны, новые города,
                новые языки. Путешествия Лев считал лучшим образованием. В любой
                стране, в любом городе сразу оказывался своим. Умел составить
                уникальный маршрут, сразу дающий представление о лица необщем
                выражении любого города; часами мог водить по совершенно
                безлюдным улочкам летней изнемогающей от толп туристов Венеции.
                Но больше всего любил маленькие, мало кому известные городки,
                вроде Чивидале-дель-Фриули или Сан-Вито-аль-Тальяменто. Из
                путешествий всегда привозил редкие снимки, которые органично
                встраивались в оригинальные концепции и восхищали слушателей и
                читателей. Любил всё редкое, уникальное, единичное. И умел
                увидеть новое в общеизвестном. Любая тема, которой Лев касался,
                начинала сверкать новыми гранями. Очень любил метафору живой и
                мёртвой воды в разговорах о поэтике. И сам так щедро этой живой
                водой делился – что его запасы казались неиссякаемыми. Любил
                праздновать, пировать – и не только духовно. Часто повторял
                Кантемировскую строчку: «Вино – дар божественный, много в нем
                провору». Не мог не быть в центре любой компании – просто
                потому, что центр сам собой перемещался, следовал за ним, как
                гелиотроп за солнцем в его любимой эмблеме. «Овцы стадятся. Лев
                ходит один», – сказал Ф. Глинка о Пушкине. Лев не умел ходить
                общими путями в толпе. Но толпа всегда устремлялась за ним. А
                Лев – снова сворачивал на ему одному видимую тропку. И она
                освещалась его солнцем.
              </p>
              <p>
                Самые частые слова в моей заметке – «любил» и «умел». А было ли
                такое – чего он не любил и не умел? Было. Не любил скуки и
                однообразия и не умел делать плохо.
              </p>
              <p>
                А ещё львиная сигнатура – в огромном количестве львиных примеров
                в статьях и книжках. Первый зверь, с которого начинался рассказ
                о свойствах зверей в системе европейского бестиария, – как
                правило, лев.{" "}
              </p>
              <p>
                И самые сложные вещи Льву было легко и комфортно объяснять с
                помощью своего бестиарного двойника – как на приведённой
                иллюстрации.
              </p>
              <p>И сам себя он называл Львом.</p>
              <p>Поэтому – просто Лев. Просто – Царь.</p>
              <hr />
              <p>
                <small>
                  <sup>1</sup> Могло ли это солнце спалить? Можно ли было
                  безнаказанно смотреть на это солнце? И был ли у кого-то шанс
                  быть замеченным рядом с ним? Все эти вопросы, лишь
                  подтверждающие солнечную сложность и многоаспектность, хорошо
                  известны – в том числе и эмблематике. Но сегодня речь только о
                  качествах высокого Льва – А.Е. Махов именно такой.
                </small>
              </p>
              <p>
                <small>
                  <sup>2</sup> Неуместность прошедшего времени в отношении Льва
                  не перестаёт резать глаз.
                </small>
              </p>
            </div>
          </div>
        </div>
      )}
      <section className="main">
        <img src="/images/main/p1.png" alt="Александр Махов" />{" "}
        <div className="text">
          <h1>А Льва львом просто называю</h1>
          <p>
            Дорогие друзья, добро пожаловать на львиный сайт – сайт{" "}
            <Link href="/biography">
              <strong>Александра Евгеньевича Махова</strong>
            </Link>
            , выдающегося российского филолога, энциклопедически образованного
            учёного, сумевшего сказать новое слово во многих областях
            гуманитарного знания: истории европейской и русской поэтики,
            эмблематике, медиевистике, средневековой христианской демонологии,
            поэтике и эстетике западноевропейского и русского романтизма,
            истории русской литературы золотого века, семиотике бестиарных кодов
            культуры.
          </p>
          <p>
            Сердечная благодарность{" "}
            <a href="#">
              <strong>Кириллу Гуляеву</strong>
            </a>{" "}
            и{" "}
            <a href="#">
              <strong>Дарье Бурлаковой</strong>
            </a>
            . Без них этого сайта просто не было бы.
          </p>

          <p>
            <Link href="#" role="button" onClick={toggleModal}>
              <strong>А почему я называю А.Е. Махова Львом?</strong>
            </Link>
          </p>
          <div className="buttons">
            <Link href="/publications/books" className="is-1">
              Публикации
            </Link>
            <Link href="/news" className="is-2">
              Новости
            </Link>
          </div>
        </div>
      </section>
      <section className="about-lion">
        <div className="line">
          <h2>О Льве</h2>
          <blockquote>
            <i> «А льва львом просто называю»</i>
            <br />
            <span>(А.Д. Кантемир)</span>
          </blockquote>
        </div>
        <article>
          <img src="/images/main/p2.png" alt="Портрет А.Е. Махова" />
          <div className="content">
            <div className="text">
              <p>
                Эта цитата из IVй сатиры Кантемира как нельзя лучше подходит для
                заглавия моей короткой вступительной заметки. Почему я (да и не
                только я) повсеместно называю А.Е. Махова Львом? Первый ответ –
                самый очевидный: по рождению 19 августа под центральным
                солнечным знаком.
              </p>
              <p>
                А ещё – по врождённой яркости, царственности, щедрости и
                благородству! Все эти определения можно с лёгкостью заменить
                одним – солнечность. Лев – это Солнце. Лев многогранен и
                многоталантлив. «Любимец Феба» – это про Льва. Аполлон наградил
                его даром говорить и писать так, что доклады и научные труды
                превращались в произведения искусства – по глубине мысли,
                парадоксальности поворота, ясности и красоте слога. Лев – горд.
                Он не любил ни у кого ничего просить (фразу Воланда ощущал как
                свою), а вот отдавал, делился легко. Редкий случай
                100-процентного донора.
              </p>
              <p>
                Причём донорства не вымученного, не жертвенного – а
                естественного, органичного. Ему просто было в радость дарить,
                отдавать. Он всё делал со страстью, взахлёб – его Солнце
                освещало всё, чем он занимался: учиться – так учиться; работать
                – так работать («Когда Вы всё успеваете?» – такой вопрос он
                слышал постоянно); отдыхать – так отдыхать. Один из его талантов
                – легко обращать новое, непонятное, вроде бы чужое, в своё,
                близкое: новые науки, новые страны, новые города, новые языки.
                Путешествия Лев считал лучшим образованием. В любой стране, в
                любом городе сразу оказывался своим. Умел составить
              </p>
              <div className="mask"></div>
            </div>
            <Link href="#" role="button" onClick={toggleModal}>
              Прочитать подробнее
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
