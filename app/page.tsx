
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <span>ONE PARTNER.</span>
            <span>MULTIPLE POSSIBILITIES.</span>
            <span>THOUGHTFUL EXECUTION.</span>
          </div>
        </section>

        <section className="about section-padding" id="about">
          <div className="container about-grid">
            <div className="eyebrow">
              <span className="status-dot"></span>
              ABOUT THINKNEX
            </div>

            <div>
              <h2>
                We don&apos;t just build technology.
                <br />
                <span>We bring ideas to life.</span>
              </h2>

              <p>
                Every meaningful solution begins with a thought.
                At ThinkNex, we combine creative thinking,
                technical expertise and intelligent engineering
                to transform possibilities into working products.
              </p>
            </div>
          </div>
        </section>

        <Services />

        <section className="approach section-padding" id="approach">
          <div className="container">
            <div className="eyebrow">
              <span className="status-dot"></span>
              HOW WE WORK
            </div>

            <h2>
              A thoughtful process.
              <br />
              <span>Engineered outcomes.</span>
            </h2>

            <div className="approach-grid">
              {[
                ["01", "Discover", "Understand the problem, people and possibilities."],
                ["02", "Strategize", "Define the right direction and technical approach."],
                ["03", "Design", "Shape experiences and solutions around real needs."],
                ["04", "Engineer", "Build, integrate, test and refine."],
                ["05", "Evolve", "Improve and grow as needs change."],
              ].map(([number, title, description]) => (
                <article className="approach-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work section-padding" id="work">
          <div className="container work-inner">
            <div className="eyebrow">
              <span className="status-dot"></span>
              OUR WORK
            </div>

            <h2>
              Turning thinking
              <br />
              into <span>something tangible.</span>
            </h2>

            <p>
              Great ideas deserve more than a presentation.
              They deserve thoughtful design, solid engineering
              and meaningful execution.
            </p>

            <span className="work-note">
              PROJECT SHOWCASE — COMING SOON
            </span>
          </div>
        </section>

        <section className="contact section-padding" id="contact">
          <div className="container contact-inner">
            <div className="eyebrow">
              <span className="status-dot"></span>
              START A CONVERSATION
            </div>

            <h2>
              Have an idea?
              <br />
              <span>Let&apos;s engineer it.</span>
            </h2>

            <p>
              Whether you&apos;re starting with a concept or looking
              to evolve an existing business, let&apos;s explore
              what&apos;s possible.
            </p>

             <div className="contact-actions">
               <a href="mailto:hello@thinknex.com" className="button button-primary">
                Get in touch <span aria-hidden="true">↗</span>
               </a>

               <span className="contact-note">
                 Email address is a placeholder until confirmed.
               </span>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
