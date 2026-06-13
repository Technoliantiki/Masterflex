import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-carbon px-5 text-center">
      <div>
        <div className="font-display text-8xl font-bold text-signal">404</div>
        <h1 className="mt-6 font-display text-3xl font-semibold">Page not found</h1>
        <Link href="/en" className="btn-primary mt-8">Return to Masterflex</Link>
      </div>
    </main>
  );
}
