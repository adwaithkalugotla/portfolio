import { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'

type Props = {
  title: string
  image: string
  href: string
  bullets: string[]
}

export default function ProjectCard({ title, image, href, bullets }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      })
    }
  }, [])

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener"
      className="block border rounded-lg overflow-hidden transition-shadow hover:shadow-2xl bg-white dark:bg-gray-800"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </a>
  )
}
