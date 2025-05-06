// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useStaticQuery, graphql } from 'gatsby';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import styled from 'styled-components';
// import { srConfig } from '@config';
// import sr from '@utils/sr';
// import { Icon } from '@components/icons';
// import { usePrefersReducedMotion } from '@hooks';

// const StyledProjectsSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;

//   h2 {
//     font-size: clamp(24px, 5vw, var(--fz-heading));
//     margin-bottom: 40px;
//   }

//   .project-list {
//     width: 100%;
//     max-width: 900px;
//   }
// `;

// const StyledAccordionItem = styled.div`
//   border-bottom: 1px solid var(--lightest-navy);
//   padding: 1rem 0;

//   .project-header {
//     display: flex;
//     align-items: center;
//     // justify-content: space-between;
//     cursor: pointer;

//     h3 {
//       margin: 0;
//       font-size: var(--fz-lg);
//       color: var(--lightest-slate);
//     }

//     .toggle-icon {
//       font-size: 1.5rem;
//       color: var(--green);
//       margin-right: 1rem;
//       user-select: none;
//     }
//   }

//   .project-description {
//     margin-top: 0.5rem;
//     margin-left: 2rem;
//     color: var(--light-slate);
//     font-size: var(--fz-md);
//     display: none;

//     &.expanded {
//       display: block;
//     }
//   }
// `;

// const Projects = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       projects: allMarkdownRemark(
//         filter: {
//           fileAbsolutePath: { regex: "/content/projects/" }
//           frontmatter: { showInProjects: { ne: false } }
//         }
//         sort: { fields: [frontmatter___date], order: DESC }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//               tech
//               github
//               external
//             }
//             html
//           }
//         }
//       }
//     }
//   `);

//   const projects = data.projects.edges.filter(({ node }) => node);
//   const [expandedIndexes, setExpandedIndexes] = useState([]);

//   const toggleExpand = idx => {
//     setExpandedIndexes(prev => (prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]));
//   };

//   return (
//     <StyledProjectsSection>
//       <h2 className="numbered-heading">Achievements</h2>
//       <div className="project-list">
//         {projects.map(({ node }, idx) => {
//           const { frontmatter, html } = node;
//           const { title } = frontmatter;
//           const isOpen = expandedIndexes.includes(idx);

//           return (
//             <StyledAccordionItem key={idx}>
//               <div className="project-header" onClick={() => toggleExpand(idx)}>
//                 <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
//                 <h3>{title}</h3>
//               </div>
//               <div
//                 className={`project-description ${isOpen ? 'expanded' : ''}`}
//                 dangerouslySetInnerHTML={{ __html: html }}
//               />
//             </StyledAccordionItem>
//           );
//         })}
//       </div>
//     </StyledProjectsSection>
//   );
// };

// export default Projects;

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { Link, useStaticQuery, graphql } from 'gatsby';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    margin-bottom: 10px;
  }

  .section-intro {
    font-size: var(--fz-md);
    color: var(--slate);
    margin-bottom: 30px;
    text-align: center;
    max-width: 600px;
  }

  .project-list {
    width: 100%;
    max-width: 900px;
  }
  .view-certs-btn {
    margin-top: 2rem;
    text-align: center;

    a {
      display: inline-block;
      background-color: transparent;
      color: var(--green);
      border: 1px solid var(--green);
      padding: 0.75rem 1.5rem;
      font-size: var(--fz-md);
      border-radius: var(--border-radius);
      transition: background-color 0.3s ease, color 0.3s ease;
      text-decoration: none;

      &:hover {
        background-color: var(--green-tint);
        color: var(--navy);
      }
    }
  }
`;

const StyledAccordionItem = styled.div`
  border-bottom: 1px solid var(--lightest-navy);
  padding: 1rem 0;

  .project-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s ease;

    // &:hover {
    //   background-color: var(--light-navy);
    //   border-radius: var(--border-radius);
    //   padding: 0.5rem;
    // }

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

    .project-links {
      margin-left: auto;
      display: flex;
      gap: 0.75rem;

      svg {
        width: 20px;
        height: 20px;
        color: var(--light-slate);
        transition: color 0.2s ease;

        &:hover {
          color: var(--green);
        }
      }
    }
  }

  .project-description {
    margin-left: 2rem;
    margin-top: 0.5rem;
    font-size: var(--fz-md);
    color: var(--light-slate);
  }

  .project-tech {
    margin-left: 2rem;
    margin-top: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    span {
      background: var(--navy);
      color: var(--green);
      font-size: var(--fz-xs);
      padding: 0.25rem 0.5rem;
      border-radius: var(--border-radius);
    }
  }

  /* Animation */
  .accordion-enter {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }
  .accordion-enter-active {
    max-height: 500px;
    opacity: 1;
    transition: max-height 300ms ease, opacity 300ms ease;
  }
  .accordion-exit {
    max-height: 500px;
    opacity: 1;
  }
  .accordion-exit-active {
    max-height: 0;
    opacity: 0;
    transition: max-height 300ms ease, opacity 300ms ease;
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
      <h2 className="numbered-heading">🏆 Achievements</h2>
      <p className="section-intro">
        Here are some highlights from my journey — from open-source contributions to award-winning
        projects.
      </p>
      <div className="project-list">
        {projects.map(({ node }, idx) => {
          const { frontmatter, html } = node;
          const { title, tech, github, external } = frontmatter;
          const isOpen = expandedIndexes.includes(idx);

          return (
            <StyledAccordionItem key={idx}>
              <div className="project-header" onClick={() => toggleExpand(idx)}>
                <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                <h3>{title}</h3>
                <div className="project-links">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link">
                      <Icon name="GitHub" />
                    </a>
                  )}
                  {external && (
                    <a
                      href={external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="External Link">
                      <Icon name="External" />
                    </a>
                  )}
                </div>
              </div>
              <CSSTransition in={isOpen} timeout={300} classNames="accordion" unmountOnExit>
                <div>
                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <div className="project-tech">
                      {tech.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>
                  )}
                </div>
              </CSSTransition>
            </StyledAccordionItem>
          );
        })}
      </div>
      <div className="view-certs-btn">
        {/* <a href="/certifications" target="_blank" rel="noopener noreferrer">
          View My Certs
        </a> */}
        <Link to="/archive">view the archive</Link>
      </div>
    </StyledProjectsSection>
  );
};

export default Projects;
