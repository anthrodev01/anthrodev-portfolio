interface ComingSoonProps {
  title: string
}

/**
 * Temporary placeholder for routes that are not built yet (About, Resume and the
 * case studies) so every homepage link resolves to something sensible.
 * Replace each with the real page once the homepage is approved.
 */
export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className="coming-soon container" aria-labelledby="coming-soon-title">
      <p className="coming-soon__eyebrow">In progress</p>
      <h1 id="coming-soon-title" className="coming-soon__title">
        {title}
      </h1>
      <p className="coming-soon__text">This page is being designed and built next.</p>
      <a className="text-link" href="/">
        <span className="text-link__label">Back to homepage</span>
      </a>
    </section>
  )
}
