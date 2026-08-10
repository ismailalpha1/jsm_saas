"use client";
import { cn, configureAssistant, getSubjectColor } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ca } from "zod/v4/locales";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import soundwaves from "@/constants/waveanimation.json";
import { addToSessionHistory } from "@/lib/actions/companion.actions";
import { Sparkles } from "lucide-react";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const CompanionComponent = ({
  companionId,
  subject,
  userName,
  userImage,
  topic,
  name,
  style,
  voice,
}: CompanionComponentProps) => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<SavedMessage[]>([]);

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef) {
      if (isSpeaking) {
        lottieRef.current?.play();
      } else {
        lottieRef.current?.stop();
      }
    }
  }, [callStatus]);

  useEffect(() => {
    const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
    {
    }
    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
      addToSessionHistory(companionId);
    };
    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [newMessage, ...prev]);
      }
    };
    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);
    const onError = (error: any) => {
      console.error(error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  const ToggleMicrophone = () => {
    const isMuted = vapi.isMuted();
    vapi.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    const assistantOverrides = {
      variableValues: {
        subject,
        topic,
        style,
      },
      clientMessages: ["transcript"],
      serverMessages: [],
    };
    // @ts-expect-error

    vapi.start(configureAssistant(voice, style), assistantOverrides);
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#08080d] text-white">
      {/* ======================================================= */}
      {/* Background */}
      {/* ======================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* AI glow */}
        <div
          className={cn(
            "absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full blur-[120px] transition-all duration-1000",
            callStatus === CallStatus.ACTIVE
              ? "bg-violet-500/20"
              : callStatus === CallStatus.CONNECTING
                ? "bg-cyan-500/15"
                : "bg-violet-500/5",
          )}
        />

        {/* Cyan glow */}
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/[0.04] blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* ======================================================= */}
      {/* Lesson Header */}
      {/* ======================================================= */}

      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-500",
              callStatus === CallStatus.ACTIVE
                ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
                : callStatus === CallStatus.CONNECTING
                  ? "animate-pulse bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  : "bg-white/20",
            )}
          />

          <span className="text-xs font-medium text-white/50">
            {callStatus === CallStatus.ACTIVE
              ? "Lesson in progress"
              : callStatus === CallStatus.CONNECTING
                ? "Connecting to your tutor..."
                : "Ready to learn"}
          </span>
        </div>

        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] text-white/30">
          Voice lesson
        </div>
      </div>

      {/* ======================================================= */}
      {/* Main Experience */}
      {/* ======================================================= */}

      <div className="relative z-10 grid lg:grid-cols-[1fr_0.85fr]">
        {/* ===================================================== */}
        {/* AI Companion */}
        {/* ===================================================== */}

        <div className="flex min-h-[520px] flex-col items-center justify-center border-b border-white/[0.06] px-6 py-12 lg:border-b-0 lg:border-r lg:px-10">
          {/* Avatar */}
          <div className="relative">
            {/* Outer glow */}
            <div
              className={cn(
                "absolute -inset-8 rounded-full blur-3xl transition-all duration-1000",
                callStatus === CallStatus.ACTIVE
                  ? "bg-violet-500/20"
                  : callStatus === CallStatus.CONNECTING
                    ? "bg-cyan-500/15"
                    : "bg-violet-500/5",
              )}
            />

            {/* Avatar ring */}
            <div
              className={cn(
                "relative flex h-52 w-52 items-center justify-center rounded-full border transition-all duration-700 sm:h-60 sm:w-60",
                callStatus === CallStatus.ACTIVE
                  ? "border-violet-400/30 bg-violet-500/[0.08] shadow-[0_0_80px_rgba(139,92,246,0.15)]"
                  : "border-white/10 bg-white/[0.03]",
              )}
            >
              {/* Inner ring */}
              <div
                className={cn(
                  "absolute inset-3 rounded-full border transition-all duration-700",
                  callStatus === CallStatus.ACTIVE
                    ? "border-violet-400/20"
                    : "border-white/5",
                )}
              />

              {/* Avatar */}
              <div
                className={cn(
                  "relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-white/10 transition-all duration-700 sm:h-44 sm:w-44",
                  callStatus === CallStatus.ACTIVE
                    ? "bg-violet-500/10"
                    : "bg-white/[0.04]",
                )}
              >
                {/* Subject icon */}
                <div
                  className={cn(
                    "absolute transition-all duration-700",
                    callStatus === CallStatus.FINISHED ||
                      callStatus === CallStatus.INACTIVE
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0",
                  )}
                >
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={100}
                    height={100}
                    className="h-20 w-20 opacity-80 sm:h-24 sm:w-24"
                  />
                </div>

                {/* Connecting */}
                <div
                  className={cn(
                    "absolute transition-all duration-700",
                    callStatus === CallStatus.CONNECTING
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0",
                  )}
                >
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-fuchsia-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Active sound waves */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
                    callStatus === CallStatus.ACTIVE
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                >
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={soundwaves}
                    autoplay={false}
                    className="h-36 w-36"
                  />
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#08080d] bg-emerald-400">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>
          </div>

          {/* Companion name */}
          <div className="mt-8 text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/[0.07] px-3 py-1 text-[10px] font-medium text-violet-300">
              <Sparkles className="h-3 w-3" />
              AI Companion
            </div>

            <h2 className="text-2xl font-semibold tracking-tight">{name}</h2>

            <p className="mt-1 text-sm text-white/30">
              {callStatus === CallStatus.ACTIVE
                ? "Listening and ready to help"
                : callStatus === CallStatus.CONNECTING
                  ? "Preparing your lesson..."
                  : "Your personal AI tutor"}
            </p>
          </div>
        </div>

        {/* ===================================================== */}
        {/* User + Controls */}
        {/* ===================================================== */}

        <div className="flex flex-col p-5 sm:p-7">
          {/* User */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <div className="flex items-center gap-3">
              {/* User Avatar */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.05]">
                {userImage ? (
                  <Image
                    src={userImage}
                    alt={userName}
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-semibold text-white/60">
                    {userName?.charAt(0)?.toUpperCase()}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <p className="text-xs text-white/30">Learning with</p>

                <p className="truncate text-sm font-medium text-white/80">
                  {userName}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 grid grid-cols-[auto_1fr] gap-3">
            {/* Microphone */}
            <button
              className={cn(
                "flex h-12 items-center justify-center gap-2 rounded-xl border px-4 transition-all duration-300",
                isMuted
                  ? "border-red-500/20 bg-red-500/[0.08] text-red-300 hover:bg-red-500/[0.12]"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
              )}
              onClick={ToggleMicrophone}
              disabled={callStatus !== CallStatus.ACTIVE}
            >
              <Image
                src={isMuted ? "/icons/mic-off.svg" : "/icons/mic-on.svg"}
                alt={isMuted ? "Unmute microphone" : "Mute microphone"}
                width={20}
                height={20}
                className="opacity-80"
              />

              <span className="hidden text-xs font-medium sm:block">
                {isMuted ? "Unmute" : "Mute"}
              </span>
            </button>

            {/* Start / End */}
            <button
              className={cn(
                "flex h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-all duration-300",
                callStatus === CallStatus.ACTIVE
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/10 hover:bg-red-600"
                  : "bg-white text-black shadow-lg shadow-white/5 hover:bg-white/90",
                callStatus === CallStatus.CONNECTING &&
                  "animate-pulse cursor-wait",
              )}
              onClick={
                callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall
              }
              disabled={callStatus === CallStatus.CONNECTING}
            >
              {callStatus === CallStatus.ACTIVE
                ? "End Lesson"
                : callStatus === CallStatus.CONNECTING
                  ? "Connecting..."
                  : "Start Lesson"}
            </button>
          </div>

          {/* =================================================== */}
          {/* Transcript */}
          {/* =================================================== */}

          <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            {/* Transcript Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />

                <span className="text-xs font-medium text-white/50">
                  Live transcript
                </span> 
              </div>

              <span className="text-[10px] text-white/20">
                {messages.length} messages
              </span>
            </div>

            {/* Scrollable transcript */}
            <div className="no-scrollbar h-[300px] overflow-y-auto">
              <div className="flex flex-col gap-4 p-4">
                {messages.length === 0 ? (
                  <div className="flex h-[260px] flex-col items-center justify-center text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Sparkles className="h-4 w-4 text-violet-400" />
                    </div>

                    <p className="mt-3 text-xs font-medium text-white/40">
                      Your conversation will appear here
                    </p>

                    <p className="mt-1 max-w-xs text-[11px] leading-5 text-white/20">
                      Start the lesson to begin talking with your AI companion.
                    </p>
                  </div>
                ) : (
                  messages.map((message, index) => {
                    const isAssistant = message.role === "assistant";

                    return (
                      <div
                        key={index}
                        className={cn(
                          "max-w-[90%] shrink-0 rounded-2xl px-4 py-3 text-sm leading-6",
                          isAssistant
                            ? "self-start rounded-tl-md border border-white/10 bg-white/[0.04] text-white/60"
                            : "self-end rounded-tr-md bg-violet-500/[0.12] text-violet-100",
                        )}
                      >
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-wider opacity-40">
                          {isAssistant
                            ? name.split(" ")[0].replace(/[.,]/g, "")
                            : userName}
                        </p>

                        <p>{message.content}</p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#08080d] to-transparent" />
          </section>
        </div>
      </div>

      {/* ======================================================= */}
      {/* Bottom */}
      {/* ======================================================= */}

      <div className="relative z-10 flex items-center justify-center border-t border-white/[0.06] px-5 py-3">
        <p className="text-[10px] text-white/20">
          Your AI companion adapts to your conversation in real time.
        </p>
      </div>
    </section>
  );
};

export default CompanionComponent;
