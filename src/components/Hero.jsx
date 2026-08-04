import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="hero-glow min-h-screen flex items-center px-6 pt-16 pb-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div className="text-center md:text-left max-w-xl">

          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted border border-line rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            Open to internships & freelance work · Sialkot, PK
          </div>

          <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3">
            [ Software Engineer ]
          </p>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] text-paper">
            Zainab Aziz
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineering Student",
              2000,
              "Full-Stack Developer",
              2000,
              "Security-Minded Builder",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-mono text-lg md:text-xl text-signal block mt-5"
          />

          <p className="text-muted text-lg leading-8 mt-6">
            I design and build reliable web applications end to end — from
            React interfaces to the data and security layers underneath —
            with a growing focus on information security and
            AI-authenticity tooling.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">

            <a
              href="/Zainab_Aziz_CV.pdf"
              download
              className="flex items-center justify-center gap-2 bg-signal text-ink px-7 py-3 rounded-md font-mono text-sm font-semibold uppercase tracking-wide hover:bg-paper transition-colors duration-300"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 border border-line text-paper px-7 py-3 rounded-md font-mono text-sm font-semibold uppercase tracking-wide hover:border-signal hover:text-signal transition-colors duration-300"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-10 justify-center md:justify-start">

            <a
              href="https://github.com/znbaziz2004-prog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-signal transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/zainab-aziz-70909a37a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bbs0mVilsSdOIC0VDnLK0MQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-signal transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:znbaziz2606@gmail.com"
              aria-label="Email"
              className="text-muted hover:text-signal transition-colors"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative shrink-0">
          <span className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-signal" />
          <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-signal" />
          <img
            src="/profile.jpeg"
            alt="Zainab Aziz"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border border-line shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
