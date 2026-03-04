import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VALUES = ["v1", "v2", "v3", "v4"] as const;
const MILESTONES = ["m1", "m2", "m3", "m4", "m5", "m6"] as const;

export default function AboutPage() {
  const { t } = useTranslation("about");
  const storyRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const valuesRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const milestonesRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-navy-800 pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold-500" />
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">
                {t("hero.label")}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="mt-8 text-steel-300 text-lg leading-relaxed max-w-xl">
              {t("hero.sub")}
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="section-container">
          <div
            ref={storyRef}
            className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                {t("story.title")}
              </h2>
              <div className="h-0.5 w-12 bg-gold-500 mb-8" />
              <p className="text-steel-500 leading-relaxed mb-6">
                {t("story.p1")}
              </p>
              <p className="text-steel-500 leading-relaxed">{t("story.p2")}</p>
            </div>
            {/* Mission / Vision */}
            <div className="space-y-6">
              {(["mission", "vision"] as const).map((mv) => (
                <div key={mv} className="border-l-2 border-gold-500 pl-8 py-2">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-2">
                    {t(`${mv}.label`)}
                  </div>
                  <p className="text-navy-800 font-medium leading-relaxed text-lg">
                    {t(`${mv}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-steel-100">
        <div className="section-container">
          <SectionHeader label={t("values.label")} title={t("values.title")} />
          <div
            ref={valuesRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-200"
          >
            {VALUES.map((v, i) => (
              <div
                key={v}
                className="bg-white p-10 group hover:bg-navy-800 transition-all duration-300"
              >
                <div className="text-4xl font-black text-steel-100 font-display mb-6 group-hover:text-white/10 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-navy-800 mb-3 group-hover:text-white transition-colors">
                  {t(`values.${v}Title`)}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed group-hover:text-steel-300 transition-colors">
                  {t(`values.${v}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-800">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "1px 80px",
          }}
        />
        <div className="section-container relative z-10">
          <SectionHeader
            label={t("milestones.label")}
            title={t("milestones.title")}
            light
          />
          <div
            ref={milestonesRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
          >
            {MILESTONES.map((m) => (
              <div
                key={m}
                className="bg-navy-800 p-8 hover:bg-navy-950 transition-colors duration-200 group"
              >
                <div className="text-3xl font-black font-display text-gold-500 mb-4">
                  {t(`milestones.${m}Year`)}
                </div>
                <h4 className="font-display font-bold text-white mb-2">
                  {t(`milestones.${m}Title`)}
                </h4>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {t(`milestones.${m}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRANCHISE NETWORK ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Label + Title */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-gold-500" />
                <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">
                  Franchise Network
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight">
                Backed by SaasBizHub, California
              </h2>
              <div className="h-0.5 w-12 bg-gold-500 mb-8" />
              <p className="text-steel-500 leading-relaxed mb-6">
                Elite Solution USA LLC operates as an{" "}
                <strong className="text-navy-800 font-semibold">
                  official franchise of SaasBizHub
                </strong>{" "}
                — a software operations company headquartered in California,
                USA. This franchise relationship is a deliberate strategic
                choice: it gives our clients access to a proven infrastructure,
                validated delivery frameworks, and the operational credibility
                of an established US-based parent organization.
              </p>
              <p className="text-steel-500 leading-relaxed">
                Through this network, every project we deliver is supported by
                SaasBizHub's quality standards, enterprise tooling, and
                governance protocols — meaning our clients benefit from both
                local expertise and the backing of a US-headquartered technology
                group.
              </p>
            </div>

            {/* Right: Credential cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-steel-200">
              {/* Card 1 */}
              <div className="bg-white p-8">
                <div className="flex items-center justify-center w-10 h-10 bg-gold-500/10 border border-gold-500/30 mb-5">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-2">
                  Official Status
                </div>
                <h4 className="font-display font-bold text-navy-800 mb-2">
                  Authorized Franchise
                </h4>
                <p className="text-steel-500 text-sm leading-relaxed">
                  Elite Solution USA holds official franchise authorization from
                  SaasBizHub, operating under its quality and delivery
                  standards.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8">
                <div className="flex items-center justify-center w-10 h-10 bg-gold-500/10 border border-gold-500/30 mb-5">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-2">
                  Headquarters
                </div>
                <h4 className="font-display font-bold text-navy-800 mb-2">
                  California, USA
                </h4>
                <p className="text-steel-500 text-sm leading-relaxed">
                  SaasBizHub is incorporated and headquartered in the state of
                  California, USA, bringing US legal jurisdiction and enterprise
                  credibility.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8">
                <div className="flex items-center justify-center w-10 h-10 bg-gold-500/10 border border-gold-500/30 mb-5">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"
                    />
                  </svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-2">
                  Network
                </div>
                <h4 className="font-display font-bold text-navy-800 mb-2">
                  Global Operations
                </h4>
                <p className="text-steel-500 text-sm leading-relaxed">
                  As part of the SaasBizHub network, we leverage shared
                  infrastructure, tooling, and best practices across an
                  international delivery model.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-navy-800 p-8">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-4">
                  What This Means For You
                </div>
                <p className="text-steel-300 text-sm leading-relaxed mb-4">
                  When you work with Elite Solution USA, you are engaging with
                  an organization that carries the governance and accountability
                  of a US-incorporated software company — not an independent
                  agency.
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold-400">
                    SaasBizHub · California, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
