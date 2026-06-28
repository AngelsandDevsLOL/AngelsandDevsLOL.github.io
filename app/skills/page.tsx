import PageHeading from "@/components/PageHeading";
import { skills } from "../data";

export default function Skills() {
  return (
    <div>
      <PageHeading title="skills" note="the toolbox, roughly grouped." />

      <div className="space-y-8">
        {skills.map((group) => (
          <section key={group.group}>
            <h3 className="mb-3 text-xs uppercase tracking-widest text-muted">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-line px-2.5 py-1 text-xs text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
