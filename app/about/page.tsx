import PageHeading from "@/components/PageHeading";
import { education, achievements, leadership } from "../data";

export default function About() {
  return (
    <div>
      <PageHeading title="about" note="who, where, and a bit of why." />

      <div className="space-y-5 text-sm leading-relaxed">
        <p>
          i&apos;m a computer science student at the university of toronto with a
          soft spot for ai agents, full-stack engineering, and tidy software
          design. i like taking messy problems, from a figma sketch
          or a raw dataset all the way to something deployed that people
          actually use.
        </p>
        <p>
          other than code, i have a dog, love food, and can&apos;t take care of plants
        </p>
      </div>

      {/* education */}
      <section className="mt-12">
        <h3 className="mb-4 text-xs uppercase tracking-widest text-muted">
          education
        </h3>
        <div className="border-l border-line pl-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-medium">{education.school}</p>
            <p className="text-xs text-muted">{education.dates}</p>
          </div>
          <p className="text-sm text-muted">{education.degree}</p>
          <p className="mt-1 text-xs text-muted">cGPA: {education.gpa}</p>
        </div>
      </section>

      {/* leadership */}
      <section className="mt-12">
        <h3 className="mb-4 text-xs uppercase tracking-widest text-muted">
          leadership
        </h3>
        <div className="space-y-6">
          {leadership.map((l) => (
            <div key={l.org} className="border-l border-line pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">{l.org}</p>
                <p className="text-xs text-muted">{l.dates}</p>
              </div>
              <p className="text-sm text-muted">{l.role}</p>
              <ul className="mt-2 space-y-1.5">
                {l.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* achievements */}
      <section className="mt-12">
        <h3 className="mb-4 text-xs uppercase tracking-widest text-muted">
          achievements
        </h3>
        <ul className="space-y-2">
          {achievements.map((a, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-accent">★</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
