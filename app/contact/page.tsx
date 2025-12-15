import { contactDetails } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 pb-24 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 pt-10 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-amber-200">
            Get involved
          </p>
          <h1 className="mt-4 text-4xl font-semibold">
            Partner with the Student Association of Business & Engineering.
          </h1>
          <p className="mt-4 text-slate-300">
            Whether you are a prospective member, alumni mentor, or corporate
            partner, we would love to connect. Drop your ASU email below and our
            outreach team will follow up within two business days.
          </p>
          <form className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="you@asu.edu"
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
            />
            <textarea
              placeholder="How would you like to collaborate?"
              className="min-h-[140px] rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-2xl bg-amber-300 px-8 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-slate-300">
          {contactDetails.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-white">{item.value}</p>
            </div>
          ))}
          <p className="text-xs text-slate-500">
            By submitting you agree to receive the SABE Monday Briefing. You can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
