import { Terminal, ExternalLink, Globe, Gamepad2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const LinuxWebsitesPage = () => {
  const websites = [
    {
      title: 'OverTheWire – Bandit',
      description: 'تحديات عملية لتعلم أساسيات لينكس والأوامر الرئيسية بطريقة ممتعة عبر ألعاب Wargames.',
      link: 'https://overthewire.org/wargames/bandit/',
      icon: <Gamepad2 className="w-6 h-6" />,
      type: 'تحديات عملية',
    },
    {
      title: 'Linux Journey',
      description: 'مسار تعلم شامل يغطي المفاهيم الأساسية والمتقدمة في لينكس بطريقة بسيطة.',
      link: 'https://linuxjourney.com/',
      icon: <Globe className="w-6 h-6" />,
      type: 'موقع تعليمي',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">نظام لينكس</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              مواقع لتعلم لينكس
            </h1>
            <p className="text-muted-foreground text-lg">
              مواقع تفاعلية وتحديات عملية لإتقان أوامر لينكس بطريقة ممتعة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="المواقع التعليمية" 
            subtitle="أفضل المواقع لتعلم لينكس بشكل تفاعلي وعملي."
            glowColor="green"
          />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {websites.map((website, index) => (
              <div 
                key={index} 
                className="cyber-card group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {website.icon}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                      {website.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300">
                    {website.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {website.description}
                  </p>
                  
                  <a
                    href={website.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    <span className="border-b border-primary/50 group-hover/link:border-primary transition-colors">
                      زيارة الموقع
                    </span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
                
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinuxWebsitesPage;
