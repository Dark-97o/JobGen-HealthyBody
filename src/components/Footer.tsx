import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (tab: string) => {
    onSelectTab(tab);
    scrollToTop();
  };

  const clinics = [
    {
      name: 'Penrith Flagship',
      address: '95 Lethbridge St, Penrith NSW 2750',
      phone: '(02) 4722 5555',
      tel: 'tel:0247225555',
      hours: 'Mon–Fri 7:30am–7:30pm · Sat 8am–1pm',
    },
    {
      name: 'Caringbah Practice',
      address: 'Suite 2, 383 Port Hacking Rd, Caringbah NSW 2229',
      phone: '(02) 9531 2000',
      tel: 'tel:0295312000',
      hours: 'Mon–Fri 7:30am–6:30pm · Sat 8am–12pm',
    },
    {
      name: 'Jordan Springs',
      address: 'Unit 9, 65 Water Gum Dr, Jordan Springs NSW 2747',
      phone: '(02) 4722 6994',
      tel: 'tel:0247226994',
      hours: 'Mon–Fri 7:30am–7:00pm · Sat 8am–1pm',
    },
    {
      name: 'Mount Annan',
      address: 'Shop 2, 1 Raintree Way, Mount Annan NSW 2567',
      phone: '(02) 4622 8111',
      tel: 'tel:0246228111',
      hours: 'Mon–Fri 7:30am–7:00pm · Sat 8am–12pm',
    },
  ];

  const navLinks = [
    { label: 'Home', tab: 'home' },
    { label: 'Services', tab: 'services' },
    { label: 'Clinics', tab: 'locations' },
    { label: 'Specialists', tab: 'team' },
    { label: 'About Us', tab: 'about' },
    { label: 'Careers', tab: 'careers' },
    { label: 'Blog', tab: 'blog' },
    { label: 'FAQs', tab: 'faqs' },
  ];

  return (
    <footer className="bg-[#080B11] text-slate-300 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-12">
        {/* Top Highlight Bar */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <img
              src="https://www.thehealthybodycompany.com.au/wp-content/themes/thbc/static/images/thbc-logo-white.png"
              alt="The Healthy Body Company"
              className="h-9 w-auto object-contain"
            />
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Helping Greater Sydney love the body they live in since 1998 — hands-on physiotherapy, sports rehab, and on-site recovery gyms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigate('locations')}
              className="inline-flex items-center gap-2 bg-healis-blue hover:bg-white text-white hover:text-healis-dark text-xs sm:text-sm font-medium px-6 py-3 rounded-pill transition-all duration-300"
            >
              <span>Find a Clinic</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://www.instagram.com/thehealthybodycompany/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-healis-blue border border-white/10 flex items-center justify-center text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Accreditations & Contact */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Accreditations &amp; Contact
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider font-semibold">
              {['APA Accredited', 'AHPRA Registered', 'SIRA Approved', 'NDIS Registered'].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>
            <a
              href="mailto:admin@thehealthybodycompany.com.au"
              className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-healis-blue transition-colors pt-1"
            >
              <Mail className="w-3.5 h-3.5 text-healis-blue" />
              <span>admin@thehealthybodycompany.com.au</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {navLinks.map((item) => (
                <li key={item.tab}>
                  <button
                    type="button"
                    onClick={() => navigate(item.tab)}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 Clinics Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Our 4 Sydney Clinics
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clinics.map((clinic) => (
                <div
                  key={clinic.name}
                  className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 space-y-1.5"
                >
                  <div className="font-exo text-sm font-semibold text-white">
                    {clinic.name}
                  </div>
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-400 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-healis-blue shrink-0 mt-0.5" />
                    <span>{clinic.address}</span>
                  </div>
                  <a
                    href={clinic.tel}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-200 font-mono hover:text-healis-blue transition-colors pt-0.5"
                  >
                    <Phone className="w-3 h-3 text-healis-blue" />
                    <span>{clinic.phone}</span>
                  </a>
                  <div className="text-[10px] text-slate-500 pt-0.5">
                    {clinic.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} The Healthy Body Company Pty Ltd. All rights reserved. ABN 84 092 114 742.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
