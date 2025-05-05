import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import { KEY_CODES } from '@utils';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  // max-width: 900px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;
  console.log(jobsData, 'jobsData');

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Professional Experience</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, url, company, range } = frontmatter;

              return (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{range}</p>

                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;

// import React, { useState, useEffect, useRef } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import styled from 'styled-components';
// import sr from '@utils/sr';
// import { srConfig } from '@config';
// import { usePrefersReducedMotion } from '@hooks';

// const Section = styled.section`
//   position: relative;
//   width: 100%;
//   overflow: hidden;
//   padding: 100px 0;
//   background-color: var(--navy);
// `;

// const Inner = styled.div`
//   max-width: 100%;
//   margin: 0 auto;
//   text-align: center;
// `;

// const CarouselContainer = styled.div`
//   position: relative;
//   width: 100%;
//   margin: 50px 0;
//   overflow: visible;
// `;

// const CarouselTrack = styled.div`
//   display: flex;
//   transition: transform 0.5s ease-in-out;
//   transform: translateX(${props => props.translateX}px);
//   gap: 40px;
//   padding: 0 calc(50vw - ${props => props.cardWidth / 2}px);
// `;

// const Card = styled.div`
//   flex: 0 0 ${props => props.cardWidth}px;
//   background-color: var(--light-navy);
//   border-radius: 12px;
//   padding: 30px 25px;
//   box-shadow: 0 10px 30px -15px var(--navy-shadow);
//   color: var(--lightest-slate);
//   opacity: ${props => (props.isCenter ? 1 : 0.6)};
//   transform: ${props => (props.isCenter ? 'scale(1.05)' : 'scale(0.95)')};
//   border: ${props =>
//     props.isCenter ? '2px solid var(--green)' : '1px solid var(--lightest-navy)'};
//   transition: all 0.3s ease-in-out;
// `;

// const Title = styled.h3`
//   margin-bottom: 5px;
//   font-size: 22px;
// `;

// const Company = styled.a`
//   font-size: 20px;
//   color: var(--green);
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Date = styled.p`
//   font-family: var(--font-mono);
//   font-size: var(--fz-xs);
//   color: var(--light-slate);
//   margin: 10px 0 20px;
// `;

// const Content = styled.div`
//   text-align: left;
//   font-size: var(--fz-lg);

//   ul {
//     list-style: disc;
//     padding-left: 20px;
//   }

//   li {
//     margin-bottom: 10px;
//   }
// `;

// const NavButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 30px;

//   button {
//     background-color: transparent;
//     border: 1px solid var(--green);
//     color: var(--green);
//     font-size: 16px;
//     padding: 10px 20px;
//     border-radius: 6px;
//     cursor: pointer;
//     transition: var(--transition);

//     &:hover {
//       background-color: var(--green-tint);
//     }

//     &:disabled {
//       opacity: 0.4;
//       cursor: not-allowed;
//     }
//   }
// `;

// const Jobs = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       jobs: allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
//         sort: { fields: [frontmatter___date], order: DESC }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//               company
//               range
//               url
//             }
//             html
//           }
//         }
//       }
//     }
//   `);

//   const jobs = data.jobs.edges;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const revealContainer = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   const cardWidth = 350;
//   const gap = 40;

//   useEffect(() => {
//     if (!prefersReducedMotion) {
//       sr.reveal(revealContainer.current, srConfig());
//     }
//   }, []);

//   const goPrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
//   const goNext = () => setCurrentIndex(prev => Math.min(prev + 1, jobs.length - 1));

//   // Calculate translateX to center the current card
//   const translateX = window.innerWidth / 2 - cardWidth / 2 - currentIndex * (cardWidth + gap);

//   return (
//     <Section id="jobs" ref={revealContainer}>
//       <Inner>
//         <h2 className="numbered-heading">Experience</h2>
//         <CarouselContainer>
//           <CarouselTrack translateX={translateX} cardWidth={cardWidth}>
//             {jobs.map((jobWrapper, index) => {
//               const job = jobWrapper.node;
//               const isCenter = index === currentIndex;
//               return (
//                 <Card key={index} isCenter={isCenter} cardWidth={cardWidth}>
//                   <Title>{job.frontmatter.title}</Title>
//                   <Company href={job.frontmatter.url} target="_blank" rel="noreferrer">
//                     @{job.frontmatter.company}
//                   </Company>
//                   <Date>{job.frontmatter.range}</Date>
//                   <Content dangerouslySetInnerHTML={{ __html: job.html }} />
//                 </Card>
//               );
//             })}
//           </CarouselTrack>
//         </CarouselContainer>
//         <NavButtons>
//           <button onClick={goPrev} disabled={currentIndex === 0}>
//             ⬅ Prev
//           </button>
//           <button onClick={goNext} disabled={currentIndex === jobs.length - 1}>
//             Next ➡
//           </button>
//         </NavButtons>
//       </Inner>
//     </Section>
//   );
// };

// export default Jobs;
