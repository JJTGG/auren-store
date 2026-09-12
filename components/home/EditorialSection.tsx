import Image from "next/image";

export default function EditorialSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[560px]">
          <Image
            src="https://res.cloudinary.com/kcxmd95c/image/upload/v1789233243/1789233106660.png"
            alt="AUREN everyday essentials"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-16">
          <div className="max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              THE AUREN APPROACH
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Style without the noise.
            </h2>

            <p className="mt-6 text-base leading-7 text-muted">
              Everyday pieces, thoughtfully selected. AUREN brings together
              understated essentials designed to fit naturally into your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}