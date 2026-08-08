import CompanionsList from "@/components/CompanionsList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getUserCompanions,
  getUserSessions,
} from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import {
  BookOpen,
  Clock3,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";
import { redirect } from "next/navigation";

const Profile = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id, 10);

  const firstName = user.firstName || "Learner";
  const lastName = user.lastName || "";
  const email = user.emailAddresses[0]?.emailAddress || "";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* ========================================================= */}
      {/* Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0">
        {/* Main glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[140px]" />

        {/* Cyan glow */}
        <div className="absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />

        {/* Fuchsia glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/[0.04] blur-[130px]" />

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

      {/* ========================================================= */}
      {/* Page */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* ======================================================= */}
        {/* Profile Header */}
        {/* ======================================================= */}

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8 lg:p-10">
          {/* Header glow */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* User */}
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 opacity-40 blur-md" />

                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10">
                  {user.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={`${firstName}'s profile`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserRound className="h-8 w-8 text-violet-300" />
                  )}
                </div>

                {/* Online indicator */}
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-4 border-[#0b0b10] bg-emerald-400" />
              </div>

              {/* User info */}
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/[0.07] px-3 py-1 text-xs font-medium text-violet-300">
                  <Sparkles className="h-3 w-3" />
                  Your learning profile
                </div>

                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {firstName} {lastName}
                </h1>

                <p className="mt-1 text-sm text-white/35">{email}</p>
              </div>
            </div>

            {/* Quick status */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                <Sparkles className="h-4 w-4 text-emerald-400" />
              </div>

              <div>
                <p className="text-xs font-medium text-white/70">
                  Keep learning
                </p>

                <p className="text-[11px] text-white/30">
                  Your AI companions are ready
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* Stats */}
        {/* ======================================================= */}

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sessions */}
          <StatCard
            icon={<BookOpen className="h-5 w-5" />}
            value={sessionHistory.length}
            label="Lessons completed"
            description="Recent learning sessions"
            accent="violet"
          />

          {/* Companions */}
          <StatCard
            icon={<UsersRound className="h-5 w-5" />}
            value={companions.length}
            label="Companions created"
            description="Your personal AI teachers"
            accent="cyan"
          />

          {/* Learning */}
          <StatCard
            icon={<Clock3 className="h-5 w-5" />}
            value="∞"
            label="Learning possibilities"
            description="Explore anything you want"
            accent="fuchsia"
          />
        </section>

        {/* ======================================================= */}
        {/* Learning History */}
        {/* ======================================================= */}

        <section className="mt-8">
          <Accordion type="multiple" className="space-y-4">
            {/* Recent Sessions */}
            <AccordionItem
              value="recent"
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/80 px-6 shadow-xl shadow-black/10 backdrop-blur-xl sm:px-8"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline [&>svg]:text-white/30">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-violet-400" />

                    <span className="text-lg font-semibold text-white sm:text-xl">
                      Recent Sessions
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-normal text-white/30">
                    Continue where you left off
                  </p>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-6">
                <CompanionsList
                  title="Recent Sessions"
                  companions={sessionHistory}
                />
              </AccordionContent>
            </AccordionItem>

            {/* My Companions */}
            <AccordionItem
              value="companions"
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/80 px-6 shadow-xl shadow-black/10 backdrop-blur-xl sm:px-8"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline [&>svg]:text-white/30">
                <div>
                  <div className="flex items-center gap-2">
                    <UsersRound className="h-4 w-4 text-cyan-400" />

                    <span className="text-lg font-semibold text-white sm:text-xl">
                      My Companions
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-white/40">
                      {companions.length}
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-normal text-white/30">
                    Your personalized AI teachers
                  </p>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-6">
                <CompanionsList title="My Companions" companions={companions} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
};

/* =============================================================== */
/* Stat Card */
/* =============================================================== */

function StatCard({
  icon,
  value,
  label,
  description,
  accent,
}: {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  description: string;
  accent: "violet" | "cyan" | "fuchsia";
}) {
  const accentStyles = {
    violet: {
      icon: "bg-violet-500/10 text-violet-400",
      glow: "bg-violet-500/10",
    },
    cyan: {
      icon: "bg-cyan-500/10 text-cyan-400",
      glow: "bg-cyan-500/10",
    },
    fuchsia: {
      icon: "bg-fuchsia-500/10 text-fuchsia-400",
      glow: "bg-fuchsia-500/10",
    },
  };

  const styles = accentStyles[accent];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15">
      {/* Glow */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${styles.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.icon}`}
        >
          {icon}
        </div>

        <span className="text-3xl font-semibold tracking-tight text-white">
          {value}
        </span>
      </div>

      <div className="relative mt-5">
        <p className="text-sm font-medium text-white/80">{label}</p>

        <p className="mt-1 text-xs text-white/30">{description}</p>
      </div>
    </div>
  );
}

export default Profile;
