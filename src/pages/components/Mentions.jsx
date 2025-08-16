import React from "react";
import Carousel from "react-bootstrap/Carousel";
import reviews from "../../data/reviews.json";

function ReviewsCarousel() {
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
                className="p-3"
                style={{
                  minHeight: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  textAlign: "left",
                }}
              >
                <p style={{ flex: 1 }}>{r.text}</p>
                <p style={{ alignSelf: "flex-end", marginTop: "1rem", fontWeight: "bold" }}>
                  {r.author}
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
