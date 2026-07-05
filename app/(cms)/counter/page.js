import CounterCard from "../../../components/CounterCard";

export default function CounterPage() {
  return (
    <main>
      <section className="content-card">
        <p className="eyebrow">Interactive Example</p>
        <h1>Counter page</h1>
        <p>
          This page uses a client component because buttons and state updates
          happen in the browser.
        </p>
        <CounterCard />
      </section>
    </main>
  );
}
