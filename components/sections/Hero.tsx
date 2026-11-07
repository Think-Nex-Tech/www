
import Link from "next/link";

const orbitServices = [
  {
    number: "01",
    name: "Product Engineering",
    className: "orbit-service-one",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m8 10-2 2 2 2m8-4 2 2-2 2m-3-5-2 6" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "AI & Intelligent Systems",
    className: "orbit-service-two",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Automation & Integration",
    className: "orbit-service-three",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="6" height="6" rx="1.5" />
        <rect x="15" y="15" width="6" height="6" rx="1.5" />
        <path d="M9 6h3a3 3 0 0 1 3 3v6m-3-3 3 3 3-3M6 9v3a3 3 0 0 0 3 3h6" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Cloud Solutions",
    className: "orbit-service-four",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 8.5 4.8 4.8 0 0 0 7 18Z" />
        <path d="M12 11v8m-3-3 3 3 3-3" />
      </svg>
    ),
  },
  {
    number: "05",
    name: "Technology Consulting",
    className: "orbit-service-five",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18h6m-5 3h4m-2-18a7 7 0 0 0-4 12.74c.6.4 1 1.08 1 1.76h6c0-.68.4-1.36 1-1.76A7 7 0 0 0 12 3Z" />
        <path d="M12 7v4m-2-2h4" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot"></span>
            THINK. DESIGN. ENGINEER. EVOLVE.
          </div>

          <h1>
            Ideas deserve
            <br />
            intelligent
            <br />
            <span>execution.</span>
          </h1>

          <p className="hero-description">
            From concept to creation, we build digital products,
            intelligent systems and technology solutions that
            move businesses forward.
          </p>

          <div className="hero-actions">
            <Link href="#services" className="button button-primary">
              Explore our capabilities <span>↗</span>
            </Link>

            <Link href="#contact" className="button button-secondary">
              Let&apos;s talk
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-line"></span>
            Built on intelligence. Driven by engineering.
          </div>
        </div>

        <div
          className="hero-visual"
          role="img"
          aria-label="Five connected technology capabilities orbiting a central idea: product engineering, artificial intelligence, automation, cloud solutions and technology consulting."
        >
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>
          <div className="visual-orbit orbit-three"></div>

          <div className="visual-core">
            <div className="core-inner">
              <span className="core-dot core-dot-one"></span>
              <span className="core-dot core-dot-two"></span>
              <span className="core-dot core-dot-three"></span>
              <span className="core-caption">IDEA TO IMPACT</span>
            </div>
          </div>

          <div className="orbit-track">
            {orbitServices.map((service) => (
              <div
                key={service.number}
                className={`orbit-service ${service.className}`}
              >
                <div className="orbit-service-inner">
                  <span className="orbit-service-icon">
                    {service.icon}
                  </span>
                  <span className="orbit-service-number">
                    {service.number}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="visual-label label-top">INTELLIGENCE</div>
          <div className="visual-label label-bottom">
            ENGINEERING THE FUTURE
          </div>
        </div>
      </div>

      <div className="container hero-bottom">
        <span>THOUGHTFUL BY DESIGN.</span>
        <span>POWERFUL BY ENGINEERING.</span>
        <span>BUILT FOR WHAT&apos;S NEXT.</span>
      </div>
    </section>
  );
}
