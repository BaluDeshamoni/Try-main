import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    margin-bottom: 40px;
  }

  .project-list {
    width: 100%;
    max-width: 900px;
  }
`;

const StyledAccordionItem = styled.div`
  border-bottom: 1px solid var(--lightest-navy);
  padding: 1rem 0;

  .project-header {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    cursor: pointer;

    h3 {
      margin: 0;
      font-size: var(--fz-lg);
      color: var(--lightest-slate);
    }

    .toggle-icon {
      font-size: 1.5rem;
      color: var(--green);
      margin-right: 1rem;
      user-select: none;
    }
  }

  .project-description {
    margin-top: 0.5rem;
    margin-left: 2rem;
    color: var(--light-slate);
    font-size: var(--fz-md);
    display: none;

    &.expanded {
      display: block;
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.filter(({ node }) => node);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = idx => {
    setExpandedIndexes(prev => (prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]));
  };

  return (
    <StyledProjectsSection>
      <h2>Achievements</h2>
      <div className="project-list">
        {projects.map(({ node }, idx) => {
          const { frontmatter, html } = node;
          const { title } = frontmatter;
          const isOpen = expandedIndexes.includes(idx);

          return (
            <StyledAccordionItem key={idx}>
              <div className="project-header" onClick={() => toggleExpand(idx)}>
                <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                <h3>{title}</h3>
              </div>
              <div
                className={`project-description ${isOpen ? 'expanded' : ''}`}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </StyledAccordionItem>
          );
        })}
      </div>
    </StyledProjectsSection>
  );
};

export default Projects;
