import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import Reveal from './Reveal'

interface ProjectSectionProps {
  project: Project
  /** 1-based position, shown as "01", "02"… */
  index: number
  /** Eagerly load the first image only if it could be above the fold. */
  priority?: boolean
}

export default function ProjectSection({ project, index, priority = false }: ProjectSectionProps) {
  const { slug, title, category, description, tags, href, align, image } = project
  const num = String(index).padStart(2, '0')
  const headingId = `project-${slug}-title`

  return (
    <article
      id={slug}
      className={`project project--${align}`}
      aria-labelledby={headingId}
      style={{ '--media-position': image.position } as CSSProperties}
    >
      <div className="container">
       <div className="project__inner">
        <div className="project__meta">
          <span className="project__num" aria-hidden="true">
            {num}
          </span>
          <span className="project__category">{category}</span>
        </div>

        <Reveal className="project__body">
          <h2 id={headingId} className="project__title">
            {title}
          </h2>
          <p className="project__desc">{description}</p>
          <ul className="tags" aria-label={`${title} focus areas`}>
            {tags.map((tag) => (
              <li key={tag} className="tags__item">
                {tag}
              </li>
            ))}
          </ul>
          <a className="text-link" href={href} aria-label={`Explore ${title} case study`}>
            <span className="text-link__label">Explore case study</span>
            <ArrowUpRight className="text-link__icon" aria-hidden="true" size={12} strokeWidth={1.75} />
          </a>
        </Reveal>

        <Reveal className="project__media-wrap" delay={80}>
          {/* Keyboard users reach the case study via the text link above. */}
          <a className="project__media" href={href} tabIndex={-1}>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(min-width: 1390px) 1304px, calc(100vw - 32px)"
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          </a>
        </Reveal>
       </div>
      </div>
    </article>
  )
}
