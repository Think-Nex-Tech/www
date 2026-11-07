
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link href="/" className="brand footer-brand">
           <Image
             src="/images/thinknex-symbol.png"
             alt="ThinkNex symbol"
             width={48}
             height={39}
             className="brand-symbol"
  />
  <span className="brand-wordmark">
    ThinkNex<span>.</span>
  </span>
</Link>
          

          <p>
            Ideas deserve intelligent execution.
            <br />
            Building what comes next.
          </p>
        </div>

        <div className="footer-links">
          <span>EXPLORE</span>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#approach">Our approach</Link>
          <Link href="#work">Our work</Link>
        </div>

        <div className="footer-links">
          <span>CONNECT</span>
          <Link href="#contact">Contact us ↗</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 ThinkNex. All rights reserved.</span>
        <span>think.</span>
      </div>
    </footer>
  );
}
