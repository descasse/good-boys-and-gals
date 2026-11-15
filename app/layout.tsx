import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, locale: "en_GB", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link href="/" className="logo">{site.name}</Link>
            <nav aria-label="Main">
              <ul>
                <li><Link href="/safe-for-dogs">Safe foods</Link></li>
                <li><Link href="/feeding">Feeding</Link></li>
                <li><Link href="/#tools">Tools</Link></li>
                <li><Link href="/behaviour">Behaviour</Link></li>
                <li><Link href="/gear">Kit</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              {site.name} is general information for dog owners. It is not veterinary advice and does not
              replace a visit to your vet. If your dog is unwell or you think they have eaten something
              harmful, contact your vet straight away.
            </p>
            <p>
              We may earn a commission from some product links. It never changes what we recommend.
            </p>
            <ul className="footer-links">
              <li><Link href="/about">About and how we work</Link></li>
              <li><Link href="/sources">All sources</Link></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
