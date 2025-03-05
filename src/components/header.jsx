"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, User, Info } from "lucide-react"

export function Header() {
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/img/tezos-xtz-logo.png" alt="Tezos" className="h-8 w-8" />
            <span className="text-xl font-bold">TezOrbit</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#" className="text-white hover:text-gray-300">
              Drops
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Stats
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Create
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-[240px] rounded-lg bg-white/10 pl-10 pr-4 py-2 text-white placeholder-gray-400 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="rounded-full p-2 hover:bg-white/10">
            <Info className="h-5 w-5" />
          </button>
          <button
            onClick={() => router.push("/login")}
            className="rounded-md bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20"
          >
            Login
          </button>
          <button className="rounded-full p-2 hover:bg-white/10">
            <User className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-white/10">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}