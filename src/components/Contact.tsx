import { site } from '../data/site'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="container contact__grid">
        <h2 id="contact-title" className="contact__title">
          <span className="line">Have a product</span>{' '}
          <span className="line">worth making</span>{' '}
          <span className="line accent">better?</span>
        </h2>

        <Reveal className="contact__details" delay={100}>
          <p className="contact__lede">
            I'm always interested in thoughtful product challenges and opportunities to create
            useful digital experiences.
          </p>
          <dl className="contact__list">
            <div className="contact__row">
              <dt>Email</dt>
              <dd>
                <a className="contact__link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="contact__row">
              <dt>LinkedIn</dt>
              <dd>
                <a
                  className="contact__link"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.linkedin}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
