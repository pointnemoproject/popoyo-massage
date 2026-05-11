import { Section } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const trustPoints = [
  "Mobile service to your villa or hotel",
  "Clean table, linens, and oils",
  "Surf recovery and deep tissue options",
  "Serving Popoyo and nearby beaches",
];

const services = [
  {
    name: "Relaxation Massage",
    description:
      "A calming full-body massage designed to help you unwind, reduce stress, and settle into vacation mode.",
  },
  {
    name: "Surf Recovery Massage",
    description:
      "Targeted bodywork for surfers and active travelers dealing with sore shoulders, tight backs, hips, legs, and post-session fatigue.",
  },
  {
    name: "Deep Tissue Massage",
    description:
      "Focused therapeutic massage for deeper tension, mobility, and muscle recovery.",
  },
  {
    name: "Couples Massage",
    description:
      "A simple way to relax together at your villa, hotel, vacation rental, or retreat.",
  },
];

const steps = [
  {
    title: "Message us on WhatsApp",
    copy: "Send your preferred day, time, and how many people need a massage.",
  },
  {
    title: "Tell us where you're staying",
    copy: "Share your villa, hotel, rental, retreat, or neighborhood in the Popoyo area.",
  },
  {
    title: "Choose your session and time",
    copy: "We will help match the massage style to what your body needs.",
  },
  {
    title: "We come to you with everything needed",
    copy: "Your therapist arrives with a clean table, linens, oils, and setup.",
  },
];

const reasons = [
  "Vetted local therapists",
  "Easy scheduling by WhatsApp",
  "Clean, professional setup",
  "Ideal for surfers, travelers, couples, and retreats",
];

const testimonials = [
  {
    quote:
      "Best massage I had during my trip. Super easy to book and exactly what I needed after surfing all week.",
    name: "Sarah, California",
  },
  {
    quote:
      "Professional, clean, and convenient. They came directly to our rental in Rancho Santana.",
    name: "Mark, Canada",
  },
  {
    quote:
      "The surf recovery massage helped my shoulders and back so much after a long week in the water.",
    name: "Emma, UK",
  },
];

