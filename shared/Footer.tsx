import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

type FooterLink = {
  label: string;
  path: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type FooterProps = {
  logo?: {
    label: string;
    initials: string;
    path?: string;
  };
  quickLinks?: FooterLink[];
  serviceLinks?: FooterLink[];
  socials?: SocialLink[];
  email?: string;
  className?: string;
};

const DEFAULT_LOGO = { label: "JCREA", initials: "JC", path: "/" };

const DEFAULT_QUICK_LINKS: FooterLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Project", path: "/project" },
];

const DEFAULT_SERVICE_LINKS: FooterLink[] = [
  { label: "UI/UX Design", path: "/service#ui-ux" },
  { label: "Web Design", path: "/service#web" },
  { label: "Landing Page", path: "/service#landing" },
];

const DEFAULT_SOCIALS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "Dribbble", href: "https://dribbble.com", icon: FaDribbble },
];

export default function Footer({
  logo = DEFAULT_LOGO,
  quickLinks = DEFAULT_QUICK_LINKS,
  serviceLinks = DEFAULT_SERVICE_LINKS,
  socials = DEFAULT_SOCIALS,
  email = "hello@jcrea.com",
  className = "",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`relative overflow-hidden bg-secondary-black text-white ${className}`}
    >
      {/* ambient glow, echoes the hero's orange arc */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-orange/10 blur-3xl" />

      <div className="container relative py-16">
        {/* CTA row */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-primary-orange">
              Let&apos;s work together
            </p>
            <h2 className="max-w-md text-3xl font-semibold leading-tight md:text-4xl">
              Have a project in mind? Let&apos;s create something great.
            </h2>
          </div>

          <a
            href={`mailto:${email}`}
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-primary-orange px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            {email}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <FiArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href={logo.path ?? "/"} className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-orange text-xs font-bold">
                {logo.initials}
              </span>
              <span className="text-lg font-semibold tracking-wide">
                {logo.label}
              </span>
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
            <ul className="flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
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
          <p>
            © {year} {logo.label}. All rights reserved.
          </p>
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
