export default function OpenSourceSection() {
  return (
    <section
      id="opensource"
      className="bg-zinc-100 dark:bg-zinc-950 py-28"
    >
      <div className="mx-auto px-6 container">
        <h2 className="mb-12 font-bold text-4xl text-center">
          Open Source
        </h2>

        <div className="bg-white dark:bg-black p-10 border rounded-3xl">
          <h3 className="font-bold text-2xl">
            react-persian-range-picker
          </h3>

          <p className="mt-4 text-zinc-500">
            Jalali & Gregorian date range picker built with React and
            TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
}