import { Search, Globe, Server, Database, FileText, Terminal, Eye, Radar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolDetailCard from '@/components/ToolDetailCard';
import SectionTitle from '@/components/SectionTitle';

const ReconTools = () => {
  const tools = [
    {
      name: 'Shodan',
      description: 'محرك بحث للأجهزة المتصلة بالإنترنت.',
      commands: [
        'shodan search "apache"',
        'shodan host 1.1.1.1',
        'port:22 country:SA',
        'org:"company name"',
      ],
      website: 'https://www.shodan.io/',
      icon: <Search className="w-6 h-6" />,
    },
    {
      name: 'Censys',
      description: 'منصة بحث عن الأجهزة والشهادات.',
      commands: [
        'services.port: 443',
        'location.country: "Saudi Arabia"',
        'services.software.product: "nginx"',
      ],
      website: 'https://censys.io/',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      name: 'Amass',
      description: 'أداة قوية لاكتشاف النطاقات الفرعية.',
      commands: [
        'amass enum -d target.com',
        'amass enum -passive -d target.com',
        'amass intel -whois -d target.com',
      ],
      website: 'https://github.com/owasp-amass/amass',
      icon: <Radar className="w-6 h-6" />,
    },
    {
      name: 'Subfinder',
      description: 'أداة سريعة لاكتشاف النطاقات الفرعية.',
      commands: [
        'subfinder -d target.com',
        'subfinder -d target.com -o output.txt',
        'subfinder -dL domains.txt',
      ],
      website: 'https://github.com/projectdiscovery/subfinder',
      icon: <Server className="w-6 h-6" />,
    },
    {
      name: 'theHarvester',
      description: 'أداة لجمع البريد الإلكتروني والنطاقات.',
      commands: [
        'theHarvester -d target.com -b google',
        'theHarvester -d target.com -b all',
        'theHarvester -d target.com -l 500',
      ],
      website: 'https://github.com/laramies/theHarvester',
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: 'DNSRecon',
      description: 'أداة لجمع معلومات DNS.',
      commands: [
        'dnsrecon -d target.com',
        'dnsrecon -d target.com -t axfr',
        'dnsrecon -d target.com -D wordlist.txt -t brt',
      ],
      website: 'https://github.com/darkoperator/dnsrecon',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      name: 'Fierce',
      description: 'أداة لاكتشاف DNS والنطاقات.',
      commands: [
        'fierce --domain target.com',
        'fierce --domain target.com --subdomains',
      ],
      website: 'https://github.com/mschwager/fierce',
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      name: 'Recon-ng',
      description: 'إطار عمل كامل للاستطلاع.',
      commands: [
        'recon-ng',
        'workspaces create target',
        'modules load recon/domains-hosts/hackertarget',
        'run',
      ],
      website: 'https://github.com/lanmaster53/recon-ng',
      icon: <Eye className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              أدوات جمع المعلومات
            </h1>
            <p className="text-muted-foreground text-lg">
              أدوات الاستطلاع وجمع المعلومات عن الأهداف.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="الأدوات المتاحة" 
            subtitle="أدوات أساسية لجمع المعلومات والاستطلاع."
            glowColor="green"
          />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ToolDetailCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReconTools;