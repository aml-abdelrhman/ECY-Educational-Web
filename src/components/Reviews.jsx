import React from 'react';
import SectionHeader from "./SectionHeader";

export default function Reviews() {
  const reviews = [
    {
      name: "Ahmed Ali",
      text: "This platform changed my life! The courses are amazing.",
      img: "https://i.pravatar.cc/80?img=12"
    },
    {
      name: "Sara Mohamed",
      text: "Great teachers and very easy-to-follow lessons.",
      img: "https://i.pravatar.cc/80?img=32"
    },
    {
      name: "Omar Hassan",
      text: "I loved the community and support. Highly recommend!",
      img: "https://i.pravatar.cc/80?img=45"
    }
  ];

  return (
    <div className='Reviews'>
      <div className='Container'>
        <div className='SectionHeader'>
          <SectionHeader
            title="What Our Students Say"
            subtitle="Read reviews from our students about their experiences and success"
          />
        </div>

        <div className="reviews-cards">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img src={review.img} alt={review.name} className="review-img" />
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
