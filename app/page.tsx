import Link from "next/link";
import { profile } from "./data";

export default function Home() {
  return (
    <div className="flex min-h-[60vh] flex-col justify-center">
      <pre className="mb-8 select-none text-xs leading-tight text-muted">
        {`hi there!`}
      </pre>

      <h1 className="text-3xl font-medium leading-snug tracking-tight md:text-4xl">
        i&apos;m angelina:
        <br />
        i build software & poke at ai.
      </h1>

      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        computer science @ university of toronto. i like
        agents, coffee, and making things that work.
      </p>

      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href="/about" className="link">
          about me →
        </Link>
        <Link href="/projects" className="link">
          see projects →
        </Link>
        <Link href="/contact" className="link">
          get in touch →
        </Link>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="link">
          resume ↗
        </a>
      </div>

      <pre className="mt-16 select-none text-[11px] leading-tight text-muted">
        {`     ~
      ~
    .---.
    \`---'=.
    |   | |
    |   |='
    \`---'   the good stuff lives in the nav. `}
      </pre>
    </div>
  );
}
