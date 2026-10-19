import Link from "next/link";

const whatsappUrl =
  "https://wa.me/2348147436789?text=Hi%2C%20I%27m%20testing%20the%20AUREN%20storefront%20demo.%20I%20understand%20this%20is%20a%20fictional%20project%20and%20does%20not%20represent%20verified%20stock%20or%20delivery.";

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Contact flow demo
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            Let&apos;s talk.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            This page demonstrates how a storefront might present contact
            information and a WhatsApp enquiry path. AUREN is a fictional
            portfolio project, not an operating retailer.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--border)] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              WhatsApp
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-tight">
              Demonstration enquiry
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              The link opens WhatsApp with a prefilled demonstration
              message. It does not place or record an order, verify
              inventory, or confirm fulfilment. The configured destination
              has not been independently verified as an operating store
              contact.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-4"
            >
              Open WhatsApp demo
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Portfolio contact email
              </p>

              <a
                href="mailto:tgghub01@gmail.com"
                className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
              >
                tgghub01@gmail.com
              </a>

              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                This is a portfolio contact address, not a dedicated
                AUREN business inbox.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Delivery
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                This project does not operate a delivery service or
                establish delivery coverage, fees or timelines. Those
                details would need to be provided by an actual retailer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            About this demo
          </p>

          <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            <div className="py-6">
              <h2 className="font-serif text-xl">
                Does this page place an order?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                No. The WhatsApp link illustrates a prefilled enquiry
                message. AUREN does not record or process orders.
              </p>
            </div>

            <div className="py-6">
              <h2 className="font-serif text-xl">
                Are the products and prices real offers?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                No. The catalogue is illustrative content for a storefront
                experiment. Actual availability and retail prices have not
                been verified.
              </p>
            </div>

            <div className="py-6">
              <h2 className="font-serif text-xl">
                Does AUREN provide delivery?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                No delivery service is represented by this demonstration.
                Delivery arrangements are not established by this project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Explore the storefront concept.
          </h2>

          <Link
            href="/shop"
            className="mt-7 inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-4"
          >
            Browse demo catalogue
          </Link>
        </div>
      </section>
    </main>
  );
}