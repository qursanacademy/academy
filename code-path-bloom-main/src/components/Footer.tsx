import { Shield, Terminal, Instagram, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-cyber-darker/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary" />
                <Terminal className="w-4 h-4 text-secondary absolute -bottom-1 -left-1" />
              </div>
              <span className="font-display text-xl font-bold text-primary">
                أكاديمية <span className="text-secondary">القراصنة العرب</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              دليلك الشامل لإتقان الأمن السيبراني. من الأساسيات إلى التقنيات المتقدمة، نحن نغطي كل ما تحتاجه.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider">
              روابط سريعة
            </h3>
            <div className="space-y-2">
              {[
                { path: '/', label: 'الرئيسية' },
                { path: '/roadmap', label: 'خارطة الطريق' },
                { path: '/tools', label: 'الأدوات' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider">
              تواصل معنا
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/azzam.sec/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@azzamsec"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-muted/30 text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} أكاديمية القراصنة العرب. جميع الحقوق محفوظة.
            <br />
            <span className="text-primary">Azzam Sec</span>
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            صُنع بـ <Heart className="w-4 h-4 text-destructive" /> لمجتمع الأمن السيبراني
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
