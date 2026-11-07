
const services = [
  {
    number: "01",
    title: "Digital Product Engineering",
    description:
      "We design and develop websites, mobile applications and custom software built around real-world needs.",
    tags: ["Websites", "Mobile apps", "Custom software"],
    symbol: "⌘",
  },
  {
    number: "02",
    title: "AI & Intelligent Systems",
    description:
      "We bring intelligence into products and processes through AI-powered applications, agents and integrations.",
    tags: ["AI agents", "Machine learning", "AI integration"],
    symbol: "✳",
  },
  {
    number: "03",
    title: "Automation & Integration",
    description:
      "We connect systems and automate repetitive workflows to help businesses operate more efficiently.",
    tags: ["Workflow automation", "API integration", "Process design"],
    symbol: "⤳",
  },
  {
    number: "04",
    title: "Cloud & Technology Solutions",
    description:
      "We engineer dependable technology foundations for modern applications and evolving business needs.",
    tags: ["Cloud solutions", "Modernization", "Infrastructure"],
    symbol: "◈",
  },
  {
    number: "05",
    title: "Technology Consulting",
    description:
      "We help turn technical challenges and product ideas into clear strategies, architectures and execution plans.",
    tags: ["Technical strategy", "Architecture", "Product planning"],
    symbol: "⌁",
  },
];

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="status-dot"></span>
              WHAT WE DO
            </div>

            <h2>
              Technology that
              <br />
              <span>moves ideas forward.</span>
            </h2>
          </div>

          <p>
            From the first idea to the final implementation,
            we bring together creativity, engineering and
            intelligence to build meaningful solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-symbol" aria-hidden="true">
                  {service.symbol}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="service-card-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
