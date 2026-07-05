"use client";

import { useState } from "react";

export default function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <p className="section-label">Client Component</p>
      <h2>Simple React state</h2>
      <p>`useState` stores a value and updates the UI when the value changes.</p>
      <p className="counter-display">{count}</p>
      <div className="button-row">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button className="secondary" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Decrease
        </button>
      </div>
    </div>
  );
}
