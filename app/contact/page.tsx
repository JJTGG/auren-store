import Link from "next/link";

const whatsappUrl =
  "https://wa.me/2348147436789?text=Hi%20AUREN%2C%20I%20have%20a%20question.";

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Contact
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            Let&apos;s talk.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Need help choosing a product, checking availability, or placing
            an order? Reach out and we&apos;ll help you out.
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
              The quickest way to reach us.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              For orders, product questions, and general enquiries, send us a
              message on WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Email
              </p>

              <a
                href="mailto:tgghub01@gmail.com"
                className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
              >
                hello@auren-store.com
              </a>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Delivery
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                We deliver across Nigeria. Delivery options and timelines are
                confirmed when your order is placed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Before you message
          </p>

          <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            <div className="py-6">
              <h2 className="font-serif text-xl">
                How do I place an order?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Open the product you want and use the WhatsApp button to start
                your order.
              </p>
            </div>

            <div className="py-6">
              <h2 className="font-serif text-xl">
                Can I ask about a product first?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Yes. Send us the product name and your question on WhatsApp.
              </p>
            </div>

            <div className="py-6">
              <h2 className="font-serif text-xl">
                Do you deliver outside your city?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Yes. Nationwide delivery is available across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Ready to find something?
          </h2>

          <Link
            href="/shop"
            className="mt-7 inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
          >
            Browse the collection
          </Link>
        </div>
      </section>
    </main>
  );
}