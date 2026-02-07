import Link from "next/link";
import Container from "../ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} webaigen</p>
        <div className="flex gap-4 text-sm">
          <Link className="text-zinc-600 hover:text-zinc-900" href="/privacy">
            Privacy
          </Link>
          <Link className="text-zinc-600 hover:text-zinc-900" href="/terms">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
