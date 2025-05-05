import React, { useEffect, useRef } from 'react';
import './skill.css';
import styled from 'styled-components';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { srConfig } from '@config';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
`;

function Skills() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);
  const button = '<<';
  return (
    <StyledProjectsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">
        The Journey of a Modern Developer: From Zero to Full-Stack & Beyond
      </h2>
      <ul className="skills-list">
        <li>
          My adventure began with the basics—HTML, CSS, and JavaScript. I spent nights tweaking
          layouts, debugging scripts, and marveling at how a few lines of code could create
          something interactive. The more I built, the more I craved structure. That’s when Sass
          entered my life, turning my messy CSS into something organized and powerful.
        </li>
        <li>
          Front-end development hooked me, but I knew there was more. React JS changed everything.
          Suddenly, I could build reusable components, manage state efficiently, and create seamless
          user experiences. Adding Redux felt like unlocking a new level—complex apps no longer
          scared me.
        </li>
        <li>
          Yet, I wanted to understand the full picture. The back end was a mystery I was determined
          to solve. Node JS and Express became my tools of choice. I built APIs, handled HTTP
          requests, and connected everything to databases. SQL taught me the importance of
          structured data, while MongoDB showed me the flexibility of schema less designs.
        </li>
        <li>
          Version control was a game-changer. Git saved me countless times—rolling back mistakes,
          collaborating with others, and maintaining clean code history. I was no longer just a
          front-end or back-end developer. I was <span className="highlight1">full-stack,</span>{' '}
          capable of building entire applications from scratch.
        </li>
        <li>
          But the learning never stopped. TypeScript brought order to my JavaScript chaos. Python
          opened doors to automation, scripting, and even machine learning. I dabbled in AI, trained
          models, and explored data science, realizing how much more there was to discover.
        </li>
        <li>
          Deployment became my next frontier. CI/CD pipelines with Jenkins automated my workflows.
          Docker let me package apps neatly, and AWS gave me the power to scale globally. Firebase
          made real-time apps effortless, while Unity introduced me to mixed reality, blending code
          with immersive experiences.
        </li>
        <li>
          As systems grew, so did complexity. Microservices taught me to break down monoliths into
          manageable pieces. DevOps became essential—automating infrastructure, monitoring
          performance, and ensuring reliability.{' '}
          <span className="highlight">I wasn’t just coding</span> anymore; I was architecting
          systems.
        </li>
        <li>
          Design mattered just as much as functionality. Figma helped me visualize interfaces before
          writing a single line of code. OOP principles kept my logic clean, and mixed reality
          pushed me into uncharted creative territory.
        </li>
        <li>
          The journey never truly ends. Every day brings new challenges—new frameworks, new tools,
          new paradigms. But that’s the thrill of it. From front-end animations to AI-powered
          backends, from local databases to global cloud deployments, the adventure continues.
        </li>
      </ul>
    </StyledProjectsSection>
  );
}

export default Skills;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';
// import { srConfig } from '@config';

// const RoadmapSection = styled.section`
//   padding: 50px 20px;
//   background-color: #f7f7f7;
//   position: relative;
// `;

// const RoadmapContainer = styled.div`
//   display: flex;
//   overflow-x: auto;
//   scroll-snap-type: x mandatory;
//   width: 100%;
//   height: 500px; /* Set height for the scroll section */
//   scroll-behavior: smooth;
//   padding-bottom: 20px;
// `;

// const RoadmapStep = styled.div`
//   flex-shrink: 0;
//   width: 200px;
//   margin-right: 40px;
//   background: var(--navy);
//   border-radius: 12px;
//   box-shadow: 0 10px 30px -15px var(--navy-shadow);
//   color: var(--lightest-slate);
//   padding: 30px;
//   text-align: center;
//   scroll-snap-align: start;
//   transition: transform 0.3s ease, background 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     transform: scale(1.05);
//     background: var(--slate);
//   }

