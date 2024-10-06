import './Testimonials.css';

const testimonials = [
  { id: 1, image: 'p.jpeg', name: 'John Doe', role: 'CEO, Company', quote: 'This is an amazing service. Highly !' },
  { id: 2, image: 'pasha.JPG', name: 'Jane Smith', role: 'CTO, Company', quote: 'Outstanding experience! Will use again.' },
  { id: 1, image: 'p.jpeg', name: 'John Doe', role: 'CEO, Company', quote: 'This is an amazing service. Highly !' },
  { id: 2, image: 'pasha.JPG', name: 'Jane Smith', role: 'CTO, Company', quote: 'Outstanding experience! Will use again.' },
  { id: 1, image: 'p.jpeg', name: 'John Doe', role: 'CEO, Company', quote: 'This is an amazing service. Highly !' },
  { id: 2, image: 'pasha.JPG', name: 'Jane Smith', role: 'CTO, Company', quote: 'Outstanding experience! Will use again.' },

  // Add more testimonials as needed
];

const Testimonials = () => {


  return (
    <div className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        <div className="testimonial-wrapper" >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="card-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="card-content">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <p>{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
