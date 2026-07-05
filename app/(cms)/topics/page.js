const lessons = [
  {
    title: "Server Components",
    text: "Files in the app folder are server components by default. They are great for loading data."
  },
  {
    title: "Client Components",
    text: "Add `\"use client\"` at the top when you need browser interactivity like click handlers and state."
  },
  {
    title: "Navigation",
    text: "Use the Link component from next/link for fast page navigation."
  }
];

export default function TopicsPage() {
  return (
    <main>
      <section className="content-card">
        <p className="eyebrow">Topics</p>
        <h1>Core ideas to learn next</h1>
        <div className="stack-list">
          {lessons.map((lesson) => (
            <article key={lesson.title} className="topic-item">
              <h2>{lesson.title}</h2>
              <p>{lesson.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
