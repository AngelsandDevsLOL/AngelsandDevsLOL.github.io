import PageHeading from "@/components/PageHeading";
import { experience } from "../data";

export default function Work() {
  return (
    <div>
      <PageHeading title="work" note="places i've engineered things." />

      <div className="space-y-10">
        {experience.map((job) => (
          <article key={job.org} className="border-l border-line pl-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-medium leading-tight">{job.role}</h3>
                <p className="text-sm text-accent">{job.org}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs text-accent">{job.dates}</p>
                <p className="text-xs text-accent">{job.location}</p>
              </div>
            </div>
            <ul className="mt-3 space-y-2">
              {job.points.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-0.5 text-accent">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
