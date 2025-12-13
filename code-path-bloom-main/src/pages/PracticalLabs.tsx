import { ExternalLink, Server, Shield, Globe, Terminal, Monitor, Target, Github, Flag, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const PracticalLabs = () => {
  const labs = [
    {
      name: 'Hack The Box',
      description: 'أشهر منصة عملية تحتوي على عشرات الآلات، المختبرات، والتحديات الخاصة بالاختراق.',
      url: 'https://www.hackthebox.com/',
      icon: <Terminal className="w-8 h-8" />,
    },
    {
      name: 'TryHackMe',
      description: 'منصة تعليمية بالمختبرات التفاعلية من المستوى المبتدئ حتى الخبير.',
      url: 'https://tryhackme.com/',
      icon: <Target className="w-8 h-8" />,
    },
    {
      name: 'PortSwigger Web Security Academy',
      description: 'أفضل منصة في العالم لتعلم Web Security من خلال مختبرات عملية حقيقية.',
      url: 'https://portswigger.net/web-security',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      name: 'OverTheWire',
      description: 'منصات Wargames مثل Bandit و Narnia و Leviathan لتقوية أساسيات لينكس والاختراق.',
      url: 'https://overthewire.org/wargames/',
      icon: <Server className="w-8 h-8" />,
    },
    {
      name: 'CyberDefenders',
      description: 'تحديات Blue Team, DFIR, SOC.',
      url: 'https://cyberdefenders.org/',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      name: 'VulnHub',
      description: 'أجهزة افتراضية قابلة للتنزيل للتدريب على اختبار الاختراق.',
      url: 'https://www.vulnhub.com/',
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      name: 'pwn.college',
      description: 'منصة تعليمية متخصصة في تعلم Binary Exploitation و Reverse Engineering.',
      url: 'https://pwn.college/',
      icon: <Terminal className="w-8 h-8" />,
    },
    {
      name: 'CTF.org',
      description: 'دليل شامل لمسابقات CTF حول العالم مع تصنيفات وجداول زمنية.',
      url: 'https://www.ctf.org/',
      icon: <Flag className="w-8 h-8" />,
    },
    {
      name: 'Real World CTF',
      description: 'تحديات CTF متقدمة تحاكي سيناريوهات الاختراق في العالم الحقيقي.',
      url: 'https://realworldctf.com/',
      icon: <Trophy className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              التطبيق العملي
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              أسرع طريقة لتعلم الأمن السيبراني وتدريب نفسك على التطبيق العملي هي ال CTF.
              محترفين الأمن السيبراني حول العالم كانوا ولا زالوا يتطورون بممارسة ألعاب ال CTF.
              قد تسمع بأن السيناريو الواقعي مختلف تماماً لكنها الطريقة الوحيدة والمثلى لتعلم الأمن السيبراني.
              لذلك التطبيق العملي وممارسة ألعاب ال CTF بالدومينات المختلفة متطلب أساسي وإجباري لإتقان المجال.
            </p>
            <p className="text-secondary text-lg font-semibold">
              وأنصح بالبداية مع منصة TryHackMe
            </p>
          </div>
        </div>
      </section>

      {/* TryHackMe Roadmap Featured Cards */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <a
              href="https://github.com/uttambodara/TryHackMeRoadmap"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card group cursor-pointer block border-2 border-primary/50 hover:border-primary transition-all"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--neon-green)/0.5)]">
                    <Github className="w-10 h-10" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 glow-green transition-all font-mono-en">
                  TryHackMe Free Roadmap
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  أكثر من 350 تحدي وروم مجاناً بالكامل على منصة TryHackMe دون أن تدفع قرشاً واحداً.
                  خريطة طريق شاملة للمبتدئين والمتوسطين.
                </p>
              </div>
            </a>

            <a
              href="https://github.com/winterrdog/tryhackme-free-rooms"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card group cursor-pointer block border-2 border-secondary/50 hover:border-secondary transition-all"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary/30 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.5)]">
                    <Github className="w-10 h-10" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3 glow-purple transition-all font-mono-en">
                  TryHackMe Free Rooms Collection
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  أكثر من 390 تحدي وروم مجاناً بالكامل على منصة TryHackMe دون أن تدفع قرشاً واحداً.
                  خريطة طريق شاملة للمبتدئين والمتوسطين والمتقدمين.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="منصات التدريب العملية"
            subtitle="اختر المنصة المناسبة لمستواك وابدأ التدريب العملي."
            glowColor="purple"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {labs.map((lab, index) => (
              <a
                key={index}
                href={lab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card group cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary/30 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.5)]">
                      {lab.icon}
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:glow-green transition-all font-mono-en">
                    {lab.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {lab.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card">
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-display text-primary glow-green mb-4">
                  💡 نصائح للتدريب العملي
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary">←</span>
                    <span>ابدأ بالغرف السهلة في TryHackMe لبناء أساس قوي.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary">←</span>
                    <span>انتقل إلى Hack The Box بعد إتقان الأساسيات للتحديات المتقدمة.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary">←</span>
                    <span>استخدم PortSwigger لإتقان اختراق تطبيقات الويب.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary">←</span>
                    <span>وثّق كل ما تتعلمه — الملاحظات هي أفضل مرجع لك.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticalLabs;
