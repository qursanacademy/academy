import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Terminal, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const location = useLocation();
  const toolsRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/roadmap', label: 'خارطة الطريق' },
    { path: '/practical-labs', label: 'التطبيق العملي' },
    { path: '/tools', label: 'مكتبة الأدوات' },
    { path: '/about', label: 'حول' },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--neon-green))]" />
              <Terminal className="w-4 h-4 text-secondary absolute -bottom-1 -left-1" />
            </div>
            <span className="font-display text-lg font-bold text-primary glow-green">
              أكاديمية <span className="text-secondary">القراصنة العرب</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium tracking-wider transition-all duration-300 relative group ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute inset-0 bg-primary/10 rounded transition-all duration-300 ${
                  isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary shadow-[0_0_10px_hsl(var(--neon-green))]" />
                )}
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-primary hover:bg-primary/10 rounded transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in-up">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium tracking-wider transition-all duration-300 ${
                  isActive(link.path) ? 'text-primary bg-primary/10 border-r-2 border-primary' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;