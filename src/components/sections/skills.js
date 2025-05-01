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
