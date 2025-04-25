import React, { useEffect, useRef } from 'react';
import './Skills.css';
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
      <h2 className="numbered-heading">Skills</h2>
      <div className="tech">
        <span className="tech-icons">C ++ </span>
        <span className="tech-icons">React Js</span>
        <span className="tech-icons">JavaScript</span>
        <span className="tech-icons">My SQL</span>
        <span className="tech-icons">MongoDB</span>

        <span className="tech-icons">C ++ </span>
        <span className="tech-icons">React Js</span>
        <span className="tech-icons">JavaScript</span>
        <span className="tech-icons">My SQL</span>
        <span className="tech-icons">MongoDB</span>

        <span className="tech-icons">C ++ </span>
        <span className="tech-icons">React Js</span>
        <span className="tech-icons">JavaScript</span>
        <span className="tech-icons">My SQL</span>
        <span className="tech-icons">MongoDB</span>
      </div>
    </StyledProjectsSection>
  );
}

export default Skills;
