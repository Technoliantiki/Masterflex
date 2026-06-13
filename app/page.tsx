"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.location.replace("/el");
  }, []);

  return (
    <main style={{ padding: "48px", fontFamily: "Arial, sans-serif" }}>
      <h1>Masterflex</h1>
      <p>Redirecting to the Greek homepage...</p>
      <p>
        <a href="/el">Go to Greek homepage</a>
      </p>
    </main>
  );
}
