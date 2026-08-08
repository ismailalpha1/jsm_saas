import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10] text-white shadow-2xl shadow-black/20",
        classNames,
      )}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-400" />

            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {title}
            </h2>
          </div>

          <p className="mt-1 text-xs text-white/35">
            Continue learning with your AI companions
          </p>
        </div>

        {companions && companions.length > 0 && (
          <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/40 sm:block">
            {companions.length} {companions.length === 1 ? "lesson" : "lessons"}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="relative z-10 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="h-14 w-2/3 pl-6 text-xs font-medium uppercase tracking-wider text-white/30 sm:pl-8">
                Lessons
              </TableHead>

              <TableHead className="h-14 text-xs font-medium uppercase tracking-wider text-white/30">
                Subject
              </TableHead>

              <TableHead className="h-14 pr-6 text-right text-xs font-medium uppercase tracking-wider text-white/30 sm:pr-8">
                Duration
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {companions?.map(({ id, subject, name, topic, duration }) => (
              <TableRow
                key={id}
                className="group border-white/[0.06] transition-all duration-300 hover:bg-white/[0.025]"
              >
                {/* Lesson */}
                <TableCell className="py-5 pl-6 sm:pl-8">
                  <Link
                    href={`/companions/${id}`}
                    className="group/link flex items-center gap-4"
                  >
                    {/* Subject Icon */}
                    <div className="relative hidden shrink-0 sm:flex">
                      <div className="absolute inset-0 rounded-2xl bg-violet-500/10 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative flex size-[64px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-violet-500/20 group-hover:bg-violet-500/10">
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt={subject}
                          width={30}
                          height={30}
                          className="opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                        />
                      </div>
                    </div>

                    {/* Lesson Info */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-base font-semibold text-white transition-colors duration-300 group-hover/link:text-violet-200 sm:text-lg">
                          {name}
                        </p>

                        <ArrowRight className="hidden h-4 w-4 shrink-0 text-violet-400 opacity-0 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100 sm:block" />
                      </div>

                      <p className="mt-1 line-clamp-1 text-xs leading-5 text-white/35 sm:text-sm">
                        {topic}
                      </p>
                    </div>
                  </Link>
                </TableCell>

                {/* Subject */}
                <TableCell>
                  {/* Desktop */}
                  <div className="hidden w-fit items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/[0.07] px-3 py-1.5 text-xs font-medium text-violet-300 transition-all duration-300 group-hover:border-violet-500/25 group-hover:bg-violet-500/10 md:flex">
                    <Sparkles className="h-3 w-3" />
                    {subject}
                  </div>

                  {/* Mobile */}
                  <div className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] md:hidden">
                    <Image
                      src={`/icons/${subject}.svg`}
                      alt={subject}
                      width={18}
                      height={18}
                      className="opacity-70"
                    />
                  </div>
                </TableCell>

                {/* Duration */}
                <TableCell className="pr-6 sm:pr-8">
                  <div className="flex items-center justify-end gap-2">
                    <Clock3 className="h-4 w-4 text-white/25" />

                    <span className="text-sm font-medium text-white/50">
                      {duration}
                      <span className="ml-1 hidden text-white/30 sm:inline">
                        mins
                      </span>
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Empty state */}
      {!companions?.length && (
        <div className="relative z-10 flex min-h-[220px] flex-col items-center justify-center px-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <Sparkles className="h-5 w-5 text-violet-400" />
          </div>

          <h3 className="mt-4 text-sm font-medium text-white">
            No lessons yet
          </h3>

          <p className="mt-1 max-w-sm text-xs leading-5 text-white/35">
            Create your first AI companion and start learning something new.
          </p>
        </div>
      )}

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
    </article>
  );
};

export default CompanionsList;
