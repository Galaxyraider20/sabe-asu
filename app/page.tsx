const initiatives = [
  {
    title: "Professional Development Labs",
    description:
      "Students workshop resumes, stories, and interview reps with mentors from Fortune 500 companies and fast-growing startups.",
  },
  {
    title: "Innovation Sprints",
    description:
      "Cross-disciplinary teams tackle real business and engineering challenges from our industry partners in two-week design cycles.",
  },
  {
    title: "Community Projects",
    description:
      "We offer consulting-style support for Phoenix nonprofits that need both strategic thinking and technical prototyping.",
  },
];

const stats = [
  { label: "Active members", value: "240+" },
  { label: "Corporate partners", value: "18" },
  { label: "Ventures launched", value: "12" },
];

const events = [
  {
    date: "Feb 12",
    title: "Consulting + Product Night",
    location: "McCord Hall 210",
    detail: "Panel with Deloitte Digital, Intel, and Carvana PMs.",
  },
  {
    date: "Mar 4",
    title: "Pitch Studio",
    location: "Student Pavilion 302",
    detail: "Hands-on presentation lab with seed-stage founders.",
  },
  {
    date: "Apr 16",
    title: "Sun Devil Showcase",
    location: "Fusion on First",
    detail: "Annual demo event highlighting student-built ventures.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-amber-500/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_60%)] opacity-30 blur-3xl" />

        <header className="relative mx-auto flex max-w-6xl flex-col gap-4 px-6 pb-20 pt-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm tracking-[0.3em] text-amber-200">
              Arizona State University
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Student Association of Business & Engineering
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              SABE unites builders, strategists, and innovators who want to
              solve complex problems with both a spreadsheet and a CAD model. We
              design immersive experiences that help Sun Devils ship ideas that
              matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href="#events"
                className="rounded-full bg-white/90 px-6 py-3 text-slate-900 transition hover:bg-white"
              >
                Upcoming events
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/40 px-6 py-3 text-white transition hover:border-amber-300/60 hover:text-amber-200"
              >
                Partner with SABE
              </a>
            </div>
          </div>
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-200">
              This semester
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Build better business + engineering leaders.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              From venture studio cohorts to site visits at Intel Chandler,
              SABE offers pathways to explore entrepreneurship, systems design,
              and business strategy through the same lens.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-black/20 px-4 py-3 text-center shadow-lg shadow-black/30"
                >
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24">
        <section className="rounded-3xl border border-white/5 bg-white/5 p-10 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-amber-200">
                Mission
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Where emerging builders get serious.
              </h2>
            </div>
            <p className="text-lg text-slate-200 md:max-w-xl">
              SABE connects W. P. Carey and Ira A. Fulton Schools through
              shared learning, rapid experimentation, and career pathways that
              reward interdisciplinary thinking. Every program is co-led by
              students who have shipped products, launched ventures, or landed
              roles at top firms.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {initiatives.map((initiative) => (
              <article
                key={initiative.title}
                className="rounded-2xl border border-white/5 bg-slate-900/40 p-5"
              >
                <h3 className="text-xl font-semibold text-white">
                  {initiative.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {initiative.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="events"
          className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 via-slate-900 to-slate-950 p-10 shadow-2xl shadow-black/30"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-amber-200">
                Gatherings
              </p>
              <h2 className="text-3xl font-semibold">Upcoming events</h2>
            </div>
            <p className="text-sm text-slate-300 md:max-w-md">
              Programs are open to all majors. RSVP links go live one month prior
              to each date.
            </p>
          </div>
          <div className="mt-8 divide-y divide-white/5">
            {events.map((event) => (
              <article
                key={event.title}
                className="grid gap-6 py-6 md:grid-cols-[120px_1fr_200px]"
              >
                <div>
                  <p className="text-2xl font-semibold text-white">
                    {event.date}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    2025
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{event.detail}</p>
                </div>
                <div className="text-sm text-slate-300 md:text-right">
                  <p>{event.location}</p>
                  <p className="mt-1 text-amber-200">6:00 PM - 8:30 PM</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-white/5 bg-white/5 p-10 shadow-2xl shadow-black/20"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-amber-200">
                Get involved
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Join the Student Association of Business & Engineering.
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                Subscribe to our Monday Briefing to receive open applications,
                partner opportunities, and design sprint prompts straight to
                your inbox.
              </p>
              <form className="mt-6 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@asu.edu"
                  className="flex-1 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-amber-300 px-8 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  Stay updated
                </button>
              </form>
              <p className="mt-2 text-xs text-slate-400">
                No spam. We send one concise email each week while classes are in
                session.
              </p>
            </div>
            <div className="space-y-6 rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                  Contact
                </p>
                <p className="mt-2 text-white">
                  sabe@asu.edu | @asu_sabe | 480-555-0147
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                  Office hours
                </p>
                <p className="mt-2 text-white">
                  Tuesdays 1-4 PM | Tooker House Innovation Hub
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                  Partners
                </p>
                <p className="mt-2 text-white">
                  Intel | Deloitte Digital | Honeywell | Carvana
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                  Follow along
                </p>
                <p className="mt-2 text-white">
                  LinkedIn / Instagram / Sun Devil Sync: search "SABE"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/40 py-8 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} Student Association of Business &
        Engineering | Tempe, AZ
      </footer>
    </div>
  );
}
