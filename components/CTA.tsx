import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Sparkles, WandSparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#050507] py-24 text-white sm:py-32">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main AI glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Cyan glow */}
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

        {/* Pink glow */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b10]/80 px-6 py-16 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:px-12 sm:py-20 lg:px-20">
          {/* Inner glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

          {/* Decorative lines */}
          <div className="absolute left-0 top-1/2 h-px w-24 bg-gradient-to-r from-transparent to-violet-500/20" />

          <div className="absolute right-0 top-1/2 h-px w-24 bg-gradient-to-l from-transparent to-cyan-500/20" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-medium text-violet-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />

              <span>Start learning for free</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Your next skill
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                starts here.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Build your own AI learning companion, ask questions, have
              conversations, and learn anything at your own pace.
            </p>

            {/* Illustration */}
            <div className="relative mx-auto mt-10 w-fit">
              {/* Illustration glow */}
              <div className="absolute inset-0 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <Image
                  src="/images/cta.svg"
                  alt="Build your own AI learning companion"
                  width={362}
                  height={232}
                  className="mx-auto opacity-90 transition-all duration-500 hover:scale-105 hover:opacity-100"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/companions/new"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
              >
                <WandSparkles className="h-4 w-4" />

                <span>Build your own companion</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/companions"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Explore companions
              </Link>
            </div>

            {/* Trust */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/25">
              <div className="flex -space-x-1.5">
                <span className="h-5 w-5 rounded-full border-2 border-[#0b0b10] bg-violet-400" />
                <span className="h-5 w-5 rounded-full border-2 border-[#0b0b10] bg-fuchsia-400" />
                <span className="h-5 w-5 rounded-full border-2 border-[#0b0b10] bg-cyan-400" />
                <span className="h-5 w-5 rounded-full border-2 border-[#0b0b10] bg-emerald-400" />
              </div>

              <span>Learn at your own pace with AI</span>
            </div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
