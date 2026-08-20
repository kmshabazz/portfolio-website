import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#08090b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm">KS</span>
          <span className="hidden sm:inline">Kalifa Shabazz</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-300 sm:gap-7">
          <Link href="/#work" className="hover:text-white">Work</Link>
          <Link href="/#capabilities" className="hidden hover:text-white sm:inline">Capabilities</Link>
          <Link href="/#about" className="hidden hover:text-white sm:inline">About</Link>
          <a href="mailto:info@kmandcompany.com" className="rounded-full border border-white/15 px-4 py-2 font-medium text-white hover:border-[#b8f36b]/60 hover:bg-[#b8f36b]/10">Contact</a>
        </nav>
      </div>
    </header>
  );
}
