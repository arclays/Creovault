import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { MovieHomeCaurosal } from "../components/cards/MovieHomeCaurosal";

export default function Movies() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <MovieHomeCaurosal />
      </main>
      <Footer />
    </div>
  );
}
