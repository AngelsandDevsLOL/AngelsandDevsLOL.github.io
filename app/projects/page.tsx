import PageHeading from "@/components/PageHeading";
import { projects } from "../data";

export default function Projects() {
  return (
    <div>
      <PageHeading
        title="projects"
        note="things i built for fun, hackathons & datathons."
      />

      <div className="space-y-9">
        {projects.map((project) => (
          <article key={project.name} className="border-l border-line pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">{project.name}</h3>
              <span className="text-xs text-muted">{project.date}</span>
            </div>
            <p className="mt-0.5 text-xs text-accent">{project.stack}</p>
            <ul className="mt-3 space-y-2">
              {project.points.map((p, i) => (
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
