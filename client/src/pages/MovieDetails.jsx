import React from "react";
import Footer from "../components/Footer";
import { SubHeader } from "../components/cards/SubHeader";

export default function MovieDetails() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b bg-neutral-800">
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}
