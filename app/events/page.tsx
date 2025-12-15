import { events } from "@/lib/data";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 pb-24 text-white">
      <div className="mx-auto max-w-4xl pt-10">
        <p className="text-sm uppercase tracking-[0.4em] text-amber-200">
          Gatherings
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Upcoming events</h1>
        <p className="mt-4 text-slate-300">
          SABE programs are open to all majors and class years. RSVP links are
          posted inside the Monday Briefing newsletter one month before each
          event.
        </p>
        <div className="mt-10 divide-y divide-white/5 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/60 via-slate-900 to-black p-8 shadow-2xl shadow-black/30">
          {events.map((event) => (
            <article
              key={event.title}
              className="grid gap-6 py-6 md:grid-cols-[120px_1fr_160px]"
            >
              <div>
                <p className="text-3xl font-semibold text-white">
                  {event.date}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  2025
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {event.title}
                </h2>
                <p className="mt-2 text-sm text-slate-300">{event.detail}</p>
              </div>
              <div className="text-sm text-slate-300 md:text-right">
                <p>{event.location}</p>
                <p className="mt-1 text-amber-200">6:00 PM - 8:30 PM</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
