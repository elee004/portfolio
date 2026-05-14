import styled from 'styled-components'
import { theme } from '../styles/GlobalStyle'

const experience = [
  { role: 'UX Designer', company: 'JPMorgan Chase', detail: 'Consumer Bank Products' },
  { role: 'User Experience Researcher III', company: 'FanDuel', detail: '' },
  { role: 'User Experience Researcher', company: 'C3.ai', detail: '' },
  { role: 'UX Researcher', company: 'RealityMedia.digital', detail: '' },
  { role: 'UX Researcher', company: 'The Workplace Playbook VR', detail: '' },
  { role: 'Head Teaching Assistant', company: 'Georgia Tech', detail: 'CS 3001A: Computing + Society' },
]

const interests = ['AI & machine learning', 'Developer experience', 'Extended reality (XR)', 'Neurodiversity inclusion']

export default function About() {
  return (
    <Main>
      <Header>
        <Eyebrow>About Me</Eyebrow>
        <Title>Researcher. Designer. Dog mom.</Title>
      </Header>

      <Grid>
        <Bio>
          <p>
            I'm a UX enthusiast with a clinical psychology background, currently working on
            consumer banking products at JPMorgan Chase. I believe great design starts with
            deep empathy — uncovering the behaviors, needs, and motivations behind how people
            interact with systems.
          </p>
          <p>
            My background spans enterprise AI, social VR, accessibility, and mental health
            — always with a focus on making technology work for the humans who use it.
          </p>
          <p>
            Outside of work you'll find me doing pilates, walking my dog Tori, or getting
            lost in an embroidery project.
          </p>

          <InterestsBlock>
            <BlockLabel>Research Interests</BlockLabel>
            <InterestList>
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </InterestList>
          </InterestsBlock>
        </Bio>

        <Sidebar>
          <BlockLabel>Experience</BlockLabel>
          <ExpList>
            {experience.map((item, i) => (
              <ExpItem key={i}>
                <ExpRole>{item.role}</ExpRole>
                <ExpCompany>
                  {item.company}
                  {item.detail && <span> — {item.detail}</span>}
                </ExpCompany>
              </ExpItem>
            ))}
          </ExpList>

          <BlockLabel style={{ marginTop: '2.5rem' }}>Education</BlockLabel>
          <ExpItem>
            <ExpRole>Master of Human-Computer Interaction</ExpRole>
            <ExpCompany>Georgia Institute of Technology</ExpCompany>
          </ExpItem>
        </Sidebar>
      </Grid>
    </Main>
  )
}

const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2.5rem 6rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 2.5rem 1.25rem 4rem;
  }
`

const Header = styled.div`
  margin-bottom: 3.5rem;
`

const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.textMuted};
  margin-bottom: 0.75rem;
`

const Title = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 4rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    font-size: 1.05rem;
    line-height: 1.75;
    color: ${theme.colors.text};
  }
`

const InterestsBlock = styled.div`
  margin-top: 0.5rem;
`

const BlockLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.75rem;
`

const InterestList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    font-size: 0.875rem;
    background: ${theme.colors.cardBg};
    border: 1px solid ${theme.colors.border};
    border-radius: 20px;
    padding: 0.3rem 0.85rem;
    color: ${theme.colors.textMuted};
  }
`

const Sidebar = styled.div``

const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const ExpItem = styled.div``

const ExpRole = styled.p`
  font-size: 0.925rem;
  font-weight: 500;
  color: ${theme.colors.text};
`

const ExpCompany = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  margin-top: 0.1rem;

  span {
    color: ${theme.colors.textMuted};
  }
`
