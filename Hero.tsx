import { ArrowDownRight } from 'lucide-react'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <h1 id="hero-title" className="hero__title">
          <span className="line">I design digital products</span>{' '}
          <span className="line">
            that make <span className="accent">complex</span>
          </span>{' '}
          <span className="line accent">things feel simple.</span>
        </h1>

        <Reveal as="p" className="hero__lede" delay={120}>
          I'm Jibril, a product designer focused on turning complex workflows and business
          challenges into clear, intuitive digital experiences.
        </Reveal>
      </div>

      <div className="hero__cta">
        <a className="btn" href="#work">
          <span>Dive In</span>
          <ArrowDownRight className="btn__icon" aria-hidden="true" size={10} strokeWidth={2} />
        </a>
      </div>
    </section>
  )
}
