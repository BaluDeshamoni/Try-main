import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently seeking internship or entry-level opportunities in software development. I'm
        passionate about building impactful solutions and always eager to learn and grow. If you
        think I’d be a good fit for your team or just want to connect, feel free to reach out — I’d
        love to chat!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { srConfig, email } from '@config';
// import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';

// const StyledContactSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 150px 0;
//   background: linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(0, 255, 164, 0.05));
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 100px 0;
//   }

//   .label {
//     font-size: 1rem;
//     font-family: var(--font-mono);
//     color: var(--green);
//     margin-bottom: 16px;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//   }

//   .heading {
//     font-size: clamp(40px, 6vw, 60px);
//     margin: 0 0 24px;
//     font-weight: 600;
//     color: var(--lightest-slate);
//   }

//   .subtext {
//     font-size: 20px;
//     color: var(--slate);
//     max-width: 600px;
//     line-height: 1.6;
//     margin-bottom: 40px;
//   }

//   .cta-button {
//     padding: 1rem 2.5rem;
//     font-size: 1.1rem;
//     font-family: var(--font-mono);
//     background-color: var(--green);
//     color: var(--navy);
//     border: none;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover,
//     &:focus {
//       background-color: var(--lightest-green);
//       transform: translateY(-3px);
//       box-shadow: 0 10px 30px -10px var(--green);
//     }
//   }
// `;

// const Contact = () => {
//   const revealContainer = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) return;
//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   return (
//     <StyledContactSection id="contact" ref={revealContainer}>
//       <div className="label">Let’s Connect</div>
//       <h2 className="heading">Interested in working together?</h2>
//       <p className="subtext">
//         I'm actively looking for internships or junior roles in software development. If you're
//         building something exciting or just want to say hi, I’d love to hear from you.
//       </p>
//       <a href={`mailto:${email}`} className="cta-button">
//         Send Me a Message
//       </a>
//     </StyledContactSection>
//   );
// };

// export default Contact;
