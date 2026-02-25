import Link from 'next/link'
import { navs } from './navData'

export function NavItems({ pathname }: { pathname: string }) {
  return (
    <>
      {navs.map((n, i) => (
        <Link href={n.route} key={n.route} prefetch={false}>
          <div className="flex items-center py-2 md:py-0 md:mb-4 group text-xs z-100">
            <div className={`w-5 h-5 flex-shrink-0 flex items-center justify-center
                             font-bold border mr-3 md:m-1 ${n.color}
                             transition-transform duration-200 group-hover:scale-110`}>
              {i + 1}
            </div>
            <span className={`font-semibold tracking-wide transition-colors duration-200
                              ${pathname === n.route ? '!text-red-500' : 'hover:text-red-500'}`}>
              {n.nav}
            </span>
          </div>
        </Link>
      ))}
    </>
  )
}