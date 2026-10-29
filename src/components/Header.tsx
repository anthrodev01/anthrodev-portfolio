import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, MouseEvent as ReactMouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import logoMark from '../assets/images/logo-mark.png'
import { navLeft, navRight } from '../data/site'
import type { NavItem } from '../data/site'

function NavLink({ item, onClick }: { item: NavItem; onClick: () => void }) {
  return (
    <li>
      <a className="primary-nav__link" href={item.href} onClick={onClick}>
        {item.label}
      </a>
    </li>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => setOpen(false), [])

  // On the homepage the logo should scroll to the top instead of reloading.
  const onHomeClick = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>) => {
      setOpen(false)
      if (window.location.pathname === '/') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        history.replaceState(null, '', '/')
      }
    },
    [],
  )

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  // Close on Escape (returning focus to the toggle) and when resized to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  // Keep Tab focus inside the header (toggle + menu links) while the menu is open.
  const trapFocus = (e: KeyboardEvent<HTMLElement>) => {
    if (!open || e.key !== 'Tab' || !headerRef.current) return
    const focusables = Array.from(
      headerRef.current.querySelectorAll<HTMLElement>('a[href], button'),
    ).filter((el) => el.offsetParent !== null)
    if (focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return (
    <header
      className={`site-header${open ? ' is-open' : ''}`}
      ref={headerRef}
      onKeyDown={trapFocus}
    >
      <div className="site-header__inner">
        {/* Mobile-only brand + toggle. Hidden from desktop via CSS. */}
        <a
          className="site-header__brand"
          href="/"
          aria-label="AnthroDev, home"
          onClick={onHomeClick}
        >
          <img src={logoMark} alt="" width={48} height={48} />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>

        <nav id="primary-nav" className="primary-nav" aria-label="Primary">
          <ul className="primary-nav__list">
            {navLeft.map((item) => (
              <NavLink key={item.label} item={item} onClick={close} />
            ))}
            <li className="primary-nav__logo">
              <a href="/" aria-label="AnthroDev, home" onClick={onHomeClick}>
                <img src={logoMark} alt="" width={69} height={69} />
              </a>
            </li>
            {navRight.map((item) => (
              <NavLink key={item.label} item={item} onClick={close} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
