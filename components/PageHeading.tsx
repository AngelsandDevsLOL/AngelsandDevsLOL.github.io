export default function PageHeading({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <header className="mb-10">
      <h2 className="text-2xl font-medium lowercase tracking-tight">{title}</h2>
      {note ? <p className="mt-2 text-sm text-muted">{note}</p> : null}
      <div className="mt-5 h-px w-full bg-line" />
    </header>
  );
}
