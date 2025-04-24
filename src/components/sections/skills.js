import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3Full,
  DiJava,
} from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import './Skills.css';
import styled from 'styled-components';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
`;

function Skills() {
  const button = '<<';
  return (
    <StyledProjectsSection>
      {/* <h2 ref={revealTitle}>Other Noteworthy Projects</h2> */}
      <h2 className="numbered-heading">Skills</h2>
      <div className="tech">
        <CgCPlusPlus className="tech-icons" />
        <DiJavascript1 className="tech-icons" />
        <DiNodejs className="tech-icons" />
        <DiReact className="tech-icons" />
        <DiMongodb className="tech-icons" />
        <DiGit className="tech-icons" />
        <SiFirebase className="tech-icons" />
        <DiPython className="tech-icons" />
        <GrMysql className="tech-icons" />
        <DiJava className="tech-icons" />
        <DiHtml5 className="tech-icons" />
        <DiCss3Full className="tech-icons" />
      </div>
    </StyledProjectsSection>
  );
}

export default Skills;
