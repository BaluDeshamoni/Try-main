import React from 'react';
import styled from 'styled-components';

const StyledTestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  background-color: var(--navy);
  color: var(--lightest-slate);

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    margin-bottom: 60px;
    text-align: center;
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1000px;
  }
`;

const TestimonialCard = styled.div`
  background: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .quote {
    font-size: var(--fz-lg);
    font-style: italic;
    margin-bottom: 1.5rem;
    color: var(--slate);
  }

  .author {
    font-weight: bold;
    color: var(--green);
    font-size: var(--fz-sm);
  }

  .position {
    font-size: var(--fz-xs);
    color: var(--light-slate);
  }
`;

const testimonialsData = [
  {
    quote:
      'Working with this team was a delight. Their professionalism and technical expertise were exceptional.',
    author: 'Jane Doe',
    position: 'CTO, TechCorp',
  },
  {
    quote:
      'They understood our vision perfectly and delivered exactly what we needed, on time and beyond expectations.',
    author: 'John Smith',
    position: 'Founder, InnovateX',
  },
  {
    quote: 'The communication was clear and consistent. We always felt like a priority.',
    author: 'Emily Taylor',
    position: 'Project Manager, BuildIt',
  },
];

const Testimonials = () => {
  return (
    <StyledTestimonialsSection>
      <h2 className="numbered-heading">Testimonials</h2>
      <div className="testimonial-grid">
        {testimonialsData.map(({ quote, author, position }, idx) => (
          <TestimonialCard key={idx}>
            <p className="quote">“{quote}”</p>
            <p className="author">{author}</p>
            <p className="position">{position}</p>
          </TestimonialCard>
        ))}
      </div>
    </StyledTestimonialsSection>
  );
};

export default Testimonials;
