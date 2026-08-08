
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color?: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
}: CompanionCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10] p-6 text-white shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/20 hover:shadow-violet-500/5">
      {/* AI Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/10" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          {/* Subject */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{subject}</span>
          </div>

          {/* AI status */}
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <span className="text-[10px] text-white/40">AI Ready</span>
          </div>
        </div>

        {/* Companion Info */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-100">
            {name}
          </h2>

          <p className="mt-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-white/40">
            {topic}
          </p>
        </div>

        {/* Metadata */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2">
            <Clock3 className="h-4 w-4 text-white/40" />

            <span className="text-xs text-white/50">
              {duration} minutes
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2">
            <div className="flex gap-0.5">
              <span className="h-2.5 w-0.5 rounded-full bg-violet-400" />
              <span className="h-3.5 w-0.5 rounded-full bg-violet-400/70" />
              <span className="h-2 w-0.5 rounded-full bg-violet-400/40" />
            </div>

            <span className="text-xs text-white/50">Interactive</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* CTA */}
        <Link href={`/companions/${id}`} className="block">
          <button className="group/button flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
            Launch Lesson

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </button>
        </Link>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

export default CompanionCard;

