"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileCard({ name, designation, description, initials, accent, image }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = image && !imageFailed;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_18px_45px_rgba(120,53,15,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(120,53,15,0.16)]">
      <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-linear-to-br ${accent} text-5xl font-semibold tracking-wide text-white transition-transform duration-300 group-hover:scale-[1.03]`}>
        {showImage ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          initials
        )}
      </div>

      <div className="flex flex-1 flex-col space-y-3 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-slate-800">{name}</h3>
          <p className="mt-1 text-sm font-medium uppercase tracking-[0.25em] text-amber-700">{designation}</p>
        </div>

        <p className="text-base leading-7 text-slate-600">{description}</p>

        <div className="mt-auto flex items-center gap-3 pt-4">
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-700">
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            View Profile
          </button>

          <button className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800">
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Message
          </button>
        </div>
      </div>
    </article>
  );
}
