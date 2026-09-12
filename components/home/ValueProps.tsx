const values = [
  {
    title: "Nationwide Delivery",
    description: "We deliver across Nigeria.",
  },
  {
    title: "Easy Ordering",
    description: "Order directly through WhatsApp.",
  },
  {
    title: "Curated Selection",
    description: "Thoughtfully selected everyday pieces.",
  },
  {
    title: "Customer Support",
    description: "We're here when you need us.",
  },
];

export default function ValueProps() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {values.map((value) => (
          <div
            key={value.title}
            className="border-border px-5 py-10 sm:px-6 sm:py-12"
          >
            <h3 className="text-sm font-medium">{value.title}</h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}