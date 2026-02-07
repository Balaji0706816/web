"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, HelpCircle } from "lucide-react";

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  isPopular?: boolean;
  projectPrice: string; // shown when Project Based selected
  retainerPrice: string; // shown when Retainer selected
  period: string; // e.g. "project" or "month"
  features: string[];
};

const PRICING: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect to launch a clean website + basic automation.",
    projectPrice: "$499",
    retainerPrice: "$399",
    period: "month",
    features: [
      "Landing page + core pages",
      "Contact form + basic API",
      "Deployment setup (Vercel)",
      "1 week support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for teams that need a dashboard + integrations.",
    isPopular: true,
    projectPrice: "$1499",
    retainerPrice: "$1275",
    period: "month",
    features: [
      "Website + dashboard skeleton",
      "Role-ready structure (admin later)",
      "API integrations (1–2)",
      "Performance + SEO setup",
      "30 days support",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "For serious automation + AI-ready systems.",
    projectPrice: "Custom",
    retainerPrice: "Custom",
    period: "month",
    features: [
      "Full product build",
      "AI endpoints & workflow automation",
      "Advanced integrations",
      "Monitoring + maintenance options",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  const [isRetainer, setIsRetainer] = useState(false);

  return (
    <div className="bg-zinc-950 text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:pt-24 sm:pb-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Investment in Innovation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Transparent pricing for teams of all sizes. Choose the plan that aligns with your growth ambitions.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-2xl">
            <button
              type="button"
              onClick={() => setIsRetainer(false)}
              className={[
                "px-5 sm:px-6 py-2 rounded-xl text-sm font-bold transition-all",
                !isRetainer
                  ? "bg-pink-600 text-white shadow-lg"
                  : "text-zinc-300 hover:text-white",
              ].join(" ")}
            >
              Project Based
            </button>
            <button
              type="button"
              onClick={() => setIsRetainer(true)}
              className={[
                "px-5 sm:px-6 py-2 rounded-xl text-sm font-bold transition-all",
                isRetainer
                  ? "bg-pink-600 text-white shadow-lg"
                  : "text-zinc-300 hover:text-white",
              ].join(" ")}
            >
              Retainer (Save 15%)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING.map((plan) => {
            const price = isRetainer ? plan.retainerPrice : plan.projectPrice;

            return (
              <div
                key={plan.id}
                className={[
                  "relative flex flex-col p-7 sm:p-8 rounded-[2rem] border-2 transition-all duration-300",
                  plan.isPopular
                    ? "bg-pink-500/10 border-pink-400 shadow-[0_0_50px_rgba(236,72,153,0.18)]"
                    : "bg-white/5 border-white/10 hover:border-white/20",
                ].join(" ")}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold">
                      {price}
                    </span>
                    <span className="text-zinc-400 text-sm font-medium">
                      {price === "Custom" ? "" : isRetainer ? "/month" : "/project"}
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-3 mb-7">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-200"
                    >
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={[
                    "w-full py-3.5 rounded-xl text-center font-bold transition-all",
                    plan.isPopular
                      ? "bg-pink-600 text-white hover:bg-pink-500 shadow-xl"
                      : "bg-white/10 text-white hover:bg-white/20",
                  ].join(" ")}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "How long does a typical AI project take?",
                a: "Most focused AI implementations (like a custom chatbot or internal tool) take between 4 to 8 weeks from discovery to deployment.",
              },
              {
                q: "Do I need to have my own data already?",
                a: "Having existing data helps, but we can also assist with data gathering, synthetic data, and logging infrastructure.",
              },
              {
                q: "What happens after the project is delivered?",
                a: "We provide 30–90 days of active monitoring and support. Long-term retainers are available for mission-critical systems.",
              },
              {
                q: "Is my proprietary information safe?",
                a: "Yes. We can sign NDAs and your data is never used to train public models. Private deployments are supported.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="p-6 sm:p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
              >
                <h4 className="flex items-start gap-3 text-base sm:text-lg font-bold">
                  <HelpCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <span>{item.q}</span>
                </h4>
                <p className="mt-3 text-zinc-300 text-sm leading-relaxed sm:pl-8">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
            >
              Still have questions? Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
