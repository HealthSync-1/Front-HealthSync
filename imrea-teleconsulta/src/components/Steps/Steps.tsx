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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-[#006b54] text-2xl mb-6">{title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s, i) => (
          <section key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006b54] flex gap-4 hover:shadow-md transition-shadow duration-200">
            <span className="text-3xl" aria-hidden>{s.icon}</span>
            <div>
              <h3 className="text-[#006b54] font-semibold mb-1">{s.title}</h3>
              <p className="leading-relaxed text-gray-700">{s.content}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

