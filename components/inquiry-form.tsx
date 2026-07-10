"use client";

import { useState, type FormEvent } from "react";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Upit za smještaj — ${name || "gost"}`);
    const body = encodeURIComponent(
      `Ime: ${name}\nŽeljeni termin: ${dates}\nBroj gostiju: ${guests}\n\nPoruka:\n${message}`
    );
    window.location.href = `mailto:info@pansion-sibenik.hr?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-display text-[0.65rem] tracking-label text-parchment/75">Ime i prezime</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-parchment/30 bg-parchment/5 px-4 py-3 font-body text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
            placeholder="Vaše ime"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-display text-[0.65rem] tracking-label text-parchment/75">Broj gostiju</span>
          <input
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="border border-parchment/30 bg-parchment/5 px-4 py-3 font-body text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
            placeholder="npr. 2 odrasla"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-display text-[0.65rem] tracking-label text-parchment/75">Željeni termin</span>
        <input
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="border border-parchment/30 bg-parchment/5 px-4 py-3 font-body text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
          placeholder="npr. 12.–19. kolovoza"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="font-display text-[0.65rem] tracking-label text-parchment/75">Poruka</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="border border-parchment/30 bg-parchment/5 px-4 py-3 font-body text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
          placeholder="Recite nam nešto više o vašem putovanju..."
        />
      </label>

      <button
        type="submit"
        className="mt-2 border-2 border-brass bg-brass px-6 py-3.5 font-display text-xs tracking-label text-ink transition-opacity hover:opacity-90"
      >
        POŠALJITE UPIT E-POŠTOM
      </button>
      <p className="text-center font-body text-xs italic text-parchment/55">
        Otvara vašu e-mail aplikaciju s već popunjenom porukom.
      </p>
    </form>
  );
}
