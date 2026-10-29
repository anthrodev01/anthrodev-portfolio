import afrixa640 from '../assets/images/afrixa-640.webp'
import afrixa1304 from '../assets/images/afrixa-1304.webp'
import afrixa2608 from '../assets/images/afrixa-2608.webp'
import kar640 from '../assets/images/kar-640.webp'
import kar1304 from '../assets/images/kar-1304.webp'
import kar2608 from '../assets/images/kar-2608.webp'
import sb640 from '../assets/images/smoothballot-640.webp'
import sb1304 from '../assets/images/smoothballot-1304.webp'
import sb1428 from '../assets/images/smoothballot-1428.webp'

export interface ProjectImage {
  /** Fallback src (the 1x desktop size). */
  src: string
  /** Ready-to-use srcset string. */
  srcSet: string
  /** Intrinsic size of `src`, used to reserve space and avoid layout shift. */
  width: number
  height: number
  alt: string
  /** CSS object-position used when the panel is cropped on small screens. */
  position: string
}

export interface Project {
  slug: string
  title: string
  /** Small caps line in the section header, e.g. "COMMERCE OPERATIONS PLATFORM". */
  category: string
  description: string
  tags: string[]
  /** Case-study route. These pages are built after the homepage is approved. */
  href: string
  /** Which side the text column sits on at desktop widths. */
  align: 'left' | 'right'
  image: ProjectImage
}

export const projects: Project[] = [
  {
    slug: 'afrixa',
    title: 'Afrixa',
    category: 'Commerce operations platform',
    description:
      'Bringing sales, inventory, finance and business operations together in one connected commerce platform.',
    tags: ['Product strategy', 'UX design', 'Interface systems'],
    href: '/work/afrixa',
    align: 'left',
    image: {
      src: afrixa1304,
      srcSet: `${afrixa640} 640w, ${afrixa1304} 1304w, ${afrixa2608} 2608w`,
      width: 1304,
      height: 680,
      alt: 'Afrixa dashboard showing daily sales, monthly revenue, orders, low stock items, a weekly sales chart and top-selling products.',
      position: 'left top',
    },
  },
  {
    slug: 'kar',
    title: 'KAR',
    category: 'Car sale mobile app',
    description:
      'Streamlining Car Buying and Selling Through Trust and Transparency',
    tags: ['UX design', 'Mobile Design', 'Product Design'],
    href: '/work/kar',
    align: 'right',
    image: {
      src: kar1304,
      srcSet: `${kar640} 640w, ${kar1304} 1304w, ${kar2608} 2608w`,
      width: 1304,
      height: 680,
      alt: 'KAR car marketplace app: a home feed of listed cars next to a welcome screen reading "Home for luxurious and quality automobiles".',
      position: '100% center',
    },
  },
  {
    slug: 'smoothballot',
    title: 'Smoothballot',
    category: 'Digital voting and participation',
    description:
      'Creating digital experiences that help organizations manage elections, contests and participation.',
    tags: ['Experience design', 'Usability', 'Design systems'],
    href: '/work/smoothballot',
    align: 'left',
    image: {
      src: sb1304,
      srcSet: `${sb640} 640w, ${sb1304} 1304w, ${sb1428} 1428w`,
      width: 1304,
      height: 621,
      alt: 'Smoothballot dashboard listing active, upcoming and completed elections and contests.',
      position: 'center center',
    },
  },
]
