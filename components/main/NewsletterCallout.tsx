import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { getSiteSettings } from "@/lib/content/org";

export async function NewsletterCallout() {
  const settings = await getSiteSettings();

  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 py-12 md:px-10 md:py-14">
        <div className="flex flex-col items-center gap-8 border border-line bg-paper-deep/45 px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10 md:text-left">
          <div className="flex max-w-xl flex-col items-center gap-4 md:flex-row md:items-center md:gap-5">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest text-paper shadow-[0_8px_24px_-8px_oklch(38%_0.08_145/0.45)]">
              <EnvelopeSimple size={26} weight="fill" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                MYO Adventure List
              </div>
              <h2 className="font-display mt-1.5 text-2xl tracking-tight text-ink md:text-[1.75rem]">
                Stay in the loop.
              </h2>
              <p className="mt-2 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
                Hike dates, camp announcements, and volunteer calls — one short email, no spam.
              </p>
            </div>
          </div>

          <a
            href={settings.newsletterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-paper shadow-[0_1px_0_oklch(22%_0.018_132)] transition hover:bg-pine md:px-7 md:py-3.5 md:text-base"
          >
            Join the newsletter
            <ArrowUpRight
              size={16}
              weight="bold"
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
