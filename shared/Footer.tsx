import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

type FooterLink = {
  label: string;
  path: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const quickLinks: FooterLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Project", path: "/project" },
];

const serviceLinks: FooterLink[] = [
  { label: "UI/UX Design", path: "/service#ui-ux" },
  { label: "Web Design", path: "/service#web" },
  { label: "Landing Page", path: "/service#landing" },
];

const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "Dribbble", href: "https://dribbble.com", icon: FaDribbble },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-black text-white">
      <div className="container pt-14 pb-8">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 pb-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-orange text-xs font-bold">
                JC
              </span>
              <span className="text-lg font-semibold tracking-wide">JCREA</span>
            </Link>
            <p className="mt-4 max-w-[220px] text-sm text-white/60">
              Product designer crafting clean, human-centered digital
              experiences.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Services" links={serviceLinks} />

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
              Follow
            </h3>
            <ul className="flex flex-wrap gap-3 pb-3">
              {socialLinks?.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary-orange hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(link => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="text-sm text-white/70 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
