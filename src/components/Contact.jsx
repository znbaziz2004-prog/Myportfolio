import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio message from ${form.name || "your site"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:znbaziz2606@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">

        <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3 text-center">
          [ Contact ]
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-paper text-center mb-16">
          Let's talk
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>

            <h3 className="font-display font-bold text-2xl text-paper mb-4">
              Open to internships & collaboration
            </h3>

            <p className="text-muted leading-8">
              I'm always interested in internships, freelance projects, and
              opportunities to collaborate on interesting software.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-signal mb-1">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:znbaziz2606@gmail.com"
                    className="text-paper hover:text-signal transition-colors"
                  >
                    znbaziz2606@gmail.com
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-signal mb-1">
                  Location
                </dt>
                <dd className="text-paper">Defence Road, Sialkot, Pakistan</dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-signal mb-1">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/zainab-aziz-70909a37a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bbs0mVilsSdOIC0VDnLK0MQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper hover:text-signal transition-colors break-all"
                  >
                    linkedin.com/in/zainab-aziz-70909a37a
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-signal mb-1">
                  GitHub
                </dt>
                <dd>
                  <a
                    href="https://github.com/znbaziz2004-prog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper hover:text-signal transition-colors"
                  >
                    github.com/znbaziz2004-prog
                  </a>
                </dd>
              </div>
            </dl>

          </div>

          {/* Right Side */}
          <form
            onSubmit={handleSubmit}
            className="bg-surface border border-line p-8 rounded-xl space-y-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-surface-2 border border-line outline-none focus:border-signal transition-colors placeholder:text-muted"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-surface-2 border border-line outline-none focus:border-signal transition-colors placeholder:text-muted"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-surface-2 border border-line outline-none focus:border-signal transition-colors placeholder:text-muted"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-signal text-ink py-3 rounded-md font-mono text-sm font-semibold uppercase tracking-wide hover:bg-paper transition-colors"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