export default function Home() {
  return (
    <main>
      <section className="px-5 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <nav
            aria-label="Main navigation"
            className="mb-10 flex items-center justify-between"
          >
            <a
              className="text-sm font-bold uppercase tracking-[0.22em] text-palm-900"
              href="#top"
            >
              Popoyo Massage
            </a>
            <WhatsAppButton className="hidden sm:inline-flex" />
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div id="top">
              <p className="mb-4 inline-flex rounded-full border border-clay-500/20 bg-white/80 px-4 py-2 text-sm font-medium text-clay-600 shadow-sm">
                Mobile massage in Popoyo, Nicaragua
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-palm-900 sm:text-5xl lg:text-6xl">
                Mobile Massage in Popoyo, Delivered to Your Villa
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-palm-900/76">
                Professional relaxation, deep tissue, and surf recovery massage
                for travelers, surfers, and locals in Popoyo, Rancho Santana,
                Guasacate, Tola, and nearby beaches.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton className="w-full sm:w-auto" />
                <a
                  className="inline-flex justify-center rounded-full border border-palm-800/15 bg-white px-6 py-3 text-sm font-semibold text-palm-900 transition hover:bg-sand-50"
                  href="#services"
                >
                  View massage options
                </a>
              </div>
              <p className="mt-5 text-sm font-medium leading-6 text-palm-900/70">
                Professional therapists · Clean setup · Easy WhatsApp booking ·
                Mobile service
              </p>
            </div>

            {/* TODO: Replace this placeholder with a real photo of a clean massage setup in a beautiful Popoyo villa, terrace, jungle, or ocean-view location. */}
            <div
              aria-label="Massage table setup on a warm villa terrace"
              className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-sand-200 shadow-soft"
              role="img"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,51,45,0.12),rgba(170,98,69,0.08)),radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.9),transparent_12rem),linear-gradient(180deg,#f7ecdc_0%,#d9b789_54%,#8cae98_54%,#2f574c_100%)]" />
              <div className="absolute left-6 right-6 top-8 h-28 rounded-3xl bg-white/34 backdrop-blur-sm" />
              <div className="absolute left-8 right-8 top-24 h-24 rounded-t-[2rem] bg-[#6f8e80]" />
              <div className="absolute bottom-20 left-1/2 h-36 w-[82%] -translate-x-1/2 rounded-[1.8rem] bg-white shadow-[0_18px_50px_rgba(24,51,45,0.16)]" />
              <div className="absolute bottom-24 left-1/2 h-20 w-[72%] -translate-x-1/2 rounded-[1.4rem] bg-sand-50" />
              <div className="absolute bottom-28 left-1/2 h-12 w-24 -translate-x-1/2 rounded-full bg-sand-200" />
              <div className="absolute bottom-16 left-[18%] h-20 w-2 rounded-full bg-palm-800/35" />
              <div className="absolute bottom-16 right-[18%] h-20 w-2 rounded-full bg-palm-800/35" />
              <div className="absolute bottom-8 left-6 right-6 rounded-2xl bg-white/86 p-4 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-palm-900">
                  Clean mobile setup
                </p>
                <p className="mt-1 text-sm text-palm-900/68">
                  Massage table, linens, oils, and a calm in-villa experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-palm-900/8 bg-white/72 px-5 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              className="rounded-2xl bg-sand-50 px-4 py-4 text-sm font-semibold text-palm-900"
              key={point}
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Services"
        title="Massage options for vacation, recovery, and rest"
        intro="Choose a session that fits your body and your plans. Every service is mobile and delivered to your location."
      >
        <div className="grid gap-4 md:grid-cols-2" id="services">
          {services.map((service) => (
            <article
              className="rounded-3xl border border-palm-900/8 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
              key={service.name}
            >
              <h3 className="text-xl font-semibold text-palm-900">
                {service.name}
              </h3>
              <p className="mt-3 min-h-24 text-base leading-7 text-palm-900/70">
                {service.description}
              </p>
              <WhatsAppButton
                className="mt-6"
                message={`Hi, I'd like to book a ${service.name} in Popoyo. I'm staying at [location]. Do you have availability for [date/time]?`}
                variant="secondary"
              >
                Book this
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="bg-palm-900 text-white"
        eyebrow="How it works"
        title="Simple booking, easy arrival"
        intro="No forms, no payment portal, no complicated schedule. Just message us and we will coordinate the details."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              key={step.title}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-sand-50 text-sm font-bold text-palm-900">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/72">{step.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="A better massage experience in Popoyo">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <p className="text-xl leading-9 text-palm-900/76">
            Popoyo has plenty of informal massage options. We built this service
            for travelers and residents who want something more reliable: clear
            communication, trained therapists, clean setup, and professional
            bodywork delivered to your location.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                className="rounded-2xl border border-palm-900/8 bg-white p-5 text-base font-semibold text-palm-900 shadow-sm"
                key={reason}
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-white/70"
        eyebrow="Guest notes"
        title="Easy to book after surf, travel, or a long beach day"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              className="rounded-3xl border border-palm-900/8 bg-white p-6 shadow-sm"
              key={testimonial.name}
            >
              <blockquote className="text-base leading-7 text-palm-900/76">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-clay-600">
                — {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Service area"
        title="Mobile massage across Popoyo and nearby beaches"
        intro="We serve guests and residents in Popoyo, Rancho Santana, Guasacate, Tola, Playa Santana, Hacienda Iguana, and nearby beach communities. If you are staying at a villa, hotel, retreat, vacation rental, or private home in the area, message us with your location and we will confirm availability."
      >
        <div className="flex flex-wrap gap-3">
          {[
            "Popoyo",
            "Rancho Santana",
            "Guasacate",
            "Tola",
            "Playa Santana",
            "Hacienda Iguana",
            "Nearby beaches",
          ].map((area) => (
            <span
              className="rounded-full border border-palm-900/10 bg-white px-4 py-2 text-sm font-semibold text-palm-900 shadow-sm"
              key={area}
            >
              {area}
            </span>
          ))}
        </div>
      </Section>

      <section className="px-5 pb-28 pt-8 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-clay-500 px-6 py-10 text-white shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to book a massage in Popoyo?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/82">
              Message us on WhatsApp and we’ll help you choose the right
              session.
            </p>
          </div>
          <WhatsAppButton className="mt-7 bg-white text-palm-900 hover:bg-sand-50 lg:mt-0" />
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/40 bg-sand-50/92 p-3 shadow-[0_-10px_35px_rgba(24,51,45,0.12)] backdrop-blur sm:hidden">
        <WhatsAppButton className="w-full" variant="sticky" />
      </div>
    </main>
  );
}
