function About() {
  const facts = [
    { label: "Education", value: "BS Software Engineering" },
    { label: "University", value: "UMT Sialkot" },
    { label: "Email", value: "znbaziz2606@gmail.com" },
    { label: "Location", value: "Sialkot, Pakistan" },
  ];

  return (
    <section id="about" className="py-28 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative">
            <span className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-signal" />
            <span className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-signal" />
            <img
              src="/profile.jpeg"
              alt="Zainab Aziz"
              className="w-80 h-80 rounded-2xl object-cover border border-line shadow-xl"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 md:order-2">

          <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3">
            [ About ]
          </p>

          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-paper mb-6">
            Building things that hold up
          </h2>

          <p className="text-muted leading-8 text-lg">
            I'm <span className="text-paper font-semibold">Zainab Aziz</span>,
            a Software Engineering student who likes taking an idea from a
            blank file to a working application — and asking whether it's
            secure and trustworthy along the way.
          </p>

          <p className="text-muted leading-8 text-lg mt-6">
            My day-to-day toolkit is React, JavaScript, and Node.js, backed
            by coursework in databases, algorithms, and information
            security that shapes how I approach problems.
          </p>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 mt-10 pt-8 border-t border-line">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-signal mb-1">
                  {fact.label}
                </dt>
                <dd className="text-paper break-words">{fact.value}</dd>
              </div>
            ))}
          </dl>

        </div>

      </div>
    </section>
  );
}

export default About;
