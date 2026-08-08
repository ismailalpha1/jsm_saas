"use client";

import { useState } from "react";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  MessageCircle,
  Mic,
  Play,
  Sparkles,
  Volume2,
  Zap,
} from "lucide-react";

export default function AILearningSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    // <section className="relative overflow-hidden bg-[#050507] py-24 text-white sm:py-32">
    //   {/* Background */}
    //   <div className="pointer-events-none absolute inset-0">
    //     <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

    //     <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

    //     <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-[120px]" />

    //     <div
    //       className="absolute inset-0 opacity-[0.025]"
    //       style={{
    //         backgroundImage:
    //           "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
    //         backgroundSize: "50px 50px",
    //       }}
    //     />
    //   </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>Learning powered by AI</span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Learn anything.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Your way.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Meet your personal AI tutor. Ask questions, have voice
            conversations, get explanations, and learn at your own pace.
          </p>
        </div>

        {/* Main Experience */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="space-y-8">
              <Feature
                icon={<Brain className="h-5 w-5" />}
                title="Understand, don't memorize"
                description="Mentora adapts explanations to your level and breaks complex concepts into simple ideas."
                active
              />

              <Feature
                icon={<MessageCircle className="h-5 w-5" />}
                title="Ask anything"
                description="Ask follow-up questions naturally. Your AI tutor remembers the context of your conversation."
              />

              <Feature
                icon={<Mic className="h-5 w-5" />}
                title="Learn by voice"
                description="Talk to your AI tutor naturally and practice concepts through real conversations."
              />
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_10px_40px_rgba(255,255,255,0.12)]">
                Start learning
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                Explore tutors
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* AI Tutor UI */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/90 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
                    <Sparkles className="h-5 w-5 text-white" />

                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0b0b10] bg-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-medium">Alex</p>
                    <p className="text-xs text-white/40">
                      AI Learning Companion
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Chat */}
              <div className="space-y-6 p-5 sm:p-7">
                {/* AI message */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                    <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                  </div>

                  <div className="max-w-[85%]">
                    <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm leading-6 text-white/80">
                        Let's understand{" "}
                        <span className="font-medium text-violet-300">
                          recursion
                        </span>{" "}
                        together.
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/50">
                        Imagine you have a set of Russian dolls. Each doll
                        contains a smaller version of itself.
                      </p>
                    </div>

                    <div className="mt-2 flex items-center gap-3 text-[11px] text-white/30">
                      <span>Just now</span>

                      <button className="flex items-center gap-1 transition-colors hover:text-white/60">
                        <Volume2 className="h-3 w-3" />
                        Listen
                      </button>
                    </div>
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[75%]">
                    <div className="rounded-2xl rounded-tr-md bg-gradient-to-br from-violet-500 to-fuchsia-500 px-4 py-3 shadow-lg shadow-violet-500/10">
                      <p className="text-sm leading-6 text-white">
                        So the function keeps calling itself?
                      </p>
                    </div>

                    <p className="mt-2 text-right text-[11px] text-white/30">
                      You · Just now
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                    <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                  </div>

                  <div className="max-w-[85%]">
                    <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm leading-6 text-white/70">
                        Exactly! 🎯
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/50">
                        But there's one important rule:{" "}
                        <span className="text-white/80">
                          a base case
                        </span>{" "}
                        tells the function when to stop calling itself.
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[11px] text-white/40">
                          Understanding
                        </span>
                        <span className="text-[11px] font-medium text-emerald-400">
                          82%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 transition-colors focus-within:border-violet-500/30">
                  <div className="flex items-center gap-2">
                    <input
                      placeholder="Ask your tutor anything..."
                      className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/25"
                    />

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isPlaying
                          ? "bg-violet-500 text-white shadow-lg shadow-violet-500/30"
                          : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Mic className="h-4 w-4" />
                    </button>

                    <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-black transition-all duration-300 hover:scale-105 hover:bg-white/90">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#101015]/90 p-4 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Zap className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white">
                    Learning streak
                  </p>
                  <p className="mt-0.5 text-xs text-white/40">
                    7 days · Keep going!
                  </p>
                </div>
              </div>
            </div>

            {/* Floating play button */}
            <button className="absolute -right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-[#101015]/90 text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-violet-500/30 sm:flex">
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            </button>
          </div>
        </div>

        {/* Bottom benefits */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              title="Personalized"
              description="Adapts to your level"
            />

            <Stat
              title="Interactive"
              description="Learn through conversation"
            />

            <Stat
              title="Always available"
              description="Your tutor never sleeps"
            />

            <Stat
              title="Learn anything"
              description="One platform, unlimited topics"
            />
          </div>
        </div>
      </div>
    // </section>
  );
}

/* ---------------------------------- */
/* Feature Component */
/* ---------------------------------- */

function Feature({
  icon,
  title,
  description,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="group flex gap-4">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
          active
            ? "border-violet-500/20 bg-violet-500/10 text-violet-400 shadow-lg shadow-violet-500/5"
            : "border-white/10 bg-white/[0.03] text-white/40 group-hover:border-white/20 group-hover:text-white/70"
        }`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-medium text-white">{title}</h3>

        <p className="mt-1.5 max-w-md text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Stat Component */
/* ---------------------------------- */

function Stat({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group">
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4 text-emerald-400" />
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>

      <p className="mt-1 pl-6 text-xs text-white/35 transition-colors duration-300 group-hover:text-white/50">
        {description}
      </p>
    </div>
  );
}

