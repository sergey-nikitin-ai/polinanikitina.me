import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ReviewsCarousel() {
  const reviews = [
    {
      text: `Полина Сергеевна - замечательный грамотный специалист. Такие качества как чуткость, внимательность, интуиция помогают довериться ей не только как профессионалу, но и как человеку, способному просто поддержать и успокоить! Мне очень помогли консультации Полины Сергеевны. Получилось найти правильное решение в непростой ситуации и даже сделать выбор! Огромная Вам благодарность за Ваш труд!`,
      author: "Юлия Воробьёва",
    },
    {
      text: `У сына были проблемы с обучением в школе. Часто отвлекался, забывал и терял вещи, я очень переживала из-за его рассеянности. Полина дала реальные советы, которые работают, порекомендовала книги и упражнения, по которым мы занимались с ребёнком. Спасибо!`,
      author: "Александра",
    },
    {
      text: `Полина помогла увидеть проблему, которую я совершенно неосознанно допускала при воспитании двоих детей. Оказалось, что просто убрав из обихода несколько моих формулировок по отношению к старшему ребёнку, удалось наладить дружеские отношения между детьми. Я в шоке, что все наши проблемы были на поверхности.`,
      author: "Инна Савельева",
    },
  ];

  return (
  <section
    id="mentions"
    className="row gx-4 justify-content-center"
    style={{ backgroundColor: "#fcf8f2", paddingTop: "2rem", paddingBottom: "2rem" }}
  >
      <style>{`
        #mentions .carousel-indicators li {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 3px;
          background-color: #d47a3c;
          opacity: 1;
        }
        #mentions .carousel-indicators .active {
          background-color: #a64d1a;
        }
        #mentions .carousel-caption {
          text-align: left !important;
        }
        #mentions p {
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="col-lg-8">
        <h1 className="mb-3 text-center" style={{ fontSize: "1.8rem" }}>Отзывы</h1>
        <Carousel>
          {reviews.map((r, idx) => (
            <Carousel.Item key={idx}>
              <div
                className="p-3 text-center"
                style={{ minHeight: "250px", display: "flex", flexDirection: "column", justifyContent: "center" }}
              >
                <p>{r.text}</p>
                <p><b>{r.author}</b></p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
