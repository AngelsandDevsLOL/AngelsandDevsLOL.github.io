"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/app/data";

const nav = [
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/contact", label: "contact" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .toUpperCase();

export default function Sidebar() {
  const pathname = usePathname();
  const [imgOk, setImgOk] = useState(true);

  return (
    <aside className="sticky top-0 flex h-screen w-1/4 shrink-0 flex-col bg-sidebar px-6 py-10 text-paper">
      {/* top: profile picture + name (also the home link) */}
      <Link href="/" className="group block text-center">
        <span className="mx-auto mb-4 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5">
          {imgOk ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/assets/profile.png"
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={() => setImgOk(false)}
            />
          ) : (
            <span className="text-2xl font-medium text-sidebar-muted">
              {initials}
            </span>
          )}
        </span>
        <h1 className="text-2xl font-medium lowercase tracking-tight text-paper">
          {profile.name.toLowerCase()}
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-sidebar-muted">
          Computer Science · Statistics
          <br />@ University of Toronto
        </p>
      </Link>

      {/* center: vertical, centered nav (nudged down a bit, tighter spacing) */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-2.5 pt-12 pb-10 text-base">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`lowercase tracking-wide transition-colors ${
                active
                  ? "text-paper underline decoration-accent decoration-2 underline-offset-8"
                  : "text-sidebar-muted hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* bottom: social icon buttons + resume */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sidebar-muted transition-colors hover:border-paper hover:text-paper"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sidebar-muted transition-colors hover:border-paper hover:text-paper"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sidebar-muted transition-colors hover:border-paper hover:text-paper"
          >
            <MailIcon />
          </a>
        </div>

        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-5 py-1.5 text-sm text-sidebar-muted transition-colors hover:border-paper hover:bg-paper hover:text-sidebar"
        >
          resume ↗
        </a>
      </div>
    </aside>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.8 18 5.1 18 5.1c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
