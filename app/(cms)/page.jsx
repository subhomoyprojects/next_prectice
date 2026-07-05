import CounterCard from "../../components/CounterCard";
import LinkCard from "../../components/LinkCard";
import ProfileCard from "../../components/ProfileCard";
import homeContent from "../../data/home-content.json";

const { topics, profiles } = homeContent;

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">Next.js Learning Project</p>
          <h1>Learn React and Next.js by reading real code</h1>
          <p className="hero-copy">This small project shows how pages, components, links, styling, and state work together in a Next.js app.</p>
        </div>
      </section>

      <section className="grid three-col">
        {topics.map((topic) => (
          <LinkCard key={topic.title} {...topic} />
        ))}
      </section>

      <section className="mt-6 rounded-4xl border border-stone-200 bg-[rgba(255,252,246,0.86)] p-6 shadow-[0_20px_45px_rgba(106,63,20,0.12)]">
        <div className="mb-6 max-w-2xl">
          <p className="section-label">Profile Cards</p>
          <h2 className="mt-2 text-4xl font-semibold leading-tight text-slate-800">Team layout with image area, name, role, and short description</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">This section is built with Tailwind utility classes so you can learn card layout in a practical way.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} {...profile} />
          ))}
        </div>
      </section>

      <section className="learn-panel">
        <div>
          <p className="section-label">What to study first</p>
          <h2>Start with the `app` folder</h2>
          <p>In Next.js App Router, each folder can become a route. For example, `app/about/page.js` becomes the About page.</p>
        </div>
        <CounterCard />
      </section>
    </main>
  );
}
