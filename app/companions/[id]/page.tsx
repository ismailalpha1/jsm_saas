import CompanionComponent from "@/components/CompanionComponent";
import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  Sparkles,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
interface CompanionSessionPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  const { name, topic, title, subject, duration } = companion;

  if (!user) redirect("/sign-in");

  if (!name) {
    redirect("/companions");
  }
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* ======================================================= */}
      {/* Background */}
      {/* ======================================================= */}
      <div className="pointer-events-none fixed inset-0">
        {/* Main AI glow */}
        <div className="absolute left-1/2 top-0 h-[550px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[150px]" />
        {/* Cyan */}
        <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-cyan-500/[0.04] blur-[130px]" />
        {/* Fuchsia */}
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/[0.04] blur-[130px]" />
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
      {/* Page */}
      {/* ======================================================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        {/* Back */}
        <Link
          href="/companions"
          className="group mb-6 inline-flex items-center gap-2 text-sm text-white/35 transition-colors duration-300 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to companions
        </Link>
        {/* ===================================================== */}
        {/* Companion Header */}
        {/* ===================================================== */}
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/85 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          {/* Header glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
          <div className="relative flex flex-col gap-7 p-6 sm:p-8 md:flex-row md:items-center md:justify-between lg:p-10">
            {/* Companion information */}
            <div className="flex min-w-0 items-center gap-5">
              {/* Companion Icon */}
              <div className="relative shrink-0">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10 blur-xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={38}
                    height={38}
                    className="opacity-90"
                  />
                </div>
                {/* Online */}
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-4 border-[#0b0b10] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
              </div>
              {/* Text */}
              <div className="min-w-0">
                {/* Subject */}
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-3 py-1.5 text-xs font-medium text-violet-300">
                  <Sparkles className="h-3 w-3" /> {subject}
                </div>
                {/* Name */}
                <h1 className="truncate text-2xl font-semibold tracking-tight sm:text-3xl">
                  {name}
                </h1>
                {/* Topic */}
                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
                  {topic}
                </p>
              </div>
            </div>
            {/* Metadata */}
            <div className="flex shrink-0 items-center gap-3">
              {/* Duration */}
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <Clock3 className="h-4 w-4 text-white/35" />
                <div>
                  <p className="text-xs font-medium text-white/70">
                    {duration} minutes
                  </p>
                  <p className="text-[10px] text-white/25">Estimated lesson</p>
                </div>
              </div>
              {/* AI */}
              <div className="hidden items-center gap-2 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.05] px-4 py-3 sm:flex">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <div>
                  <p className="text-xs font-medium text-emerald-300">
                    AI Ready
                  </p>
                  <p className="text-[10px] text-white/25">Companion online</p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </article>
        {/* ===================================================== */}
        {/* Lesson Area */}
        {/* ===================================================== */}
        <section className="mt-6">
          {/* Section header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-white/60">
                Interactive lesson
              </span>
            </div>
            <div className="hidden items-center gap-2 text-xs text-white/25 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Your
              AI companion is ready
            </div>
          </div>
          {/* Existing Companion Component */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/80 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.05] blur-[100px]" />
            <div className="relative z-10">
              <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CompanionSession;