//   &:active {
//     transform: scale(1.1);
//   }
// `;

// const RoadmapTitle = styled.h3`
//   font-size: clamp(20px, 4vw, var(--fz-heading));
//   margin-bottom: 10px;
// `;

// const RoadmapDescription = styled.p`
//   font-size: 16px;
//   color: var(--light-slate);
// `;

// const Skills = () => {
//   const revealContainer = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }
//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   const skills = [
//     {
//       title: 'HTML, CSS, and JavaScript',
//       description:
//         'My adventure began with the basics—HTML, CSS, and JavaScript. I spent nights tweaking layouts and debugging scripts.',
//     },
//     {
//       title: 'React JS & Redux',
//       description:
//         'React JS changed everything for me, building reusable components and managing states efficiently. Adding Redux unlocked new levels for complex apps.',
//     },
//     {
//       title: 'Node JS & Express',
//       description:
//         'I built APIs and connected to databases with Node JS and Express. SQL taught me the importance of structured data.',
//     },
//     {
//       title: 'Git and Version Control',
//       description:
//         'Version control saved me countless times—rolling back mistakes and collaborating with others.',
//     },
//     {
//       title: 'TypeScript & Python',
//       description:
//         'TypeScript brought order to my chaos while Python opened doors to automation, scripting, and machine learning.',
//     },
//     {
//       title: 'CI/CD Pipelines & AWS',
//       description:
//         'Automating workflows with Jenkins and Docker helped scale my apps globally with AWS, while Firebase made real-time apps easy.',
//     },
//     {
//       title: 'Microservices & DevOps',
//       description:
//         'I learned to break down monoliths into manageable pieces with microservices. DevOps became essential for infrastructure and performance monitoring.',
//     },
//     {
//       title: 'Design & Mixed Reality',
//       description:
//         'Figma helped visualize interfaces, and mixed reality pushed me into creative uncharted territories.',
//     },
//     {
//       title: 'Continuous Learning',
//       description:
//         'The journey never ends. From front-end animations to AI-powered backends, I continue to explore new frameworks and tools.',
//     },
//   ];

//   return (
//     <RoadmapSection id="skills" ref={revealContainer}>
//       <h2 className="numbered-heading">
//         The Journey of a Modern Developer: From Zero to Full-Stack & Beyond
//       </h2>
//       <RoadmapContainer>
//         {skills.map((skill, index) => (
//           <RoadmapStep key={index}>
//             <RoadmapTitle>{skill.title}</RoadmapTitle>
//             <RoadmapDescription>{skill.description}</RoadmapDescription>
//           </RoadmapStep>
//         ))}
//       </RoadmapContainer>
//     </RoadmapSection>
//   );
// };

// export default Skills;

// import React, { useEffect, useRef } from 'react';
// // import './skill.css';
// import styled from 'styled-components';
// import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';
// import { srConfig } from '@config';

// const StyledSkillsSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 100px 0;

//   h2 {
//     font-size: clamp(24px, 5vw, var(--fz-heading));
//     margin-bottom: 50px;
//     text-align: center;
//     line-height: 1.3;
//   }

//   .skills-list {
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
//     padding: 0;
//     list-style: none;
//     counter-reset: skill-counter;
//   }

//   .skill-item {
//     position: relative;
//     padding-left: 60px;
//     counter-increment: skill-counter;
//     opacity: 0;
//     transform: translateY(20px);
//     transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

//     &.visible {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     &::before {
//       content: counter(skill-counter);
//       position: absolute;
//       left: 0;
//       top: 0;
//       font-size: 1.5rem;
//       font-weight: bold;
//       color: var(--green);
//       background: var(--light-navy);
//       width: 40px;
//       height: 40px;
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       border: 2px solid var(--green);
//     }

//     p {
//       margin: 0;
//       padding: 15px;
//       background: var(--light-navy);
//       border-radius: 5px;
//       box-shadow: 0 10px 30px -15px var(--navy-shadow);
//       transition: all 0.3s ease;

