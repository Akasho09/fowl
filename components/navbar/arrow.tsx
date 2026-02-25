"use client"
import { usePathname } from 'next/navigation'
import RightArrow from './rightArrow'
import { navs , nextNavMap} from './navData'

type NavRoute = typeof navs[number]["route"]

const FALLBACK = navs[0]
export function Arrow() {
  const pathname = usePathname()
  const next = nextNavMap[pathname as NavRoute] ?? FALLBACK
  return <RightArrow linkk={next.route}>{next.nav}</RightArrow>
}