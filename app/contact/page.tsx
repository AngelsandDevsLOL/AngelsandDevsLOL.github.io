import PageHeading from "@/components/PageHeading";
import { profile } from "../data";

const links = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "github", value: profile.githubHandle, href: profile.github },
  { label: "linkedin", value: profile.linkedinHandle, href: profile.linkedin },
  { label: "phone", value: profile.phone, href: `tel:${profile.phone}` },
];

export default function Contact() {
  return (
    <div>
      <PageHeading title="contact" note="say hi, i don't bite" />

      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted">
        open to internships, collaborations, and the occasional &quot;hey, want
        to build this?&quot;. easiest way to reach me is email.
      </p>

      <dl className="space-y-4">
        {links.map((l) => (
          <div key={l.label} className="flex flex-wrap items-baseline gap-x-4">
            <dt className="w-20 shrink-0 text-xs uppercase tracking-widest text-muted">
              {l.label}
            </dt>
            <dd>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="link text-sm"
              >
                {l.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <a
        href={profile.resume}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block border border-ink px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper"
      >
        download resume ↗
      </a>

      <pre className="mt-6 select-none text-[11px] leading-tight text-muted">
        {`  .=%%=.
,|\`=%%='|
||      |   talk soon
\`|      |
  \`-__-'`}
      </pre>
    </div>
  );
}