//       &:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 20px 30px -15px var(--navy-shadow);
//       }
//     }
//   }

//   .highlight {
//     color: var(--green);
//     font-weight: bold;
//   }

//   .highlight1 {
//     color: var(--green);
//     font-weight: bold;
//   }
// `;

// function Skills() {
//   const revealContainer = useRef(null);
//   const skillItemsRef = useRef([]);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   // Initialize scroll reveal for the container
//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }
//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   // Intersection Observer for individual skill items
//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       {
//         root: null,
//         threshold: 0.1,
//         rootMargin: '0px 0px -100px 0px',
//       },
//     );

//     if (skillItemsRef.current) {
//       skillItemsRef.current.forEach(el => {
//         if (el) observer.observe(el);
//       });
//     }

//     return () => {
//       if (skillItemsRef.current) {
//         skillItemsRef.current.forEach(el => {
//           if (el) observer.unobserve(el);
//         });
//       }
//     };
//   }, [prefersReducedMotion]);

//   // Helper function to add refs to each skill item
//   const addToRefs = el => {
//     if (el && !skillItemsRef.current.includes(el)) {
//       skillItemsRef.current.push(el);
//     }
//   };

//   return (
//     <StyledSkillsSection id="skills" ref={revealContainer}>
//       <h2 className="numbered-heading">
//         The Journey of a Modern Developer: From Zero to Full-Stack & Beyond
//       </h2>
//       <ul className="skills-list">
//         {[
//           "My adventure began with the basics—HTML, CSS, and JavaScript. I spent nights tweaking layouts, debugging scripts, and marveling at how a few lines of code could create something interactive. The more I built, the more I craved structure. That's when Sass entered my life, turning my messy CSS into something organized and powerful.",
//           'Front-end development hooked me, but I knew there was more. React JS changed everything. Suddenly, I could build reusable components, manage state efficiently, and create seamless user experiences. Adding Redux felt like unlocking a new level—complex apps no longer scared me.',
//           'Yet, I wanted to understand the full picture. The back end was a mystery I was determined to solve. Node JS and Express became my tools of choice. I built APIs, handled HTTP requests, and connected everything to databases. SQL taught me the importance of structured data, while MongoDB showed me the flexibility of schema less designs.',
//           'Version control was a game-changer. Git saved me countless times—rolling back mistakes, collaborating with others, and maintaining clean code history. I was no longer just a front-end or back-end developer. I was <span className="highlight1">full-stack,</span> capable of building entire applications from scratch.',
//           'But the learning never stopped. TypeScript brought order to my JavaScript chaos. Python opened doors to automation, scripting, and even machine learning. I dabbled in AI, trained models, and explored data science, realizing how much more there was to discover.',
//           'Deployment became my next frontier. CI/CD pipelines with Jenkins automated my workflows. Docker let me package apps neatly, and AWS gave me the power to scale globally. Firebase made real-time apps effortless, while Unity introduced me to mixed reality, blending code with immersive experiences.',
//           'As systems grew, so did complexity. Microservices taught me to break down monoliths into manageable pieces. DevOps became essential—automating infrastructure, monitoring performance, and ensuring reliability. <span className="highlight">I wasn\'t just coding</span> anymore; I was architecting systems.',
//           'Design mattered just as much as functionality. Figma helped me visualize interfaces before writing a single line of code. OOP principles kept my logic clean, and mixed reality pushed me into uncharted creative territory.',
//           "The journey never truly ends. Every day brings new challenges—new frameworks, new tools, new paradigms. But that's the thrill of it. From front-end animations to AI-powered backends, from local databases to global cloud deployments, the adventure continues.",
//         ].map((item, i) => (
//           <li
//             key={i}
//             className="skill-item"
//             ref={addToRefs}
//             dangerouslySetInnerHTML={{ __html: item }}
//           />
//         ))}
//       </ul>
//     </StyledSkillsSection>
//   );
// }

