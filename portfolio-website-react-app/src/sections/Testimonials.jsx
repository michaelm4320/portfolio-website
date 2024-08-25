import React from 'react';
import data from '../data/index.json'; // Make sure this path is correct

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="Testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Endorsements</h2>
      </div>
      <div className="testimonials-container">
        {data.testimonial.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="testimonial-quote">
              <p className="quote-text">{item.description}</p>
            </div>
            <div className="testimonial-footer">
              <img src={item.src} alt={item.author_name} className="testimonial-image" />
              <div className="testimonial-author">
                <p className="author-name">{item.author_name}</p>
                <p className="author-designation">{item.author_designation}</p>
                {item.linkedin && (
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
