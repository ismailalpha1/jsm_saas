import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import AILearningSection from "@/components/ComponentHero";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* ======================================================= */}
      {/* Global Background */}
      {/* ======================================================= */}

      <div className="pointer-events-none fixed inset-0">
        {/* Main AI glow */}
        <div className="absolute left-1/2 top-0 h-[650px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[150px]" />

        {/* Cyan glow */}
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

        {/* Fuchsia glow */}
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ======================================================= */}
      {/* Page Content */}
      {/* ======================================================= */}

      <div className="relative z-10">
        {/* ===================================================== */}
        {/* Hero */}
        {/* ===================================================== */}

        <AILearningSection />

        {/* ===================================================== */}
        {/* Popular Classes */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Section Header */}
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/[0.07] px-3 py-1.5 text-xs font-medium text-violet-300">
                <Sparkles className="h-3.5 w-3.5" />
                Explore learning
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Popular Classes
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/35 sm:text-base">
                Discover AI-powered lessons and find a companion that matches
                the way you want to learn.
              </p>
            </div>

            {/* View all */}
            <Link
              href="/companions"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white/40 transition-colors duration-300 hover:text-white"
            >
              View all companions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Cards */}
          {companions.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {companions.map((companion) => (
                <CompanionCard key={companion.id} {...companion} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No companions yet"
              description="Be the first to create an AI learning companion."
              href="/companions/new"
              action="Create companion"
            />
          )}
        </section>

        {/* ===================================================== */}
        {/* Recent Sessions */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Your learning activity
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Continue learning
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/35 sm:text-base">
              Pick up where you left off and keep building your knowledge.
            </p>
          </div>

          {/* Content */}
          <div>
            {/* Recent Sessions */}
            <CompanionsList
              title="Recently completed sessions"
              companions={recentSessionsCompanions}
              classNames="w-full"
            />
          </div>
           <div>
               {/* CTA */}
            <CTA />
           </div>
         
        </section>
      </div>
    </section>
  );
};

/* =============================================================== */
/* Empty State */
/* =============================================================== */

function EmptyState({
  title,
  description,
  href,
  action,
}: {
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/80 px-6 py-16 text-center backdrop-blur-xl">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/15 bg-violet-500/[0.08]">
          <Sparkles className="h-5 w-5 text-violet-400" />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>

        <p className="mx-auto mt-2 max-w-md text-sm text-white/35">
          {description}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
        >
          {action}

          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default Page;
