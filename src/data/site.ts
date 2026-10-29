export const site = {
  name: 'AnthroDev',
  email: 'oladejojibril1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/oladejo-jibril',
}

export interface NavItem {
  label: string
  href: string
}

// "Work" and "Contact" scroll within the homepage; About and Resume are routes
// that will be built after the homepage is approved.
export const navLeft: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
]
export const navRight: NavItem[] = [
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
]
