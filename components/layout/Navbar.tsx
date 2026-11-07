
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our approach", href: "#approach" },
  { label: "Our work", href: "#work" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">

        {/* ThinkNex brand */}
        <Link href="/" className="brand" aria-label="ThinkNex home">
          <Image
            src="/images/thinknex-symbol.png"
            alt=""
            width={44}
            height={36}
            priority
            className="brand-symbol"
          />
          <span className="brand-wordmark">
            ThinkNex<span>.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="desktop-nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <Link href="#contact" className="nav-cta">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile navigation */}
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
          </summary>

          <div className="mobile-menu-panel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="#contact">Let&apos;s talk ↗</Link>
          </div>
        </details>

      </nav>
    </header>
  );
}
