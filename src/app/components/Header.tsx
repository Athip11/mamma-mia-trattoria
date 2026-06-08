import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const mobileActionClass = (path: string) =>
    `flex-1 px-4 py-3 text-center font-['Inter'] text-[12px] tracking-[1.2px] transition-all duration-150 active:translate-y-px ${
      isActive(path)
        ? 'bg-[#9c7a3e] text-white hover:bg-[#8b6c37] active:bg-[#765b2f]'
        : 'bg-[#c7a66a] text-[#241c16] hover:bg-[#b89660] active:bg-[#9c7a3e] active:text-white'
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
      <header className="sticky top-0 z-50 backdrop-blur-[6px] bg-[rgba(252,248,247,0.8)] border-b border-[rgba(94,95,91,0.1)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="font-['EB_Garamond'] text-[#5e5f5b] text-xl sm:text-2xl lg:text-[32px] tracking-[-0.8px] leading-[41.6px]">
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
                  className={`flex items-center justify-center px-5 py-2 border font-['Inter'] text-[12px] tracking-[1.2px] leading-[14.4px] transition-all duration-150 active:translate-y-px ${
                    isActive(link.path)
                      ? 'bg-[#9c7a3e] border-[#9c7a3e] text-white hover:bg-[#8b6c37] active:bg-[#765b2f]'
                      : 'bg-[#c7a66a] border-[#9c7a3e] text-white hover:bg-[#b89660] active:bg-[#9c7a3e]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#5e5f5b] transition-all duration-150 hover:bg-[#f7f1e7] active:translate-y-px active:bg-[#eadfcf]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-['Inter'] text-[14px] tracking-[1.2px] py-2 ${
                    isActive(link.path)
                      ? 'text-[#5e5f5b] border-l-2 border-[#5e5f5b] pl-4'
                      : 'text-[#464742] pl-4 hover:text-[#5e5f5b]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-2">
                {ctaLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex-1 px-4 py-3 border text-center font-['Inter'] text-[12px] tracking-[1.2px] transition-all duration-150 active:translate-y-px ${
                      isActive(link.path)
                        ? 'bg-[#9c7a3e] border-[#9c7a3e] text-white hover:bg-[#8b6c37] active:bg-[#765b2f]'
                        : 'bg-[#c7a66a] border-[#9c7a3e] text-white hover:bg-[#b89660] active:bg-[#9c7a3e]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-50 lg:hidden border-t border-[#9c7a3e] bg-[#fcf8f7] px-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] shadow-[0_-8px_24px_rgba(94,95,91,0.12)]">
        <div className="max-w-md mx-auto flex gap-2">
          <Link to="/order" className={mobileActionClass('/order')}>
            ORDER
          </Link>
          <Link to="/reservations" className={mobileActionClass('/reservations')}>
            TABLE RESERVE
          </Link>
        </div>
      </nav>
    </>
  );
}
