import styled from 'styled-components'
import { theme } from '../styles/GlobalStyle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <Main>
      <Hero>
        <HeroEyebrow>hi, i'm stephanie</HeroEyebrow>
        <HeroTitle>UX Researcher</HeroTitle>
        <HeroSub>
          Georgia Tech Master of Human-Computer Interaction alum.
          <br />I uncover user behaviors, needs, and motivations to make systems more intuitive.
        </HeroSub>
      </Hero>

      <ProjectsSection>
        <SectionLabel>Selected Work</SectionLabel>
        <Grid>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </ProjectsSection>
    </Main>
  )
}

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2.5rem 6rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1.25rem 4rem;
  }
`

const Hero = styled.section`
  padding: 5rem 0 4rem;
  max-width: 680px;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 3rem 0 2.5rem;
  }
`

const HeroEyebrow = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textMuted};
  margin-bottom: 0.75rem;
  font-style: italic;
`

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: clamp(3rem, 7vw, 5rem);
  line-height: 1.05;
  margin-bottom: 1.25rem;
`

const HeroSub = styled.p`
  font-size: 1.05rem;
  color: ${theme.colors.textMuted};
  line-height: 1.7;
`

const ProjectsSection = styled.section``

const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.textMuted};
  margin-bottom: 1.5rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`
