import Link from "next/link";

export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="container-wide">
        <div className="apple-footer-top">
          <div className="apple-footer-col brand-col">
            <div className="apple-footer-brand">
              <span className="brand-name">MACS-HIT</span>
            </div>
            <p className="apple-footer-desc">
              Independent cyber threat intelligence research operated by
              Kenneth Helmuth.
              <br />
              No vendor bias. No commercial agenda.
            </p>
          </div>

          <div className="apple-footer-col">
            <span className="footer-heading">Research</span>
            <div className="footer-links">
              <Link href="/reports" className="footer-link">
                Technical Reports
              </Link>
              <Link href="/dossier" className="footer-link">
                Adversary Dossier
              </Link>
              <Link href="/intelligence" className="footer-link">
                Intelligence Matrix
              </Link>
            </div>
          </div>

          <div className="apple-footer-col">
            <span className="footer-heading">Tooling & Validations</span>
            <div className="footer-links">
              <Link href="/tools" className="footer-link">
                Open Source Tools
              </Link>
              <Link href="/resources" className="footer-link">
                CTI Resources
              </Link>
              <Link href="/achievements" className="footer-link">
                Achievements & Disclosures
              </Link>
            </div>
          </div>

          <div className="apple-footer-col">
            <span className="footer-heading">Publications</span>
            <div className="footer-links">
              <a
                href="https://medium.com/@Real-macs_hit"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Medium Intel
              </a>
              <a
                href="https://github.com/KennethHelmuth"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
              <a
                href="https://x.com/MacsHitX"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                X @MacsHitX
              </a>
            </div>
          </div>
        </div>

        <div className="apple-footer-bottom">
          <p className="legal-text">
            Copyright © {new Date().getFullYear()} MACS-HIT — Kenneth Helmuth.
            All rights reserved. TLP:CLEAR / TLP:WHITE. For defensive and
            educational purposes only.
          </p>
          <div className="footer-bottom-links">
            <Link href="/about" className="bottom-link">
              About Operator
            </Link>
            <span className="divider">•</span>
            <a
              href="https://github.com/KennethHelmuth/macs-hit.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-link"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
