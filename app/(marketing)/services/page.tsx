"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Code2,
  Rocket,
  BrainCircuit,
} from "lucide-react";
import Container from "../../components/ui/container";

const SERVICES = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Automate workflows, support, lead routing, and internal operations using AI.",
    features: [
      "Lead qualification & routing",
      "Customer support automation",
      "Document parsing & extraction",
      "Custom agents & tools",
    ],
  },
  {
    id: "web-apps",
    title: "Web Apps & Dashboards",
    description:
      "Modern Next.js apps with clean UI, scalable structure, and fast performance.",
    features: [
      "Marketing website + dashboard",
      "Admin panel foundations",
      "Analytics & reporting",
      "Role-based flows (later)",
    ],
  },
  {
    id: "integrations",
    title: "APIs & Integrations",
    description:
      "Connect payments, CRMs, email, WhatsApp, and internal systems reliably.",
    features: [
      "Payments & subscriptions",
      "Webhooks & integrations",
      "Email/SMS automation",
      "Backend services",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-white py-14 sm:py-20">
        <Container className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600 sm:text-lg">
            From architecture to implementation, we provide end-to-end AI and web
            development services tailored to your business goals.
          </p>
        </Container>
      </section>

      {/* Service List */}
      <section className="py-10 sm:py-14">
        <Container className="space-y-16 sm:space-y-24">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={[
                "grid items-center gap-10",
                "lg:grid-cols-2",
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : "",
              ].join(" ")}
            >
              {/* Text */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1">
                  <Sparkles className="h-4 w-4 text-pink-600" />
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-700">
                    Core Capability
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  {service.title}
                </h2>

                <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {service.description} We use modern tools and best practices so
                  your project stays maintainable and future-proof.
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-zinc-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-600" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-pink-700 hover:text-pink-600"
                  >
                    Inquire about this service
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Visual */}
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />

                <div className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/3]">
                  <img
                    src={`https://picsum.photos/seed/${service.id}/1200/900`}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-70 transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-lg backdrop-blur sm:p-6">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="rounded-xl bg-pink-600 p-3 text-white">
                        <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div className="rounded-xl bg-fuchsia-600 p-3 text-white">
                        <BrainCircuit className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Extra services grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              But wait, there’s more
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
              Our multidisciplinary team handles every aspect of digital
              creation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Rocket,
                title: "MVP Launchpad",
                desc: "For startups who need to move fast—without sacrificing quality.",
              },
              {
                icon: BrainCircuit,
                title: "Audit & Security",
                desc: "Review AI systems for bias, security issues, and performance leaks.",
              },
              {
                icon: Sparkles,
                title: "Interactive UI",
                desc: "Smooth animations and professional UI that feel modern.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
