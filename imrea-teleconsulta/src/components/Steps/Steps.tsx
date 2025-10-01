import type { JSX } from "react";

export type StepItem = {
  icon: string;
  title: string;
  content: string | JSX.Element;
};

type StepsProps = {
  title: string;
  items: StepItem[];
};

export default function Steps({ title, items }: StepsProps) {
  return (
    <section className="container-max py-10">
      <h2 className="text-imrea-green text-2xl mb-6">{title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s, i) => (
          <section key={i} className="card border-l-4 border-imrea-green2 flex gap-4">
            <span className="text-3xl" aria-hidden>{s.icon}</span>
            <div>
              <h3 className="text-imrea-green font-semibold mb-1">{s.title}</h3>
              <p className="leading-relaxed">{s.content}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
