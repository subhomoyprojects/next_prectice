"use client";

import { use } from "react";

export default function BlogAuthorPage({ params }) {
  const { blogItems, authorId } = use(params);
  console.log("server dynamic url:", { blogItems, authorId });

  return (
    <main className="content-card">
      <p className="eyebrow">Dynamic Blog Route</p>
      <h1>Author: {authorId}</h1>
      <p>
        This value comes from the dynamic URL segment. For example,
        <br />
        <code>
          /blog/{blogItems}/author/{authorId}
        </code>
        <br />
        gives <strong>{authorId}</strong>.
      </p>
    </main>
  );
}
