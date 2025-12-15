import { leaders } from "@/lib/data";

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 pb-24 text-white">
      <div className="mx-auto max-w-5xl pt-10">
        <p className="text-sm uppercase tracking-[0.4em] text-amber-200">
          Leadership
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Meet the SABE team</h1>
        <p className="mt-4 text-slate-300">
          SABE is entirely student-run with support from faculty mentors across
          W. P. Carey, the Fulton Schools, and the Edson Entrepreneurship + Innovation
          Institute. Each director leads a portfolio of programs that blend business
          rigor and engineering craft.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="rounded-2xl border border-white/10 bg-black/30 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {leader.name}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                {leader.role}
              </p>
              <p className="mt-3 text-sm text-slate-300">{leader.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
