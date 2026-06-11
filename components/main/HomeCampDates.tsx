import Link from "next/link";
import { ArrowUpRight, Flame } from "@phosphor-icons/react/ssr";
import type { HomeCampDate } from "@/lib/content/home-camp";

type HomeCampDatesProps = {
  dates: HomeCampDate[];
};

export function HomeCampDates({ dates }: HomeCampDatesProps) {
  if (dates.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-8 text-center sm:px-6 md:px-10 md:py-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brass">
          <Flame size={14} weight="fill" className="text-ember" />
          Summer 2026
        </div>
        <h2 className="font-display mt-2 text-3xl tracking-tight text-ink md:text-4xl">Camp dates</h2>

        <ul
          className={`mx-auto mt-6 grid max-w-3xl gap-4 ${
            dates.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {dates.map((row) => (
            <li key={row.title}>
              <Link
                href={row.href}
                className="group flex h-full flex-col border border-line bg-paper-deep/40 p-5 text-left transition hover:border-pine hover:bg-paper-deep/70"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-display text-2xl tracking-tight text-ink group-hover:text-pine">
                    {row.title}
                  </div>
                  {row.isOpen ? (
                    <span className="shrink-0 rounded-full bg-ember px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper">
                      Open
                    </span>
                  ) : null}
                </div>
                <div className="font-camp mt-3 text-xl text-ink md:text-2xl">{row.dates}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-pine">
                  Details
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="transition group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
