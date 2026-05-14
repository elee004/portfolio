import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../styles/GlobalStyle'

export default function ProjectCard({ project }) {
  const isInternal = !!project.caseStudy
  const isExternal = !!project.externalLink

  if (isInternal) {
    return (
      <CardInternalLink to={`/projects/${project.id}`}>
        <CardInner project={project} />
      </CardInternalLink>
    )
  }

  if (isExternal) {
    return (
      <CardExternalLink href={project.externalLink} target="_blank" rel="noopener noreferrer">
        <CardInner project={project} externalLabel={project.externalLabel} />
      </CardExternalLink>
    )
  }

  return (
    <CardDiv>
      <CardInner project={project} />
    </CardDiv>
  )
}

function CardInner({ project, externalLabel }) {
  return (
    <>
      <ImageWrapper>
        <img src={project.image} alt={project.title} loading="lazy" />
        {project.comingSoon && <Badge>Coming Soon</Badge>}
        {externalLabel && <Badge>{externalLabel} ↗</Badge>}
      </ImageWrapper>
      <CardBody>
        <RoleLabel>{project.role}</RoleLabel>
        <CardTitle>{project.title}</CardTitle>
        <CardDesc>{project.description}</CardDesc>
        <Tags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </CardBody>
    </>
  )
}

const cardBase = `
  display: flex;
  flex-direction: column;
  background: ${theme.colors.cardBg};
  border: 1px solid ${theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }
`

const CardInternalLink = styled(Link)`${cardBase}`
const CardExternalLink = styled.a`${cardBase}`
const CardDiv = styled.div`
  ${cardBase}
  cursor: default;
  &:hover {
    transform: none;
    box-shadow: none;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 542 / 468;
  overflow: hidden;
  background: ${theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CardInternalLink}:hover &,
  ${CardExternalLink}:hover & {
    img { transform: scale(1.03); }
  }
`

const Badge = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: rgba(26, 26, 26, 0.75);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
`

const CardBody = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
`

const RoleLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
`

const CardTitle = styled.h3`
  font-family: ${theme.fonts.serif};
  font-size: 1.2rem;
  line-height: 1.3;
`

const CardDesc = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  line-height: 1.6;
  margin-top: 0.2rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
`

const Tag = styled.span`
  font-size: 0.72rem;
  background: ${theme.colors.bg};
  border: 1px solid ${theme.colors.border};
  border-radius: 20px;
  padding: 0.2rem 0.65rem;
  color: ${theme.colors.textMuted};
`