// export default Skills;

// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
// import { usePrefersReducedMotion } from '@hooks';
// import { srConfig } from '@config';
// import sr from '@utils/sr';

// const StyledSkillsSection = styled.section`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 100px 20px;

//   .section-title {
//     text-align: center;
//     font-size: clamp(24px, 5vw, 2.5rem);
//     margin-bottom: 70px;
//     position: relative;

//     &:after {
//       content: '';
//       display: block;
//       width: 100px;
//       height: 2px;
//       background: var(--green);
//       margin: 20px auto 0;
//     }
//   }

//   .timeline {
//     position: relative;
//     max-width: 900px;
//     margin: 0 auto;

//     &:before {
//       content: '';
//       position: absolute;
//       width: 2px;
//       background: var(--lightest-navy);
//       top: 0;
//       bottom: 0;
//       left: 50%;
//       margin-left: -1px;
//     }
//   }

//   .skill-phase {
//     padding: 20px 40px;
//     position: relative;
//     background-color: inherit;
//     width: 50%;
//     opacity: 0;
//     transform: translateY(30px);
//     transition: all 0.5s ease;

//     &.visible {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     &:after {
//       content: '';
//       position: absolute;
//       width: 20px;
//       height: 20px;
//       right: -10px;
//       background-color: var(--green);
//       border: 4px solid var(--navy);
//       top: 30px;
//       border-radius: 50%;
//       z-index: 1;
//     }

//     &:nth-child(odd) {
//       left: 0;
//       text-align: right;

//       &:after {
//         right: -10px;
//       }
//     }

//     &:nth-child(even) {
//       left: 50%;
//       text-align: left;

//       &:after {
//         left: -10px;
//       }
//     }
//   }

//   .phase-content {
//     padding: 20px;
//     background-color: var(--light-navy);
//     position: relative;
//     border-radius: 6px;
//     box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
//     transition: all 0.3s ease;

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
//     }

//     h3 {
//       color: var(--green);
//       margin-top: 0;
//       font-size: 1.25rem;
//     }

//     .tech-tags {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 8px;
//       margin: 15px 0;

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
//     .timeline {
//       &:before {
//         left: 31px;
//       }
//     }

//     .skill-phase {
//       width: 100%;
//       padding-left: 70px;
//       padding-right: 25px;
//       text-align: left !important;

//       &:after {
//         left: 21px !important;
//       }

//       &:nth-child(even) {
//         left: 0;
//       }
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
//   const skillPhasesRef = useRef([]);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }
//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       {
//         root: null,
//         threshold: 0.1,
//         rootMargin: '0px 0px -100px 0px',
//       },
//     );

//     if (skillPhasesRef.current) {
//       skillPhasesRef.current.forEach(el => {
//         if (el) observer.observe(el);
//       });
//     }

//     return () => {
//       if (skillPhasesRef.current) {
//         skillPhasesRef.current.forEach(el => {
//           if (el) observer.unobserve(el);
//         });
//       }
//     };
//   }, [prefersReducedMotion]);

//   const addToRefs = el => {
//     if (el && !skillPhasesRef.current.includes(el)) {
//       skillPhasesRef.current.push(el);
//     }
//   };

//   return (
//     <StyledSkillsSection id="skills" ref={revealContainer}>
//       <h2 className="section-title">My Development Journey</h2>

//       <div className="timeline">
//         {skillsData.map((phase, i) => (
//           <div key={i} className="skill-phase" ref={addToRefs}>
//             <div className="phase-content">
//               <h3>{phase.title}</h3>
//               <p>{phase.description}</p>
//               <div className="tech-tags">
//                 {phase.technologies.map((tech, idx) => (
//                   <span key={idx}>{tech}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </StyledSkillsSection>
//   );
// }

// export default Skills;
