import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledSkillsSection = styled.section`
  .section-title {
    text-align: center;
    font-size: clamp(24px, 5vw, 2.5rem);
    margin-bottom: 70px;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 100px;
      height: 2px;
      background: var(--green);
      margin: 20px auto 0;
    }
  }

  .timeline {
    position: relative;
    left: -70px;

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      background: var(--lightest-navy);
      top: 0;
      bottom: 0;
      left: 60%;
      margin-left: -1px;
    }
  }

  .skill-phase {
    padding: 10px 0;
    position: relative;
    background-color: inherit;
    width: 60%;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      background-color: var(--green);
      border: 4px solid var(--navy);
      top: 30px;
      border-radius: 50%;
      z-index: 1;
    }

    &:nth-child(odd) {
      padding-right: 20px;
      left: 0;
      text-align: right;

      &:after {
        right: -10px;
      }
    }

    &:nth-child(even) {
      padding-left: 20px;
      left: 60%;
      text-align: left;

      &:after {
        left: -10px;
      }
    }
  }

  .phase-content {
    padding: 20px;
    background-color: var(--light-navy);
    position: relative;
    border-radius: 6px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    h3 {
      color: var(--green);
      margin-top: 0;
      font-size: 1.25rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 15px 0;

      span {
        background: rgba(100, 255, 218, 0.1);
        color: var(--green);
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-family: var(--font-mono);
      }
    }
  }
  .highlight {
    background: rgba(100, 255, 218, 0.1);
    color: var(--green);
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-family: var(--font-mono);
  }

  @media (max-width: 768px) {
    .timeline {
      &:before {
        left: 31px;
      }
    }

    .skill-phase {
      width: 100%;
      // padding-left: 70px;
      // padding-right: 25px;
      text-align: left !important;

      &:after {
        left: 21px !important;
      }

      &:nth-child(even) {
        left: 0;
      }
    }
  }
`;

const skillsData = [
  {
    title: 'The Foundations',
    description:
      'My adventure began with the basics—<span class="highlight">HTML</span>, <span class="highlight">CSS</span>, and <span class="highlight">JavaScript</span>. I spent nights tweaking layouts, debugging scripts, and marveling at how a few lines of code could create something interactive. The more I built, the more I craved structure. That’s when <span class="highlight">Sass</span> entered my life, turning my messy CSS into something organized and powerful.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
  },
  {
    title: 'Frontend Revolution',
    description:
      'Front-end development hooked me, but I knew there was more.<span class="highlight">React JS</span>changed everything. Suddenly, I could build reusable components, manage state efficiently, and create seamless user experiences. Adding <span class="highlight">Redux</span> felt like unlocking a new level—complex apps no longer scared me.',
    technologies: ['React', 'Redux', 'Styled Components', 'Responsive Design'],
  },
  {
    title: 'Backend Discovery',
    description:
      'Yet, I wanted to understand the full picture. The back end was a mystery I was determined to solve.<span class="highlight">Node JS</span> and <span class="highlight">Express</span>became my tools of choice. I built APIs, handled HTTP requests, and connected everything to databases. <span class="highlight">SQL</span> taught me the importance of structured data, while <span class="highlight">MongoDB</span> showed me the flexibility of schema less designs.',
    technologies: ['Node.js', 'Express', 'SQL', 'MongoDB'],
  },
  {
    title: 'Full-Stack Evolution',
    description:
      'Version control was a game-changer. <span class="highlight">Git</span> saved me countless times—rolling back mistakes, collaborating with others, and maintaining clean code history. I was no longer just a front-end or back-end developer. I was <span class="highlight">full-stack</span>, capable of building entire applications from scratch.',
    technologies: ['Git', 'REST APIs', 'Authentication', 'Web Security'],
  },
  {
    title: 'Advanced Tooling',
    description:
      'But the learning never stopped. <span class="highlight">TypeScript</span> brought order to my JavaScript chaos. <span class="highlight">Python</span> opened doors to automation, scripting, and even <span class="highlight">machine learning</span>. I dabbled in <span class="highlight">AI</span>, trained models, and explored data science, realizing how much more there was to discover.',
    technologies: ['TypeScript', 'Python', 'Data Science', 'AI Basics'],
  },
  {
    title: 'DevOps & Deployment',
    description:
      'Deployment became my next frontier. <span class="highlight">CI/CD pipelines</span> with <span class="highlight">Jenkins</span> automated my workflows. <span class="highlight">Docker</span> let me package apps neatly, and <span class="highlight">AWS </span>gave me the power to scale globally. <span class="highlight">Firebase</span> made real-time apps effortless, while <span class="highlight">Unity</span> introduced me to <span class="highlight">mixed reality</span>, blending code with immersive experiences.',
    technologies: ['Docker', 'AWS', 'Firebase', 'CI/CD'],
  },
  {
    title: 'System Architecture',
    description:
      'As systems grew, so did complexity. <span class="highlight">Microservices</span> taught me to break down monoliths into manageable pieces. <span class="highlight">DevOps</span> became essential—automating infrastructure, monitoring performance, and ensuring reliability. I wasn’t just coding anymore; I was architecting systems.',
    technologies: ['Microservices', 'DevOps', 'System Design', 'Cloud Architecture'],
  },
  {
    title: 'Beyond Coding',
    description:
      'Design mattered just as much as functionality. <span class="highlight">Figma</span> helped me visualize interfaces before writing a single line of code. <span class="highlight">OOP principles</span> kept my logic clean, and <span class="highlight">mixed reality</span> pushed me into uncharted creative territory.',
    technologies: ['Figma', 'UI/UX', 'OOP', 'Mixed Reality'],
  },
  {
    title: 'The Never-Ending Journey',
    description:
      'The journey never truly ends. Every day brings new challenges—new frameworks, new tools, new paradigms. But that’s the thrill of it. From <span class="highlight">front-end animations</span> to AI- powered backends, from local databases to global cloud deployments, the adventure continues.',
    technologies: ['Continuous Learning', 'Adaptability', 'Problem Solving', 'Innovation'],
  },
];

