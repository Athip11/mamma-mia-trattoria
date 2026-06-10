import { Link, useLocation } from 'react-router';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const mobileActionClass = (path?: string) =>
    `mamma-mobile-cta-link${path && isActive(path) ? ' is-active' : ''}`;

  const desktopActionClass = (path: string) =>
    `flex items-center justify-center px-5 py-2 border font-['Inter'] text-[12px] tracking-[1.2px] leading-[14.4px] transition-all duration-150 active:translate-y-px ${
      isActive(path)
        ? 'bg-[#9c7a3e] text-white hover:bg-[#8b6c37] active:bg-[#765b2f]'
        : 'bg-[#c7a66a] border-[#9c7a3e] text-white hover:bg-[#b89660] active:bg-[#9c7a3e]'
    }`;

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/menu', label: 'MENU' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const ctaLinks = [
    { path: '/order', label: 'ORDER' },
    { path: '/reservations', label: 'TABLE RESERVE' },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#fcf8f7] focus:px-4 focus:py-3 focus:font-['Inter'] focus:text-[12px] focus:tracking-[1.2px] focus:text-[#5e5f5b] focus:shadow-lg focus:outline focus:outline-2 focus:outline-[#9c7a3e]"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 backdrop-blur-[8px] bg-[rgba(252,248,247,0.45)] border-b border-[rgba(94,95,91,0.08)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between gap-3 py-1.5 sm:py-3 lg:py-4">
            {/* Logo */}
            <Link to="/" className="min-w-0 truncate font-['EB_Garamond'] text-[#5e5f5b] text-xl sm:text-2xl lg:text-[32px] tracking-[-0.8px] leading-tight lg:leading-[41.6px]">
              Mamma Mia Trattoria
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-['Inter'] text-[12px] tracking-[1.2px] leading-[14.4px] transition-colors ${
                    isActive(link.path)
                      ? 'text-[#5e5f5b] border-b border-[#5e5f5b] pb-1'
                      : 'text-[#464742] hover:text-[#5e5f5b]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              {ctaLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={desktopActionClass(link.path)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mr-3 flex min-h-12 min-w-12 shrink-0 items-center justify-center p-2 text-[#5e5f5b] transition-all duration-150 hover:bg-[#f7f1e7] active:translate-y-px active:bg-[#eadfcf] lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="relative block h-5 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-[3px] h-px w-5 bg-current transition-transform duration-150 ${
                    mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-px w-5 bg-current transition-opacity duration-150 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[17px] h-px w-5 bg-current transition-transform duration-150 ${
                    mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-12 items-center font-['Inter'] text-[14px] tracking-[1.2px] py-3 ${
                    isActive(link.path)
                      ? 'text-[#5e5f5b] border-l-2 border-[#5e5f5b] pl-4'
                      : 'text-[#464742] pl-4 hover:text-[#5e5f5b]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {location.pathname !== '/reservations' && (
        <nav className="mamma-mobile-cta-bar lg:hidden" aria-label="Quick actions">
          <div className="mamma-mobile-cta-panel">
            <a href="tel:5551234567" className={`${mobileActionClass()} is-call`}>
              <span>CALL</span>
            </a>
            <Link to="/reservations" className={`${mobileActionClass('/reservations')} is-reserve`}>
              <span>RESERVE</span>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
