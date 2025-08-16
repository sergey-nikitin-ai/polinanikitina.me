import React from "react";

export default function Navigation(props) {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 py-5">
        <div className="col d-flex align-items-start">
          <img
            width="100px"
            height="100px"
            src="img/icon-01.svg"
            className="d-none d-md-block" // скрываем на мобильных
          />
          <div className="ps-4">
            <h3 className="fw-bold mb-3 fs-4">Образование</h3>
            <ul>
              <li>
                Закончила Российский государственный педагогический университет
                им. А. И. Герцена (Институт детства)
              </li>
              <li>
                Дополнительно проходила повышение квалификации в институте
                практической психологии «Иматон»:
                <ul>
                  <li>
                    Психологическое сопровождение ребёнка в критические периоды
                    развития
                  </li>
                  <li>Основы перинатальной психологии и психокоррекции</li>
                  <li>Практика сказочной песочной терапии</li>
                </ul>
              </li>
              <li>
                Дополнительно проходила повышение квалификации в центре
                психологического образования "Метафора":
                <ul>
                  <li>
                    Работа психолога с детьми. Первичный анамнез, организация
                    первой встречи, стратегия дальнейшей помощи
                  </li>
                  <li>
                    Детская сказкотерапия: помощь в кризисы и работа с
                    психосоматикой
                  </li>
                  <li>
                    Семейное консультирование: как помочь родителям договориться
                    с ребёнком?
                  </li>
                  <li>
                    Работа психолога с мотивацией подростка и родительскими
                    ожиданиями
                  </li>
                  <li>Непослушные дети</li>
                  <li>Детская агрессия</li>
                  <li>Детские истерики</li>
                  <li>Расстройство привязанности у детей</li>
                  <li>МАК в исцелении отношений с мамой</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <img
            width="100px"
            height="100px"
            src="img/icon-02.svg"
            className="d-none d-md-block"
          />
          <div className="ps-4">
            <h3 className="fw-bold mb-3 fs-4">Дипломы</h3>
            <ul>
              <li>
                Диплом с отличием Воспитатель детей дошкольного возраста 2008
                год
              </li>
              <li>
                Диплом с отличием Бакалавр педагогики (Специализация «Детская
                практическая психология») 2010 год
              </li>
              <li>
                Диплом с отличием Магистр Педагогики (Специализация
                «Методическое сопровождение в дошкольном образовании») 2012 год
              </li>
            </ul>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <img
            width="100px"
            height="100px"
            src="img/icon-03.svg"
            className="d-none d-md-block"
          />
          <div className="ps-4">
            <h3 className="fw-bold mb-3 fs-4">Опыт</h3>
            <ul>
              <li>
                С 2010 года ГБДОУ Центр развития ребёнка - детский сад № 64
                Калининского р-на Санкт-Петербурга
              </li>
              <li>Частный Детский Досуговый Центр</li>
              <li>Частная практика (Консультирование родителей)</li>
            </ul>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <img
            width="100px"
            height="100px"
            src="img/icon-04.svg"
            className="d-none d-md-block"
          />
          <div className="ps-4">
            <h3 className="fw-bold mb-3 fs-4">
              Автор подкаста «Мааам, у меня вопрос...»
            </h3>
            <p>
              В 2021 году вместе со своей дочерью создала&nbsp;
              <a href="/blog/welcome" className="a-custom">
                подкаст
              </a>
              , в котором нахожу ответы на самые сложные детские вопросы, а
              также разбираюсь в причинах их возникновения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
