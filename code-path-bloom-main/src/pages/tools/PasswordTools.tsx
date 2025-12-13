import { Key, Terminal, Zap, Database, Hash, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolDetailCard from '@/components/ToolDetailCard';
import SectionTitle from '@/components/SectionTitle';

const PasswordTools = () => {
  const tools = [
    {
      name: 'Hydra',
      description: 'أداة تخمين كلمات المرور عبر البروتوكولات المختلفة.',
      commands: [
        'hydra -l admin -P passwords.txt ssh://target',
        'hydra -L users.txt -P pass.txt ftp://target',
        'hydra -l admin -P pass.txt http-post-form "..."',
        'hydra -l user -P pass.txt rdp://target',
      ],
      website: 'https://github.com/vanhauser-thc/thc-hydra',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      name: 'John the Ripper',
      description: 'أداة كسر كلمات المرور الشهيرة.',
      commands: [
        'john --wordlist=rockyou.txt hashes.txt',
        'john --format=NT hashes.txt',
        'john --show hashes.txt',
        'unshadow passwd shadow > combined.txt',
      ],
      website: 'https://www.openwall.com/john/',
      icon: <Key className="w-6 h-6" />,
    },
    {
      name: 'Hashcat',
      description: 'أسرع أداة لكسر الـ Hashes باستخدام GPU.',
      commands: [
        'hashcat -m 0 hashes.txt wordlist.txt',
        'hashcat -m 1000 hashes.txt wordlist.txt',
        'hashcat -m 0 -a 3 hashes.txt ?a?a?a?a',
        'hashcat --show hashes.txt',
      ],
      website: 'https://hashcat.net/hashcat/',
      icon: <Hash className="w-6 h-6" />,
    },
    {
      name: 'Medusa',
      description: 'أداة تخمين كلمات المرور بالتوازي.',
      commands: [
        'medusa -h target -u admin -P pass.txt -M ssh',
        'medusa -H hosts.txt -U users.txt -P pass.txt -M ftp',
      ],
      website: 'http://foofus.net/goons/jmk/medusa/medusa.html',
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      name: 'CeWL',
      description: 'أداة إنشاء قوائم كلمات من المواقع.',
      commands: [
        'cewl -d 2 -m 5 https://target.com',
        'cewl -d 2 -m 5 -w wordlist.txt https://target.com',
        'cewl -e -a https://target.com',
      ],
      website: 'https://github.com/digininja/CeWL',
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: 'Crunch',
      description: 'أداة إنشاء قوائم كلمات مخصصة.',
      commands: [
        'crunch 8 8 -o wordlist.txt',
        'crunch 6 8 abc123 -o wordlist.txt',
        'crunch 8 8 -t pass@@@@',
      ],
      website: 'https://github.com/jim3ma/crunch',
      icon: <Lock className="w-6 h-6" />,
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
              أدوات الـ Password Attacks
            </h1>
            <p className="text-muted-foreground text-lg">
              أدوات كسر وتخمين كلمات المرور.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="الأدوات المتاحة" 
            subtitle="أدوات أساسية لهجمات كلمات المرور."
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

export default PasswordTools;