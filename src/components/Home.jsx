import React from "react";
import CardData from "./CardData"; // استخدمي مسار ملفك الحالي
import Card from "./Card";

function Home({ openModal }) {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-header">Welcome to ECY</div>
        <h1>Best Learning Opportunities</h1>
        <p className="description">
          Discover the best programs and resources to help you achieve your goals. 
          Stay connected, watch tutorials, and join our amazing community.
        </p>

        <button className="btn btn-red" onClick={() => openModal("contact")}>
          Get Quote
        </button>

        <a href="#services" className="btn btn-transparent">
          Learn More
        </a>

        <div className="card-container">
          {CardData.map(({ id, img, title, description, color }) => (
            <Card
              key={id}
              img={img}
              title={title}
              description={description}
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
