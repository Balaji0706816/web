import Link from "next/link";
import Container from "./components/ui/container";
import Hero from "./components/ui/hero";
import Services from "./(marketing)/services/page";
import Pricing from "./(marketing)/pricing/page";

export default function HomePage() {
  return (
    <div className="py-16">
<Hero />
<Services />
<Pricing />

      <Container>
        <h1 className="text-4xl font-bold tracking-tight">webaigen</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          AI automation + modern web services for businesses.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/services">
            Services
          </Link>
          <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/pricing">
            Pricing
          </Link>
          <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/contact">
            Contact
          </Link>
          <Link className="rounded-md border px-4 py-2 hover:bg-zinc-50" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </Container>
    </div>
  );
}
