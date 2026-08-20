export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© 2026 Kalifa Shabazz. Analytics Platform · Measurement · Growth Systems.</p>
        <div className="flex gap-5">
          <a className="hover:text-white" href="mailto:kalifamshabazz@gmail.com">Email</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/kalifashabazz/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