function Skills() {
  const revealContainer = useRef(null);
  const skillPhasesRef = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      },
    );

    if (skillPhasesRef.current) {
      skillPhasesRef.current.forEach(el => {
        if (el) observer.observe(el);
      });
    }

    return () => {
      if (skillPhasesRef.current) {
        skillPhasesRef.current.forEach(el => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, [prefersReducedMotion]);

  const addToRefs = el => {
    if (el && !skillPhasesRef.current.includes(el)) {
      skillPhasesRef.current.push(el);
    }
  };

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">My Development Journey</h2>

      <div className="timeline">
        {skillsData.map((phase, i) => (
          <div key={i} className="skill-phase" ref={addToRefs}>
            <div className="phase-content">
              <h3>{phase.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: phase.description }} />

              {/* <div className="tech-tags">
                {phase.technologies.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </StyledSkillsSection>
  );
}

export default Skills;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { srConfig } from '@config';
// import sr from '@utils/sr';

// // Custom hook for reduced motion preference
// const usePrefersReducedMotion = () => {
//   // Fallback if the hook isn't available
//   return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// };

// const StyledSkillsSection = styled.section`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 100px 20px;

//   .section-title {
//     text-align: center;
//     font-size: clamp(24px, 5vw, 2.5rem);
//     margin-bottom: 50px;
//     position: relative;
//     color: var(--lightest-slate);

//     &:after {
//       content: '';
//       display: block;
//       width: 100px;
//       height: 2px;
//       background: var(--green);
//       margin: 20px auto 0;
//     }
//   }

//   .skills-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 20px;
//   }

//   .skill-card {
//     background-color: var(--light-navy);
//     border-radius: 8px;
//     padding: 25px;
//     box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
//     opacity: 0;
//     transform: translateY(20px);
//     transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
//     border: 1px solid rgba(100, 255, 218, 0.1);

//     &.visible {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
//       border: 1px solid var(--green);
//     }

//     h3 {
//       color: var(--green);
//       margin-top: 0;
//       font-size: 1.25rem;
//       margin-bottom: 15px;
//     }

//     p {
//       color: var(--light-slate);
//       line-height: 1.6;
//       margin-bottom: 15px;
//       font-size: 0.95rem;
//     }

//     .tech-tags {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 8px;
//       margin-top: 20px;

//       span {
//         background: rgba(100, 255, 218, 0.1);
//         color: var(--green);
//         padding: 3px 10px;
//         border-radius: 20px;
//         font-size: 0.8rem;
//         font-family: var(--font-mono);
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     padding: 80px 20px;

//     .skills-grid {
//       grid-template-columns: 1fr;
//       gap: 15px;
//     }

//     .skill-card {
//       padding: 20px;
//     }
//   }
// `;

// const skillsData = [
//   {
//     title: 'The Foundations',
//     description:
//       'My adventure began with the basics—HTML, CSS, and JavaScript. I spent nights tweaking layouts, debugging scripts, and marveling at how a few lines of code could create something interactive.',
//     technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
//   },
//   {
//     title: 'Frontend Revolution',
//     description:
//       'React JS changed everything. Suddenly, I could build reusable components, manage state efficiently, and create seamless user experiences. Adding Redux felt like unlocking a new level.',
//     technologies: ['React', 'Redux', 'Styled Components', 'Responsive Design'],
//   },
//   {
//     title: 'Backend Discovery',
//     description:
//       'Node JS and Express became my tools of choice. I built APIs, handled HTTP requests, and connected everything to databases. SQL taught me structured data, while MongoDB showed flexibility.',
//     technologies: ['Node.js', 'Express', 'SQL', 'MongoDB'],
//   },
//   {
//     title: 'Full-Stack Evolution',
//     description:
//       'Git saved me countless times—rolling back mistakes, collaborating with others. I was no longer just a frontend or backend developer. I became full-stack, building entire applications.',
//     technologies: ['Git', 'REST APIs', 'Authentication', 'Web Security'],
//   },
//   {
//     title: 'Advanced Tooling',
//     description:
//       'TypeScript brought order to my JavaScript chaos. Python opened doors to automation and machine learning. I explored data science, realizing how much more there was to discover.',
//     technologies: ['TypeScript', 'Python', 'Data Science', 'AI Basics'],
//   },
//   {
//     title: 'DevOps & Deployment',
//     description:
//       'CI/CD pipelines automated my workflows. Docker let me package apps neatly, and AWS gave me the power to scale globally. Firebase made real-time apps effortless.',
//     technologies: ['Docker', 'AWS', 'Firebase', 'CI/CD'],
//   },
//   {
//     title: 'System Architecture',
//     description:
//       "Microservices taught me to break down monoliths. DevOps became essential—automating infrastructure, monitoring performance. I wasn't just coding anymore; I was architecting systems.",
//     technologies: ['Microservices', 'DevOps', 'System Design', 'Cloud Architecture'],
//   },
//   {
//     title: 'Beyond Coding',
//     description:
//       'Design mattered just as much as functionality. Figma helped visualize interfaces. OOP principles kept logic clean. Mixed reality pushed me into uncharted creative territory.',
//     technologies: ['Figma', 'UI/UX', 'OOP', 'Mixed Reality'],
//   },
//   {
//     title: 'The Never-Ending Journey',
//     description:
//       'Every day brings new challenges—new frameworks, tools, paradigms. From frontend animations to AI-powered backends, from local databases to global deployments, the adventure continues.',
//     technologies: ['Continuous Learning', 'Adaptability', 'Problem Solving', 'Innovation'],
//   },
// ];

// function Skills() {
//   const revealContainer = useRef(null);
//   const skillCardsRef = useRef([]);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }
//     sr.reveal(revealContainer.current, srConfig());
//   }, [prefersReducedMotion]);

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         root: null,
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px',
//       },
//     );

//     if (skillCardsRef.current) {
//       skillCardsRef.current.forEach(el => {
//         if (el) observer.observe(el);
//       });
//     }

//     return () => {
//       if (skillCardsRef.current) {
//         skillCardsRef.current.forEach(el => {
//           if (el) observer.unobserve(el);
//         });
//       }
//     };
//   }, [prefersReducedMotion]);

//   const addToRefs = el => {
//     if (el && !skillCardsRef.current.includes(el)) {
//       skillCardsRef.current.push(el);
//     }
//   };

//   return (
//     <StyledSkillsSection id="skills" ref={revealContainer}>
//       {/* <h2 className="section-title">My Development Journey</h2> */}
//       <h2 className="numbered-heading">
//         The Journey of a Modern Developer: From Zero to Full-Stack & Beyond
//       </h2>

//       <div className="skills-grid">
//         {skillsData.map((phase, i) => (
//           <div key={i} className="skill-card" ref={addToRefs}>
//             <h3>{phase.title}</h3>
//             <p>{phase.description}</p>
//             <div className="tech-tags">
//               {phase.technologies.map((tech, idx) => (
//                 <span key={idx}>{tech}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </StyledSkillsSection>
//   );
// }

// export default Skills;
